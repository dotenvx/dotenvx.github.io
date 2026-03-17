(() => {
  const canvas = document.getElementById("ascii-bg-canvas");
  if (!canvas) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const asciiUrl = canvas.dataset.asciiSrc || "/assets/img/bg/enclave-ascii3.txt";
  const palette = {
    base: "rgb(130, 106, 58)",
    glint: "rgb(164, 134, 82)",
  };

  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return;

  let lines = [];
  let maxChars = 0;
  let allGlyphs = [];
  let rafId = null;
  let lastPaint = 0;

  const intro = {
    duration: 8000,
    delay: 1200,
    start: 0,
    done: reduceMotion,
  };

  const state = {
    baseFontSize: 19,
    lineHeight: 22,
    horizontalBias: 0.5,
    padX: 34,
    topY: 56,
    charWidth: 11,
    maxFps: 24,
  };

  function buildGlyphs() {
    if (!lines.length) return;

    const probe = document.createElement("canvas");
    const pctx = probe.getContext("2d");
    if (!pctx) return;

    pctx.font = `${state.baseFontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`;
    state.charWidth = pctx.measureText("M").width * 1.02;

    const width = Math.ceil(maxChars * state.charWidth + state.padX * 2);
    const height = Math.ceil(lines.length * state.lineHeight + state.topY + state.padX);

    let y = state.topY - state.baseFontSize;
    allGlyphs = [];

    lines.forEach((line, index) => {
      if (index > 0) y += state.lineHeight;

      for (let col = 0; col < line.length; col += 1) {
        const ch = line[col];
        if (ch === " ") continue;

        const seed = (index * 131 + col * 197) % 1000;
        allGlyphs.push({
          ch,
          x: state.padX + col * state.charWidth,
          y,
          seed,
          reveal: 1,
        });
      }
    });

    // Center-out reveal order with deterministic jitter so it assembles organically.
    const cx = width * 0.64;
    const cy = height * 0.45;
    const maxDist = Math.hypot(width * 0.5, height * 0.55);

    allGlyphs.forEach((g) => {
      const gx = g.x + state.charWidth * 0.5;
      const gy = g.y + state.baseFontSize * 0.5;
      const dist = Math.hypot(gx - cx, gy - cy) / maxDist;
      const jitter = ((g.seed % 97) / 97) * 0.24;
      g.reveal = Math.min(1, dist * 1.06 + jitter);
    });
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
    if (!allGlyphs.length) return;

    const t = now || performance.now();

    if (!reduceMotion) {
      const minDelta = 1000 / state.maxFps;
      if (t - lastPaint < minDelta) {
        rafId = requestAnimationFrame(draw);
        return;
      }
      lastPaint = t;
    }

    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    ctx.fillStyle = "#060708";
    ctx.fillRect(0, 0, w, h);

    const sourceWidth = Math.ceil(maxChars * state.charWidth + state.padX * 2);
    const sourceHeight = Math.ceil(lines.length * state.lineHeight + state.topY + state.padX);

    const targetWidth = w * 1.05;
    const scale = targetWidth / sourceWidth;
    const drawWidth = sourceWidth * scale;

    const x = (w - drawWidth) * state.horizontalBias;
    const y = -6;

    const rawProgress = intro.done ? 1 : (t - intro.start - intro.delay) / intro.duration;
    if (!intro.done && rawProgress <= 0) {
      if (!reduceMotion) rafId = requestAnimationFrame(draw);
      return;
    }
    const progress = Math.max(0, Math.min(1, rawProgress));
    if (rawProgress >= 1) intro.done = true;

    ctx.save();
    ctx.font = `${state.baseFontSize * scale}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`;
    ctx.textBaseline = "top";

    for (let i = 0; i < allGlyphs.length; i += 1) {
      const g = allGlyphs[i];
      const frontier = progress - g.reveal;
      if (frontier < 0) continue;

      const born = intro.done ? 1 : Math.min(1, frontier * 18);
      const sx = x + g.x * scale;
      const sy = y + g.y * scale - (1 - born) * 2.2 * scale;

      // Single-layer main engraving.
      ctx.fillStyle = palette.base;
      ctx.globalAlpha = 0.08 + born * 0.54;
      ctx.fillText(g.ch, sx, sy);

      // Brief glint as each glyph appears during intro only.
      if (!intro.done && frontier > 0 && frontier < 0.028) {
        ctx.globalAlpha = (1 - frontier / 0.028) * 0.35;
        ctx.fillStyle = palette.glint;
        ctx.fillText(g.ch, sx, sy);
      }
    }

    ctx.restore();

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

      buildGlyphs();
      intro.start = performance.now();
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
