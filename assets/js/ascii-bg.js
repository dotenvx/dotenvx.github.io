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
  let allGlyphs = [];
  let spinningGlyphs = [];
  let rafId = null;
  let lastPaint = 0;
  const intro = {
    duration: 8000,
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

    octx.fillStyle = "rgb(214, 186, 108)";
    octx.font = `${state.baseFontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`;
    octx.textBaseline = "top";

    let y = state.topY - state.baseFontSize;
    allGlyphs = [];
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
          seed,
          phase: seed * 0.011,
          speed: 0.005 + ((seed % 9) * 0.0008),
          amp: 0.42 + ((seed % 5) * 0.06), // stronger rotation
          reveal: 1,
        });
      }
    });

    // Center-out reveal order with deterministic jitter so it "assembles".
    const cx = width * 0.5;
    const cy = height * 0.45;
    const maxDist = Math.hypot(width * 0.5, height * 0.55);
    allGlyphs.forEach((g) => {
      const gx = g.x + state.charWidth * 0.5;
      const gy = g.y + state.baseFontSize * 0.5;
      const dist = Math.hypot(gx - cx, gy - cy) / maxDist;
      const jitter = ((g.seed % 97) / 97) * 0.24;
      g.reveal = Math.min(1, dist * 1.06 + jitter);
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

    const targetWidth = w * 1.05;
    const scale = targetWidth / offscreen.width;
    const drawWidth = offscreen.width * scale;
    const drawHeight = offscreen.height * scale;

    const xBase = (w - drawWidth) * state.horizontalBias;
    const x = xBase;
    const y = -6;

    const rawProgress = intro.done ? 1 : (t - intro.start) / intro.duration;
    const progress = Math.max(0, Math.min(1, rawProgress));
    if (rawProgress >= 1) intro.done = true;

    // Single render path always: glyph-by-glyph draw.
    // During intro we progressively reveal; after intro all glyphs are fully visible.
    ctx.save();
    ctx.font = `${state.baseFontSize * scale}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`;
    ctx.textBaseline = "top";
    ctx.fillStyle = "rgb(118, 96, 52)";

    for (let i = 0; i < allGlyphs.length; i += 1) {
      const g = allGlyphs[i];
      const frontier = progress - g.reveal;
      if (frontier < 0) continue;

      const born = intro.done ? 1 : Math.min(1, frontier * 18);
      const alpha = 0.08 + born * 0.54;
      const sx = x + g.x * scale;
      const sy = y + g.y * scale - (1 - born) * 2.2 * scale;

      ctx.globalAlpha = alpha;
      ctx.fillText(g.ch, sx, sy);

      // Brief glint right as each glyph appears during the intro only.
      if (!intro.done && frontier > 0 && frontier < 0.028) {
        ctx.globalAlpha = (1 - frontier / 0.028) * 0.35;
        ctx.fillStyle = "rgb(152, 124, 74)";
        ctx.fillText(g.ch, sx, sy);
        ctx.fillStyle = "rgb(118, 96, 52)";
      }
    }

    ctx.restore();

    if (!reduceMotion && intro.done) {
      ctx.save();
      ctx.font = `${state.baseFontSize * scale}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`;
      ctx.textBaseline = "top";
      ctx.fillStyle = "rgba(132, 108, 63, 0.56)";

      for (let i = 0; i < spinningGlyphs.length; i += 1) {
        const g = spinningGlyphs[i];
        const sx = x + g.x * scale;
        const sy = y + g.y * scale;
        const angle = t * g.speed + g.phase;
        const sparkle = 0.52 + 0.16 * Math.sin(t * g.speed * 1.35 + g.phase * 2.1);

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

        ctx.fillStyle = "rgba(132, 108, 63, 0.56)";
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
