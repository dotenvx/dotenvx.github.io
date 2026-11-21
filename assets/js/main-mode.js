(function () {
  var root = document.documentElement
  var systemMode = window.matchMedia('(prefers-color-scheme: dark)')
  var storageKey = 'dotenvx-main-mode'
  var modes = ['light', 'dark', 'plain']

  function currentMode() {
    return root.dataset.mainMode || (systemMode.matches ? 'dark' : 'light')
  }

  function updateStyles() {
    var plain = currentMode() === 'plain'
    document.querySelectorAll('[data-main-styles]').forEach(function (sheet) {
      sheet.media = plain ? 'not all' : 'all'
    })
    document.querySelectorAll('[data-main-plain-styles]').forEach(function (sheet) {
      sheet.media = plain ? 'all' : 'not all'
    })
  }

  try {
    var storedMode = window.localStorage.getItem(storageKey)
    // Preserve the theme selected before the main naming change.
    if (!modes.includes(storedMode)) storedMode = window.localStorage.getItem('dotenvx-writer-mode')
    if (modes.includes(storedMode)) {
      root.dataset.mainMode = storedMode
      window.localStorage.setItem(storageKey, storedMode)
    }
  } catch {}

  // Run in the head after the stylesheet links, before the page is painted.
  updateStyles()

  document.addEventListener('DOMContentLoaded', function () {
    var toggles = document.querySelectorAll('[data-main-mode-toggle]')

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
      root.dataset.mainMode = modes[(modes.indexOf(currentMode()) + 1) % modes.length]
      try {
        window.localStorage.setItem(storageKey, root.dataset.mainMode)
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
