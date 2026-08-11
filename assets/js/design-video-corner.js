(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn()
    else document.addEventListener('DOMContentLoaded', fn)
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  function bindCorner(root) {
    var hit = root.querySelector('[data-design-video-corner-hit]')
    var player = root.querySelector('[data-design-video-corner-player]')
    var stage = root.querySelector('[data-design-video-corner-stage]')
    var stagePlayer = root.querySelector('[data-design-video-corner-stage-player]')
    var close = root.querySelector('[data-design-video-corner-close]')
    var expanded = false
    var hovering = false
    // Hero dock: still + play glyph only. Fixed corner may preview on hover.
    var hoverPreview = !root.classList.contains('design-video-corner--hero')
    // Hero (and any transformed ancestor) breaks position:fixed — park stage on body.
    var stageHome = stage ? stage.parentNode : null

    function mountStage() {
      if (!stage || stage.parentNode === document.body) return
      document.body.appendChild(stage)
    }

    function unmountStage() {
      if (!stage || !stageHome || stage.parentNode === stageHome) return
      stageHome.appendChild(stage)
    }

    function showIdleFrame() {
      if (!player) return
      player.muted = true
      player.pause()
      // Nudge so browsers paint a frame instead of a blank box.
      try {
        if (player.readyState >= 1 && player.currentTime < 0.05) {
          player.currentTime = 0.05
        }
      } catch (_) {}
    }

    function previewPlay() {
      if (!hoverPreview || !player || expanded || prefersReducedMotion()) return
      player.muted = true
      player.play().catch(function () {})
    }

    function previewPause() {
      if (!player || expanded) return
      player.pause()
    }

    function expand() {
      expanded = true
      root.classList.add('is-expanded')
      if (hit) hit.setAttribute('aria-expanded', 'true')
      mountStage()
      if (stage) stage.hidden = false
      document.documentElement.classList.add('design-video-corner-open')
      document.addEventListener('keydown', onKeydown)

      if (player) player.pause()
      if (stagePlayer) {
        try {
          stagePlayer.currentTime = player ? player.currentTime : 0
        } catch (_) {}
        stagePlayer.muted = false
        stagePlayer.play().catch(function () {})
      }
    }

    function collapse() {
      expanded = false
      root.classList.remove('is-expanded')
      if (hit) hit.setAttribute('aria-expanded', 'false')
      if (stage) stage.hidden = true
      unmountStage()
      document.documentElement.classList.remove('design-video-corner-open')
      document.removeEventListener('keydown', onKeydown)

      if (stagePlayer) stagePlayer.pause()
      if (hovering) previewPlay()
      else showIdleFrame()
    }

    function onKeydown(event) {
      if (event.key === 'Escape') collapse()
    }

    if (hit) {
      hit.addEventListener('click', function () {
        if (expanded) collapse()
        else expand()
      })
      hit.addEventListener('pointerenter', function () {
        hovering = true
        previewPlay()
      })
      hit.addEventListener('pointerleave', function () {
        hovering = false
        previewPause()
      })
      hit.addEventListener('focus', function () {
        hovering = true
        previewPlay()
      })
      hit.addEventListener('blur', function () {
        hovering = false
        previewPause()
      })
    }
    if (close) close.addEventListener('click', collapse)
    if (stage) {
      stage.addEventListener('click', function (event) {
        if (event.target === stage) collapse()
      })
    }

    if (player) {
      player.addEventListener('loadeddata', showIdleFrame, { once: true })
      // Load enough to show a still; do not autoplay.
      try {
        player.load()
      } catch (_) {}
      showIdleFrame()
    }
  }

  ready(function () {
    document.querySelectorAll('[data-design-video-corner]').forEach(bindCorner)
  })
})()
