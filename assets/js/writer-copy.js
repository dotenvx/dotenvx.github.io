(function () {
  var writer = document.querySelector('main.writer')
  if (!writer) return

  function codeFence(text) {
    var runs = text.match(/^[\t ]*`+/gm) || []
    var length = runs.reduce(function (longest, run) {
      return Math.max(longest, run.trimStart().length + 1)
    }, 3)
    return '`'.repeat(length)
  }

  function includeCompleteMarkup(range, edge) {
    var boundary = range[edge + 'Container']
    var element = boundary.nodeType === Node.ELEMENT_NODE ? boundary : boundary.parentElement

    var markdownElements = 'a, strong, em, code, pre, h2, h3, h4, h5, h6'
    for (var markup = element.closest(markdownElements); markup && writer.contains(markup);
      markup = markup.parentElement.closest(markdownElements)) {
      var walker = document.createTreeWalker(markup, NodeFilter.SHOW_TEXT, {
        acceptNode: function (text) {
          return text.data.trim() && !text.parentElement.closest('.writer-markdown-detail, .writer-markdown-syntax')
            ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
        }
      })
      var first = walker.nextNode()
      if (!first) continue

      var last = first
      for (var next = walker.nextNode(); next; next = walker.nextNode()) last = next
      if (range.comparePoint(first, 0) !== 0 || range.comparePoint(last, last.length) !== 0) continue

      if (edge === 'start' && (range.comparePoint(markup, 0) < 0 ||
        (range.startContainer === markup && range.startOffset === 0))) range.setStartBefore(markup)
      var end = markup.childNodes.length
      if (edge === 'end' && (range.comparePoint(markup, end) > 0 ||
        (range.endContainer === markup && range.endOffset === end))) range.setEndAfter(markup)
    }
  }

  function restoreMarkdown(buffer) {
    // A running Jekyll watcher can render the preview with its previously loaded converter.
    if (writer.querySelector('.writer-markdown-syntax')) return
    buffer.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function (heading) {
      heading.prepend('#'.repeat(Number(heading.tagName[1])) + ' ')
    })
    buffer.querySelectorAll('a[href]').forEach(function (link) {
      var destination = link.getAttribute('href').replace(/[\\()]/g, '\\$&')
      link.prepend('[')
      link.append('](' + destination + ')')
    })
    buffer.querySelectorAll('strong, em').forEach(function (emphasis) {
      var marker = emphasis.tagName === 'STRONG' ? '**' : '*'
      emphasis.prepend(marker)
      emphasis.append(marker)
    })
    buffer.querySelectorAll('pre').forEach(function (code) {
      var fence = codeFence(code.textContent)
      code.prepend(fence + '\n')
      code.append('\n' + fence)
    })
  }

  document.addEventListener('copy', function (event) {
    var selection = window.getSelection()
    if (!event.clipboardData || !selection || selection.isCollapsed || !selection.rangeCount) return

    var range = selection.getRangeAt(0).cloneRange()
    if (!range.intersectsNode(writer)) return
    if (range.comparePoint(writer, 0) > 0 || range.comparePoint(writer, writer.childNodes.length) < 0) return
    if (range.comparePoint(writer, 0) === 0) range.setStart(writer, 0)
    if (range.comparePoint(writer, writer.childNodes.length) === 0) range.setEnd(writer, writer.childNodes.length)
    if (range.collapsed) return

    includeCompleteMarkup(range, 'start')
    includeCompleteMarkup(range, 'end')

    var buffer = document.createElement('div')
    buffer.className = 'writer-copy-buffer'
    buffer.setAttribute('aria-hidden', 'true')
    buffer.append(range.cloneContents())
    buffer.querySelectorAll('button').forEach(function (button) { button.remove() })
    restoreMarkdown(buffer)
    document.body.append(buffer)
    var markdown = buffer.innerText
    buffer.remove()

    event.clipboardData.clearData()
    event.clipboardData.setData('text/plain', markdown)
    event.preventDefault()
  })
})()
