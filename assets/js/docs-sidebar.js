(() => {
  const sidebar = document.querySelector('.docs-sidebar');
  if (!sidebar) return;
  const details = sidebar.querySelector('details');
  const scroller = sidebar.querySelector('nav');
  const desktop = matchMedia('(min-width: 64rem)');
  const update = () => { details.open = desktop.matches; };
  update();
  desktop.addEventListener('change', update);
  const chrome = document.querySelector('.radar-chrome');
  if (chrome) new ResizeObserver(() => {
    document.documentElement.style.setProperty('--docs-nav-top', `${chrome.getBoundingClientRect().height + 16}px`);
  }).observe(chrome);
  try {
    scroller.scrollTop = Number(sessionStorage.getItem('docs-sidebar-scroll') || 0);
  } catch (_) {}
  const current = scroller.querySelector('[aria-current="page"]');
  if (desktop.matches && current) {
    const item = current.getBoundingClientRect(), frame = scroller.getBoundingClientRect();
    if (item.top < frame.top || item.bottom > frame.bottom) scroller.scrollTop += item.top - frame.top - frame.height / 2;
  }
  scroller.addEventListener('scroll', () => {
    try { sessionStorage.setItem('docs-sidebar-scroll', String(scroller.scrollTop)); } catch (_) {}
  }, { passive: true });
})();
