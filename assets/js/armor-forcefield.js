(() => {
  document.querySelectorAll('[data-armor-forcefield]').forEach((shell) => {
    const field = shell.querySelector('.armor-field')
    let lastManualImpact = -Infinity
    const resist = (event) => {
      shell.classList.remove('is-arming', 'is-repelling')
      const matrix = field.getScreenCTM()
      const hasPointerCoordinates = event && Number.isFinite(event.clientX) && Number.isFinite(event.clientY)
      const point = hasPointerCoordinates && matrix
        ? new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse())
        : { x: 616, y: 487 }
      shell.querySelectorAll('.armor-impact-wave').forEach((wave) => {
        wave.setAttribute('cx', point.x)
        wave.setAttribute('cy', point.y)
      })
      void shell.getBoundingClientRect()
      shell.classList.add('is-repelling')
    }
    // SVG clicks can otherwise select the nearest text outside the graphic.
    shell.addEventListener('mousedown', (event) => {
      if (event.button === 0) event.preventDefault()
    })
    shell.addEventListener('click', (event) => { lastManualImpact = performance.now(); resist(event) })
    shell.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        lastManualImpact = performance.now()
        resist()
      }
    })
    shell.classList.add('is-arming')

    const motion = matchMedia('(prefers-reduced-motion: reduce)')
    const layer = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    layer.setAttribute('aria-hidden', 'true')
    layer.setAttribute('class', 'armor-attack-layer')
    shell.append(layer)
    let visible = false
    let idleTimer
    let frame
    let lastBurst = -Infinity
    let hasAttacked = false
    const burstTimers = new Set()
    // Points on the visible shield boundary, in the field's local coordinates.
    const targets = [{ x: 29, y: 300 }, { x: 180, y: 87 }, { x: 540, y: 171 },
      { x: 851, y: 490 }, { x: 735, y: 721 }]
    const active = () => visible && !document.hidden && !motion.matches
    const shoot = () => {
      if (!active() || frame || performance.now() - lastManualImpact < 1500) return
      hasAttacked = true
      const target = targets[Math.floor(Math.random() * targets.length)]
      const trace = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      trace.setAttribute('class', 'armor-attack-tracer')
      layer.append(trace)
      const started = performance.now()
      const dx = target.x - 440, dy = target.y - 407
      const length = Math.hypot(dx, dy)
      const direction = { x: dx / length, y: dy / length }
      const tick = (now) => {
        if (!active() || now - lastManualImpact < 1500) {
          trace.remove(); frame = null; return
        }
        const fieldMatrix = field.getScreenCTM()
        const shellMatrix = shell.getScreenCTM()
        if (!fieldMatrix || !shellMatrix) { trace.remove(); frame = null; return }
        const endScreen = new DOMPoint(target.x, target.y).matrixTransform(fieldMatrix)
        const end = endScreen.matrixTransform(shellMatrix.inverse())
        const progress = Math.min(1, (now - started) / 330)
        const remaining = (1 - progress) * 460
        const tail = Math.min(remaining + 65, 460)
        trace.setAttribute('x1', end.x + direction.x * tail)
        trace.setAttribute('y1', end.y + direction.y * tail)
        trace.setAttribute('x2', end.x + direction.x * remaining)
        trace.setAttribute('y2', end.y + direction.y * remaining)
        trace.style.opacity = String(Math.min(1, progress * 6) * .7)
        if (progress < 1) frame = requestAnimationFrame(tick)
        else {
          trace.remove(); frame = null
          resist({ clientX: endScreen.x, clientY: endScreen.y })
        }
      }
      frame = requestAnimationFrame(tick)
    }
    const schedule = () => {
      clearTimeout(idleTimer)
      if (active()) idleTimer = setTimeout(() => { shoot(); schedule() }, hasAttacked ? 5000 + Math.random() * 3000 : 800)
    }
    const stop = () => {
      clearTimeout(idleTimer)
      burstTimers.forEach(clearTimeout); burstTimers.clear()
      if (frame) cancelAnimationFrame(frame)
      frame = null; layer.replaceChildren()
    }
    const sync = () => { stop(); schedule() }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync() }, { threshold: .3 })
    observer.observe(shell)
    shell.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'touch' || !active() || performance.now() - lastBurst < 5000) return
      lastBurst = performance.now()
      clearTimeout(idleTimer)
      ;[180, 1380, 2580].forEach(delay => {
        const timer = setTimeout(() => { burstTimers.delete(timer); shoot() }, delay)
        burstTimers.add(timer)
      })
      schedule()
    })
    document.addEventListener('visibilitychange', sync)
    motion.addEventListener('change', sync)
    window.addEventListener('pagehide', stop)
    window.addEventListener('pageshow', sync)

  })
})()
