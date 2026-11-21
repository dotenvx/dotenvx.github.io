(() => {
  const header = document.querySelector('.main-header');
  if (!header) return;

  const updateHeight = () => {
    document.body.style.setProperty('--main-header-height', `${header.getBoundingClientRect().height}px`);
  };

  updateHeight();
  new ResizeObserver(updateHeight).observe(header);
})();
