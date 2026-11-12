/** Progressive enhancements: the site remains readable and navigable without JS. */
(() => {
  const root = document.documentElement;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches === false && 'IntersectionObserver' in window) {
    root.classList.add('js');
    const watcher = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -24px 0px', threshold: .07 });
    document.querySelectorAll('[data-reveal]').forEach(element => watcher.observe(element));
  }
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-nav');
  const close = () => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    menu.hidden = true;
  };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.hidden = !open;
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      close();
      document.querySelectorAll('.nav-dropdown[open]').forEach(dropdown => dropdown.removeAttribute('open'));
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.nav-dropdown')) document.querySelectorAll('.nav-dropdown[open]').forEach(dropdown => dropdown.removeAttribute('open'));
    if (toggle && menu && !menu.hidden && !event.target.closest('.site-header')) close();
  });
  window.matchMedia('(min-width: 991px)').addEventListener('change', event => { if (event.matches) close(); });
})();
