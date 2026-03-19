(() => {
  const canvas = document.getElementById("sequin-bg-canvas") || document.getElementById("ascii-bg-canvas");
  if (!canvas) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const asciiUrl = canvas.dataset.asciiSrc || "/assets/img/bg/enclave-ascii3.txt";
  let waveSpeed = 0.8;
  let sparkleIntensity = 1.0;

  const gl = canvas.getContext("webgl", {
    alpha: false,
    antialias: false,
    preserveDrawingBuffer: false,
  });

  if (!gl) return;

  const vertSrc = [
    "attribute vec2 a_pos;",
    "void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }",
  ].join("\n");

  const fragSrc = [
    "precision highp float;",
    "",
    "uniform float u_time;",
    "uniform vec2 u_res;",
    "uniform float u_waveSpeed;",
    "uniform float u_sparkle;",
    "uniform sampler2D u_maskTex;",
    "uniform vec2 u_maskSize;",
    "uniform float u_maskReady;",
    "uniform float u_intro;",
    "",
    "#define TAU 6.28318530718",
    "#define SQRT3 1.7320508",
    "",
    "float hash21(vec2 p) {",
    "  p = fract(p * vec2(233.34, 851.73));",
    "  p += dot(p, p + 23.45);",
    "  return fract(p.x * p.y);",
    "}",
    "",
    "vec2 hash22(vec2 p) {",
    "  float n = hash21(p);",
    "  return vec2(n, hash21(p + n * 47.0));",
    "}",
    "",
    "vec4 hexTile(vec2 p, float scale) {",
    "  p *= scale;",
    "  vec2 s = vec2(1.0, SQRT3);",
    "  vec2 halfS = s * 0.5;",
    "  vec2 aBase = floor(p / s);",
    "  vec2 aLocal = mod(p, s) - halfS;",
    "  vec2 pOff = p - halfS;",
    "  vec2 bBase = floor(pOff / s);",
    "  vec2 bLocal = mod(pOff, s) - halfS;",
    "  float dA = dot(aLocal, aLocal);",
    "  float dB = dot(bLocal, bLocal);",
    "  float pick = step(dA, dB);",
    "  vec2 localCoord = mix(bLocal, aLocal, pick);",
    "  vec2 cellId = mix(bBase + vec2(0.5), aBase, pick);",
    "  return vec4(localCoord, cellId);",
    "}",
    "",
    "float waveField(vec2 cellPos, float t) {",
    "  float w = 0.0;",
    "  w += sin(dot(cellPos, vec2(0.7, 0.5)) * 3.5 - t * 2.8) * 0.35;",
    "  w += sin(cellPos.x * 4.2 + t * 1.9) * 0.25;",
    "  float r1 = length(cellPos - vec2(-0.3, 0.2));",
    "  w += sin(r1 * 6.0 - t * 3.2) * 0.2 * smoothstep(1.2, 0.0, r1);",
    "  w += sin(dot(cellPos, vec2(-0.4, 0.8)) * 2.8 - t * 1.5) * 0.2;",
    "  float r2 = length(cellPos - vec2(0.4, -0.3));",
    "  w += sin(r2 * 5.0 - t * 2.4) * 0.15 * smoothstep(1.0, 0.0, r2);",
    "  return w;",
    "}",
    "",
    "float sequinSpecular(float tiltAngle, float tiltDir) {",
    "  float ct = cos(tiltAngle);",
    "  float st = sin(tiltAngle);",
    "  float cd = cos(tiltDir);",
    "  float sd = sin(tiltDir);",
    "  vec3 N = vec3(st * cd, st * sd, ct);",
    "  vec3 L = normalize(vec3(0.4, 0.6, 0.9));",
    "  vec3 V = vec3(0.0, 0.0, 1.0);",
    "  vec3 R = reflect(-L, N);",
    "  float spec = max(dot(R, V), 0.0);",
    "  spec = pow(spec, 48.0);",
    "  float sheen = pow(max(dot(R, V), 0.0), 8.0) * 0.15;",
    "  return spec + sheen;",
    "}",
    "",
    "vec3 renderSequins(vec2 uv, float t, float churchMask, float churchEdge, float introFlash) {",
    "  float sequinScale = 38.0;",
    "  vec4 hex = hexTile(uv, sequinScale);",
    "  vec2 localPos = hex.xy;",
    "  vec2 cellId = hex.zw;",
    "  vec2 rnd = hash22(cellId);",
    "  float sizeVar = 0.85 + rnd.x * 0.3;",
    "  float baseTilt = (rnd.y - 0.5) * 0.15;",
    "  float reflVar = 0.7 + rnd.x * 0.3;",
    "  float phaseOff = rnd.y * TAU;",
    "  float discRadius = 0.42 * sizeVar;",
    "  float dist = length(localPos);",
    "  float disc = smoothstep(discRadius, discRadius - 0.06, dist) * churchMask;",
    "  float bevel = smoothstep(discRadius, discRadius - 0.04, dist) - smoothstep(discRadius - 0.04, discRadius - 0.08, dist);",
    "  vec2 worldPos = cellId / sequinScale;",
    "  float wave = waveField(worldPos, t);",
    "  float shimmer = sin(t * 3.0 + phaseOff) * 0.04;",
    "  float tiltAngle = wave * 0.85 + baseTilt + shimmer;",
    "  float waveH = waveField(worldPos + vec2(0.01, 0.0), t);",
    "  float waveV = waveField(worldPos + vec2(0.0, 0.01), t);",
    "  float tiltDir = atan(waveV - wave, waveH - wave);",
    "  float spec = sequinSpecular(tiltAngle, tiltDir);",
    "  spec *= reflVar * u_sparkle * (0.55 + 0.45 * churchMask);",
    "  vec3 darkSequin = vec3(0.02, 0.015, 0.01);",
    "  vec3 copperMid = vec3(0.78, 0.58, 0.42);",
    "  vec3 amberFlash = vec3(1.0, 0.82, 0.55);",
    "  vec3 hotGold = vec3(1.0, 0.92, 0.72);",
    "  float facing = clamp(cos(tiltAngle) * 0.5 + 0.5, 0.0, 1.0);",
    "  vec3 ambient = mix(darkSequin, vec3(0.05, 0.035, 0.02), facing * 0.6);",
    "  vec3 sequinColor = ambient;",
    "  float sheenAmount = pow(max(facing, 0.0), 3.0) * 0.2 * reflVar;",
    "  sequinColor += copperMid * sheenAmount;",
    "  float flashLow = smoothstep(0.0, 0.3, spec);",
    "  float flashHigh = smoothstep(0.3, 0.8, spec);",
    "  float flashPeak = smoothstep(0.7, 1.0, spec);",
    "  sequinColor += copperMid * flashLow * 0.5;",
    "  sequinColor += amberFlash * flashHigh * 0.8;",
    "  sequinColor += hotGold * flashPeak * 1.2;",
    "  sequinColor += copperMid * bevel * facing * 0.3;",
    "  sequinColor += amberFlash * churchEdge * 0.18;",
    "  sequinColor += hotGold * introFlash * 0.24;",
    "  vec3 bgColor = vec3(0.0);",
    "  return mix(bgColor, sequinColor, disc);",
    "}",
    "",
    "void main() {",
    "  vec2 uv = (gl_FragCoord.xy - u_res * 0.5) / min(u_res.x, u_res.y);",
    "  float t = u_time * u_waveSpeed;",
    "",
    "  vec2 st = gl_FragCoord.xy / u_res;",
    "  vec2 p = st - 0.5;",
    "  p.x *= u_res.x / max(u_res.y, 1.0);",
    "",
    "  // Responsive church projection:",
    "  // smaller viewports shrink a bit more, but clamp so it does not over-shrink.",
    "  float responsive = clamp((u_res.x - 390.0) / 1200.0, 0.0, 1.0);",
    "  float scaleX = mix(1.22, 1.10, responsive);",
    "  float scaleY = mix(1.06, 1.02, responsive);",
    "  float liftY = mix(-0.12, -0.03, responsive);",
    "  p.x *= scaleX;",
    "  p.y *= scaleY;",
    "  p.y += liftY;",
    "",
    "  float maskAspect = u_maskSize.x / max(u_maskSize.y, 1.0);",
    "  vec2 maskUv = vec2(p.x / max(maskAspect, 0.0001) + 0.5, p.y + 0.5);",
    "",
    "  float insideMaskUv = step(0.0, maskUv.x) * step(maskUv.x, 1.0) * step(0.0, maskUv.y) * step(maskUv.y, 1.0);",
    "  float rawMask = texture2D(u_maskTex, vec2(maskUv.x, 1.0 - maskUv.y)).r * insideMaskUv;",
    "  if (u_maskReady < 0.5) rawMask = 0.0;",
    "",
    "  float buildNoise = hash21(floor(maskUv * vec2(260.0, 180.0)));",
    "  float buildDist = distance(maskUv, vec2(0.64, 0.45));",
    "  float revealAt = buildDist * 1.05 + buildNoise * 0.22;",
    "  float build = smoothstep(revealAt - 0.04, revealAt + 0.03, u_intro);",
    "",
    "  float churchMask = smoothstep(0.1, 0.42, rawMask) * build;",
    "  float churchEdge = smoothstep(0.1, 0.45, rawMask) - smoothstep(0.45, 0.85, rawMask);",
    "  float introFlash = (smoothstep(0.0, 0.4, churchMask) - smoothstep(0.4, 1.0, churchMask)) * (1.0 - u_intro);",
    "",
    "  vec3 col = renderSequins(uv, t, churchMask, churchEdge, introFlash);",
    "",
    "  vec2 uvSafe = uv + vec2(0.0001);",
    "  float globalLight = 0.85 + 0.15 * dot(normalize(uvSafe), vec2(0.4, 0.6));",
    "  col *= globalLight;",
    "",
    "  float vig = 1.0 - smoothstep(0.4, 1.3, length(uv));",
    "  col *= 0.6 + 0.4 * vig;",
    "",
    "  col = pow(max(col, vec3(0.0)), vec3(0.93, 0.97, 1.04));",
    "  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);",
    "}",
  ].join("\n");

  function compile(type, src) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("Shader compile error:", gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vs = compile(gl.VERTEX_SHADER, vertSrc);
  const fs = compile(gl.FRAGMENT_SHADER, fragSrc);
  if (!vs || !fs) return;

  const program = gl.createProgram();
  if (!program) return;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Program link error:", gl.getProgramInfoLog(program));
    return;
  }

  gl.useProgram(program);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

  const aPos = gl.getAttribLocation(program, "a_pos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(program, "u_time");
  const uRes = gl.getUniformLocation(program, "u_res");
  const uWaveSpeed = gl.getUniformLocation(program, "u_waveSpeed");
  const uSparkle = gl.getUniformLocation(program, "u_sparkle");
  const uMaskTex = gl.getUniformLocation(program, "u_maskTex");
  const uMaskSize = gl.getUniformLocation(program, "u_maskSize");
  const uMaskReady = gl.getUniformLocation(program, "u_maskReady");
  const uIntro = gl.getUniformLocation(program, "u_intro");

  gl.activeTexture(gl.TEXTURE0);
  const maskTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, maskTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  // Default white mask so sequins still render before church mask is loaded.
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    1,
    1,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    new Uint8Array([255, 255, 255, 255]),
  );

  gl.uniform1i(uMaskTex, 0);
  gl.uniform2f(uMaskSize, 1, 1);
  gl.uniform1f(uMaskReady, 0);
  gl.uniform1f(uIntro, prefersReduced ? 1 : 0);

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let needsResize = true;
  let lastTime = 0;
  let paused = false;
  let rafId = null;
  const intro = {
    duration: 8200,
    delay: 1100,
    start: performance.now(),
    done: prefersReduced,
  };

  function resize() {
    needsResize = false;
    const width = Math.max(1, Math.round(canvas.clientWidth * dpr));
    const height = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    }
  }

  function render(now) {
    if (paused) {
      rafId = requestAnimationFrame(render);
      return;
    }

    if (lastTime === 0) lastTime = now;
    lastTime = now;
    if (needsResize) resize();

    gl.uniform1f(uTime, prefersReduced ? 0.0 : now * 0.001);
    gl.uniform1f(uWaveSpeed, waveSpeed);
    gl.uniform1f(uSparkle, sparkleIntensity);
    const rawProgress = intro.done ? 1 : (now - intro.start - intro.delay) / intro.duration;
    const introProgress = Math.max(0, Math.min(1, rawProgress));
    if (rawProgress >= 1) intro.done = true;
    gl.uniform1f(uIntro, introProgress);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    if (!prefersReduced || !intro.done) rafId = requestAnimationFrame(render);
  }

  function buildMaskCanvas(text) {
    const lines = text.replace(/\r/g, "").split("\n");
    while (lines.length && lines[lines.length - 1] === "") lines.pop();
    const maxChars = lines.reduce((max, line) => Math.max(max, line.length), 0);

    const probe = document.createElement("canvas");
    const probeCtx = probe.getContext("2d");
    if (!probeCtx) return null;

    const fontSize = 12;
    const lineHeight = 13.2;
    const pad = 20;
    probeCtx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`;
    const charWidth = probeCtx.measureText("M").width * 1.01;

    const maskCanvas = document.createElement("canvas");
    maskCanvas.width = Math.max(2, Math.ceil(maxChars * charWidth + pad * 2));
    maskCanvas.height = Math.max(2, Math.ceil(lines.length * lineHeight + pad * 2));

    const ctx = maskCanvas.getContext("2d");
    if (!ctx) return null;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
    ctx.fillStyle = "white";
    ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`;
    ctx.textBaseline = "top";

    for (let i = 0; i < lines.length; i += 1) {
      ctx.fillText(lines[i], pad, pad + i * lineHeight);
    }

    return maskCanvas;
  }

  async function loadChurchMask() {
    try {
      const res = await fetch(asciiUrl, { cache: "no-cache" });
      if (!res.ok) return;
      const text = await res.text();
      const maskCanvas = buildMaskCanvas(text);
      if (!maskCanvas) return;

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, maskTexture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, maskCanvas);
      gl.uniform2f(uMaskSize, maskCanvas.width, maskCanvas.height);
      intro.start = performance.now();
      intro.done = prefersReduced;
      gl.uniform1f(uIntro, prefersReduced ? 1 : 0);
      gl.uniform1f(uMaskReady, 1);

      if (prefersReduced) render(performance.now());
    } catch (_err) {
      // Keep default full mask on load failure.
    }
  }

  window.addEventListener(
    "resize",
    () => {
      needsResize = true;
      if (prefersReduced) render(performance.now());
    },
    { passive: true },
  );

  document.addEventListener("visibilitychange", () => {
    paused = document.hidden;
    if (!paused) {
      lastTime = 0;
      rafId = requestAnimationFrame(render);
    }
  });

  window.addEventListener("message", (event) => {
    if (!event.data || event.data.type !== "param") return;
    if (event.data.name === "WAVE_SPEED") waveSpeed = event.data.value;
    if (event.data.name === "SPARKLE_INTENSITY") sparkleIntensity = event.data.value;
  });

  resize();
  loadChurchMask();
  render(performance.now());
})();
