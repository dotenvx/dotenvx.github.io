(() => {
  document.querySelectorAll('[data-container-slots]').forEach(svg => {
    const boxes = [...svg.querySelectorAll('.pricing-box')]
    const spacing = 550
    const height = 255.06152584
    let drag = null
    let depthTimer
    const state = () => new Map(boxes.map(box => [box, { column: Number(box.dataset.slot), level: Number(box.dataset.level || 0) }]))
    const coords = place => ({ x: place.column * spacing, y: -place.level * height })
    const point = event => {
      const matrix = svg.getScreenCTM()
      return matrix ? new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse()) : null
    }
    const position = (box, place) => { box.style.transform = `translate(${place.x}px, ${place.y}px)` }
    const members = (layout, column) => [...layout].filter(([, p]) => p.column === column).sort((a, b) => a[1].level - b[1].level)
    const settle = layout => {
      for (let column = 0; column < 3; column++) {
        members(layout, column).forEach(([box], level) => layout.set(box, { column, level }))
      }
    }
    const carried = (layout, box) => {
      const origin = layout.get(box)
      return members(layout, origin.column).filter(([, place]) => place.level >= origin.level).map(([item]) => item)
    }
    const without = (layout, box) => {
      const group = carried(layout, box)
      const remaining = new Map([...layout].filter(([item]) => !group.includes(item)))
      settle(remaining)
      return remaining
    }
    const targets = (layout, box) => {
      const remaining = without(layout, box)
      const result = []
      for (let column = 0; column < 3; column++) {
        result.push({ column, level: 0, mode: 'swap' })
        const count = members(remaining, column).length
        if (count) result.push({ column, level: count, mode: 'stack' })
      }
      return result
    }
    const plan = (layout, box, target) => {
      if (!target) return layout
      const origin = layout.get(box)
      const group = carried(layout, box)
      const next = without(layout, box)
      if (target.mode === 'swap') {
        if (target.column === origin.column) return layout
        const displaced = members(next, target.column)
        displaced.forEach(([item], index) => next.set(item, { column: origin.column, level: origin.level + index }))
        group.forEach((item, level) => next.set(item, { column: target.column, level }))
      } else {
        const base = members(next, target.column).length
        group.forEach((item, index) => next.set(item, { column: target.column, level: base + index }))
      }
      settle(next)
      return next
    }
    const hint = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    hint.setAttribute('d', 'M80 180L287.8461 60L804.307 358.1788V613.2404L596.4609 733.2404L80 435.0615Z')
    hint.setAttribute('class', 'pricing-drop-hint')
    hint.setAttribute('aria-hidden', 'true')
    hint.style.display = 'none'
    svg.prepend(hint)
    const arrange = layout => {
      boxes.forEach(box => {
        const place = layout.get(box)
        box.dataset.slot = String(place.column)
        box.dataset.level = String(place.level)
        position(box, coords(place))
        box.setAttribute('aria-label', `${box.dataset.label}, position ${place.column + 1}, level ${place.level + 1}. Drag to swap or stack; arrow keys move, up stacks, down unstacks.`)
      })
      clearTimeout(depthTimer)
      // DOM reordering interrupts CSS transitions, so restore depth after settling.
      depthTimer = setTimeout(() => {
        if (drag) return
        const focused = document.activeElement
        boxes.slice().sort((a, b) => layout.get(a).level - layout.get(b).level || layout.get(b).column - layout.get(a).column).forEach(box => svg.append(box))
        if (boxes.includes(focused)) focused.focus({ preventScroll: true })
      }, 720)
    }
    const preview = target => {
      drag.target = target
      const layout = plan(drag.layout, drag.box, target)
      boxes.filter(box => !drag.group.includes(box)).forEach(box => position(box, coords(layout.get(box))))
      hint.style.display = target ? '' : 'none'
      if (target) position(hint, coords(layout.get(drag.box)))
    }
    const release = cancelled => {
      if (!drag) return
      const { box, id, layout, target, group } = drag
      drag = null
      hint.style.display = 'none'
      group.forEach(item => item.classList.remove('is-dragging'))
      if (box.hasPointerCapture(id)) box.releasePointerCapture(id)
      arrange(cancelled ? layout : plan(layout, box, target))
      box.focus({ preventScroll: true })
    }
    boxes.forEach(box => {
      box.addEventListener('pointerdown', event => {
        if (drag || !event.isPrimary || event.button !== 0) return
        const start = point(event)
        if (!start) return
        event.preventDefault()
        clearTimeout(depthTimer)
        const layout = state()
        const group = carried(layout, box)
        drag = { box, group, id: event.pointerId, start, layout, origin: coords(layout.get(box)), target: null }
        group.forEach(item => {
          svg.append(item)
          item.classList.add('is-dragging')
        })
        box.focus({ preventScroll: true })
        box.setPointerCapture(event.pointerId)
      })
      box.addEventListener('pointermove', event => {
        if (!drag || drag.box !== box || drag.id !== event.pointerId) return
        const current = point(event)
        if (!current) return
        const moved = { x: drag.origin.x + current.x - drag.start.x, y: drag.origin.y + current.y - drag.start.y }
        drag.group.forEach(item => {
          const offset = coords(drag.layout.get(item))
          position(item, { x: moved.x + offset.x - drag.origin.x, y: moved.y + offset.y - drag.origin.y })
        })
        const distance = target => {
          const p = coords(target)
          return Math.hypot(moved.x - p.x, moved.y - p.y)
        }
        const nearest = targets(drag.layout, box).sort((a, b) => distance(a) - distance(b))[0]
        let target = distance(nearest) <= 320 ? nearest : null
        if (target && drag.target && distance(drag.target) <= 350 && distance(target) + 30 >= distance(drag.target)) target = drag.target
        // Avoid changing the layout on a click or while still at the original spot.
        if (Math.hypot(moved.x - drag.origin.x, moved.y - drag.origin.y) < 70) target = null
        preview(target)
      })
      box.addEventListener('pointerup', event => {
        if (drag?.box === box && drag.id === event.pointerId) release(false)
      })
      for (const type of ['pointercancel', 'lostpointercapture']) {
        box.addEventListener(type, event => {
          if (drag?.box === box && drag.id === event.pointerId) release(true)
        })
      }
      box.addEventListener('keydown', event => {
        if (event.key === 'Escape' && drag) { event.preventDefault(); release(true); return }
        if (drag || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', ' '].includes(event.key)) return
        event.preventDefault()
        const layout = state(), origin = layout.get(box)
        let target
        if (event.key === 'ArrowUp') {
          target = targets(layout, box).filter(t => t.mode === 'stack' && t.column !== origin.column)
            .sort((a, b) => Math.abs(a.column - origin.column) - Math.abs(b.column - origin.column))[0]
        } else if (event.key === 'ArrowDown') {
          target = targets(layout, box).find(t => t.mode === 'swap' && !members(layout, t.column).length)
        } else {
          const column = event.key === 'ArrowLeft' ? Math.max(0, origin.column - 1)
            : event.key === 'ArrowRight' ? Math.min(2, origin.column + 1) : (origin.column + 1) % 3
          if (column !== origin.column) target = { column, level: 0, mode: 'swap' }
        }
        if (target) { arrange(plan(layout, box, target)); box.focus({ preventScroll: true }) }
      })
    })
    window.addEventListener('blur', () => release(true))
    window.addEventListener('pagehide', () => release(true))
  })
})()
