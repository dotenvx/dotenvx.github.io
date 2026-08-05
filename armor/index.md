---
title: "Dotenvx Armor ⛨"
image: "/assets/img/og-image-armor.png"
layout: radar
---

<div aria-hidden="true" class="armor-lightning">
  <canvas class="armor-lightning-canvas" data-ops-lightning-canvas></canvas>
</div>

<section class="home-hero armor-hero hero-no-select">
  <div class="radar-shell home-hero-shell">
    <div class="home-hero-grid">
      <div class="home-hero-copy hero-copy-enter">
        <p class="home-kicker">Professional Security</p>
        <h1 class="home-title">Armored Keys ⛨</h1>
        <p class="home-lede">Private keys. Off device. Under guard.</p>

        <div class="armor-hero-start" id="armor-hero-start">
          <button type="button" class="armor-hero-copy" id="armor-hero-command">
            <code id="armor-hero-command-text">dotenvx armor up</code>
          </button>
          <p class="armor-hero-links">
            <a href="/signup">Create Account</a>
            <span aria-hidden="true">·</span>
            <a href="/docs/armor">Documentation</a>
          </p>
        </div>
      </div>

      <div class="home-hero-visual">
        {% include components/three-ops-rect.html height="170px" mode="shield" class="h-[170px] md:!h-[560px]" %}
      </div>
    </div>
  </div>
</section>

<section class="radar-section armor-section">
  <div class="radar-shell home-hero-shell armor-story">
    <div class="armor-story-copy">
      <h2 class="armor-story-title">Keys move off-device.</h2>
      <p class="armor-story-lede">No longer in .env.keys. Harder to leak. Harder to steal.</p>
    </div>
    <div class="armor-keys">
      {% include components/keysee-viewer.html public_key="03f56df7dca630e89e2faf66add964cfaffc1ab3b7ea72a754e258815d86c0f927" framing_padding="0.32" material_color="0xaeaaa0" render_mode="wire" spin_direction="-1" spin_delay="650" spin_speed="0.34" class="armor-key armor-key--side relative min-h-[18rem] w-full overflow-hidden bg-transparent md:min-h-[38vh]" %}
      {% include components/keysee-viewer.html public_key="03c969504ab3c95c2873cab950575d874b061f4582186971c740dc60b27e87de7f" framing_padding="0.16" material_color="0xaeaaa0" render_mode="wire" spin_delay="0" class="armor-key armor-key--main relative min-h-[20rem] w-full overflow-hidden bg-transparent md:min-h-[44vh]" %}
      {% include components/keysee-viewer.html public_key="03583aea9aa1f6dd0b96924095626ab171c4d4ffeab6bb1ac3f483671abc32eee4" framing_padding="0.32" material_color="0xaeaaa0" render_mode="wire" spin_delay="1300" spin_speed="0.34" class="armor-key armor-key--side relative min-h-[18rem] w-full overflow-hidden bg-transparent md:min-h-[38vh]" %}
    </div>
  </div>
</section>

<section class="radar-section armor-section">
  <div class="radar-shell home-hero-shell armor-story">
    <div class="armor-story-copy">
      <h2 class="armor-story-title">Grant decryption, not possession.</h2>
      <p class="armor-story-lede">Private keys are retrieved only when an authorized workflow needs them. Used in memory, then gone — so developers, CI, and agents can decrypt without keeping long-lived keys on disk.</p>
    </div>

    <div class="armor-grant">
      <div class="armor-grant-body">
        <div class="armor-grant-mark">
          {% include components/logo.html variant="black" class="armor-grant-logo" %}
        </div>
        <div class="armor-grant-key">
          {% include components/keysee-viewer.html public_key="03c969504ab3c95c2873cab950575d874b061f4582186971c740dc60b27e87de7f" framing_padding="0.26" material_color="0xaeaaa0" render_mode="wire" spin_delay="0" spin_speed="0.42" class="relative h-36 min-h-0 w-full overflow-hidden bg-transparent opacity-80" %}
        </div>
        <h3 class="armor-grant-title">Grant this decryption?</h3>

        <div class="armor-grant-meta">
          <div class="armor-grant-row">
            <span class="armor-grant-icon" aria-hidden="true">❯</span>
            <div>
              <div class="armor-grant-label">Command</div>
              <pre class="armor-grant-value">dotenvx run -- npm start</pre>
            </div>
          </div>
          <div class="armor-grant-row">
            <span class="armor-grant-icon" aria-hidden="true">⌖</span>
            <div>
              <div class="armor-grant-label">Location</div>
              <div class="armor-grant-text">Near San Francisco, California, United States</div>
            </div>
          </div>
          <div class="armor-grant-row">
            <span class="armor-grant-icon" aria-hidden="true">▭</span>
            <div>
              <div class="armor-grant-label">Device</div>
              <div class="armor-grant-text">MAC_OS_X</div>
            </div>
          </div>
        </div>
      </div>
      <div class="armor-grant-actions">
        <button type="button" class="armor-grant-btn">Yes, approve</button>
        <button type="button" class="armor-grant-btn">No, deny</button>
      </div>
    </div>
  </div>
