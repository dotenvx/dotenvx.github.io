(() => {
  const header = document.querySelector('.writer-header');
  if (!header) return;

  const updateHeight = () => {
    document.body.style.setProperty('--writer-header-height', `${header.getBoundingClientRect().height}px`);
  };

  updateHeight();
  new ResizeObserver(updateHeight).observe(header);
})();
