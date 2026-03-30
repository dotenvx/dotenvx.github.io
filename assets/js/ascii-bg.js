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
    nextGlitchSpawnAt: 0,
    glitches: [],
    layout: null,
  };

  const clamp01 = (n) => Math.max(0, Math.min(1, n));

  const hash2 = (x, y) => {
    const v = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return v - Math.floor(v);
  };

  const spawnGlitch = (now) => {
    if (!state.layout) return;
    if (state.glitches.length >= 3) return;

    const block = Math.max(4, Math.floor(Math.min(state.layout.sampleW, state.layout.sampleH) / 42));
    const w = block * (1 + Math.floor(Math.random() * 3));
    const h = block * (3 + Math.floor(Math.random() * 8));
    const x = Math.floor(Math.random() * Math.max(1, state.layout.sampleW - w));
    const y = -h + Math.floor(Math.random() * block);
    const speed = 0.028 + Math.random() * 0.05;
    const life = 900 + Math.random() * 900;

    state.glitches.push({ x, y, w, h, speed, life, born: now });
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

  const draw = (progress = state.revealProgress, now = performance.now()) => {
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
        const alpha = baseAlpha * revealAlpha;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
        ctx.fillRect(px, py, state.layout.cell, state.layout.cell);
      }
    }

    // After the build completes, add sparse black "dying" chunks.
    if (p >= 1 && !state.reduceMotion) {
      if (now >= state.nextGlitchSpawnAt && Math.random() < 0.45) {
        spawnGlitch(now);
      }
      if (now >= state.nextGlitchSpawnAt) {
        state.nextGlitchSpawnAt = now + 380 + Math.random() * 1200;
      }

      const alive = [];
      for (let gi = 0; gi < state.glitches.length; gi += 1) {
        const g = state.glitches[gi];
        const age = now - g.born;
        if (age > g.life) continue;

        const lifeT = age / g.life;
        const yDrop = Math.floor(age * g.speed);
        const alpha = (1 - lifeT) * 0.38;

        for (let y2 = 0; y2 < g.h; y2 += 1) {
          const yy = g.y + yDrop + y2;
          if (yy < 0 || yy >= state.layout.sampleH) continue;
          for (let x2 = 0; x2 < g.w; x2 += 1) {
            const xx = g.x + x2;
            if (xx < 0 || xx >= state.layout.sampleW) continue;

            const gate = hash2(xx * 1.37 + Math.floor(now / 70), yy * 1.91 + gi * 3.1);
            if (gate < 0.58) continue;

            const px2 = state.layout.dx + xx * state.layout.cell;
            const py2 = state.layout.dy + yy * state.layout.cell;
            ctx.fillStyle = `rgba(0, 0, 0, ${alpha.toFixed(3)})`;
            ctx.fillRect(px2, py2, state.layout.cell, state.layout.cell);
          }
        }

        alive.push(g);
      }
      state.glitches = alive;
    }

    // Global darken pass to keep foreground content legible.
    ctx.fillStyle = "rgba(0, 0, 0, 0.66)";
    ctx.fillRect(0, 0, state.w, state.h);
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
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      if (elapsed < delayMs) {
        state.revealProgress = 0;
        draw(0);
        state.rafId = requestAnimationFrame(tick);
        return;
      }

      const t = clamp01((elapsed - delayMs) / durationMs);
      // Ease-out so growth slows as it reaches the edges.
      const eased = 1 - Math.pow(1 - t, 2.2);
      state.revealProgress = eased;
      if (t < 1) {
        draw(eased, now);
      } else if (now >= state.nextPostGlitchDrawAt) {
        draw(1, now);
        state.nextPostGlitchDrawAt = now + 120;
      }
      state.rafId = requestAnimationFrame(tick);
    };

    state.revealProgress = 0;
    state.nextPostGlitchDrawAt = 0;
    state.nextGlitchSpawnAt = 0;
    state.glitches = [];
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
