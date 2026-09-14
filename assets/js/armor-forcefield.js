(() => {
  document.querySelectorAll('[data-armor-forcefield]').forEach((shell) => {
    const field = shell.querySelector('.armor-field')
    let lastManualLaunch = -Infinity
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
      warm(point)
      void shell.getBoundingClientRect()
      shell.classList.add('is-repelling')
    }
    // SVG clicks can otherwise select the nearest text outside the graphic.
    shell.addEventListener('mousedown', (event) => {
      if (event.button === 0) event.preventDefault()
    })
    shell.addEventListener('click', (event) => launch(event))
    shell.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        launch()
      }
    })
    shell.classList.add('is-arming')

    const motion = matchMedia('(prefers-reduced-motion: reduce)')
    const layer = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    layer.setAttribute('aria-hidden', 'true')
    layer.setAttribute('class', 'armor-attack-layer')
    shell.append(layer)
    const heatLayer = shell.querySelector('[data-armor-heat]')
    const hotSpots = []
    let heatFrame = null
    let heatTime = 0
    const cool = (now) => {
      const decay = Math.exp(-Math.max(0, now - heatTime) / 2400)
      heatTime = now
      for (let i = hotSpots.length - 1; i >= 0; i--) {
        const spot = hotSpots[i]
        spot.energy *= decay
        if (spot.energy < 0.025) { spot.circle.remove(); hotSpots.splice(i, 1); continue }
        const age = now - spot.hitAt
        const tremor = Math.sin(age / 65) * Math.exp(-age / 450) * 3
        spot.circle.setAttribute('r', 36 + Math.sqrt(spot.energy) * 34 + tremor)
        spot.circle.style.opacity = String(Math.min(0.8, spot.energy * 0.13))
      }
    }
    const animateHeat = (now) => {
      heatFrame = null
      cool(now)
      if (hotSpots.length) heatFrame = requestAnimationFrame(animateHeat)
    }
    const warm = (point) => {
      if (!heatLayer || motion.matches) return
      const now = performance.now()
      cool(now)
      let spot = hotSpots.reduce((nearest, candidate) => {
        const distance = Math.hypot(candidate.x - point.x, candidate.y - point.y)
        return distance < 85 && (!nearest || distance < Math.hypot(nearest.x - point.x, nearest.y - point.y)) ? candidate : nearest
      }, null)
      if (!spot) {
        if (hotSpots.length >= 12) {
          hotSpots.sort((a, b) => a.energy - b.energy)
          hotSpots.shift().circle.remove()
        }
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        circle.setAttribute('fill', 'url(#armor-heat-glow)')
        circle.setAttribute('cx', point.x)
        circle.setAttribute('cy', point.y)
        heatLayer.append(circle)
        spot = { x: point.x, y: point.y, energy: 0, circle }
        hotSpots.push(spot)
      }
      spot.energy = Math.min(8, spot.energy + 1)
      spot.hitAt = now
      cool(now)
      if (heatFrame === null) heatFrame = requestAnimationFrame(animateHeat)
    }
    let visible = false
    let idleTimer
    const projectiles = new Set()
    let lastBurst = -Infinity
    let hasAttacked = false
    const burstTimers = new Set()
    // Points on the visible shield boundary, in the field's local coordinates.
    const targets = [{ x: 29, y: 300 }, { x: 180, y: 87 }, { x: 540, y: 171 },
      { x: 851, y: 490 }, { x: 735, y: 721 }]
    const active = () => visible && !document.hidden && !motion.matches
    const shoot = (manual = false, click = null) => {
      if (!active() || (!manual && performance.now() - lastManualLaunch < 1500)) return
      hasAttacked = true
      const target = targets[Math.floor(Math.random() * targets.length)]
      const trace = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      trace.setAttribute('class', 'armor-attack-tracer')
      layer.append(trace)
      const projectile = { frame: null }
      projectiles.add(projectile)
      const finish = () => { trace.remove(); projectiles.delete(projectile) }
      const started = performance.now()
      const duration = 330
      let distance = 460
      const dartLength = 65
      const dx = target.x - 440, dy = target.y - 407
      const length = Math.hypot(dx, dy)
      let direction = { x: dx / length, y: dy / length }
      let clickScreen = null
      if (manual && click && Number.isFinite(click.clientX) && Number.isFinite(click.clientY)) {
        const fieldMatrix = field.getScreenCTM()
        const shellMatrix = shell.getScreenCTM()
        if (!fieldMatrix || !shellMatrix) { finish(); return }
        clickScreen = new DOMPoint(click.clientX, click.clientY)
        const end = clickScreen.matrixTransform(shellMatrix.inverse())
        const angle = Math.random() * Math.PI * 2
        // Start outside the shield silhouette, from a different direction each click.
        const origin = new DOMPoint(440 + Math.cos(angle) * 760, 407 + Math.sin(angle) * 760)
          .matrixTransform(fieldMatrix).matrixTransform(shellMatrix.inverse())
        distance = Math.hypot(origin.x - end.x, origin.y - end.y)
        direction = { x: (origin.x - end.x) / distance, y: (origin.y - end.y) / distance }
      }
      const tick = (now) => {
        if (!active()) { finish(); return }
        const fieldMatrix = field.getScreenCTM()
        const shellMatrix = shell.getScreenCTM()
        if (!fieldMatrix || !shellMatrix) { finish(); return }
        const endScreen = clickScreen || new DOMPoint(target.x, target.y).matrixTransform(fieldMatrix)
        const end = endScreen.matrixTransform(shellMatrix.inverse())
        const progress = Math.min(1, (now - started) / duration)
        const remaining = (1 - progress) * distance
        const tail = Math.min(remaining + dartLength, distance)
        trace.setAttribute('x1', end.x + direction.x * tail)
        trace.setAttribute('y1', end.y + direction.y * tail)
        trace.setAttribute('x2', end.x + direction.x * remaining)
        trace.setAttribute('y2', end.y + direction.y * remaining)
        trace.style.opacity = String(Math.min(1, progress * 6) * .7)
        if (progress < 1) projectile.frame = requestAnimationFrame(tick)
        else {
          finish()
          resist({ clientX: endScreen.x, clientY: endScreen.y })
        }
      }
      projectile.frame = requestAnimationFrame(tick)
    }
    const launch = (event) => {
      lastManualLaunch = performance.now()
      burstTimers.forEach(clearTimeout); burstTimers.clear()
      if (motion.matches) { resist(event); return }
      shoot(true, event)
    }
    const schedule = () => {
      clearTimeout(idleTimer)
      if (active()) idleTimer = setTimeout(() => { shoot(); schedule() }, hasAttacked ? 5000 + Math.random() * 3000 : 800)
    }
    const stop = () => {
      clearTimeout(idleTimer)
      burstTimers.forEach(clearTimeout); burstTimers.clear()
      projectiles.forEach(projectile => cancelAnimationFrame(projectile.frame))
      projectiles.clear(); layer.replaceChildren()
      if (heatFrame !== null) cancelAnimationFrame(heatFrame)
      heatFrame = null
      hotSpots.length = 0
      heatLayer?.replaceChildren()
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
