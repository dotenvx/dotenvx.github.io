(() => {
  const canvas = document.getElementById("ascii-bg-canvas");
  if (!canvas) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const asciiUrl = canvas.dataset.asciiSrc || "/assets/img/bg/enclave-ascii3.txt";

  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return;

  let lines = [];
  let maxChars = 0;
  let offscreen = null;
  let spinningGlyphs = [];
  let rafId = null;
  let lastPaint = 0;

  const state = {
    baseFontSize: 19,
    lineHeight: 22,
    horizontalBias: 0.48, // Slightly left of true center to match hero balance.
    padX: 34,
    topY: 56,
    charWidth: 11,
    maxFps: 24,
  };

  function buildOffscreen() {
    if (!lines.length) return;

    const probe = document.createElement("canvas");
    const pctx = probe.getContext("2d");
    if (!pctx) return;

    pctx.font = `${state.baseFontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`;
    state.charWidth = pctx.measureText("M").width * 1.02;

    const width = Math.ceil(maxChars * state.charWidth + state.padX * 2);
    const height = Math.ceil(lines.length * state.lineHeight + state.topY + state.padX);

    offscreen = document.createElement("canvas");
    offscreen.width = width;
    offscreen.height = height;

    const octx = offscreen.getContext("2d");
    if (!octx) return;

    octx.fillStyle = "#060708";
    octx.fillRect(0, 0, width, height);

    const gradient = octx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "rgba(211, 182, 106, 0.5)");
    gradient.addColorStop(1, "rgba(168, 138, 70, 0.34)");

    octx.fillStyle = gradient;
    octx.font = `${state.baseFontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`;
    octx.textBaseline = "top";

    let y = state.topY - state.baseFontSize;
    const allGlyphs = [];
    lines.forEach((line, index) => {
      if (index > 0) y += state.lineHeight;
      octx.fillText(line, state.padX, y);

      for (let col = 0; col < line.length; col += 1) {
        const ch = line[col];
        if (ch === " ") continue;

        const seed = (index * 131 + col * 197) % 1000;
        allGlyphs.push({
          ch,
          x: state.padX + col * state.charWidth,
          y,
          phase: seed * 0.011,
          speed: 0.005 + ((seed % 9) * 0.0008),
          amp: 0.42 + ((seed % 5) * 0.06), // stronger rotation
        });
      }
    });

    // Pick a small, spread-out subset so only "a few pieces" rotate.
    const desiredCount = 90;
    const step = Math.max(1, Math.floor(allGlyphs.length / desiredCount));
    spinningGlyphs = [];
    for (let i = 0; i < allGlyphs.length; i += step) {
      spinningGlyphs.push(allGlyphs[i]);
      if (spinningGlyphs.length >= desiredCount) break;
    }
  }

  function resize() {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  function draw(now) {
    if (!offscreen) return;

    if (!reduceMotion) {
      const minDelta = 1000 / state.maxFps;
      if (now - lastPaint < minDelta) {
        rafId = requestAnimationFrame(draw);
        return;
      }
      lastPaint = now;
    }

    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    ctx.fillStyle = "#060708";
    ctx.fillRect(0, 0, w, h);

    const t = now || performance.now();

    const targetWidth = w * 1.05;
    const scale = targetWidth / offscreen.width;
    const drawWidth = offscreen.width * scale;
    const drawHeight = offscreen.height * scale;

    const xBase = (w - drawWidth) * state.horizontalBias;
    const x = xBase;
    const y = -6;

    ctx.globalAlpha = 0.96;
    ctx.drawImage(offscreen, x, y, drawWidth, drawHeight);
    ctx.globalAlpha = 1;

    if (!reduceMotion) {
      ctx.save();
      ctx.font = `${state.baseFontSize * scale}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`;
      ctx.textBaseline = "top";
      ctx.fillStyle = "rgba(238, 214, 136, 0.95)";

      for (let i = 0; i < spinningGlyphs.length; i += 1) {
        const g = spinningGlyphs[i];
        const sx = x + g.x * scale;
        const sy = y + g.y * scale;
        const angle = t * g.speed + g.phase;
        const sparkle = 0.72 + 0.28 * Math.sin(t * g.speed * 1.35 + g.phase * 2.1);

        ctx.save();
        // Clear the original static glyph so the animated one is clearly visible.
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "#060708";
        ctx.globalAlpha = 0.95;
        ctx.fillRect(
          sx - 1,
          sy - 1,
          state.charWidth * scale + 2,
          state.baseFontSize * scale + 2
        );

        ctx.fillStyle = "rgba(238, 214, 136, 0.95)";
        ctx.globalAlpha = sparkle;
        ctx.translate(
          sx + (state.charWidth * scale) * 0.5,
          sy + (state.baseFontSize * scale) * 0.5
        );
        ctx.rotate(angle);
        ctx.translate(-(state.charWidth * scale) * 0.5, -(state.baseFontSize * scale) * 0.5);
        ctx.fillText(g.ch, 0, 0);
        ctx.restore();
      }

      ctx.restore();
    }

    if (!reduceMotion) {
      rafId = requestAnimationFrame(draw);
    }
  }

  function rerender() {
    resize();
    draw();
  }

  async function init() {
    try {
      const res = await fetch(asciiUrl, { cache: "no-cache" });
      if (!res.ok) return;
      const text = await res.text();
      lines = text.replace(/\r/g, "").split("\n");
      while (lines.length && lines[lines.length - 1] === "") lines.pop();
      maxChars = lines.reduce((max, line) => Math.max(max, line.length), 0);
      buildOffscreen();
      rerender();
      if (!reduceMotion) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(draw);
      }
    } catch (_err) {
      // Keep a plain dark background if loading fails.
    }
  }

  window.addEventListener("resize", rerender, { passive: true });
  init();
})();
