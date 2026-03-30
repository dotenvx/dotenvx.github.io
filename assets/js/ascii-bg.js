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
    maskCanvas: null,
  };

  const buildInkMask = () => {
    const w = img.naturalWidth || img.width || 0;
    const h = img.naturalHeight || img.height || 0;
    if (!w || !h) return null;

    const off = document.createElement("canvas");
    off.width = w;
    off.height = h;
    const octx = off.getContext("2d");
    if (!octx) return null;
    octx.drawImage(img, 0, 0, w, h);

    const imageData = octx.getImageData(0, 0, w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const ink = 255 - lum;
      if (ink < 22) {
        data[i + 3] = 0;
        continue;
      }
      const alpha = Math.min(255, (ink - 22) * 1.6);
      data[i] = 210;
      data[i + 1] = 210;
      data[i + 2] = 214;
      data[i + 3] = alpha;
    }
    octx.putImageData(imageData, 0, 0);
    return off;
  };

  const draw = () => {
    if (!state.w || !state.h) return;

    // Base black background.
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, state.w, state.h);

    if (!state.loaded) return;

    // Cover fit to fill viewport.
    const source = state.maskCanvas || img;
    const iw = source.width || img.naturalWidth || 1;
    const ih = source.height || img.naturalHeight || 1;
    const scale = Math.max(state.w / iw, state.h / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (state.w - dw) * 0.5;
    const dy = (state.h - dh) * 0.5;
    const mobile = Math.max(0, Math.min(1, state.w / 900));

    // Draw extracted ASCII ink only (white background removed), darker on mobile.
    const baseAlpha = 0.24 + mobile * 0.26;
    ctx.filter = "none";
    ctx.globalAlpha = baseAlpha;
    ctx.drawImage(source, dx, dy, dw, dh);

    // Slight dark veil so foreground content stays readable.
    ctx.filter = "none";
    ctx.globalAlpha = 1;
    const veil = 0.70 - mobile * 0.22; // stronger veil on mobile
    ctx.fillStyle = `rgba(0, 0, 0, ${veil.toFixed(3)})`;
    ctx.fillRect(0, 0, state.w, state.h);

    // Fade out toward the lower section so the art tapers off naturally.
    const fadeStart = state.h * (0.44 + mobile * 0.08);
    const fadeBottom = ctx.createLinearGradient(0, fadeStart, 0, state.h);
    fadeBottom.addColorStop(0, "rgba(0, 0, 0, 0)");
    fadeBottom.addColorStop(0.45, "rgba(0, 0, 0, 0.40)");
    fadeBottom.addColorStop(1, "rgba(0, 0, 0, 0.84)");
    ctx.fillStyle = fadeBottom;
    ctx.fillRect(0, 0, state.w, state.h);

    // Subtle side fade to avoid visible hard image bounds.
    const fadeSides = ctx.createLinearGradient(0, 0, state.w, 0);
    fadeSides.addColorStop(0, "rgba(0, 0, 0, 0.35)");
    fadeSides.addColorStop(0.12, "rgba(0, 0, 0, 0)");
    fadeSides.addColorStop(0.88, "rgba(0, 0, 0, 0)");
    fadeSides.addColorStop(1, "rgba(0, 0, 0, 0.35)");
    ctx.fillStyle = fadeSides;
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
    state.maskCanvas = buildInkMask();
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
