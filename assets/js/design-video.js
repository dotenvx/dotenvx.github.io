(function () {
  function bindVideo(figure) {
    var video = figure.querySelector('video')
    var button = figure.querySelector('.design-video-play')
    if (!video || !button) return
    function preview() {
      video.controls = false
      button.hidden = false
    }
    function playing() {
      button.hidden = true
      video.controls = true
    }
    if (video.readyState >= 2) preview()
    else video.addEventListener('loadeddata', preview, { once: true })
    video.addEventListener('play', playing)
    video.addEventListener('ended', preview)
    button.addEventListener('click', function () {
      playing()
      video.focus()
      video.play().catch(function () { video.controls = true })
    })
    video.addEventListener('error', function () { button.hidden = true; video.controls = true })
  }

  function init() {
    document.querySelectorAll('[data-design-video]').forEach(bindVideo)
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init)
  else init()
})()
