(function () {
  var MODES = ['light', 'dark', 'storm']
  var mode = 'storm'

  function modes() {
    return (window.__radarThemeMode && window.__radarThemeMode.modes) || MODES
  }

  function resolve() {
    if (window.__radarThemeMode && window.__radarThemeMode.resolve) {
      return window.__radarThemeMode.resolve()
    }
    var stored = localStorage.getItem('themeMode')
    var list = modes()
    mode = list.indexOf(stored) !== -1 ? stored : 'storm'
    if (!stored) localStorage.setItem('themeMode', mode)
    return mode
  }

  function labelFor(next) {
    if (next === 'storm') return 'Storm'
    if (next === 'dark') return 'Dark'
    return 'Light'
  }

  function apply(next) {
    mode = next
    if (window.__radarThemeMode && window.__radarThemeMode.apply) {
      window.__radarThemeMode.apply(mode)
    } else {
      document.documentElement.classList.toggle('dark', mode === 'dark' || mode === 'storm')
      document.documentElement.classList.toggle('storm', mode === 'storm')
    }
    document.querySelectorAll('[data-radar-theme-label]').forEach(function (el) {
      el.textContent = labelFor(mode)
    })
  }

  function toggle() {
    var list = modes()
    var next = window.__radarThemeMode && window.__radarThemeMode.next
      ? window.__radarThemeMode.next(mode)
      : list[(list.indexOf(mode) + 1) % list.length]
    apply(next)
    if (window.__radarThemeMode && window.__radarThemeMode.persist) {
      window.__radarThemeMode.persist(mode)
    } else {
      localStorage.setItem('themeMode', mode)
    }
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
