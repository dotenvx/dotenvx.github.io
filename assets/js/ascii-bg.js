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
  };

  const draw = () => {
    if (!state.w || !state.h) return;

    // Base black background.
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, state.w, state.h);

    if (!state.loaded) return;

    // Cover fit so the rendered pixels fill the viewport.
    const iw = img.naturalWidth || img.width || 1;
    const ih = img.naturalHeight || img.height || 1;
    const scale = Math.max(state.w / iw, state.h / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (state.w - dw) * 0.5;
    const dy = (state.h - dh) * 0.5;

    // Render as generated pixel cells (each cell has its own color + opacity).
    const baseCell = Math.max(2, Math.round(Math.min(state.w, state.h) / 190));
    const cell = Math.min(baseCell, 6);
    const sampleW = Math.max(1, Math.round(dw / cell));
    const sampleH = Math.max(1, Math.round(dh / cell));

    const sampleCanvas = document.createElement("canvas");
    sampleCanvas.width = sampleW;
    sampleCanvas.height = sampleH;
    const sctx = sampleCanvas.getContext("2d", { willReadFrequently: true });
    if (!sctx) return;
    sctx.clearRect(0, 0, sampleW, sampleH);
    sctx.drawImage(img, 0, 0, sampleW, sampleH);

    const data = sctx.getImageData(0, 0, sampleW, sampleH).data;

    ctx.filter = "none";
    ctx.globalAlpha = 1;

    for (let y = 0; y < sampleH; y += 1) {
      for (let x = 0; x < sampleW; x += 1) {
        const i = (y * sampleW + x) * 4;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3] / 255;
        if (a <= 0.01) continue;

        const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        const alpha = a * (0.18 + lum * 0.92) * 0.42;
        if (alpha <= 0.02) continue;

        const px = dx + x * cell;
        const py = dy + y * cell;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
        ctx.fillRect(px, py, cell, cell);
      }
    }

    // Global darken pass to keep foreground content legible.
    ctx.fillStyle = "rgba(0, 0, 0, 0.56)";
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
    draw();
  };

  img.onload = () => {
    state.loaded = true;
    draw();
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
