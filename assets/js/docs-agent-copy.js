(() => {
  const timers = new WeakMap()

  function fallbackCopy(text) {
    const focused = document.activeElement
    const field = document.createElement('textarea')
    field.value = text
    field.style.cssText = 'position:fixed;opacity:0;pointer-events:none'
    document.body.appendChild(field)
    try {
      field.select()
      if (!document.execCommand('copy')) throw new Error('Copy failed')
    } finally {
      field.remove()
      focused?.focus({ preventScroll: true })
    }
  }

  document.addEventListener('click', async event => {
    const button = event.target.closest('[data-agent-prompt]')
    if (!button) return
    const label = button.querySelector('[data-agent-copy-label]')
    const original = button.dataset.copyLabel || label.textContent
    button.dataset.copyLabel = original
    clearTimeout(timers.get(button))
    try {
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable')
        await navigator.clipboard.writeText(button.dataset.agentPrompt)
      } catch (_) {
        fallbackCopy(button.dataset.agentPrompt)
      }
      label.textContent = 'Copied! Paste into your agent'
    } catch (_) {
      label.textContent = 'Could not copy. Try again'
    }
    timers.set(button, setTimeout(() => { label.textContent = original }, 2500))
  })
})()
