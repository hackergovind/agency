/*!
 * Nothin' Chat Widget v3 - moteur generique embarquable
 * = moteur v2 (config data-client / inline, API, historique, CTAs, triggers)
 *   + lanceur "ASK" (launcherStyle: 'ask'). Sans cette option, rendu v2 inchange.
 * Configuration : data-client (GET endpoint chat-config) < window.NothinChat inline.
 * Aucune donnee client en dur ici. Contenu rendu en noeuds DOM (jamais d'innerHTML de contenu).
 */
(function () {
  'use strict';

  if (window.__nothinChatV3) { return; }
  window.__nothinChatV3 = true;

  var CONFIG_ENDPOINT = window.NothinChatConfigEndpoint || 'https://n8n.noth.in/webhook/chat-config';

  var SESSION_KEY = 'nothin_chat_session';
  var HISTORY_KEY = 'nothin_chat_history';
  var AUTO_OPEN_FLAG_KEY = 'nothin_chat_auto_opened';
  var MAX_MESSAGE_LENGTH = 2000;
  var MAX_HISTORY_SENT = 12;
  var REQUEST_TIMEOUT_MS = 30000;
  var Z_INDEX_ASK = 2147483000; // sous le bandeau cookies du site (#ncb-root = 2147483647)
  var MOBILE_QUERY = '(max-width:720px)';

  // Valeurs par defaut du mode 'ask' (fusionnees sous la config ; le mode legacy n'y touche pas).
  var ASK_DEFAULTS = {
    assets: {
      gum: 'https://tools.noth.in/chat/assets/gum-nothin.png',
      mark: 'https://tools.noth.in/chat/assets/logo-nothin-mini-noir.svg'
    },
    askLabel: 'Ask',
    timing: { peekMs: 440, openMs: 620, ease: 'cubic-bezier(.22,1,.36,1)' },
    motion: {
      float: {
        periods: [6.3, 9.1], ampY: [2.0, 1.8], ampX: [0.7, 0.6], ampRot: [0.5, 0.4],
        phase: [[0, 1.4], [0.9, 2.2], [0.4, 1.1]]
      },
      scroll: { max: 14, tilt: 2, velScale: 1800, smooth: 0.08, omega: 11, zeta: 0.8, follow: 0.12 }
    },
    strings: {
      title: 'Chat with the studio',
      label: 'AI assistant',
      placeholder: 'Type your question',
      send: 'Send',
      close: 'Close',
      open: "Ask Nothin'",
      fine: 'AI answers. Confirm with the studio.',
      error: 'Something went wrong. Please try again.'
    }
  };

  // Cles dont la fusion est profonde (le reste : l'override remplace).
  var DEEP_KEYS = { colors: 1, fonts: 1, triggers: 1, assets: 1, strings: 1, motion: 1, timing: 1 };

  var config;

  function isAsk() {
    return !!config && config.launcherStyle === 'ask';
  }

  // ---------------------------------------------------------------------
  // Utilitaires / stockage
  // ---------------------------------------------------------------------

  function generateSessionId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }
    return 'sess-' + Date.now() + '-' + Math.random().toString(36).slice(2);
  }

  // Legacy : persistance par defaut sauf persistHistory === false (comportement v2).
  // Mode ask : sessionStorage UNIQUEMENT si persistHistory === true. Jamais de localStorage.
  function isPersistHistoryEnabled() {
    return isAsk() ? config.persistHistory === true : config.persistHistory !== false;
  }

  function storageGet(key) {
    if (!isPersistHistoryEnabled()) { return null; }
    try { return window.sessionStorage.getItem(key); } catch (e) { return null; }
  }

  function storageSet(key, value) {
    if (!isPersistHistoryEnabled()) { return; }
    try { window.sessionStorage.setItem(key, value); } catch (e) { /* indisponible : on continue */ }
  }

  function getSessionId() {
    var existing = storageGet(SESSION_KEY);
    if (existing) { return existing; }
    var created = generateSessionId();
    storageSet(SESSION_KEY, created);
    return created;
  }

  function loadHistory() {
    var raw = storageGet(HISTORY_KEY);
    if (!raw) { return []; }
    try {
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function saveHistory(history) {
    storageSet(HISTORY_KEY, JSON.stringify(history));
  }

  // Rendu texte brut sur : noeuds texte + <br> + liens http(s) crees par createElement.
  var URL_REGEX = /(https?:\/\/[^\s<]+)/g;

  function appendText(parent, rawText, linkClass) {
    var lines = String(rawText == null ? '' : rawText).split('\n');
    for (var l = 0; l < lines.length; l++) {
      if (l > 0) { parent.appendChild(document.createElement('br')); }
      var parts = lines[l].split(URL_REGEX); // indices impairs = URLs
      for (var p = 0; p < parts.length; p++) {
        if (!parts[p]) { continue; }
        if (p % 2 === 1) {
          var url = parts[p];
          var tail = '';
          var m = url.match(/[.,;:!?)\]]+$/); // ponctuation finale hors du lien
          if (m) { tail = m[0]; url = url.slice(0, url.length - tail.length); }
          var a = document.createElement('a');
          a.href = url;
          a.target = '_blank';
          a.rel = 'noopener';
          if (linkClass) { a.className = linkClass; }
          a.textContent = url;
          parent.appendChild(a);
          if (tail) { parent.appendChild(document.createTextNode(tail)); }
        } else {
          parent.appendChild(document.createTextNode(parts[p]));
        }
      }
    }
  }

  // Liens de CTA : http(s), mailto, tel uniquement (refus de javascript:, data:, etc.).
  function isSafeUrl(url) {
    return typeof url === 'string' && /^(https?:|mailto:|tel:)/i.test(url.trim());
  }

  // ---------------------------------------------------------------------
  // Resolution de la configuration (inline vs data-client)
  // ---------------------------------------------------------------------

  function isPlainObject(val) {
    return !!val && typeof val === 'object' && !Array.isArray(val);
  }

  function deepMerge(base, override) {
    var result = {};
    var key;
    for (key in base) {
      if (Object.prototype.hasOwnProperty.call(base, key)) { result[key] = base[key]; }
    }
    for (key in override) {
      if (!Object.prototype.hasOwnProperty.call(override, key) || override[key] === undefined) { continue; }
      if (isPlainObject(override[key]) && isPlainObject(result[key])) {
        result[key] = deepMerge(result[key], override[key]);
      } else {
        result[key] = override[key];
      }
    }
    return result;
  }

  function mergeConfigs(base, override) {
    var result = {};
    var key;
    for (key in base) {
      if (Object.prototype.hasOwnProperty.call(base, key)) { result[key] = base[key]; }
    }
    for (key in override) {
      if (!Object.prototype.hasOwnProperty.call(override, key) || override[key] === undefined) { continue; }
      if (DEEP_KEYS[key] && isPlainObject(override[key])) {
        result[key] = deepMerge(isPlainObject(result[key]) ? result[key] : {}, override[key]);
      } else {
        result[key] = override[key];
      }
    }
    return result;
  }

  // {client_slug, agent_id, endpoint, cta_url, cta_label, theme:{...}} -> config racine.
  function mapRemoteConfig(remote) {
    var mapped = {};
    if (!isPlainObject(remote)) { return mapped; }
    if (remote.agent_id !== undefined) { mapped.agentId = remote.agent_id; }
    if (remote.endpoint !== undefined) { mapped.endpoint = remote.endpoint; }
    if (remote.cta_url !== undefined) { mapped.rdvUrl = remote.cta_url; }
    if (remote.cta_label !== undefined) { mapped.rdvLabel = remote.cta_label; }
    if (isPlainObject(remote.theme)) {
      for (var themeKey in remote.theme) {
        if (Object.prototype.hasOwnProperty.call(remote.theme, themeKey)) {
          mapped[themeKey] = remote.theme[themeKey];
        }
      }
    }
    return mapped;
  }

  function getClientSlug() {
    var scriptEl = document.currentScript;
    if (!scriptEl) {
      scriptEl = document.querySelector('script[data-client][src*="widget"]');
    }
    return scriptEl ? scriptEl.getAttribute('data-client') : null;
  }

  function startWithConfig(resolvedConfig) {
    if (!isPlainObject(resolvedConfig)) { return; }
    config = resolvedConfig;
    if (isAsk()) { config = mergeConfigs(ASK_DEFAULTS, config); }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }

  // ---------------------------------------------------------------------
  // Styles : legacy (v2, inchange)
  // ---------------------------------------------------------------------

  function injectStylesLegacy() {
    var primary = (config.colors && config.colors.primary) || '#173222';
    var userBubble = (config.colors && config.colors.userBubble) || '#FFD6C5';
    var assistantBubble = (config.colors && config.colors.assistantBubble) || '#F7F4F0';
    var linkColor = (config.colors && config.colors.link) || '#618FA5';
    var bodyFont = (config.fonts && config.fonts.body) || '"Geist", -apple-system, BlinkMacSystemFont, sans-serif';
    var headingFont = (config.fonts && config.fonts.heading) || '"Playfair Display", Georgia, serif';
    var launcherBg = (config.colors && config.colors.launcherBg) || primary;
    var launcherIcon = (config.colors && config.colors.launcherIcon) || '#ffffff';
    var launcherBorder = (config.colors && config.colors.launcherBg) ? '1px solid rgba(0,0,0,0.12)' : 'none';

    var css = ''
      + '.nothin-chat-launcher {'
      + '  position: fixed; bottom: 20px; right: 20px; width: 56px; height: 56px;'
      + '  border-radius: 50%; background: ' + launcherBg + '; border: ' + launcherBorder + '; cursor: pointer;'
      + '  box-shadow: 0 6px 20px rgba(0,0,0,0.22); z-index: 999999;'
      + '  display: flex; align-items: center; justify-content: center;'
      + '  transition: transform 0.15s ease;'
      + '}'
      + '.nothin-chat-launcher:hover { transform: scale(1.05); }'
      + '.nothin-chat-launcher svg { width: 26px; height: 26px; }'
      + '.nothin-chat-launcher svg path { stroke: ' + launcherIcon + '; }'
      + '.nothin-chat-panel {'
      + '  position: fixed; bottom: 88px; right: 20px; width: 360px; max-width: 92vw;'
      + '  height: 520px; max-height: 70vh; background: #ffffff; border-radius: 16px;'
      + '  box-shadow: 0 12px 40px rgba(0,0,0,0.25); z-index: 999999;'
      + '  display: flex; flex-direction: column; overflow: hidden;'
      + '  font-family: ' + bodyFont + ';'
      + '}'
      + '.nothin-chat-panel[hidden] { display: none; }'
      + '.nothin-chat-header {'
      + '  padding: 16px 18px; border-bottom: 1px solid #ECECEC;'
      + '  display: flex; align-items: flex-start; justify-content: space-between;'
      + '  flex-shrink: 0;'
      + '}'
      + '.nothin-chat-header-text { display: flex; flex-direction: column; gap: 2px; }'
      + '.nothin-chat-title {'
      + '  font-family: ' + headingFont + '; font-size: 18px;'
      + '  color: #1A1A1A; margin: 0; line-height: 1.3;'
      + '}'
      + '.nothin-chat-subtitle { font-size: 12px; color: #8A8A8A; margin: 0; line-height: 1.4; }'
      + '.nothin-chat-logo { height: 32px; max-height: 34px; width: auto; display: block; align-self: flex-start; }'
      + '.nothin-chat-close {'
      + '  background: none; border: none; cursor: pointer; font-size: 20px; line-height: 1;'
      + '  color: #8A8A8A; padding: 4px; margin-left: 8px; flex-shrink: 0;'
      + '}'
      + '.nothin-chat-close:hover { color: #1A1A1A; }'
      + '.nothin-chat-messages {'
      + '  flex: 1; overflow-y: auto; padding: 16px 18px; display: flex;'
      + '  flex-direction: column; gap: 12px;'
      + '}'
      + '.nothin-chat-row { display: flex; flex-direction: column; max-width: 100%; }'
      + '.nothin-chat-row-user { align-items: flex-end; }'
      + '.nothin-chat-row-assistant { align-items: flex-start; }'
      + '.nothin-chat-bubble {'
      + '  max-width: 80%; padding: 10px 14px; border-radius: 12px; font-size: 14px;'
      + '  line-height: 1.6; white-space: normal; word-wrap: break-word;'
      + '}'
      + '.nothin-chat-bubble a { color: ' + linkColor + '; }'
      + '.nothin-chat-row-user .nothin-chat-bubble { background: ' + userBubble + '; color: #2A2A2A; }'
      + '.nothin-chat-row-assistant .nothin-chat-bubble { background: ' + assistantBubble + '; color: #2A2A2A; }'
      + '.nothin-chat-ctas {'
      + '  margin-top: 8px; display: flex; flex-wrap: wrap; gap: 8px;'
      + '}'
      + '.nothin-chat-cta {'
      + '  display: inline-block; background: ' + primary + '; color: #ffffff;'
      + '  border: none; border-radius: 8px; padding: 9px 16px; font-size: 13px; cursor: pointer;'
      + '  font-family: inherit; text-decoration: none;'
      + '}'
      + '.nothin-chat-cta:hover { opacity: 0.92; }'
      + '.nothin-chat-typing { display: flex; gap: 4px; padding: 10px 14px; }'
      + '.nothin-chat-typing span {'
      + '  width: 6px; height: 6px; border-radius: 50%; background: #B7B7B7;'
      + '  animation: nothin-chat-blink 1.2s infinite ease-in-out;'
      + '}'
      + '.nothin-chat-typing span:nth-child(2) { animation-delay: 0.2s; }'
      + '.nothin-chat-typing span:nth-child(3) { animation-delay: 0.4s; }'
      + '@keyframes nothin-chat-blink { 0%, 80%, 100% { opacity: 0.3; } 40% { opacity: 1; } }'
      + '.nothin-chat-inputzone {'
      + '  display: flex; align-items: flex-end; gap: 8px; padding: 12px 14px;'
      + '  border-top: 1px solid #ECECEC; flex-shrink: 0;'
      + '}'
      + '.nothin-chat-textarea {'
      + '  flex: 1; resize: none; border: 1px solid #DDDDDD; border-radius: 10px;'
      + '  padding: 8px 12px; font-size: 14px; font-family: inherit; line-height: 1.4;'
      + '  max-height: 96px; overflow-y: auto; outline: none;'
      + '}'
      + '.nothin-chat-textarea:focus { border-color: ' + primary + '; }'
      + '.nothin-chat-send {'
      + '  width: 36px; height: 36px; border-radius: 50%; border: none; cursor: pointer;'
      + '  background: ' + primary + '; display: flex; align-items: center; justify-content: center;'
      + '  flex-shrink: 0;'
      + '}'
      + '.nothin-chat-send:disabled { opacity: 0.5; cursor: default; }'
      + '.nothin-chat-send svg { width: 16px; height: 16px; }'
      + '@media (max-width: 480px) {'
      + '  .nothin-chat-panel {'
      + '    width: calc(100vw - 16px); max-width: calc(100vw - 16px);'
      + '    height: 75vh; max-height: 75vh; right: 8px; bottom: 80px;'
      + '  }'
      + '}';

    addStyle(css);
  }

  function addStyle(css) {
    var styleEl = document.createElement('style');
    styleEl.setAttribute('data-nothin-chat', 'true');
    styleEl.appendChild(document.createTextNode(css));
    document.head.appendChild(styleEl);
  }

  // ---------------------------------------------------------------------
  // Styles : mode 'ask' (lanceur + panneau valides, classes .nw*)
  // ---------------------------------------------------------------------

  function cssFamily(value, fallback) {
    // valeur de police issue de la config : on neutralise tout ce qui pourrait sortir de la declaration
    var v = (value && String(value).replace(/[;{}<>]/g, '')) || fallback;
    return v;
  }

  function injectStylesAsk() {
    var sans = cssFamily(config.fonts && config.fonts.body, 'inherit');
    var caps = cssFamily(config.fonts && config.fonts.heading, 'inherit'); // vide => police de la page
    var mono = cssFamily(config.fonts && config.fonts.mono, '"IBM Plex Mono", ui-monospace, monospace');

    var css = ''
      + '.nw{--nw-size:64px;--nw-w:380px;--nw-h:560px;--nw-right:24px;--nw-bottom:24px;'
      + '--nw-dur:620ms;--nw-ease:cubic-bezier(.22,1,.36,1);--mw:30.08px;--mh:24px;--dx:0px;--dy:0px;'
      + '--nw-sans:' + sans + ';--nw-caps:' + caps + ';--nw-mono:' + mono + ';'
      + '--nw-neutral:#e3e1de;--nw-grey:#8b8b84;--nw-hair:#d7d7d1;--nw-card:16px;--nw-pill:100px;'
      + 'position:fixed;z-index:' + Z_INDEX_ASK + ';right:var(--nw-right);bottom:var(--nw-bottom);width:0;height:0;'
      + 'font-family:var(--nw-sans);font-weight:500;font-size:14px;line-height:1.1;color:#000;'
      + 'transition:bottom .5s var(--nw-ease);will-change:transform}'
      + '.nw,.nw *{box-sizing:border-box}'
      + '.nw button:focus-visible,.nw a:focus-visible{outline:2px solid currentColor;outline-offset:3px}'
      + '.nw-shell{position:absolute;right:0;bottom:0;width:var(--nw-size);height:var(--nw-size);border-radius:calc(var(--nw-size)/2);'
      + 'background:#fff;overflow:hidden;box-shadow:0 0 0 1px #000,0 0 0 rgba(0,0,0,0);'
      + 'transition:width var(--nw-dur) var(--nw-ease),height var(--nw-dur) var(--nw-ease),border-radius var(--nw-dur) var(--nw-ease),box-shadow .5s}'
      + '.nw[data-state=open] .nw-shell{width:var(--nw-w);height:var(--nw-h);border-radius:var(--nw-card);'
      + 'box-shadow:0 0 0 1px #000,0 18px 40px rgba(0,0,0,.12)}'
      + '.nw-launch{position:absolute;inset:0;border:0;padding:0;margin:0;background:transparent!important;cursor:pointer;color:inherit;'
      + 'border-radius:inherit;-webkit-tap-highlight-color:transparent;-webkit-appearance:none;appearance:none;outline:none}'
      + '.nw:not([data-state=idle]) .nw-launch{pointer-events:none}'
      + '.nw-face{position:absolute;inset:0;display:grid;place-items:center;opacity:0;transition:opacity .22s ease;pointer-events:none}'
      + '.nw[data-state=idle] .nw-face{opacity:1}'
      + '.nw-ask{grid-area:1/1;font-family:var(--nw-mono);font-weight:500;font-size:12px;line-height:1;letter-spacing:.08em;text-transform:uppercase;color:#000;'
      + 'transition:opacity .32s ease,transform .5s var(--nw-ease)}'
      + '.nw-gum{grid-area:1/1;width:76%;height:76%;object-fit:contain;opacity:0;transform:scale(.5) rotate(-16deg);user-select:none;'
      + 'transition:opacity .3s ease,transform .65s cubic-bezier(.34,1.56,.64,1)}'
      + '.nw.is-hover .nw-ask{opacity:0;transform:scale(.7)}'
      + '.nw.is-hover .nw-gum{opacity:1;transform:none}'
      + '.nw-mark{position:absolute;width:var(--mw);height:var(--mh);display:block;pointer-events:none;user-select:none;z-index:3;'
      + 'right:calc(var(--nw-w) - 20px - var(--mw));bottom:calc(var(--nw-h) - 20px - var(--mh));'
      + 'opacity:0;transform:translate(var(--dx),var(--dy)) scale(.55);transition:transform .22s ease,opacity .2s ease}'
      + '.nw[data-state=peek] .nw-mark,.nw[data-state=closing] .nw-mark{opacity:1;transform:translate(var(--dx),var(--dy)) scale(.9)}'
      + '.nw[data-state=peek] .nw-mark{transition:transform .26s cubic-bezier(.34,1.56,.64,1),opacity .18s ease}'
      + '.nw[data-state=closing] .nw-mark{transition:transform var(--nw-dur) var(--nw-ease),opacity 0s}'
      + '.nw[data-state=open] .nw-mark{opacity:1;transform:none;transition:transform var(--nw-dur) var(--nw-ease),opacity 0s}'
      + '.nw-panel{position:absolute;right:0;bottom:0;width:var(--nw-w);height:var(--nw-h);display:flex;flex-direction:column;background:#fff;'
      + 'visibility:hidden;transition:visibility 0s linear var(--nw-dur)}'
      + '.nw[data-state=open] .nw-panel,.nw[data-state=closing] .nw-panel{visibility:visible}'
      + '.nw[data-state=open] .nw-panel{transition-delay:0s}'
      + '.nw-st{opacity:0;transform:translateY(8px);transition:opacity .16s ease,transform .16s ease}'
      + '.nw[data-state=open] .nw-st{opacity:1;transform:none;'
      + 'transition:opacity .42s ease calc(var(--nw-dur)*.3 + var(--i,0)*50ms),transform .55s var(--nw-ease) calc(var(--nw-dur)*.3 + var(--i,0)*50ms)}'
      + '.nw-head{height:64px;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 16px 0 20px;border-bottom:1px solid var(--nw-hair);flex:none}'
      + '.nw-id{display:flex;align-items:center;gap:12px}'
      + '.nw-id i{display:block;width:var(--mw);height:var(--mh)}'
      + '.nw-mono{font-family:var(--nw-mono);font-weight:500;text-transform:uppercase;letter-spacing:.08em;font-size:12px}'
      + '.nw-id .nw-mono{color:var(--nw-grey);font-size:11px}'
      + '.nw-close{font-family:var(--nw-caps);font-weight:500;font-size:12px;line-height:1;text-transform:uppercase;letter-spacing:.08em;background:transparent;color:#000;border:1px solid #000;'
      + 'border-radius:var(--nw-pill);padding:9px 14px;cursor:pointer;transition:background .25s,color .25s}'
      + '.nw-close:hover{background:#000;color:#fff}'
      + '.nw-log{flex:1;overflow:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;padding:20px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin}'
      + '.nw-msg{max-width:88%;font-family:var(--nw-sans);font-size:16px;line-height:1.2;font-weight:400;padding:12px 14px;border-radius:var(--nw-card);overflow-wrap:anywhere}'
      + '.nw-msg.me{align-self:flex-end;background:#000;color:#fff;border-bottom-right-radius:4px}'
      + '.nw-msg.bot{align-self:flex-start;background:var(--nw-neutral);color:#000;border-bottom-left-radius:4px}'
      + '.nw-link{color:inherit;text-decoration:underline}'
      + '.nw-ctas{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}'
      + '.nw-cta{display:inline-block;font-family:var(--nw-caps);font-weight:500;font-size:12px;line-height:1;text-transform:uppercase;letter-spacing:.08em;'
      + 'color:#000;background:transparent;border:1px solid #000;border-radius:var(--nw-pill);padding:9px 14px;text-decoration:none;cursor:pointer;transition:background .25s,color .25s}'
      + '.nw-cta:hover{background:#000;color:#fff}'
      + '.nw-dots{display:inline-flex;gap:4px;padding:3px 0}'
      + '.nw-dots b{width:5px;height:5px;border-radius:50%;background:#000;opacity:.3;animation:nwdot 1s infinite}'
      + '.nw-dots b:nth-child(2){animation-delay:.15s}.nw-dots b:nth-child(3){animation-delay:.3s}'
      + '@keyframes nwdot{50%{opacity:1}}'
      + '.nw-form{display:flex;gap:8px;padding:12px 16px 16px;border-top:1px solid var(--nw-hair);flex:none;margin:0}'
      + '.nw-form input{flex:1;min-width:0;font-family:var(--nw-sans);font-weight:400;font-size:16px;line-height:1;border:1px solid #000;border-radius:var(--nw-pill);padding:14px 18px;background:#fff;color:#000;outline:none;box-shadow:none;transition:box-shadow .2s}'
      + '.nw-form input:focus,.nw-form input:focus-visible{outline:none;box-shadow:inset 0 0 0 1px #000}'
      + '.nw-form input::placeholder{color:var(--nw-grey);opacity:1}'
      + '.nw-form input:disabled{opacity:.6}'
      + '.nw-send{font-family:var(--nw-caps);font-weight:500;font-size:12px;line-height:1;text-transform:uppercase;letter-spacing:.08em;background:#000;color:#fff;border:1px solid #000;'
      + 'border-radius:var(--nw-pill);padding:0 18px;cursor:pointer;transition:background .25s,color .25s}'
      + '.nw-send:hover{background:#fff;color:#000}'
      + '.nw-send:disabled{opacity:.6;cursor:default}'
      + '.nw-fine{padding:0 20px 14px;color:var(--nw-grey);font-size:11px;letter-spacing:.08em;flex:none}'
      + '@media (max-width:720px){.nw{--nw-size:56px;--nw-right:16px;--nw-bottom:16px;--nw-w:calc(100vw - 32px);--nw-h:min(72vh,560px)}}'
      + '@media (prefers-reduced-motion:reduce){'
      + '.nw,.nw *{animation:none!important;transition:none!important}'
      + '.nw .nw-face,.nw .nw-mark,.nw .nw-panel,.nw .nw-ask,.nw .nw-gum{transition:opacity .2s linear!important}'
      + '.nw .nw-mark,.nw .nw-gum{transform:none!important}'
      + '.nw .nw-st{transform:none!important}'
      + '.nw:not([data-state=open]) .nw-panel{opacity:0}'
      + '.nw .nw-ask{filter:none!important;transform:none!important}'
      + '}';

    addStyle(css);
  }

  function injectFonts() {
    if (!config.fonts) { return; }
    if (config.fonts.cssUrl) {
      var customLink = document.createElement('link');
      customLink.rel = 'stylesheet';
      customLink.href = config.fonts.cssUrl;
      document.head.appendChild(customLink);
      return;
    }
    if (config.fonts.load === true && !isAsk()) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Geist:wght@400;500&display=swap';
      document.head.appendChild(link);
    }
  }

  // ---------------------------------------------------------------------
  // DOM : legacy (v2)
  // ---------------------------------------------------------------------

  var LAUNCHER_SVG = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<path d="M4 4H20V16H8L4 20V4Z" stroke="#ffffff" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>'
    + '</svg>';

  var SEND_SVG = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<path d="M4 12L20 4L14 20L11 13L4 12Z" stroke="#ffffff" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>'
    + '</svg>';

  function buildDomLegacy() {
    var launcher = document.createElement('button');
    launcher.className = 'nothin-chat-launcher';
    launcher.type = 'button';
    launcher.setAttribute('aria-label', 'Ouvrir le chat');
    launcher.innerHTML = LAUNCHER_SVG; // constante interne

    var panel = document.createElement('div');
    panel.className = 'nothin-chat-panel';
    panel.hidden = true;

    var header = document.createElement('div');
    header.className = 'nothin-chat-header';

    var headerText = document.createElement('div');
    headerText.className = 'nothin-chat-header-text';

    var title;
    if (config.logoUrl) {
      title = document.createElement('img');
      title.className = 'nothin-chat-logo';
      title.src = config.logoUrl;
      title.alt = config.title || '';
    } else {
      title = document.createElement('p');
      title.className = 'nothin-chat-title';
      title.textContent = config.title || '';
    }

    var subtitle = document.createElement('p');
    subtitle.className = 'nothin-chat-subtitle';
    subtitle.textContent = config.subtitle || '';
    if (config.logoUrl) {
      headerText.style.gap = '0';
      subtitle.style.marginTop = '6px';
    }

    headerText.appendChild(title);
    headerText.appendChild(subtitle);

    var closeBtn = document.createElement('button');
    closeBtn.className = 'nothin-chat-close';
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Fermer le chat');
    closeBtn.innerHTML = '&times;'; // constante interne

    header.appendChild(headerText);
    header.appendChild(closeBtn);

    var messages = document.createElement('div');
    messages.className = 'nothin-chat-messages';

    var inputZone = document.createElement('div');
    inputZone.className = 'nothin-chat-inputzone';

    var textarea = document.createElement('textarea');
    textarea.className = 'nothin-chat-textarea';
    textarea.rows = 1;
    textarea.maxLength = MAX_MESSAGE_LENGTH;
    textarea.placeholder = config.placeholder || '';
    textarea.setAttribute('aria-label', config.placeholder || 'Ecrire un message');

    var sendBtn = document.createElement('button');
    sendBtn.className = 'nothin-chat-send';
    sendBtn.type = 'button';
    sendBtn.setAttribute('aria-label', 'Envoyer le message');
    sendBtn.innerHTML = SEND_SVG; // constante interne

    inputZone.appendChild(textarea);
    inputZone.appendChild(sendBtn);

    panel.appendChild(header);
    panel.appendChild(messages);
    panel.appendChild(inputZone);

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    return {
      launcher: launcher, panel: panel, closeBtn: closeBtn, messages: messages,
      textarea: textarea, sendBtn: sendBtn, form: null
    };
  }

  // ---------------------------------------------------------------------
  // DOM : mode 'ask'
  // ---------------------------------------------------------------------

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) { e.className = cls; }
    if (text != null) { e.textContent = text; }
    return e;
  }

  function buildDomAsk() {
    var S = config.strings;
    var root = el('div', 'nw');
    root.setAttribute('data-state', 'idle');
    root.style.setProperty('--nw-dur', config.timing.openMs + 'ms');
    root.style.setProperty('--nw-ease', config.timing.ease);

    var shell = el('div', 'nw-shell');

    var launcher = el('button', 'nw-launch');
    launcher.type = 'button';
    launcher.setAttribute('aria-expanded', 'false');
    launcher.setAttribute('aria-controls', 'nw-panel');
    launcher.setAttribute('aria-label', S.open);
    var face = el('span', 'nw-face');
    face.setAttribute('aria-hidden', 'true');
    face.appendChild(el('span', 'nw-ask', config.askLabel));
    var gum = el('img', 'nw-gum'); // src differe : aucun reseau avant l'intention d'ouvrir
    gum.alt = '';
    face.appendChild(gum);
    launcher.appendChild(face);

    var mark = el('img', 'nw-mark'); // N' = image officielle, jamais du texte
    mark.alt = '';

    var panel = el('section', 'nw-panel');
    panel.id = 'nw-panel';
    // Lenis (défilement fluide de noth.in) et équivalents : la molette dans le panneau fait défiler la conversation, pas le site
    panel.setAttribute('data-lenis-prevent', '');
    panel.addEventListener('wheel', function (e) { e.stopPropagation(); }, { passive: true });
    panel.addEventListener('touchmove', function (e) { e.stopPropagation(); }, { passive: true });
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', config.title || S.title);
    panel.setAttribute('inert', '');

    var head = el('div', 'nw-head nw-st');
    head.style.setProperty('--i', 0);
    var id = el('div', 'nw-id');
    id.appendChild(document.createElement('i')); // espace sous le N' partage
    id.appendChild(el('span', 'nw-mono', S.label));
    var closeBtn = el('button', 'nw-close', S.close);
    closeBtn.type = 'button';
    head.appendChild(id);
    head.appendChild(closeBtn);

    var log = el('div', 'nw-log');
    log.setAttribute('role', 'log');
    log.setAttribute('aria-live', 'polite');

    var form = el('form', 'nw-form nw-st');
    form.style.setProperty('--i', 3);
    var input = document.createElement('input');
    input.type = 'text';
    input.autocomplete = 'off';
    input.maxLength = MAX_MESSAGE_LENGTH;
    var ph = config.placeholder || S.placeholder;
    input.placeholder = ph;
    input.setAttribute('aria-label', ph);
    var sendBtn = el('button', 'nw-send', S.send);
    sendBtn.type = 'submit';
    form.appendChild(input);
    form.appendChild(sendBtn);

    var fine = el('div', 'nw-fine nw-mono nw-st', S.fine);
    fine.style.setProperty('--i', 4);

    panel.appendChild(head);
    panel.appendChild(log);
    panel.appendChild(form);
    panel.appendChild(fine);

    shell.appendChild(launcher);
    shell.appendChild(mark);
    shell.appendChild(panel);
    root.appendChild(shell);
    document.body.appendChild(root);

    return {
      root: root, launcher: launcher, panel: panel, closeBtn: closeBtn, messages: log,
      textarea: input, sendBtn: sendBtn, form: form, face: face, gum: gum, mark: mark
    };
  }

  // ---------------------------------------------------------------------
  // CTA(s) sous les reponses assistant
  // ---------------------------------------------------------------------

  function ctaMatches(cta, rawText) {
    if (Array.isArray(cta.match) && cta.match.length > 0) {
      var lowerText = rawText.toLowerCase();
      for (var i = 0; i < cta.match.length; i++) {
        var needle = cta.match[i];
        if (typeof needle === 'string' && needle && lowerText.indexOf(needle.toLowerCase()) !== -1) {
          return true;
        }
      }
      return false;
    }
    var fallbackNeedle = cta.url.indexOf('mailto:') === 0 ? cta.url.slice(7).split('?')[0] : cta.url;
    return rawText.indexOf(fallbackNeedle) !== -1;
  }

  function getMatchingCtas(rawText) {
    var result = [];
    if (Array.isArray(config.ctas) && config.ctas.length > 0) {
      for (var i = 0; i < config.ctas.length; i++) {
        var cta = config.ctas[i];
        if (cta && cta.url && isSafeUrl(cta.url) && ctaMatches(cta, rawText)) {
          result.push({ url: cta.url, label: cta.label });
        }
      }
      return result;
    }
    var legacyNeedle = config.rdvUrl && config.rdvUrl.indexOf('mailto:') === 0
      ? config.rdvUrl.slice(7).split('?')[0]
      : config.rdvUrl;
    if (legacyNeedle && isSafeUrl(config.rdvUrl) && rawText.indexOf(legacyNeedle) !== -1) {
      result.push({ url: config.rdvUrl, label: config.rdvLabel });
    }
    return result;
  }

  function trackCta(label) {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'reserve_call', source: 'chat_widget', cta_label: label || '' });
    }
  }

  // mailto -> location.href ; autres liens -> nouvel onglet, noopener.
  function openCta(url) {
    if (url.indexOf('mailto:') === 0) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener');
    }
  }

  function createCtaButtonLegacy(url, label) {
    var cta = document.createElement('button');
    cta.type = 'button';
    cta.className = 'nothin-chat-cta';
    cta.textContent = label || '';
    cta.addEventListener('click', function () {
      trackCta(label);
      openCta(url);
    });
    return cta;
  }

  // Mode ask : vrai <a> (clavier, clic milieu), memes regles d'ouverture.
  function createCtaLinkAsk(url, label) {
    var a = el('a', 'nw-cta', label || '');
    a.href = url;
    if (url.indexOf('mailto:') === 0) {
      a.addEventListener('click', function (event) {
        event.preventDefault();
        trackCta(label);
        window.location.href = url;
      });
    } else {
      a.target = '_blank';
      a.rel = 'noopener';
      a.addEventListener('click', function () { trackCta(label); });
    }
    return a;
  }

  // ---------------------------------------------------------------------
  // Lanceur 'ask' : etats, mouvement, bandeau cookies
  // ---------------------------------------------------------------------

  // Retourne { open(), close(), isOpen(), warm() }.
  function createAskUi(dom, hooks) {
    var root = dom.root, launch = dom.launcher, panel = dom.panel, face = dom.face, input = dom.textarea;
    var T = config.timing, A = config.assets;
    var reduce = window.matchMedia('(prefers-reduced-motion:reduce)');
    var noHover = window.matchMedia('(hover: none)');
    var mobileMq = window.matchMedia(MOBILE_QUERY);
    var timers = [];
    var warmed = false;

    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function clearTimers() { timers.forEach(clearTimeout); timers = []; }
    function setState(s) { root.setAttribute('data-state', s); }
    function state() { return root.getAttribute('data-state'); }

    // Images (et feuille de polices) charges a la premiere intention : survol, focus, toucher, clic.
    function warm() {
      if (warmed) { return; }
      warmed = true;
      if (A.gum) { dom.gum.src = A.gum; }
      if (A.mark) { dom.mark.alt = "Nothin'"; dom.mark.src = A.mark; }
      if (hooks.onWarm) { hooks.onWarm(); }
    }

    // Geometrie FLIP : depart du N' (centre du cercle) relatif a sa place finale (en-tete, haut gauche).
    function measure() {
      var cs = getComputedStyle(root);
      var s0 = parseFloat(cs.getPropertyValue('--nw-size'));
      var mw = parseFloat(cs.getPropertyValue('--mw'));
      var mh = parseFloat(cs.getPropertyValue('--mh'));
      var w = panel.offsetWidth, h = panel.offsetHeight;
      root.style.setProperty('--dx', (w - 20 - mw / 2 - s0 / 2) + 'px');
      root.style.setProperty('--dy', (h - 20 - mh / 2 - s0 / 2) + 'px');
    }
    measure();

    function squash(strong) {
      if (reduce.matches || !face.animate) { return; }
      var a = strong ? [1.08, 0.92, 0.97, 1.03] : [1.04, 0.96, 0.985, 1.015];
      face.animate([
        { transform: 'scale(1,1)' },
        { transform: 'scale(' + a[0] + ',' + a[1] + ')', offset: 0.28 },
        { transform: 'scale(' + a[2] + ',' + a[3] + ')', offset: 0.62 },
        { transform: 'scale(1,1)' }
      ], { duration: strong ? 620 : 520, easing: 'cubic-bezier(.22,1,.36,1)' });
    }

    launch.addEventListener('pointerenter', function (e) {
      warm();
      if (noHover.matches || e.pointerType === 'touch' || state() !== 'idle') { return; }
      root.classList.add('is-hover');
      squash(true);
    });
    launch.addEventListener('pointerleave', function () {
      if (!root.classList.contains('is-hover')) { return; }
      root.classList.remove('is-hover');
      squash(false);
    });
    launch.addEventListener('pointerdown', warm);
    launch.addEventListener('focus', function () {
      warm();
      if (launch.matches(':focus-visible') && state() === 'idle') { root.classList.add('is-hover'); }
    });
    launch.addEventListener('blur', function () { root.classList.remove('is-hover'); });

    function open() {
      if (state() !== 'idle') { return; }
      clearTimers();
      warm();
      measure();
      root.classList.remove('is-hover');
      launch.setAttribute('aria-expanded', 'true');
      hooks.onBeforeOpen();
      if (reduce.matches) {
        setState('open');
        panel.removeAttribute('inert');
        input.focus({ preventScroll: true });
        return;
      }
      setState('peek');                                  // 1. le N' apparait seul
      later(function () {                                // 2. cercle -> panneau, N' glisse dans l'en-tete
        setState('open');
        panel.removeAttribute('inert');
      }, T.peekMs);
      later(function () { input.focus({ preventScroll: true }); }, T.peekMs + T.openMs);
    }

    function close() {
      var s = state();
      if (s !== 'open' && s !== 'peek') { return; }
      clearTimers();
      panel.setAttribute('inert', '');
      launch.setAttribute('aria-expanded', 'false');
      if (s === 'peek' || reduce.matches) {
        setState('idle');
        launch.focus({ preventScroll: true });
        return;
      }
      launch.focus({ preventScroll: true });             // le focus revient au lanceur sans attendre
      setState('closing');                               // le panneau se replie, le N' retourne au centre
      later(function () { setState('idle'); }, T.openMs + 60);
    }

    function isOpen() {
      var s = state();
      return s === 'open' || s === 'peek';
    }

    // ---- mouvement : UNE boucle rAF, UN transform (flottement + deviation au scroll) ----
    var F = config.motion.float, P = config.motion.scroll, TAU = Math.PI * 2;
    var o = 0, ov = 0, vs = 0, amp = 1, last = 0, lastSY = window.scrollY, raf = 0;

    function frame(now) {
      raf = requestAnimationFrame(frame);
      var real = last ? (now - last) / 1000 : 1 / 60;
      last = now;
      var dt = Math.min(real, 1 / 30), sy = window.scrollY;
      var v = real > 0 ? (sy - lastSY) / Math.max(real, 0.001) : 0;
      lastSY = sy;
      vs += (v - vs) * (1 - Math.exp(-dt / P.smooth));
      if (Math.abs(vs) < 4) { vs = 0; }
      var target = -P.max * Math.tanh(vs / P.velScale);
      var k = P.omega * P.omega, c = 2 * P.zeta * P.omega;
      var n = Math.max(1, Math.ceil(dt * 240)), h = dt / n;
      for (var i = 0; i < n; i++) { ov += (-k * (o - target) - c * ov) * h; o += ov * h; }
      if (Math.abs(o) < 0.02 && Math.abs(ov) < 0.08 && Math.abs(target) < 0.02) { o = 0; ov = 0; }
      var t = now / 1000, w1 = TAU / F.periods[0], w2 = TAU / F.periods[1], ph = F.phase;
      var fy = F.ampY[0] * Math.sin(w1 * t + ph[0][0]) + F.ampY[1] * Math.sin(w2 * t + ph[0][1]);
      var fx = F.ampX[0] * Math.sin(w1 * t + ph[1][0]) + F.ampX[1] * Math.sin(w2 * t + ph[1][1]);
      var fr = F.ampRot[0] * Math.sin(w1 * t + ph[2][0]) + F.ampRot[1] * Math.sin(w2 * t + ph[2][1]);
      var st = state(), want = (st === 'open' || st === 'closing') ? 0 : 1;
      amp += (want - amp) * (1 - Math.exp(-dt / 0.28));
      if (Math.abs(want - amp) < 0.001) { amp = want; }
      root.style.transform = 'translate3d(' + (amp * (fx + o * P.follow)).toFixed(3) + 'px,'
        + (amp * (fy + o)).toFixed(3) + 'px,0) rotate('
        + (amp * (fr + o / P.max * P.tilt)).toFixed(3) + 'deg)';
    }
    function startLoop() { if (!raf && !reduce.matches) { last = 0; lastSY = window.scrollY; raf = requestAnimationFrame(frame); } }
    function stopLoop() { cancelAnimationFrame(raf); raf = 0; root.style.transform = ''; o = ov = vs = 0; }
    function syncMotion() { if (reduce.matches) { stopLoop(); } else { startLoop(); } }
    if (reduce.addEventListener) { reduce.addEventListener('change', syncMotion); } else { reduce.addListener(syncMotion); }
    syncMotion();

    // ---- bandeau cookies du site (#ncb-root) : sur mobile le lanceur monte au-dessus ----
    function bannerHeight() {
      var ncb = document.getElementById('ncb-root');
      if (!ncb) { return 0; }
      var vh = window.innerHeight, best = 0;
      var nodes = [ncb].concat(Array.prototype.slice.call(ncb.querySelectorAll('*')));
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var cs = getComputedStyle(node);
        if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) { continue; }
        var r = node.getBoundingClientRect();
        if (r.height < 4 || r.width < 4) { continue; }
        // ancre en bas de l'ecran (marge <= 60px), sans etre un voile plein ecran
        if (r.top < vh && r.bottom >= vh - 60 && vh - r.top <= vh * 0.6) { best = Math.max(best, vh - r.top); }
      }
      return best;
    }
    function lift() {
      var h = mobileMq.matches ? bannerHeight() : 0;
      root.style.setProperty('--nw-bottom', h > 0 ? (h + 24) + 'px' : '');
    }
    var liftQueued = false;
    function queueLift() {
      if (liftQueued) { return; }
      liftQueued = true;
      requestAnimationFrame(function () { liftQueued = false; lift(); });
    }
    window.addEventListener('resize', function () { measure(); queueLift(); });
    if (typeof MutationObserver !== 'undefined') {
      new MutationObserver(queueLift).observe(document.body, {
        childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style', 'hidden']
      });
    }
    lift();

    return { open: open, close: close, isOpen: isOpen, warm: warm };
  }

  // ---------------------------------------------------------------------
  // Logique applicative
  // ---------------------------------------------------------------------

  function init() {
    var ask = isAsk();
    if (!ask) { injectFonts(); }
    if (ask) { injectStylesAsk(); } else { injectStylesLegacy(); }

    var dom = ask ? buildDomAsk() : buildDomLegacy();
    var sessionId = getSessionId();
    var history = loadHistory();
    var isOpen = false;
    var isRequestPending = false;
    var welcomeShown = false;
    var ui = null;

    var autoOpenAlready = storageGet(AUTO_OPEN_FLAG_KEY) === 'true';
    var userInteracted = false;
    var autoOpenArmed = true;

    function scrollToBottom() {
      dom.messages.scrollTop = dom.messages.scrollHeight;
    }

    function appendMessageRow(role, rawText, stagger) {
      var row, bubble;
      if (ask) {
        bubble = el('div', 'nw-msg ' + (role === 'user' ? 'me' : 'bot') + (stagger ? ' nw-st' : ''));
        if (stagger) { bubble.style.setProperty('--i', stagger); }
        appendText(bubble, rawText, 'nw-link');
        row = bubble;
      } else {
        row = document.createElement('div');
        row.className = 'nothin-chat-row ' + (role === 'user' ? 'nothin-chat-row-user' : 'nothin-chat-row-assistant');
        bubble = document.createElement('div');
        bubble.className = 'nothin-chat-bubble';
        appendText(bubble, rawText);
        row.appendChild(bubble);
      }

      if (role === 'assistant') {
        var matchingCtas = getMatchingCtas(rawText);
        if (matchingCtas.length > 0) {
          var ctaContainer = el('div', ask ? 'nw-ctas' : 'nothin-chat-ctas');
          for (var c = 0; c < matchingCtas.length; c++) {
            ctaContainer.appendChild(ask
              ? createCtaLinkAsk(matchingCtas[c].url, matchingCtas[c].label)
              : createCtaButtonLegacy(matchingCtas[c].url, matchingCtas[c].label));
          }
          (ask ? bubble : row).appendChild(ctaContainer);
        }
      }

      dom.messages.appendChild(row);
      scrollToBottom();
      return row;
    }

    function renderHistory() {
      dom.messages.textContent = '';
      if (history.length === 0 && config.welcomeMessage) {
        appendMessageRow('assistant', config.welcomeMessage, 1);
      } else {
        for (var i = 0; i < history.length; i++) {
          appendMessageRow(history[i].role, history[i].content, i < 3 ? i + 1 : 0);
        }
      }
      scrollToBottom();
    }

    function showTypingIndicator() {
      var row, host;
      if (ask) {
        row = el('div', 'nw-msg bot');
        host = el('span', 'nw-dots');
      } else {
        row = document.createElement('div');
        row.className = 'nothin-chat-row nothin-chat-row-assistant';
        host = document.createElement('div');
        host.className = 'nothin-chat-typing';
      }
      row.setAttribute('data-nothin-chat-typing', 'true');
      for (var d = 0; d < 3; d++) { host.appendChild(document.createElement(ask ? 'b' : 'span')); }
      row.appendChild(host);
      dom.messages.appendChild(row);
      scrollToBottom();
      return row;
    }

    function setInputDisabled(disabled) {
      dom.textarea.disabled = disabled;
      dom.sendBtn.disabled = disabled;
    }

    function autoResizeTextarea() {
      if (ask) { return; }
      dom.textarea.style.height = 'auto';
      var maxHeight = 20 * 4 + 16;
      dom.textarea.style.height = Math.min(dom.textarea.scrollHeight, maxHeight) + 'px';
    }

    function prepareFirstOpen() {
      isOpen = true;
      if (!welcomeShown) {
        renderHistory();
        welcomeShown = true;
      }
    }

    if (ask) {
      ui = createAskUi(dom, {
        onBeforeOpen: prepareFirstOpen,
        onWarm: function () { if (config.fonts && config.fonts.cssUrl) { injectFonts(); } }
      });
    }

    function openPanel() {
      if (ask) { ui.open(); return; }
      isOpen = true;
      dom.panel.hidden = false;
      if (!welcomeShown) {
        renderHistory();
        welcomeShown = true;
      }
      dom.textarea.focus();
    }

    function closePanel() {
      if (ask) { isOpen = false; ui.close(); return; }
      isOpen = false;
      dom.panel.hidden = true;
    }

    function togglePanel() {
      userInteracted = true;
      if (isOpen) { closePanel(); } else { openPanel(); }
    }

    function manualClose() {
      userInteracted = true;
      closePanel();
    }

    function tryAutoOpen() {
      if (!autoOpenArmed || autoOpenAlready || userInteracted) { return; }
      autoOpenArmed = false;
      storageSet(AUTO_OPEN_FLAG_KEY, 'true');
      if (!isOpen) { openPanel(); }
    }

    function sendMessage() {
      var text = dom.textarea.value.trim();
      if (!text || isRequestPending) { return; }
      if (text.length > MAX_MESSAGE_LENGTH) { text = text.slice(0, MAX_MESSAGE_LENGTH); }

      history.push({ role: 'user', content: text });
      saveHistory(history);
      appendMessageRow('user', text);

      dom.textarea.value = '';
      autoResizeTextarea();

      isRequestPending = true;
      setInputDisabled(true);
      var typingRow = showTypingIndicator();

      var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
      var timeoutId = null;
      if (controller) {
        timeoutId = setTimeout(function () { controller.abort(); }, REQUEST_TIMEOUT_MS);
      }

      var payload = {
        agent_id: config.agentId,
        session_id: sessionId,
        message: text,
        history: history.slice(-MAX_HISTORY_SENT),
        page_url: window.location.href
      };
      var errorText = config.errorMessage || (ask ? config.strings.error : '');

      fetch(config.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller ? controller.signal : undefined
      })
        .then(function (response) {
          if (timeoutId) { clearTimeout(timeoutId); }
          if (!response.ok) { throw new Error('HTTP ' + response.status); }
          return response.json();
        })
        .then(function (data) {
          var reply = (data && typeof data.reply === 'string') ? data.reply : errorText;
          if (typingRow.parentNode) { typingRow.parentNode.removeChild(typingRow); }
          history.push({ role: 'assistant', content: reply });
          saveHistory(history);
          appendMessageRow('assistant', reply);
        })
        .catch(function () {
          if (timeoutId) { clearTimeout(timeoutId); }
          if (typingRow.parentNode) { typingRow.parentNode.removeChild(typingRow); }
          history.push({ role: 'assistant', content: errorText });
          saveHistory(history);
          appendMessageRow('assistant', errorText);
        })
        .then(function () {
          isRequestPending = false;
          setInputDisabled(false);
          if (!ask || isOpen) { dom.textarea.focus(); }
        });
    }

    // ---- evenements ----

    if (ask) {
      dom.launcher.addEventListener('click', togglePanel);
      dom.closeBtn.addEventListener('click', manualClose);
      dom.form.addEventListener('submit', function (event) {
        event.preventDefault();
        sendMessage();
      });
    } else {
      dom.launcher.addEventListener('click', togglePanel);
      dom.closeBtn.addEventListener('click', manualClose);
      dom.sendBtn.addEventListener('click', sendMessage);
      dom.textarea.addEventListener('input', autoResizeTextarea);
      dom.textarea.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          sendMessage();
        }
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen) { manualClose(); }
    });

    // ---- triggers d'ouverture automatique ----
    var triggersConfig = (config.triggers && typeof config.triggers === 'object') ? config.triggers : {};
    var autoOpenDelayMs = (typeof triggersConfig.autoOpenDelayMs === 'number')
      ? triggersConfig.autoOpenDelayMs
      : config.autoOpenDelayMs;

    if (!autoOpenAlready && !userInteracted) {
      if (typeof autoOpenDelayMs === 'number') {
        setTimeout(tryAutoOpen, autoOpenDelayMs);
      }

      if (typeof triggersConfig.scrollPercent === 'number') {
        var scrollHandler = function () {
          var doc = document.documentElement;
          var scrollableHeight = doc.scrollHeight - doc.clientHeight;
          var percent = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
          if (percent >= triggersConfig.scrollPercent) {
            window.removeEventListener('scroll', scrollHandler);
            tryAutoOpen();
          }
        };
        window.addEventListener('scroll', scrollHandler, { passive: true });
      }

      if (triggersConfig.exitIntent === true && window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
        var exitHandler = function (event) {
          if (event.clientY <= 0) {
            document.removeEventListener('mouseleave', exitHandler);
            tryAutoOpen();
          }
        };
        document.addEventListener('mouseleave', exitHandler);
      }
    }
  }

  // ---------------------------------------------------------------------
  // Declenchement : resolution de la config (inline ou data-client), puis init()
  // ---------------------------------------------------------------------

  var clientSlug = getClientSlug();
  var inlineConfig = window.NothinChat;

  if (!clientSlug) {
    startWithConfig(inlineConfig);
  } else {
    var configUrl = CONFIG_ENDPOINT + '?client=' + encodeURIComponent(clientSlug);
    fetch(configUrl)
      .then(function (response) {
        if (!response.ok) { throw new Error('HTTP ' + response.status); }
        return response.json();
      })
      .then(function (remote) {
        // Interrupteur NocoDB client_config.chat_visible (08/10/2026) : lanceur cache si decoche
        if (remote && remote.visible === false) { return; }
        var merged = mergeConfigs(mapRemoteConfig(remote), isPlainObject(inlineConfig) ? inlineConfig : {});
        startWithConfig(merged);
      })
      .catch(function () {
        if (isPlainObject(inlineConfig)) {
          startWithConfig(inlineConfig);
        } else {
          console.warn('[NothinChat] configuration distante indisponible pour le client "' + clientSlug + '".');
        }
      });
  }
})();
