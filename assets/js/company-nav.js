(function () {
  var menu = document.querySelector('[data-company-nav]')
  if (!menu) return
  var trigger = menu.querySelector('summary')
  var timer
  function cancelClose() { window.clearTimeout(timer) }
  menu.addEventListener('pointerenter', function (event) {
    if (event.pointerType !== 'mouse') return
    cancelClose()
    menu.open = true
  })
  menu.addEventListener('pointerleave', function (event) {
    if (event.pointerType !== 'mouse') return
    cancelClose()
    timer = window.setTimeout(function () {
      if (!menu.contains(document.activeElement)) menu.open = false
    }, 180)
  })
  menu.addEventListener('focusin', cancelClose)
  menu.addEventListener('focusout', function (event) {
    if (!menu.contains(event.relatedTarget)) menu.open = false
  })
  document.addEventListener('pointerdown', function (event) {
    if (!menu.contains(event.target)) menu.open = false
  })
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape' || !menu.open) return
    cancelClose()
    menu.open = false
    trigger.focus()
  })
})()
