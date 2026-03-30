(() => {
  const canvas = document.getElementById("sequin-bg-canvas") || document.getElementById("ascii-bg-canvas");
  if (!canvas) return;

  const imageUrl = canvas.dataset.imageSrc || "/assets/img/bg/ascii-art.png";
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return;

  const img = new Image();
  img.decoding = "async";

  const state = {
    dpr: Math.min(window.devicePixelRatio || 1, 2),
    w: 0,
    h: 0,
    loaded: false,
    reduceMotion: false,
    revealProgress: 0,
    rafId: 0,
    nextPostGlitchDrawAt: 0,
    nextBreathDrawAt: 0,
    layout: null,
  };

  const clamp01 = (n) => Math.max(0, Math.min(1, n));

  const hash2 = (x, y) => {
    const v = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return v - Math.floor(v);
  };

  const buildLayout = () => {
    if (!state.loaded || !state.w || !state.h) {
      state.layout = null;
      return;
    }

    // Cover fit so the rendered pixels fill the viewport.
    const iw = img.naturalWidth || img.width || 1;
    const ih = img.naturalHeight || img.height || 1;
    const scale = Math.max(state.w / iw, state.h / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (state.w - dw) * 0.5;
    const dy = (state.h - dh) * 0.5;

    // Build generated pixel cells (each cell has its own color + opacity).
    const baseCell = Math.max(2, Math.round(Math.min(state.w, state.h) / 190));
    const cell = Math.min(baseCell, 6);
    const sampleW = Math.max(1, Math.round(dw / cell));
    const sampleH = Math.max(1, Math.round(dh / cell));

    const sampleCanvas = document.createElement("canvas");
    sampleCanvas.width = sampleW;
    sampleCanvas.height = sampleH;
    const sctx = sampleCanvas.getContext("2d", { willReadFrequently: true });
    if (!sctx) {
      state.layout = null;
      return;
    }

    sctx.clearRect(0, 0, sampleW, sampleH);
    sctx.drawImage(img, 0, 0, sampleW, sampleH);
    const data = sctx.getImageData(0, 0, sampleW, sampleH).data;

    state.layout = {
      cell,
      sampleW,
      sampleH,
      data,
      dx,
      dy,
    };
  };

  const draw = (progress = state.revealProgress, now = performance.now(), fadeAmount = 0) => {
    if (!state.w || !state.h) return;

    // Base black background.
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, state.w, state.h);

    if (!state.loaded || !state.layout) return;

    ctx.filter = "none";
    ctx.globalAlpha = 1;

    const p = clamp01(progress);
    const revealY = p * state.layout.sampleH;
    const trail = Math.max(8, Math.floor(state.layout.sampleH * 0.11));
    const seedChunk = Math.max(4, Math.floor(trail * 0.55));
    const breathBase = state.reduceMotion ? 1 : 0.94 + Math.sin(now * 0.00135) * 0.06;

    for (let y = 0; y < state.layout.sampleH; y += 1) {
      for (let x = 0; x < state.layout.sampleW; x += 1) {
        const i = (y * state.layout.sampleW + x) * 4;
        const r = state.layout.data[i];
        const g = state.layout.data[i + 1];
        const b = state.layout.data[i + 2];
        const a = state.layout.data[i + 3] / 255;
        if (a <= 0.01) continue;

        const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        const baseAlpha = a * (0.18 + lum * 0.92) * 0.28;
        if (baseAlpha <= 0.02) continue;

        // Top-down "matrix" reveal with per-column drift and broken chunks.
        const colOffset = (hash2(x * 1.13, 0.37) - 0.5) * trail * 3.8;
        const colLag = hash2(x * 0.31, 1.71) * state.layout.sampleH * 0.32 * (1 - p);
        const headY = revealY - colLag + colOffset;
        const depth = headY - y;

        // Keep sparse, pre-seeded sections faintly visible before the rain reaches them.
        let seedAlpha = 0;
        if (depth < -trail && p < 0.985) {
          const sx = Math.floor(x / seedChunk);
          const sy = Math.floor(y / seedChunk);
          const seed = hash2(sx * 0.73, sy * 1.29);
          if (seed > 0.968) {
            const seedLife = clamp01(1 - p / 0.55);
            seedAlpha = 0.28 * seedLife;
          } else {
            continue;
          }
        }

        // Chunkier stepped growth instead of smooth feather.
        const stepped = Math.floor((depth + trail) / 4) / Math.floor(trail / 4 || 1);
        let revealAlpha = Math.max(seedAlpha, clamp01(stepped));
        if (p >= 0.985) revealAlpha = 1;

        // Near the moving head, randomly drop pixels for a broken terminal look.
        if (p < 0.985 && depth > -trail * 0.35 && depth < trail * 0.9) {
          const gate = hash2(x * 0.73 + Math.floor(p * 120), y * 1.91);
          if (gate < 0.62) continue;
        }

        if (revealAlpha <= 0) continue;

        const px = state.layout.dx + x * state.layout.cell;
        const py = state.layout.dy + y * state.layout.cell;
        const breathPixel = state.reduceMotion ? 1 : 0.98 + Math.sin(now * 0.0019 + y * 0.09 + x * 0.03) * 0.045;
        const alpha = baseAlpha * revealAlpha * breathBase * breathPixel;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
        ctx.fillRect(px, py, state.layout.cell, state.layout.cell);
      }
    }

    // Global darken pass to keep foreground content legible.
    const breatheDark = state.reduceMotion ? 0.66 : 0.66 + Math.sin(now * 0.00135 + 1.1) * 0.02;
    ctx.fillStyle = `rgba(0, 0, 0, ${breatheDark.toFixed(3)})`;
    ctx.fillRect(0, 0, state.w, state.h);

    // Timed post-fade so the background recedes after it has been shown.
    if (fadeAmount > 0) {
      const extra = 0.28 * clamp01(fadeAmount);
      ctx.fillStyle = `rgba(0, 0, 0, ${extra.toFixed(3)})`;
      ctx.fillRect(0, 0, state.w, state.h);
    }
  };

  const resize = () => {
    state.dpr = Math.min(window.devicePixelRatio || 1, 2);
    state.w = window.innerWidth;
    state.h = window.innerHeight;
    canvas.style.width = `${state.w}px`;
    canvas.style.height = `${state.h}px`;
    canvas.width = Math.floor(state.w * state.dpr);
    canvas.height = Math.floor(state.h * state.dpr);
    buildLayout();
    draw();
  };

  const animateIn = () => {
    if (state.rafId) cancelAnimationFrame(state.rafId);

    state.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (state.reduceMotion) {
      state.revealProgress = 1;
      draw(1);
      return;
    }

    const delayMs = 2000;
    const durationMs = 6000;
    const fadeStartMs = 14000;
    const fadeDurationMs = 2200;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      if (elapsed < delayMs) {
        state.revealProgress = 0;
        draw(0, now, 0);
        state.rafId = requestAnimationFrame(tick);
        return;
      }

      const t = clamp01((elapsed - delayMs) / durationMs);
      const fadeT = clamp01((elapsed - fadeStartMs) / fadeDurationMs);
      // Ease-out so growth slows as it reaches the edges.
      const eased = 1 - Math.pow(1 - t, 2.2);
      state.revealProgress = eased;
      const stable = t >= 1 && fadeT >= 1;
      if (!stable || now >= state.nextBreathDrawAt) {
        draw(eased, now, fadeT);
        if (stable) state.nextBreathDrawAt = now + 95;
      }
      state.rafId = requestAnimationFrame(tick);
    };

    state.revealProgress = 0;
    state.nextPostGlitchDrawAt = 0;
    state.nextBreathDrawAt = 0;
    state.rafId = requestAnimationFrame(tick);
  };

  img.onload = () => {
    state.loaded = true;
    buildLayout();
    animateIn();
  };

  img.onerror = () => {
    state.loaded = false;
    draw();
    console.error("Failed to load background image", imageUrl);
  };

  img.src = imageUrl;

  let t = 0;
  window.addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(resize, 80);
  });

  resize();
})();
