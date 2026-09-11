// SnifferBots — shared site behaviour (vanilla JS, no dependencies)
document.addEventListener('DOMContentLoaded', function () {

  /* Mobile nav toggle */
  var hamburger = document.querySelector('.hamburger');
  var navMobile = document.querySelector('.nav-mobile');
  if (hamburger && navMobile) {
    hamburger.addEventListener('click', function () {
      var isOpen = navMobile.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* Highlight current page in nav (belt-and-braces on top of server-rendered .active) */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* Note: content marked .reveal is always visible by default (see
     style.css) — there is intentionally no scroll-triggered hide/reveal
     here anymore, so page content can never depend on this script running. */

  /* Footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
