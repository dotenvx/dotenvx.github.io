(function () {
  var INDEX_URL = '/search.json'
  var MAX_RESULTS = 24

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

  function renderResults(root, items, query) {
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

  function search(index, query) {
    return index
      .map(function (entry) {
        return { entry: entry, score: rank(entry, query) }
      })
      .filter(function (row) { return row.score > 0 })
      .sort(function (a, b) {
        if (b.score !== a.score) return b.score - a.score
        return String(a.entry.title).localeCompare(String(b.entry.title))
      })
      .slice(0, MAX_RESULTS)
      .map(function (row) { return row.entry })
  }

  function readQuery() {
    try {
      return new URLSearchParams(window.location.search).get('q') || ''
    } catch (_) {
      return ''
    }
  }

  function writeQuery(query) {
    try {
      var url = new URL(window.location.href)
      if (query) url.searchParams.set('q', query)
      else url.searchParams.delete('q')
      window.history.replaceState({}, '', url.pathname + url.search + url.hash)
    } catch (_) {}
  }

  ready(function () {
    var form = document.querySelector('[data-site-search]')
    if (!form) return

    var input = form.querySelector('[data-site-search-input]')
    var results = form.querySelector('[data-site-search-results]')
    if (!input || !results) return

    var index = null
    var timer = null

    function run(query) {
      if (!index) return
      renderResults(results, search(index, query), query)
    }

    function onQuery(query) {
      writeQuery(query)
      run(query)
    }

    fetch(INDEX_URL, { credentials: 'same-origin' })
      .then(function (res) {
        if (!res.ok) throw new Error('search index failed')
        return res.json()
      })
      .then(function (data) {
        index = Array.isArray(data) ? data : []
        var initial = readQuery()
        if (initial) {
          input.value = initial
          run(initial)
        } else {
          renderResults(results, [], '')
        }
      })
      .catch(function () {
        results.innerHTML = '<p class="design-paragraph">Search is unavailable right now.</p>'
      })

    input.addEventListener('input', function () {
      var query = input.value
      window.clearTimeout(timer)
      timer = window.setTimeout(function () { onQuery(query) }, 80)
    })

    form.addEventListener('submit', function (event) {
      event.preventDefault()
      onQuery(input.value)
    })
  })
})()
