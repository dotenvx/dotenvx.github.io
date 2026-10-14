(function () {
  var STORAGE_KEY = 'docs-package-manager'
  var MANAGERS = ['npm', 'pnpm']

  function ready(fn) {
    if (document.readyState !== 'loading') fn()
    else document.addEventListener('DOMContentLoaded', fn)
  }

  ready(function () {
    var groups = []
    document.querySelectorAll('.docs-markdown-body').forEach(function (body) {
      var previous = null
      var group = null
      body.querySelectorAll('pre[package-manager]').forEach(function (pre) {
        var manager = pre.getAttribute('package-manager')
        if (MANAGERS.indexOf(manager) === -1) return
        var block = pre.closest('[data-design-codeblock]') || pre
        if (!previous || previous.nextElementSibling !== block) {
          group = { blocks: [], buttons: [] }
          groups.push(group)
        }
        group.blocks.push({ element: block, manager: manager, label: pre.getAttribute('aria-label') || '' })
        previous = block
      })
    })

    // Only enhance complete pairs. Without JavaScript both examples stay readable.
    groups = groups.filter(function (group) {
      return MANAGERS.every(function (manager) {
        return group.blocks.some(function (block) { return block.manager === manager })
      })
    })
    if (!groups.length) return

    function select(manager, persist) {
      groups.forEach(function (group) {
        group.buttons.forEach(function (button) {
          button.setAttribute('aria-pressed', button.textContent === manager ? 'true' : 'false')
        })
        group.blocks.forEach(function (block) {
          block.element.hidden = block.manager !== manager
          if (block.manager === manager) group.label.textContent = block.label
        })
      })
      if (persist) {
        try { window.localStorage.setItem(STORAGE_KEY, manager) } catch (_) {}
      }
    }

    groups.forEach(function (group) {
      var wrapper = document.createElement('div')
      wrapper.className = 'docs-package-manager-example'
      var toolbar = document.createElement('div')
      toolbar.className = 'docs-package-manager-toolbar'
      var options = document.createElement('div')
      options.className = 'docs-package-manager-options'
      options.setAttribute('role', 'group')
      options.setAttribute('aria-label', 'Package manager for all examples on this page')
      MANAGERS.forEach(function (manager, index) {
        var button = document.createElement('button')
        button.type = 'button'
        button.textContent = manager
        button.addEventListener('click', function () { select(manager, true) })
        button.addEventListener('keydown', function (event) {
          if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
          if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
          event.preventDefault()
          var next = group.buttons[(index + 1) % MANAGERS.length]
          next.focus()
          select(next.textContent, true)
        })
        group.buttons.push(button)
        options.appendChild(button)
      })
      group.label = document.createElement('span')
      group.label.className = 'docs-package-manager-filename'
      toolbar.appendChild(options)
      toolbar.appendChild(group.label)
      wrapper.appendChild(toolbar)
      group.blocks[0].element.before(wrapper)
      group.blocks.forEach(function (block) { wrapper.appendChild(block.element) })
    })

    var selected = 'npm'
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY)
      if (MANAGERS.indexOf(saved) !== -1) selected = saved
    } catch (_) {}
    select(selected, false)
  })
})()
