(() => {
  const cards = Array.from(document.querySelectorAll(".terminal-hero-card"));
  if (!cards.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  if (prefersReduced || !finePointer) return;

  const maxTiltX = 7.2;
  const maxTiltY = 7.2;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  cards.forEach((card) => {
    let rafId = null;
    let latestEvent = null;

    function updateFromPointer(event) {
      const rect = card.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      const px = clamp((event.clientX - rect.left) / rect.width, 0, 1);
      const py = clamp((event.clientY - rect.top) / rect.height, 0, 1);
      const nx = px - 0.5;
      const ny = py - 0.5;

      const rx = -ny * maxTiltX;
      const ry = nx * maxTiltY;

      card.style.setProperty("--terminal-rx", `${rx.toFixed(2)}deg`);
      card.style.setProperty("--terminal-ry", `${ry.toFixed(2)}deg`);
      card.style.setProperty("--spot-x", `${(px * 100).toFixed(2)}%`);
      card.style.setProperty("--spot-y", `${(py * 100).toFixed(2)}%`);
    }

    function onMove(event) {
      latestEvent = event;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (latestEvent) updateFromPointer(latestEvent);
      });
    }

    function reset() {
      card.style.setProperty("--terminal-rx", "0deg");
      card.style.setProperty("--terminal-ry", "0deg");
      card.style.setProperty("--spot-x", "50%");
      card.style.setProperty("--spot-y", "50%");
      card.classList.remove("terminal-tilt-active");
    }

    card.addEventListener("mouseenter", () => {
      card.classList.add("terminal-tilt-active");
    });
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", reset);
    card.addEventListener("blur", reset);
  });
})();
