(function () {
  var root = document.documentElement
  var systemMode = window.matchMedia('(prefers-color-scheme: dark)')
  var storageKey = 'dotenvx-writer-mode'
  var modes = ['light', 'dark', 'plain']

  function currentMode() {
    return root.dataset.writerMode || (systemMode.matches ? 'dark' : 'light')
  }

  function updateStyles() {
    var plain = currentMode() === 'plain'
    document.querySelectorAll('[data-writer-styles]').forEach(function (sheet) {
      sheet.media = plain ? 'not all' : 'all'
    })
    document.querySelectorAll('[data-writer-plain-styles]').forEach(function (sheet) {
      sheet.media = plain ? 'all' : 'not all'
    })
  }

  try {
    var storedMode = window.localStorage.getItem(storageKey)
    if (modes.includes(storedMode)) root.dataset.writerMode = storedMode
  } catch {}

  // Run in the head after the stylesheet links, before the page is painted.
  updateStyles()

  document.addEventListener('DOMContentLoaded', function () {
    var toggles = document.querySelectorAll('[data-writer-mode-toggle]')

    function updateToggle() {
      var mode = currentMode()
      var next = modes[(modes.indexOf(mode) + 1) % modes.length]
      var label = 'Theme: ' + mode + '. Switch to ' + next + ' mode (M)'
      toggles.forEach(function (toggle) {
        toggle.removeAttribute('aria-pressed')
        toggle.setAttribute('aria-label', label)
        toggle.setAttribute('title', label)
      })
    }

    function switchMode() {
      root.dataset.writerMode = modes[(modes.indexOf(currentMode()) + 1) % modes.length]
      try {
        window.localStorage.setItem(storageKey, root.dataset.writerMode)
      } catch {}
      updateStyles()
      updateToggle()
    }

    updateToggle()
    systemMode.addEventListener('change', updateToggle)
    toggles.forEach(function (toggle) { toggle.addEventListener('click', switchMode) })
    document.addEventListener('keydown', function (event) {
      if (event.key.toLowerCase() !== 'm' || event.repeat || event.defaultPrevented ||
          event.altKey || event.ctrlKey || event.metaKey ||
          event.target.closest('input, textarea, select, [contenteditable]')) return
      switchMode()
    })
  })
})()
