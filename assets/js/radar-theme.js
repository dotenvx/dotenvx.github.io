(function () {
  var MODES = ['light', 'dark']
  var mode = 'dark'

  function modes() {
    return (window.__radarThemeMode && window.__radarThemeMode.modes) || MODES
  }

  function resolve() {
    if (window.__radarThemeMode && window.__radarThemeMode.resolve) {
      return window.__radarThemeMode.resolve()
    }
    var stored = localStorage.getItem('themeMode')
    var list = modes()
    mode = list.indexOf(stored) !== -1 ? stored : 'dark'
    if (!stored) localStorage.setItem('themeMode', mode)
    return mode
  }

  function labelFor(next) {
    if (next === 'dark') return 'Dark'
    return 'Light'
  }

  function apply(next) {
    mode = next
    if (window.__radarThemeMode && window.__radarThemeMode.apply) {
      window.__radarThemeMode.apply(mode)
    } else {
      document.documentElement.classList.toggle('dark', mode === 'dark')
    }
    document.querySelectorAll('[data-radar-theme-label]').forEach(function (el) {
      el.textContent = labelFor(mode)
    })
  }

  function toggle() {
    var list = modes()
    var next = window.__radarThemeMode && window.__radarThemeMode.next
      ? window.__radarThemeMode.next(mode)
      : list[(list.indexOf(mode) + 1) % list.length]
    apply(next)
    if (window.__radarThemeMode && window.__radarThemeMode.persist) {
      window.__radarThemeMode.persist(mode)
    } else {
      localStorage.setItem('themeMode', mode)
    }
  }

  let blooming = false;
  const animateToggle = async (origin) => {
    if (blooming) return;
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      toggle();
      return;
    }
    const control = origin || document.querySelector('[data-radar-theme-toggle]');
    const rect = control ? control.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 2, width: 0, height: 0 };
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const size = Math.max(6, Math.ceil(Math.sqrt(innerWidth * innerHeight / 12800)));
    const pixels = [];
    for (let top = 0; top < innerHeight; top += size) {
      for (let left = 0; left < innerWidth; left += size) {
        const distance = Math.hypot(left + size / 2 - x, top + size / 2 - y) / radius;
        pixels.push({
          // Jitter breaks up the wave into a ragged, scattered pixel edge.
          at: Math.max(0, distance + (Math.random() - .5) * .3),
          path: `M${left} ${top}h${size}v${size}h-${size}Z`
        });
      }
    }
    pixels.sort((a, b) => a.at - b.at);
    const last = pixels[pixels.length - 1].at;
    const frames = [];
    let path = 'M0 0Z';
    let nextPixel = 0;
    for (let frame = 0; frame <= 30; frame++) {
      while (frame > 0 && nextPixel < pixels.length && pixels[nextPixel].at <= last * frame / 30) {
        path += pixels[nextPixel++].path;
      }
      frames.push({ clipPath: `path('${path}')` });
    }
    blooming = true;
    document.documentElement.style.setProperty('--theme-pixel-clip', frames[0].clipPath);
    document.documentElement.classList.add('theme-bloom');
    const transition = document.startViewTransition(toggle);
    try {
      await transition.ready;
      // Keep the snapshots alive while updating the mask directly. Different
      // path vertex counts cannot reliably interpolate as CSS keyframes.
      const hold = document.documentElement.animate(
        { opacity: [1, 1] },
        { duration: 400, pseudoElement: '::view-transition-new(root)' }
      );
      await new Promise(resolve => {
        let start;
        const draw = now => {
          if (start === undefined) start = now;
          const progress = Math.min(1, (now - start) / 350);
          const frame = frames[Math.floor(progress * 30)];
          document.documentElement.style.setProperty('--theme-pixel-clip', frame.clipPath);
          if (progress < 1) requestAnimationFrame(draw);
          else resolve();
        };
        requestAnimationFrame(draw);
      });
      hold.cancel();
    } catch (_) {
      // A skipped transition still applies the theme through its update callback.
    } finally {
      await transition.finished.catch(() => {});
      document.documentElement.classList.remove('theme-bloom');
      document.documentElement.style.removeProperty('--theme-pixel-clip');
      blooming = false;
    }
  };

  window.__radarToggleTheme = animateToggle

  function onKey(e) {
    var tag = document.activeElement && document.activeElement.tagName
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
    if (document.activeElement && document.activeElement.isContentEditable) return
    if (e.key.toLowerCase() === 'm' && !e.metaKey && !e.ctrlKey && !e.altKey && !e.repeat) {
      e.preventDefault()
      animateToggle()
    }
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn()
    else document.addEventListener('DOMContentLoaded', fn)
  }

  ready(function () {
    apply(resolve())
    window.addEventListener('keydown', onKey)
    document.querySelectorAll('[data-radar-theme-toggle]').forEach(function (el) {
      var pressed = false
      el.addEventListener('pointerdown', function (e) {
        if (e.button) return
        pressed = true
        animateToggle(el)
      })
      el.addEventListener('click', function (e) {
        e.preventDefault()
        if (pressed) {
          pressed = false
          return
        }
        animateToggle(el)
      })
    })
  })
})()
