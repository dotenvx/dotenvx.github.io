(function () {
  var INDEX_URL = '/search.json'
  var PAGE_MAX_RESULTS = 24
  var MODAL_MAX_RESULTS = 10

  function ready(fn) {
    if (document.readyState !== 'loading') fn()
    else document.addEventListener('DOMContentLoaded', fn)
  }

  function normalize(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/[_\-/]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  }

  function matchScore(entry, query) {
    var q = normalize(query)
    if (!q) return 0

    var title = normalize(entry.title)
    var slug = normalize(entry.slug)
    var desc = normalize(entry.description)
    var aliases = (entry.aliases || []).map(normalize).filter(Boolean)
    var section = normalize(entry.section)

    if (title === q || slug === q) return 1000
    if (aliases.indexOf(q) !== -1) return 900
    if (title.startsWith(q) || slug.startsWith(q)) return 700
    if (aliases.some(function (a) { return a.startsWith(q) })) return 650
    if ((' ' + title + ' ').indexOf(' ' + q + ' ') !== -1) return 520
    if (title.indexOf(q) !== -1 || slug.indexOf(q) !== -1) return 400
    if (aliases.some(function (a) { return a.indexOf(q) !== -1 })) return 350
    if (section === q) return 180

    var tokens = q.split(' ').filter(Boolean)
    if (tokens.length > 1) {
      var hay = [title, slug, desc].concat(aliases).join(' ')
      if (tokens.every(function (t) { return hay.indexOf(t) !== -1 })) {
        var inTitle = tokens.every(function (t) {
          return title.indexOf(t) !== -1 || slug.indexOf(t) !== -1 || aliases.some(function (a) { return a.indexOf(t) !== -1 })
        })
        return inTitle ? 300 : 120
      }
    }

    if (desc.indexOf(q) !== -1) return 80
    if (tokens.some(function (t) {
      return title.indexOf(t) !== -1 || slug.indexOf(t) !== -1 || aliases.some(function (a) { return a.indexOf(t) !== -1 })
    })) return 60

    return 0
  }

  function rank(entry, query) {
    var matched = matchScore(entry, query)
    if (matched <= 0) return 0
    return matched + (Number(entry.boost) || 0)
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }

  function search(index, query, max) {
    return index
      .map(function (entry) {
        return { entry: entry, score: rank(entry, query) }
      })
      .filter(function (row) { return row.score > 0 })
      .sort(function (a, b) {
        if (b.score !== a.score) return b.score - a.score
        return String(a.entry.title).localeCompare(String(b.entry.title))
      })
      .slice(0, max)
      .map(function (row) { return row.entry })
  }

  function isSearchPage() {
    return window.location.pathname.replace(/\/+$/, '') === '/search'
  }

  function readQuery() {
    try {
      return new URLSearchParams(window.location.search).get('q') || ''
    } catch (_) {
      return ''
    }
  }

  function writeQuery(query) {
    if (!isSearchPage()) return
    try {
      var url = new URL(window.location.href)
      if (query) url.searchParams.set('q', query)
      else url.searchParams.delete('q')
      window.history.replaceState({}, '', url.pathname + url.search + url.hash)
    } catch (_) {}
  }

  function isTypingTarget(node) {
    if (!node) return false
    var tag = node.tagName
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true
    return !!(node.isContentEditable)
  }

  function isSlashKey(event) {
    return event.key === '/' || event.code === 'Slash'
  }

  function renderPageResults(root, items, query) {
    if (!query) {
      root.innerHTML = '<p class="design-paragraph">Type to search docs, pricing, and the rest of the site.</p>'
      return
    }
    if (!items.length) {
      root.innerHTML = '<p class="design-paragraph">No results for <span class="design-code">' + escapeHtml(query) + '</span>.</p>'
      return
    }

    var html = '<div class="design-list"><p class="design-list-title">Results</p><ul class="design-list-items">'
    items.forEach(function (item) {
      html += '<li>'
      html += '<a class="design-link" href="' + escapeHtml(item.url) + '">' + escapeHtml(item.title) + '</a>'
      if (item.section) {
        html += '<span class="design-list-meta">' + escapeHtml(item.section) + '</span>'
      }
      html += '</li>'
    })
    html += '</ul></div>'
    root.innerHTML = html
  }

  function renderModalResults(root, items, query) {
    if (!query) {
      root.innerHTML = '<p class="site-search-empty">Type to search docs, pricing, and the rest of the site.</p>'
      return
    }
    if (!items.length) {
      root.innerHTML = '<p class="site-search-empty">No results for <span class="design-code">' + escapeHtml(query) + '</span>.</p>'
      return
    }

    var html = '<ul class="site-search-hits">'
    items.forEach(function (item, i) {
      html += '<li>'
      html += '<a class="site-search-hit' + (i === 0 ? ' is-active' : '') + '" href="' + escapeHtml(item.url) + '" data-site-search-hit="' + i + '">'
      html += '<span class="site-search-hit-title">' + escapeHtml(item.title) + '</span>'
      if (item.section) {
        html += '<span class="site-search-hit-meta">' + escapeHtml(item.section) + '</span>'
      }
      html += '</a></li>'
    })
    html += '</ul>'
    root.innerHTML = html
  }

  ready(function () {
    var overlay = document.querySelector('[data-site-search-overlay]')
    var modalForm = overlay && overlay.querySelector('[data-site-search]')
    var pageForm = document.querySelector('[data-site-search-page]')
    if (!overlay || !modalForm) return

    if (overlay.parentElement !== document.body) {
      document.body.appendChild(overlay)
    }

    var modalInput = modalForm.querySelector('[data-site-search-input]')
    var modalResults = modalForm.querySelector('[data-site-search-results]')
    if (!modalInput || !modalResults) return

    var pageInput = pageForm && pageForm.querySelector('[data-site-search-input]')
    var pageResults = pageForm && pageForm.querySelector('[data-site-search-results]')

    var index = null
    var pageTimer = null
    var modalTimer = null
    var activeIndex = -1
    var lastFocus = null

    function isOpen() {
      return overlay.classList.contains('is-open')
    }

    function runPage(query) {
      if (!index || !pageResults) return
      renderPageResults(pageResults, search(index, query, PAGE_MAX_RESULTS), query)
    }

    function runModal(query) {
      if (!index) return
      renderModalResults(modalResults, search(index, query, MODAL_MAX_RESULTS), query)
      activeIndex = query && modalResults.querySelector('[data-site-search-hit]') ? 0 : -1
    }

    function setActive(next) {
      var nodes = modalResults.querySelectorAll('[data-site-search-hit]')
      if (!nodes.length) {
        activeIndex = -1
        return
      }
      if (next < 0) next = nodes.length - 1
      if (next >= nodes.length) next = 0
      activeIndex = next
      nodes.forEach(function (node, i) {
        node.classList.toggle('is-active', i === activeIndex)
      })
      nodes[activeIndex].scrollIntoView({ block: 'nearest' })
    }

    function focusModalInput() {
      try {
        modalInput.focus()
        if (typeof modalInput.select === 'function') modalInput.select()
      } catch (_) {}
    }

    function open() {
      lastFocus = document.activeElement
      overlay.hidden = false
      overlay.classList.add('is-open')
      overlay.setAttribute('aria-hidden', 'false')
      document.body.classList.add('overflow-hidden')
      focusModalInput()
      window.requestAnimationFrame(focusModalInput)
      if (index && modalInput.value) runModal(modalInput.value)
    }

    function close() {
      if (!isOpen()) return
      overlay.classList.remove('is-open')
      overlay.hidden = true
      overlay.setAttribute('aria-hidden', 'true')
      document.body.classList.remove('overflow-hidden')
      if (lastFocus && typeof lastFocus.focus === 'function' && lastFocus !== modalInput) {
        try { lastFocus.focus() } catch (_) {}
      }
    }

    fetch(INDEX_URL, { credentials: 'same-origin' })
      .then(function (res) {
        if (!res.ok) throw new Error('search index failed')
        return res.json()
      })
      .then(function (data) {
        index = Array.isArray(data) ? data : []
        var initial = readQuery()
        if (pageInput) {
          if (initial) pageInput.value = initial
          runPage(pageInput.value)
          pageInput.focus()
        } else if (initial) {
          modalInput.value = initial
        }
        if (isOpen()) runModal(modalInput.value)
      })
      .catch(function () {
        var message = '<p class="site-search-empty">Search is unavailable right now.</p>'
        modalResults.innerHTML = message
        if (pageResults) {
          pageResults.innerHTML = '<p class="design-paragraph">Search is unavailable right now.</p>'
        }
      })

    if (pageInput) {
      pageInput.addEventListener('input', function () {
        var query = pageInput.value
        window.clearTimeout(pageTimer)
        pageTimer = window.setTimeout(function () {
          writeQuery(query)
          runPage(query)
        }, 80)
      })

      pageForm.addEventListener('submit', function (event) {
        event.preventDefault()
        writeQuery(pageInput.value)
        runPage(pageInput.value)
      })
    }

    modalInput.addEventListener('input', function () {
      var query = modalInput.value
      window.clearTimeout(modalTimer)
      modalTimer = window.setTimeout(function () { runModal(query) }, 80)
    })

    modalForm.addEventListener('submit', function (event) {
      event.preventDefault()
      var active = modalResults.querySelector('.site-search-hit.is-active')
      if (active && active.href) {
        window.location.href = active.href
        return
      }
      runModal(modalInput.value)
    })

    modalResults.addEventListener('mousemove', function (event) {
      var hit = event.target.closest('[data-site-search-hit]')
      if (!hit) return
      setActive(Number(hit.getAttribute('data-site-search-hit')))
    })

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) close()
    })

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) {
        event.preventDefault()
        close()
        return
      }

      if (isSlashKey(event) && !event.metaKey && !event.ctrlKey && !event.altKey && !isOpen()) {
        if (isTypingTarget(event.target)) return
        event.preventDefault()
        open()
        return
      }

      if (!isOpen()) return

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setActive(activeIndex + 1)
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        setActive(activeIndex - 1)
      }
    }, true)

    modalInput.addEventListener('keypress', function (event) {
      if (!isSlashKey(event) || modalInput.value) return
      event.preventDefault()
    })
  })
})()
