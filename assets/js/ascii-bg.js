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

    // Cover fit to fill viewport.
    const iw = img.naturalWidth || 1;
    const ih = img.naturalHeight || 1;
    const scale = Math.max(state.w / iw, state.h / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (state.w - dw) * 0.5;
    const dy = (state.h - dh) * 0.5;
    const mobile = Math.max(0, Math.min(1, state.w / 900));

    // Near-black but visible, with stronger darkening on mobile.
    const brightness = 0.14 + mobile * 0.06; // ~0.166 on iPhone widths, ~0.20 desktop
    const baseAlpha = 0.62 + mobile * 0.28;  // reduce image weight on smaller screens
    ctx.filter = `grayscale(1) contrast(1.05) brightness(${brightness.toFixed(3)})`;
    ctx.globalAlpha = baseAlpha;
    ctx.drawImage(img, dx, dy, dw, dh);

    // Slight dark veil so foreground content stays readable.
    ctx.filter = "none";
    ctx.globalAlpha = 1;
    const veil = 0.62 - mobile * 0.20; // stronger veil on mobile
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
