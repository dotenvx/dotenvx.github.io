document.querySelectorAll('.corporate-tier-picker').forEach(picker => {
  const tiers = [...picker.querySelectorAll('.corporate-tier')];
  const name = picker.querySelector('[data-tier-detail-name]');
  const contact = picker.querySelector('.corporate-tier-contact-link');
  const price = picker.querySelector('[data-tier-detail-price]');
  const description = picker.querySelector('[data-tier-detail-description]');
  const card = picker.querySelector('.corporate-tier-details-card');
  // Reserve enough room for every description so hovering never moves the page.
  const reserve = () => {
    card.style.minHeight = '';
    const current = description.textContent;
    let height = 0;
    tiers.forEach(tier => {
      description.textContent = tier.dataset.tierDescription;
      height = Math.max(height, card.getBoundingClientRect().height);
    });
    description.textContent = current;
    card.style.minHeight = `${height}px`;
  };
  const select = tier => {
    tiers.forEach(item => item.querySelector('button').setAttribute('aria-pressed', String(item === tier)));
    name.textContent = tier.dataset.tierName;
    contact.href = `mailto:scott@dotenvx.com?subject=${encodeURIComponent(tier.dataset.tierName + ' corporate support')}`;
    price.textContent = tier.dataset.tierPrice;
    description.textContent = tier.dataset.tierDescription;
  };
  tiers.forEach((tier, index) => {
    const button = tier.querySelector('button');
    button.addEventListener('click', () => select(tier));
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tiers.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tiers.length) % tiers.length;
      tiers[next].querySelector('button').focus();
    });
  });
  let width = 0;
  new ResizeObserver(([entry]) => {
    if (entry.contentRect.width !== width) { width = entry.contentRect.width; reserve(); }
  }).observe(picker);
  document.fonts.ready.then(reserve);
});
