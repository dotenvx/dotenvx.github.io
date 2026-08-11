(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn()
    else document.addEventListener('DOMContentLoaded', fn)
  }

  function bindCorner(root) {
    var hit = root.querySelector('[data-design-video-corner-hit]')
    var player = root.querySelector('[data-design-video-corner-player]')
    var stage = root.querySelector('[data-design-video-corner-stage]')
    var stagePlayer = root.querySelector('[data-design-video-corner-stage-player]')
    var close = root.querySelector('[data-design-video-corner-close]')
    var expanded = false

    function previewPlay() {
      if (!player || expanded) return
      player.muted = true
      player.play().catch(function () {})
    }

    function expand() {
      expanded = true
      root.classList.add('is-expanded')
      if (hit) hit.setAttribute('aria-expanded', 'true')
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
      document.documentElement.classList.remove('design-video-corner-open')
      document.removeEventListener('keydown', onKeydown)

      if (stagePlayer) stagePlayer.pause()
      previewPlay()
    }

    function onKeydown(event) {
      if (event.key === 'Escape') collapse()
    }

    if (hit) {
      hit.addEventListener('click', function () {
        if (expanded) collapse()
        else expand()
      })
    }
    if (close) close.addEventListener('click', collapse)
    if (stage) {
      stage.addEventListener('click', function (event) {
        if (event.target === stage) collapse()
      })
    }

    previewPlay()
  }

  ready(function () {
    document.querySelectorAll('[data-design-video-corner]').forEach(bindCorner)
  })
})()
