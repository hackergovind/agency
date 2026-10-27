/*
 * Nothin' — WebMCP tools for agents in the browser (document.modelContext).
 * Built from offres.json by construire.js — do not edit nothin-webmcp.js by hand, edit this file or offres.json.
 * Data: only what is already public in https://www.noth.in/llms.txt and the home page JSON-LD.
 * No tool sends a message, pays anything or starts a costly job. Without the API, the script does nothing.
 */
(function () {
  'use strict';

  // 1. Detection: no API, no effect at all for other visitors.
  var ctx = (typeof document !== 'undefined' && document.modelContext) ||
            (typeof navigator !== 'undefined' && navigator.modelContext);
  if (!ctx || typeof ctx.registerTool !== 'function') { return; }

  // 2. Embedded data (fallback), replaced by offres.json from tools.noth.in when it answers and is valid.
  var DATA_URL = 'https://tools.noth.in/webmcp/offres.json';
  var EMBEDDED = {"version":"2026-10-26","source":"https://www.noth.in (decisions of 13 October 2026); /offre link removed on 19 October 2026 (page not published); prices aligned on 26 October 2026","currency":"EUR","pricing_note":"Indicative starting prices, excluding VAT. Every project is a fixed fee priced by scope, no day rates: the final price depends on what is at stake and the time it takes.","offers":[{"id":"brand-identity","name":"Brand identity","from":7500,"unit":"project","lead_time":"4 to 6 weeks for a young brand, 6 to 10 weeks for an established company","includes":"Perspective, identity, system and guidelines."},{"id":"logotype","name":"Logotype on its own","from":3000,"unit":"project","includes":"A logotype alone, as a fixed fee."},{"id":"website","name":"Websites and digital experiences","from":5000,"unit":"project","includes":"Three levels, priced by pages, motion, interaction and languages.","tiers":[{"name":"Website built with Claude Code","from":5000},{"name":"Classic website, development and integration","from":10000},{"name":"Custom website, design and development","from":27500}]},{"id":"campaign","name":"Campaigns","from":3000,"unit":"project","includes":"The creative idea and its key formats. Production and media budgeted separately."},{"id":"content","name":"Content and strategy (social media)","from":3000,"unit":"project","includes":"Social content and strategy that keep one perspective across every post."},{"id":"brand-voice","name":"Brand voice calibration","from":1500,"unit":"project","includes":"A brand voice that AI can hold, co-written with your team: your tone, your words, your don'ts."},{"id":"events","name":"Events and spaces, concept and design only","from":10000,"unit":"project","includes":"Creative concept and design of an event or a space. The full event is a separate offer."},{"id":"event-full","name":"Full event: art direction, scenography and all materials","from":25000,"unit":"project","lead_time":"12 to 14 months before the event","includes":"The identity of a professional event from the logo to the floor plan: art direction, 3D views, website and social, invitations, signage and stands."},{"id":"growth","name":"Growth (paid social)","from":2500,"unit":"month","includes":"Creative renewal, campaign management, reporting. Media budget not included."}],"case_studies":[{"name":"Utopia","url":"https://www.noth.in/works/utopia","line":"where taste meets meaning"},{"name":"Aurbse","url":"https://www.noth.in/works/aurbse","line":"a living instrument for reading territory"},{"name":"In_Cognita","url":"https://www.noth.in/works/in-cognita","line":"the invisible, made visible"},{"name":"LGM","url":"https://www.noth.in/works/lgm","line":"Swiss clarity for French engineering"},{"name":"Haptify","url":"https://www.noth.in/works/haptify","line":"branding the forgotten sense"},{"name":"MOVA","url":"https://www.noth.in/works/mova","line":"the movement, made conscious"},{"name":"France Chimie","url":"https://www.noth.in/works/france-chimie","line":"chemistry, reframed"}],"contact":{"email":"hello@noth.in","phone":"+33 1 89 48 02 99","address":"47 boulevard de Charonne, 75011 Paris, France","booking_url":"https://calendly.com/sara-noth/30min","languages":["French","English"]},"ai_visibility_tool":"https://geo.noth.in"};
  var live = EMBEDDED;

  function isText(v) { return typeof v === 'string' && v.length > 0 && v.length < 400; }
  function isPrice(v) { return typeof v === 'number' && isFinite(v) && v > 0; }
  function validOffer(o) {
    if (!o || !isText(o.id) || !isText(o.name) || !isPrice(o.from) || !isText(o.unit)) { return false; }
    if (o.tiers !== undefined) {
      if (!Array.isArray(o.tiers) || o.tiers.length === 0) { return false; }
      for (var i = 0; i < o.tiers.length; i++) { if (!isText(o.tiers[i].name) || !isPrice(o.tiers[i].from)) { return false; } }
    }
    return true;
  }
  function validData(d) {
    if (!d || typeof d !== 'object') { return false; }
    if (!Array.isArray(d.offers) || d.offers.length !== EMBEDDED.offers.length || !d.offers.every(validOffer)) { return false; }
    if (!Array.isArray(d.case_studies) || !d.case_studies.every(function (c) { return isText(c.name) && isText(c.url) && c.url.indexOf('https://www.noth.in/') === 0; })) { return false; }
    var c = d.contact;
    if (!c || !isText(c.email) || !isText(c.phone) || !isText(c.address) || !isText(c.booking_url) || c.booking_url.indexOf('https://calendly.com/') !== 0) { return false; }
    return isText(d.currency) && isText(d.pricing_note);
  }

  // Load the shared data file (same source as the offer page and llms.txt). Any failure keeps the embedded data.
  function loadData() {
    if (typeof fetch !== 'function') { return; }
    var ctrl = (typeof AbortController === 'function') ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 4000) : null;
    fetch(DATA_URL, { mode: 'cors', credentials: 'omit', signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { if (validData(d)) { live = d; } })
      .catch(function () { /* keep embedded data */ })
      .then(function () { if (timer) { clearTimeout(timer); } });
  }

  // 3. Tools. Read-only except book_call, which opens a page in a new tab and submits nothing.
  var tools = [
    {
      name: 'get_offers',
      description: 'List what the Nothin’ studio sells (brand identity, logotype, websites, campaigns, content, brand voice, events, full event, growth) with indicative starting prices in euros excluding VAT, lead time and what is included. Optional filter by service id. Returns JSON.',
      inputSchema: {
        type: 'object',
        properties: {
          service: { type: 'string', description: 'Optional service id: brand-identity, logotype, website, campaign, content, brand-voice, events, event-full, growth', enum: ['brand-identity', 'logotype', 'website', 'campaign', 'content', 'brand-voice', 'events', 'event-full', 'growth'] }
        }
      },
      annotations: { readOnlyHint: true },
      execute: function (input) {
        var s = input && typeof input.service === 'string' ? input.service : '';
        var list = s ? live.offers.filter(function (o) { return o.id === s; }) : live.offers;
        return { currency: live.currency, note: live.pricing_note, offers: list };
      }
    },
    {
      name: 'get_case_studies',
      description: 'List the seven published case studies of the Nothin’ studio, each with its name, one-line summary and URL. Returns JSON.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: function () { return { case_studies: live.case_studies }; }
    },
    {
      name: 'get_contact',
      description: 'Return the studio’s contact details: email, phone, postal address, booking link for a free 30-minute call, and working languages. Returns JSON.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: function () { return live.contact; }
    },
    {
      name: 'book_call',
      description: 'Open the booking page for a free 30-minute call with the studio in a new tab. The visitor picks the slot and confirms it themselves; nothing is sent or submitted by this tool.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: false, consequentialHint: false },
      execute: function () {
        var url = live.contact.booking_url;
        if (typeof window !== 'undefined' && typeof window.open === 'function') { window.open(url, '_blank', 'noopener'); }
        return 'Booking page opened: ' + url + '. The visitor must choose and confirm the slot.';
      }
    }
  ];

  tools.forEach(function (t) {
    try { ctx.registerTool(t); } catch (e) { /* a registration error must never break the page */ }
  });
  try { loadData(); } catch (e) { /* keep embedded data */ }
})();
