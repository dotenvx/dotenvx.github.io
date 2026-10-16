(function () {
  var drawer = document.querySelector('.side-path-drawer')
  if (!drawer || !drawer.showModal) return
  var title = drawer.querySelector('#side-path-title')
  var content = drawer.querySelector('.side-path-content')
  var scroller = drawer.querySelector('.side-path-drawer-scroll')
  var permalink = drawer.querySelector('.side-path-permalink')
  var trigger
  var request

  document.querySelectorAll('a.side-path, a.side-path-inline').forEach(function (link) {
    link.setAttribute('aria-haspopup', 'dialog')
  })

  drawer.querySelector('.side-path-back').addEventListener('click', function () { drawer.close() })
  drawer.addEventListener('click', function (event) {
    if (event.target === drawer && event.clientX < drawer.getBoundingClientRect().left) drawer.close()
  })
  drawer.addEventListener('close', function () {
    if (request) request.abort()
    document.documentElement.classList.remove('side-path-open')
    if (trigger) trigger.focus({ preventScroll: true })
  })

  document.addEventListener('click', async function (event) {
    var link = event.target.closest('a.side-path, a.side-path-inline')
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === '_blank') return
    var url = new URL(link.href)
    if (url.origin !== location.origin) return
    event.preventDefault()
    if (request) request.abort()
    var controller = new AbortController()
    request = controller
    if (!drawer.open) trigger = link
    title.textContent = link.querySelector('strong')?.textContent || link.textContent
    drawer.querySelector('.side-path-kind').textContent = 'Side path'
    permalink.href = url.href
    content.textContent = 'Loading side path…'
    content.setAttribute('aria-busy', 'true')
    if (!drawer.open) drawer.showModal()
    document.documentElement.classList.add('side-path-open')
    scroller.scrollTop = 0
    try {
      var response = await fetch(url.href, { signal: controller.signal })
      if (!response.ok) throw new Error('Unable to load side path')
      var page = new DOMParser().parseFromString(await response.text(), 'text/html')
      var body = page.querySelector('[data-side-path-content]')
      if (!body) throw new Error('Missing side path content')
      if (controller.signal.aborted) return
      // Only the rendered Markdown body is imported, never page scripts or chrome.
      body.querySelectorAll('script').forEach(function (script) { script.remove() })
      title.textContent = body.dataset.sidePathTitle
      drawer.querySelector('.side-path-kind').textContent = 'Side path / ' + body.dataset.sidePathKind
      content.replaceChildren(...body.childNodes)
      document.dispatchEvent(new CustomEvent('docs:content-added', { detail: content }))
      content.removeAttribute('aria-busy')
      title.focus({ preventScroll: true })
    } catch (error) {
      if (controller.signal.aborted) return
      content.removeAttribute('aria-busy')
      content.textContent = 'This side path could not be loaded. Use “Open page” above to visit it directly.'
    }
  })
})()
