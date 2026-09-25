(() => {
  const sidebar = document.querySelector('.docs-sidebar');
  if (!sidebar) return;
  const details = sidebar.querySelector('details');
  const scroller = sidebar.querySelector('nav');
  const desktop = matchMedia('(min-width: 64rem)');
  const drawer = sidebar.querySelector('.docs-drawer');
  const toggle = sidebar.querySelector('.docs-drawer-toggle');
  const close = sidebar.querySelector('.docs-drawer-close');
  const dismiss = () => drawer.close();
  toggle.addEventListener('click', () => {
    drawer.showModal();
    toggle.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('docs-drawer-open');
  });
  close.addEventListener('click', dismiss);
  drawer.addEventListener('click', event => { if (event.target === drawer && event.clientX > drawer.getBoundingClientRect().right) dismiss(); });
  drawer.addEventListener('close', () => {
    toggle.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('docs-drawer-open');
    if (!desktop.matches) toggle.focus();
  });
  scroller.addEventListener('click', event => { if (!desktop.matches && event.target.closest('a')) dismiss(); });
  const update = () => {
    if (drawer.open) dismiss();
    (desktop.matches ? details : drawer).append(scroller);
    details.open = desktop.matches;
  };
  update();
  desktop.addEventListener('change', update);
  const resizer = sidebar.querySelector('.docs-sidebar-resizer');
  let preferredWidth = 0;
  try { preferredWidth = Number(localStorage.getItem('docs-sidebar-width-v2')) || 0; } catch (_) {}
  const bounds = () => {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return { min: 10 * rem, max: Math.max(10 * rem, Math.min(32 * rem, innerWidth / 2 - 17 * rem)), initial: 17 * rem };
  };
  const resize = () => {
    const { min, max, initial } = bounds();
    const width = Math.min(max, Math.max(min, preferredWidth || initial));
    sidebar.style.setProperty('--docs-sidebar-width', `${width}px`);
    resizer.setAttribute('aria-valuemin', Math.round(min));
    resizer.setAttribute('aria-valuemax', Math.round(max));
    resizer.setAttribute('aria-valuenow', Math.round(width));
  };
  const saveWidth = () => {
    try { localStorage.setItem('docs-sidebar-width-v2', String(preferredWidth)); } catch (_) {}
  };
  resize();
  window.addEventListener('resize', resize);
  resizer.addEventListener('pointerdown', event => {
    if (!desktop.matches || event.button !== 0) return;
    event.preventDefault();
    resizer.setPointerCapture(event.pointerId);
    document.documentElement.classList.add('docs-sidebar-resizing');
  });
  resizer.addEventListener('pointermove', event => {
    if (!resizer.hasPointerCapture(event.pointerId)) return;
    const { min, max } = bounds();
    preferredWidth = Math.min(max, Math.max(min, event.clientX - sidebar.getBoundingClientRect().left));
    resize();
  });
  const endResize = event => {
    if (resizer.hasPointerCapture(event.pointerId)) resizer.releasePointerCapture(event.pointerId);
    document.documentElement.classList.remove('docs-sidebar-resizing');
    saveWidth();
  };
  resizer.addEventListener('pointerup', endResize);
  resizer.addEventListener('pointercancel', endResize);
  resizer.addEventListener('lostpointercapture', endResize);
  resizer.addEventListener('dblclick', () => { preferredWidth = 0; resize(); saveWidth(); });
  resizer.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const { min, max } = bounds();
    const width = sidebar.getBoundingClientRect().width;
    preferredWidth = event.key === 'Home' ? min : event.key === 'End' ? max :
      Math.min(max, Math.max(min, width + (event.key === 'ArrowRight' ? 16 : -16)));
    resize();
    saveWidth();
  });
  const chrome = document.querySelector('.radar-chrome');
  if (chrome) new ResizeObserver(() => {
    document.documentElement.style.setProperty('--docs-nav-top', `${chrome.getBoundingClientRect().height}px`);
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
