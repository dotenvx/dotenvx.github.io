/* Keep native document order and column fragmentation; only adjust column height. */
(() => {
  function chooseHeight({ columns, budget, initialHeight, totalHeight, measure }) {
    const fits = result => result.columns <= columns && result.lastHeight <= budget;
    const initial = measure(initialHeight);
    if (initial.columns === columns && fits(initial)) return initialHeight;

    let low = initialHeight;
    let high = Math.max(totalHeight, initialHeight + 1);
    let best = null;
    for (let attempt = 0; attempt < 15 && high - low > 1; attempt++) {
      const height = Math.ceil((low + high) / 2);
      const result = measure(height);
      // An empty final column means the height is already too generous.
      if (result.columns < columns) {
        high = height;
      } else if (result.columns > columns || !fits(result)) {
        low = height;
      } else {
        best = height;
        high = height;
      }
    }
    // A tall final indivisible block may have no solution. Preserve balanced CSS.
    return best;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { chooseHeight };
    return;
  }

  const content = document.querySelector('[data-writer-columns]');
  if (!content) return;
  const desktop = window.matchMedia('(min-width: 1000px)');
  let timer;

  function reset() {
    content.style.removeProperty('height');
    content.style.removeProperty('width');
    content.style.removeProperty('column-count');
    delete content.dataset.shortLastColumn;
  }

  function layout() {
    reset();
    if (!desktop.matches || window.matchMedia('print').matches) return;

    const style = getComputedStyle(content);
    const columns = Number.parseInt(style.columnCount, 10);
    if (!(columns > 1)) return;
    const width = content.clientWidth;
    const gap = Number.parseFloat(style.columnGap) || 0;
    const columnWidth = (width - gap * (columns - 1)) / columns;
    const top = content.getBoundingClientRect().top + window.scrollY;
    const budget = Math.floor(window.innerHeight - top - 32);
    if (budget < 160) return;
    const initialHeight = Math.ceil(content.getBoundingClientRect().height);

    // Measure the full flow at the actual text-column width, never the page width.
    content.style.width = `${columnWidth}px`;
    content.style.columnCount = '1';
    const totalHeight = Math.ceil(content.getBoundingClientRect().height);
    content.style.removeProperty('width');
    content.style.removeProperty('column-count');

    const textNodes = [];
    const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (/\S/.test(node.textContent) && !node.parentElement.closest('script, style, svg, button, [aria-hidden="true"]')) {
        textNodes.push(node);
      }
    }
    const media = [...content.querySelectorAll('img, svg, canvas, video, iframe, hr, pre, table, .design-codeblock-wrap')]
      .filter(node => !node.closest('button'));
    const range = document.createRange();
    content.dataset.shortLastColumn = '';

    function measure(height) {
      content.style.height = `${height}px`;
      const bounds = content.getBoundingClientRect();
      let lastColumn = -1;
      let lastBottom = 0;
      function visit(rect) {
        if (rect.width < 0.5 || rect.height < 0.5) return;
        const column = Math.max(0, Math.floor((rect.left - bounds.left + gap / 2) / (columnWidth + gap)));
        if (column > lastColumn) {
          lastColumn = column;
          lastBottom = 0;
        }
        if (column === lastColumn) lastBottom = Math.max(lastBottom, rect.bottom - bounds.top);
      }
      textNodes.forEach(node => {
        range.selectNodeContents(node);
        [...range.getClientRects()].forEach(visit);
      });
      media.forEach(node => [...node.getClientRects()].forEach(visit));
      return { columns: lastColumn + 1, lastHeight: Math.ceil(lastBottom) };
    }

    try {
      const height = chooseHeight({ columns, budget, initialHeight, totalHeight, measure });
      if (height === null) {
        reset();
      } else {
        const result = measure(height);
        if (result.columns !== columns || result.lastHeight > budget) reset();
      }
    } catch (_) {
      reset();
    }
  }

  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(layout, 100);
  }
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  content.addEventListener('load', schedule, true);
  window.addEventListener('beforeprint', reset);
  window.addEventListener('afterprint', schedule);
  if (document.fonts) document.fonts.ready.then(schedule);
  schedule();
})();
