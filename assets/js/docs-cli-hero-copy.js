(function () {
  var copyTimeouts = new WeakMap()

  function copyText(text, onDone) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(onDone).catch(function () {
        fallbackCopy(text, onDone)
      })
      return
    }
    fallbackCopy(text, onDone)
  }

  function fallbackCopy(text, onDone) {
    var textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    onDone()
  }

  function flashCode(button, label) {
    var code = button.querySelector('.design-code')
    if (!code) return
    if (!button.dataset.copyLabel) button.dataset.copyLabel = code.textContent
    code.textContent = label
    var prevTimeout = copyTimeouts.get(button)
    if (prevTimeout) clearTimeout(prevTimeout)
    copyTimeouts.set(
      button,
      setTimeout(function () {
        code.textContent = button.dataset.copyLabel
        copyTimeouts.delete(button)
      }, 1100)
    )
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-docs-cli-hero-copy]')
    if (!button) return
    var text = button.getAttribute('data-copy') || ''
    if (!text) return
    copyText(text, function () {
      flashCode(button, 'copied')
    })
  })
})()
