(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn()
    else document.addEventListener('DOMContentLoaded', fn)
  }

  function show(root, id) {
    if (!id) return
    root.setAttribute('data-design-choice-selected', id)
    root.querySelectorAll('[data-design-choice-option]').forEach(function (option) {
      option.setAttribute('aria-pressed', option.getAttribute('data-choice-id') === id ? 'true' : 'false')
    })
    root.querySelectorAll('[data-design-choice-panel]').forEach(function (panel) {
      var on = panel.getAttribute('data-choice-id') === id
      panel.classList.toggle('is-active', on)
      panel.hidden = !on
      panel.setAttribute('aria-hidden', on ? 'false' : 'true')
    })
  }

  function isTextEntry(target) {
    var tag = target && target.tagName
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (target && target.isContentEditable)
  }

  function bindChoice(root) {
    var options = Array.prototype.slice.call(root.querySelectorAll('[data-design-choice-option]'))
    if (!options.length) return

    options.forEach(function (option) {
      option.addEventListener('click', function () {
        show(root, option.getAttribute('data-choice-id'))
      })
    })

    root.addEventListener('keydown', function (event) {
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
      if (isTextEntry(event.target)) return

      var currentIndex = options.findIndex(function (option) {
        return option.getAttribute('aria-pressed') === 'true'
      })
      if (currentIndex < 0) return

      event.preventDefault()
      var delta = event.key === 'ArrowLeft' ? -1 : 1
      var next = options[(currentIndex + delta + options.length) % options.length]
      next.focus()
      show(root, next.getAttribute('data-choice-id'))
    })

    var selected =
      root.getAttribute('data-design-choice-selected') ||
      (options.find(function (option) {
        return option.getAttribute('aria-pressed') === 'true'
      }) || options[0]).getAttribute('data-choice-id')

    show(root, selected)
  }

  function copyFrom(wrap) {
    var text = (wrap.getAttribute('data-copy') || (wrap.querySelector('code, pre') || {}).textContent || '').trim()
    if (!text) return Promise.reject()

    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text)
    }

    return new Promise(function (resolve, reject) {
      var input = document.createElement('textarea')
      input.value = text
      input.setAttribute('readonly', '')
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      try {
        document.execCommand('copy')
        resolve()
      } catch (err) {
        reject(err)
      } finally {
        document.body.removeChild(input)
      }
    })
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }

  /* Wrap ✔ / ◈ / ⟐ lines for .design-code-ok (terminal amber) */
  function paintCliSuccess(code) {
    if (!code || code.getAttribute('data-cli-painted') === '1') return
    var text = code.textContent || ''
    if (!/^[✔◈⟐]/m.test(text)) return
    code.innerHTML = text.split('\n').map(function (line) {
      var escaped = escapeHtml(line)
      if (/^[✔◈⟐]/.test(line)) {
        return '<span class="design-code-ok">' + escaped + '</span>'
      }
      return escaped
    }).join('\n')
    code.setAttribute('data-cli-painted', '1')
  }

  function bindCodeblock(wrap) {
    var button = wrap.querySelector('[data-design-codeblock-copy]')
    var label = wrap.querySelector('[data-design-codeblock-label]')
    paintCliSuccess(wrap.querySelector('code'))
    if (!button || !label) return
    var timer

    button.addEventListener('click', function () {
      copyFrom(wrap).then(function () {
        if (timer) clearTimeout(timer)
        wrap.classList.add('is-copied')
        label.textContent = 'Copied'
        timer = setTimeout(function () {
          wrap.classList.remove('is-copied')
          label.textContent = 'Copy'
          timer = null
        }, 1200)
      }).catch(function () {})
    })
  }

  ready(function () {
    document.querySelectorAll('[data-design-choice]').forEach(bindChoice)
    document.querySelectorAll('[data-design-codeblock]').forEach(bindCodeblock)
    document.querySelectorAll('.design-codeblock code').forEach(paintCliSuccess)
  })
})()
