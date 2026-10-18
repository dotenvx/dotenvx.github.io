(function () {
  var toggle = document.querySelector('[data-mobile-nav-toggle]')
  var overlay = document.getElementById('radar-mobile-overlay')
  if (!toggle || !overlay) return
  var root = overlay.querySelector('[data-mobile-nav-root]')
  var company = overlay.querySelector('#mobile-company-links')
  var forward = overlay.querySelector('[data-mobile-company-open]')
  var back = overlay.querySelector('[data-mobile-company-back]')
  var overflow
  var inertNodes = []
  document.body.appendChild(overlay)
  function submenu(open) {
    root.hidden = open
    company.hidden = !open
    forward.setAttribute('aria-expanded', String(open))
  }
  function close(restoreFocus) {
    if (overlay.hidden) return
    overlay.hidden = true
    toggle.setAttribute('aria-expanded', 'false')
    toggle.setAttribute('aria-label', 'Open navigation')
    document.body.style.overflow = overflow
    inertNodes.forEach(function (item) { item.node.inert = item.inert })
    submenu(false)
    if (restoreFocus) toggle.focus()
  }
  toggle.addEventListener('click', function () {
    if (!overlay.hidden) return close(true)
    submenu(false)
    overlay.hidden = false
    toggle.setAttribute('aria-expanded', 'true')
    toggle.setAttribute('aria-label', 'Close navigation')
    overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    inertNodes = Array.from(document.querySelectorAll('main, footer')).map(function (node) {
      var item = { node: node, inert: node.inert }
      node.inert = true
      return item
    })
    root.querySelector('a').focus()
  })
  forward.addEventListener('click', function () { submenu(true); back.focus() })
  back.addEventListener('click', function () { submenu(false); forward.focus() })
  overlay.addEventListener('click', function (event) {
    if (event.target.closest('a')) close(false)
  })
  document.addEventListener('keydown', function (event) {
    if (overlay.hidden) return
    if (event.key === 'Escape') { event.preventDefault(); close(true); return }
    if (event.key !== 'Tab') return
    var headerItems = Array.from(document.querySelectorAll('.radar-topbar-right [data-radar-theme-toggle], [data-mobile-nav-toggle]')).filter(function (item) { return item.getClientRects().length })
    var items = headerItems.concat(Array.from(overlay.querySelectorAll('a, button')).filter(function (item) { return item.getClientRects().length }))
    var index = items.indexOf(document.activeElement)
    if (event.shiftKey && index <= 0) { event.preventDefault(); items[items.length - 1].focus() }
    else if (!event.shiftKey && (index === items.length - 1 || index === -1)) { event.preventDefault(); items[0].focus() }
  })
  window.matchMedia('(min-width: 768px)').addEventListener('change', function (event) { if (event.matches) close(false) })
})()