</section>

<section class="radar-section armor-cta-section">
  <div class="radar-shell home-hero-shell armor-story">
    <div class="armor-cta-copy">
      <h2 class="home-title armor-cta-title">Armored keys.<br />Under guard.</h2>
      <div class="armor-cta-actions">
        <a class="radar-btn radar-btn--lg" href="/signup">Create Account</a>
        <a class="armor-hero-secondary" href="/contact">Contact Us</a>
      </div>
    </div>
  </div>
</section>

<script>
(function () {
  var commandText = 'dotenvx armor up'
  var copyTimeout

  function ready(fn) {
    if (document.readyState !== 'loading') fn()
    else document.addEventListener('DOMContentLoaded', fn)
  }

  function copyText(text, onDone) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(onDone)
      return
    }
    var textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    onDone()
  }

  ready(function () {
    var command = document.getElementById('armor-hero-command')
    var commandLabel = document.getElementById('armor-hero-command-text')
    if (!command || !commandLabel) return

    command.addEventListener('click', function () {
      copyText(commandText, function () {
        commandLabel.textContent = 'copied'
        clearTimeout(copyTimeout)
        copyTimeout = setTimeout(function () {
          commandLabel.textContent = commandText
        }, 1100)
      })
    })
  })
})()
</script>

<script>
(() => {
  const canvas = document.querySelector('[data-ops-lightning-canvas]');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const lightningRoot = canvas.parentElement;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const state = {
    w: 0,
    h: 0,
    dpr: 1,
    bolts: [],
    lastScrollY: -1,
    raf: 0
  };
  const randBetween = (min, max) => min + Math.random() * (max - min);
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  const subdivide = (x1, y1, x2, y2, displacement, minDisp) => {
    if (displacement < minDisp) {
      return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
    }
    const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * displacement;
    const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * displacement;
    const left = subdivide(x1, y1, midX, midY, displacement / 2, minDisp);
    const right = subdivide(midX, midY, x2, y2, displacement / 2, minDisp);
    return [...left.slice(0, -1), ...right];
  };

  const branchFrom = (startPoint, angle, length, depth) => {
    const endX = startPoint.x + Math.cos(angle) * length;
    const endY = startPoint.y + Math.sin(angle) * length;
    const segments = subdivide(startPoint.x, startPoint.y, endX, endY, length * 0.45, 6);
    const branches = [];
    if (depth < 2 && Math.random() < 0.55) {
      const branchIdx = Math.floor(Math.random() * (segments.length - 2)) + 1;
      const branchPoint = segments[branchIdx];
      const branchAngle = angle + (Math.random() - 0.5) * 1.8;
      const branchLength = length * (0.35 + Math.random() * 0.3);
      branches.push(branchFrom(branchPoint, branchAngle, branchLength, depth + 1));
    }
    return {
      segments,
      alpha: 0.88,
      decay: 0.055 + Math.random() * 0.03,
      width: Math.max(0.7, 1.6 - depth * 0.4),
      branches
    };
  };

  const createStrike = (w, h, options = {}) => {
    const anchorX = typeof options.anchorX === 'number' ? options.anchorX : null;
    const anchorSpread = typeof options.anchorSpread === 'number' ? options.anchorSpread : 0.12;
    const startX = anchorX === null
      ? w * (0.35 + Math.random() * 0.47)
      : w * clamp(anchorX + (Math.random() - 0.5) * anchorSpread, 0.12, 0.88);
    const startY = -h * (0.16 + Math.random() * 0.16);
    const endX = anchorX === null
      ? w * (0.22 + Math.random() * 0.56)
      : w * clamp(anchorX + (Math.random() - 0.5) * (anchorSpread * 1.7), 0.1, 0.9);
    const endY = h * (0.74 + Math.random() * 0.34);
    const roughness = Math.hypot(endX - startX, endY - startY) * 0.42;
    const segments = subdivide(startX, startY, endX, endY, roughness, 6);
    const branches = [];
    const branchCount = 2 + Math.floor(Math.random() * 3);
    const angle = Math.atan2(endY - startY, endX - startX);
    for (let i = 0; i < branchCount; i += 1) {
      const idx = Math.floor(Math.random() * (segments.length - 2)) + 1;
      const p = segments[idx];
      const branchAngle = angle + (Math.random() - 0.5) * 2;
      const branchLen = Math.min(w, h) * (0.12 + Math.random() * 0.18);
      branches.push(branchFrom(p, branchAngle, branchLen, 0));
    }
    return {
      segments,
      alpha: 1,
      decay: 0.055 + Math.random() * 0.025,
      width: 2.4 + Math.random() * 1.2,
      branches
    };
  };

  const collectPaths = (bolt, parentAlpha, paths) => {
    const alpha = Math.min(parentAlpha, bolt.alpha);
    if (alpha <= 0 || bolt.segments.length < 2) return;
    paths.push({ segments: bolt.segments, alpha, width: bolt.width });
    for (let i = 0; i < bolt.branches.length; i += 1) {
      collectPaths(bolt.branches[i], alpha * 0.58, paths);
    }
  };

  const drawPath = (segments) => {
    ctx.moveTo(segments[0].x, segments[0].y);
    for (let i = 1; i < segments.length; i += 1) {
      ctx.lineTo(segments[i].x, segments[i].y);
    }
  };

  const resize = () => {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    state.w = rect.width;
    state.h = rect.height;
    state.dpr = dpr;
  };

  const updateScrollTransform = () => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    if (scrollY !== state.lastScrollY) {
      lightningRoot.style.transform = `translate3d(0, ${-scrollY}px, 0)`;
      state.lastScrollY = scrollY;
    }
  };

  const startLightningLoop = () => {
    if (!state.raf) state.raf = requestAnimationFrame(tick);
  };

  const tick = () => {
    state.raf = 0;
    const { w, h, dpr } = state;
    if (!w || !h || !state.bolts.length) return;

    updateScrollTransform();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const paths = [];
    for (let i = 0; i < state.bolts.length; i += 1) {
      collectPaths(state.bolts[i], 1, paths);
    }

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < paths.length; i += 1) {
      const p = paths[i];
      ctx.beginPath();
      drawPath(p.segments);
      ctx.strokeStyle = `rgba(255, 255, 255, ${p.alpha * 0.13})`;
      ctx.lineWidth = 10;
      ctx.stroke();
    }
    ctx.globalCompositeOperation = 'source-over';
    for (let i = 0; i < paths.length; i += 1) {
      const p = paths[i];
      ctx.beginPath();
      drawPath(p.segments);
      ctx.strokeStyle = `rgba(235, 238, 245, ${p.alpha * 0.78})`;
      ctx.lineWidth = p.width;
      ctx.stroke();
      ctx.beginPath();
      drawPath(p.segments);
      ctx.strokeStyle = `rgba(255, 255, 255, ${p.alpha * 0.82})`;
      ctx.lineWidth = p.width * 0.36;
      ctx.stroke();
    }

    for (let i = state.bolts.length - 1; i >= 0; i -= 1) {
      state.bolts[i].alpha -= state.bolts[i].decay;
      if (state.bolts[i].alpha <= 0) state.bolts.splice(i, 1);
    }

    if (state.bolts.length) startLightningLoop();
  };

  resize();
  updateScrollTransform();
  window.addEventListener('scroll', updateScrollTransform, { passive: true });
  window.addEventListener('resize', resize, { passive: true });

  const nextStrikeDelayMs = () => {
    const mobile = window.matchMedia('(max-width: 767px)').matches;
    return mobile ? randBetween(9000, 16000) : randBetween(7000, 13000);
  };

  const fireStrike = (count = 1, options = {}) => {
    if (document.hidden) return;
    if (!document.documentElement.classList.contains('dark')) return;
    for (let i = 0; i < count; i += 1) {
      state.bolts.push(createStrike(state.w, state.h, options));
    }
    startLightningLoop();
    if (Math.random() < 0.2) {
      window.setTimeout(() => {
        if (document.hidden) return;
        if (!document.documentElement.classList.contains('dark')) return;
        state.bolts.push(createStrike(state.w, state.h, options));
        startLightningLoop();
      }, randBetween(90, 210));
    }
  };

  const isTextInputTarget = (target) => {
    if (!(target instanceof Element)) return false;
    if (target.closest('[contenteditable="true"]')) return true;
    const tag = target.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
  };

  const handleLightningHotkey = (event) => {
    if (event.defaultPrevented) return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (isTextInputTarget(event.target)) return;
    if (String(event.key).toLowerCase() !== 'l') return;

    const anchorX = window.matchMedia('(max-width: 767px)').matches ? 0.5 : 0.68;
    fireStrike(1, { anchorX, anchorSpread: 0.12 });
  };

  window.addEventListener('keydown', handleLightningHotkey);

  let strikeTimerId = 0;
  const queueNextStrike = () => {
    strikeTimerId = window.setTimeout(() => {
      fireStrike();
      queueNextStrike();
    }, nextStrikeDelayMs());
  };

  window.setTimeout(() => {
    const initialAnchorX = window.matchMedia('(max-width: 767px)').matches ? 0.5 : 0.68;
    fireStrike(1, { anchorX: initialAnchorX, anchorSpread: 0.1 });
    if (Math.random() < 0.45) {
      window.setTimeout(() => fireStrike(1, { anchorX: initialAnchorX, anchorSpread: 0.14 }), randBetween(180, 320));
    }
    queueNextStrike();
  }, 780);

  window.addEventListener('pagehide', () => {
    if (state.raf) cancelAnimationFrame(state.raf);
    if (strikeTimerId) window.clearTimeout(strikeTimerId);
    window.removeEventListener('scroll', updateScrollTransform);
    window.removeEventListener('resize', resize);
    window.removeEventListener('keydown', handleLightningHotkey);
  }, { once: true });
})();
</script>
