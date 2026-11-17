(function () {
  var root = document.documentElement
  var systemMode = window.matchMedia('(prefers-color-scheme: dark)')
  var storageKey = 'dotenvx-writer-mode'
  var sidebarKey = 'dotenvx-writer-sidebar'
  root.dataset.writerSidebar = 'open'

  try {
    var storedMode = window.localStorage.getItem(storageKey)
    if (storedMode === 'light' || storedMode === 'dark') root.dataset.writerMode = storedMode
    if (window.localStorage.getItem(sidebarKey) === 'closed') root.dataset.writerSidebar = 'closed'
  } catch {}

  document.addEventListener('DOMContentLoaded', function () {
    var sidebarToggle = document.querySelector('[data-writer-sidebar-toggle]')
    if (sidebarToggle) {
      function updateSidebarToggle() {
        var expanded = root.dataset.writerSidebar === 'open'
        sidebarToggle.setAttribute('aria-expanded', String(expanded))
        sidebarToggle.textContent = expanded ? '[-]' : '[+]'
        sidebarToggle.title = expanded ? 'Hide sidebar' : 'Show sidebar'
      }

      updateSidebarToggle()
      sidebarToggle.addEventListener('click', function () {
        root.dataset.writerSidebar = root.dataset.writerSidebar === 'open' ? 'closed' : 'open'
        try {
          window.localStorage.setItem(sidebarKey, root.dataset.writerSidebar)
        } catch {}
        updateSidebarToggle()
      })
    }

    var toggle = document.querySelector('[data-writer-mode-toggle]')
    if (!toggle) return

    function isDark() {
      return root.dataset.writerMode ? root.dataset.writerMode === 'dark' : systemMode.matches
    }

    function updateToggle() {
      toggle.setAttribute('aria-pressed', String(isDark()))
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
    toggle.addEventListener('click', switchMode)
    document.addEventListener('keydown', function (event) {
      if (event.key.toLowerCase() !== 'm' || event.repeat || event.defaultPrevented ||
          event.altKey || event.ctrlKey || event.metaKey ||
          event.target.closest('input, textarea, select, [contenteditable]')) return
      switchMode()
    })
  })
})()
