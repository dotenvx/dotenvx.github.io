(function () {
  var writer = document.querySelector('main.writer')
  if (!writer) return

  function includeCompleteMarkup(range, edge) {
    var boundary = range[edge + 'Container']
    var element = boundary.nodeType === Node.ELEMENT_NODE ? boundary : boundary.parentElement

    for (var markup = element.closest('a, strong, em, code, h3, h4, h5, h6'); markup && writer.contains(markup);
      markup = markup.parentElement.closest('a, strong, em, code, h3, h4, h5, h6')) {
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

      if (edge === 'start' && range.comparePoint(markup, 0) < 0) range.setStartBefore(markup)
      if (edge === 'end' && range.comparePoint(markup, markup.childNodes.length) > 0) range.setEndAfter(markup)
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
      code.prepend('```\n')
      code.append('\n```')
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
