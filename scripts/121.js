(function () {
  var SEL = '.link-hero-w a, .social-links-w a, .lang-list', GAP = 16, raf = 0, cur = -1, css;
  function fit() {
    raf = 0;
    var nw = document.querySelector('.nw');
    if (!nw) return;
    var st = nw.getAttribute('data-state');
    if (st && st !== 'idle') return;
    var mob = innerWidth <= 720, b = mob ? 16 : 24, size = mob ? 56 : 64;
    var right = innerWidth - b, left = right - size, top = innerHeight - b - size, need = b;
    var links = document.querySelectorAll(SEL);
    for (var i = 0; i < links.length; i++) {
      var r = links[i].getBoundingClientRect();
      if (!r.width || r.bottom <= 0 || r.top >= innerHeight) continue;
      if (r.right < left - GAP || r.left > right + GAP || r.bottom < top - GAP) continue;
      need = Math.max(need, Math.ceil(innerHeight - r.top + GAP));
    }
    if (need === cur) return;
    cur = need;
    if (!css) { css = document.createElement('style'); css.id = 'nw-lift'; document.head.appendChild(css); }
    css.textContent = need > b ? 'html .nw{--nw-bottom:' + need + 'px}' : '';
  }
  function q() { if (!raf) raf = requestAnimationFrame(fit); }
  addEventListener('scroll', q, { passive: true });
  addEventListener('resize', q);
  setInterval(q, 400);
})();