(function () {
  var mode = 'dark'

  function resolve() {
    if (window.__radarThemeMode && window.__radarThemeMode.resolve) {
      return window.__radarThemeMode.resolve()
    }
    var stored = localStorage.getItem('themeMode')
    mode = stored === 'light' || stored === 'dark' ? stored : 'dark'
    if (!stored) localStorage.setItem('themeMode', mode)
    return mode
  }

  function apply(next) {
    mode = next
    if (window.__radarThemeMode && window.__radarThemeMode.apply) {
      window.__radarThemeMode.apply(mode)
    } else {
      document.documentElement.classList.toggle('dark', mode === 'dark')
    }
    document.querySelectorAll('[data-radar-theme-label]').forEach(function (el) {
      el.textContent = mode === 'dark' ? 'Dark' : 'Light'
    })
  }

  function toggle() {
    apply(mode === 'dark' ? 'light' : 'dark')
    localStorage.setItem('themeMode', mode)
  }

  function onKey(e) {
    var tag = document.activeElement && document.activeElement.tagName
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
    if (document.activeElement && document.activeElement.isContentEditable) return
    if (e.key.toLowerCase() === 'm' && !e.metaKey && !e.ctrlKey && !e.altKey && !e.repeat) {
      e.preventDefault()
      toggle()
    }
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn()
    else document.addEventListener('DOMContentLoaded', fn)
  }

  ready(function () {
    apply(resolve())
    window.addEventListener('keydown', onKey)
    document.querySelectorAll('[data-radar-theme-toggle]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault()
        toggle()
      })
    })
  })
})()
