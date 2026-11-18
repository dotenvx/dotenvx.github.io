(function () {
  var root = document.documentElement
  var systemMode = window.matchMedia('(prefers-color-scheme: dark)')
  var storageKey = 'dotenvx-writer-mode'

  try {
    var storedMode = window.localStorage.getItem(storageKey)
    if (storedMode === 'light' || storedMode === 'dark') root.dataset.writerMode = storedMode
  } catch {}

  document.addEventListener('DOMContentLoaded', function () {
    var toggles = document.querySelectorAll('[data-writer-mode-toggle]')

    function isDark() {
      return root.dataset.writerMode ? root.dataset.writerMode === 'dark' : systemMode.matches
    }

    function updateToggle() {
      var pressed = String(isDark())
      toggles.forEach(function (toggle) { toggle.setAttribute('aria-pressed', pressed) })
    }

    function switchMode() {
      root.dataset.writerMode = isDark() ? 'light' : 'dark'
      try {
        window.localStorage.setItem(storageKey, root.dataset.writerMode)
      } catch {}
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
