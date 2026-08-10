(function () {
  var root = document.querySelector('[data-storm-lightning]')
  if (!root) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  var canvas = root.querySelector('[data-storm-lightning-canvas]')
  var flash = root.querySelector('[data-storm-lightning-flash]')
  if (!canvas) return

  var ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) return

  var state = {
    w: 0,
    h: 0,
    dpr: 1,
    bolts: [],
    raf: 0,
    strikeTimerId: 0,
    active: false
  }

  function randBetween(min, max) {
    return min + Math.random() * (max - min)
  }

  function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v))
  }

  function isTextEntry(target) {
    if (!(target instanceof Element)) return false
    if (target.closest('[contenteditable="true"]')) return true
    var tag = target.tagName
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT'
  }

  function subdivide(x1, y1, x2, y2, displacement, minDisp) {
    if (displacement < minDisp) {
      return [{ x: x1, y: y1 }, { x: x2, y: y2 }]
    }
    var midX = (x1 + x2) / 2 + (Math.random() - 0.5) * displacement
    var midY = (y1 + y2) / 2 + (Math.random() - 0.5) * displacement
    var left = subdivide(x1, y1, midX, midY, displacement / 2, minDisp)
    var right = subdivide(midX, midY, x2, y2, displacement / 2, minDisp)
    return left.slice(0, -1).concat(right)
  }

  function branchFrom(startPoint, angle, length, depth) {
    var endX = startPoint.x + Math.cos(angle) * length
    var endY = startPoint.y + Math.sin(angle) * length
    var segments = subdivide(startPoint.x, startPoint.y, endX, endY, length * 0.45, 6)
    var branches = []
    if (depth < 2 && Math.random() < 0.55) {
      var branchIdx = Math.floor(Math.random() * (segments.length - 2)) + 1
      var branchPoint = segments[branchIdx]
      var branchAngle = angle + (Math.random() - 0.5) * 1.8
      var branchLength = length * (0.35 + Math.random() * 0.3)
      branches.push(branchFrom(branchPoint, branchAngle, branchLength, depth + 1))
    }
    return {
      segments: segments,
      alpha: 0.88,
      decay: 0.035 + Math.random() * 0.02,
      width: Math.max(0.7, 1.7 - depth * 0.4),
      branches: branches
    }
  }

  function createStrike(w, h, options) {
    options = options || {}
    var anchorX = typeof options.anchorX === 'number' ? options.anchorX : null
    var anchorSpread = typeof options.anchorSpread === 'number' ? options.anchorSpread : 0.22
    var distant = Boolean(options.distant)
    var startX = anchorX === null
      ? w * (0.12 + Math.random() * 0.76)
      : w * clamp(anchorX + (Math.random() - 0.5) * anchorSpread, 0.08, 0.92)
    var startY = -h * (0.1 + Math.random() * 0.16)
    var endX = anchorX === null
      ? w * (0.1 + Math.random() * 0.8)
      : w * clamp(anchorX + (Math.random() - 0.5) * (anchorSpread * 1.8), 0.06, 0.94)
    var endY = h * (distant ? (0.45 + Math.random() * 0.35) : (0.68 + Math.random() * 0.4))
    var roughness = Math.hypot(endX - startX, endY - startY) * 0.44
    var segments = subdivide(startX, startY, endX, endY, roughness, 6)
    var branches = []
    var branchCount = distant ? (1 + Math.floor(Math.random() * 2)) : (2 + Math.floor(Math.random() * 4))
    var angle = Math.atan2(endY - startY, endX - startX)
    for (var i = 0; i < branchCount; i += 1) {
      var idx = Math.floor(Math.random() * (segments.length - 2)) + 1
      var p = segments[idx]
      var branchAngle = angle + (Math.random() - 0.5) * 2.1
      var branchLen = Math.min(w, h) * (distant ? (0.08 + Math.random() * 0.12) : (0.14 + Math.random() * 0.22))
      branches.push(branchFrom(p, branchAngle, branchLen, 0))
    }
    return {
      segments: segments,
      alpha: distant ? (0.55 + Math.random() * 0.25) : 1,
      decay: distant ? (0.04 + Math.random() * 0.025) : (0.055 + Math.random() * 0.025),
      width: distant ? (1.1 + Math.random() * 0.7) : (2.4 + Math.random() * 1.2),
      branches: branches
    }
  }

  function collectPaths(bolt, parentAlpha, paths) {
    var alpha = Math.min(parentAlpha, bolt.alpha)
    if (alpha <= 0 || bolt.segments.length < 2) return
    paths.push({ segments: bolt.segments, alpha: alpha, width: bolt.width })
    for (var i = 0; i < bolt.branches.length; i += 1) {
      collectPaths(bolt.branches[i], alpha * 0.58, paths)
    }
  }

  function drawPath(segments) {
    ctx.moveTo(segments[0].x, segments[0].y)
    for (var i = 1; i < segments.length; i += 1) {
      ctx.lineTo(segments[i].x, segments[i].y)
    }
  }

  function resize() {
    var rect = root.getBoundingClientRect()
    var dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.max(1, Math.floor(rect.width * dpr))
    canvas.height = Math.max(1, Math.floor(rect.height * dpr))
    canvas.style.width = rect.width + 'px'
    canvas.style.height = rect.height + 'px'
    state.w = rect.width
    state.h = rect.height
    state.dpr = dpr
  }

  function startLoop() {
    if (!state.raf) state.raf = requestAnimationFrame(tick)
  }

  function stopLoop() {
    if (state.raf) cancelAnimationFrame(state.raf)
    state.raf = 0
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  function tick() {
    state.raf = 0
    var w = state.w
    var h = state.h
    var dpr = state.dpr
    if (!w || !h || !state.bolts.length || !state.active) return

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, w, h)

    var paths = []
    for (var i = 0; i < state.bolts.length; i += 1) {
      collectPaths(state.bolts[i], 1, paths)
    }

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.globalCompositeOperation = 'lighter'
    for (i = 0; i < paths.length; i += 1) {
      var p = paths[i]
      ctx.beginPath()
      drawPath(p.segments)
      ctx.strokeStyle = 'rgba(255, 255, 255, ' + (p.alpha * 0.13) + ')'
      ctx.lineWidth = 10
      ctx.stroke()
    }
    ctx.globalCompositeOperation = 'source-over'
    for (i = 0; i < paths.length; i += 1) {
      p = paths[i]
      ctx.beginPath()
      drawPath(p.segments)
      ctx.strokeStyle = 'rgba(235, 238, 245, ' + (p.alpha * 0.78) + ')'
      ctx.lineWidth = p.width
      ctx.stroke()
      ctx.beginPath()
      drawPath(p.segments)
      ctx.strokeStyle = 'rgba(255, 255, 255, ' + (p.alpha * 0.82) + ')'
      ctx.lineWidth = p.width * 0.36
      ctx.stroke()
    }

    for (i = state.bolts.length - 1; i >= 0; i -= 1) {
      state.bolts[i].alpha -= state.bolts[i].decay
      if (state.bolts[i].alpha <= 0) state.bolts.splice(i, 1)
    }

    if (state.bolts.length) startLoop()
  }

  function flashScreen() {
    if (!flash) return
    flash.classList.remove('is-flashing')
    void flash.offsetWidth
    flash.classList.add('is-flashing')
  }

  function clearFlash() {
    if (!flash) return
    flash.classList.remove('is-flashing')
  }

  function fireStrike(count, options) {
    count = count || 1
    options = options || {}
    if (!state.active || document.hidden) return
    for (var i = 0; i < count; i += 1) {
      state.bolts.push(createStrike(state.w, state.h, options))
    }
    if (options.flash || (!options.distant && Math.random() < 0.55)) flashScreen()
    startLoop()
    if (Math.random() < 0.55) {
      window.setTimeout(function () {
        if (!state.active || document.hidden) return
        state.bolts.push(createStrike(state.w, state.h, Object.assign({}, options, {
          distant: options.distant || Math.random() < 0.45
        })))
        startLoop()
      }, randBetween(60, 180))
    }
    if (Math.random() < 0.35) {
      window.setTimeout(function () {
        if (!state.active || document.hidden) return
        state.bolts.push(createStrike(state.w, state.h, {
          distant: true,
          anchorX: Math.random(),
          anchorSpread: 0.3
        }))
        startLoop()
      }, randBetween(160, 420))
    }
  }

  function nextStrikeDelayMs() {
    var mobile = window.matchMedia('(max-width: 767px)').matches
    return mobile ? randBetween(700, 1800) : randBetween(450, 1200)
  }

  function queueNextStrike(immediate) {
    if (state.strikeTimerId) window.clearTimeout(state.strikeTimerId)
    if (!state.active) return
    var delay = immediate ? randBetween(120, 320) : nextStrikeDelayMs()
    state.strikeTimerId = window.setTimeout(function () {
      var roll = Math.random()
      if (roll < 0.35) {
        fireStrike(roll < 0.12 ? 2 : 1, { flash: true })
      } else if (roll < 0.7) {
        fireStrike(1, { flash: Math.random() < 0.55 })
      } else {
        fireStrike(1 + (Math.random() < 0.4 ? 1 : 0), {
          distant: true,
          flash: Math.random() < 0.25,
          anchorX: Math.random(),
          anchorSpread: 0.35
        })
      }
      queueNextStrike()
    }, delay)
  }

  function syncActive(active, announce) {
    state.active = Boolean(active)
    root.classList.toggle('is-active', state.active)
    if (!state.active) {
      state.bolts = []
      stopLoop()
      if (state.strikeTimerId) {
        window.clearTimeout(state.strikeTimerId)
        state.strikeTimerId = 0
      }
      clearFlash()
      return
    }

    resize()
    if (announce) {
      window.setTimeout(function () { fireStrike(3, { flash: true }) }, 80)
      window.setTimeout(function () { fireStrike(1, { distant: true, anchorX: 0.2 }) }, 220)
      window.setTimeout(function () { fireStrike(1, { distant: true, anchorX: 0.8 }) }, 360)
    } else {
      fireStrike(2, { flash: Math.random() < 0.6 })
    }
    queueNextStrike(true)
  }

  function onThemeChange(event) {
    var next = event && event.detail && event.detail.mode
    syncActive(next === 'storm', next === 'storm')
  }

  function onHotkey(event) {
    if (!state.active) return
    if (event.defaultPrevented) return
    if (event.ctrlKey || event.metaKey || event.altKey) return
    if (isTextEntry(event.target)) return
    if (String(event.key).toLowerCase() !== 'l') return
    fireStrike(1, {
      flash: true,
      anchorX: window.matchMedia('(max-width: 767px)').matches ? 0.5 : 0.62
    })
  }

  function onVisibility() {
    if (document.hidden) stopLoop()
    else if (state.active) queueNextStrike()
  }

  window.addEventListener('radar:theme-change', onThemeChange)
  window.addEventListener('resize', resize, { passive: true })
  window.addEventListener('keydown', onHotkey)
  document.addEventListener('visibilitychange', onVisibility)

  resize()
  syncActive(document.documentElement.classList.contains('storm'), false)
})()
