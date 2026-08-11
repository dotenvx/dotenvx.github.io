(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn()
    else document.addEventListener('DOMContentLoaded', fn)
  }

  function isTextEntry(target) {
    var tag = target && target.tagName
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (target && target.isContentEditable)
  }

  ready(function () {
    var root = document.querySelector('[data-docs-quickstart-pager]')
    if (!root) return

    var prev = root.querySelector('[data-docs-quickstart-prev]')
    var next = root.querySelector('[data-docs-quickstart-next]')

    document.addEventListener('keydown', function (event) {
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return
      if (isTextEntry(event.target)) return
      if (event.key === 'ArrowLeft' && prev) {
        event.preventDefault()
        window.location.href = prev.href
      } else if (event.key === 'ArrowRight' && next) {
        event.preventDefault()
        window.location.href = next.href
      }
    })
  })
})()
