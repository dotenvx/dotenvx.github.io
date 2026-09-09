(() => {

const SLOTS = { left: { x: 0, y: -255.06152584 }, right: { x: 207.8460969, y: -375.06152584 } }

class ContainerStack {
  constructor (element) {
    this.element = element
    this.containerTarget = element.querySelector('.design-container-draggable')
    for (const [event, method] of Object.entries({ pointerdown: 'start', pointermove: 'move', pointerup: 'finish', pointercancel: 'cancel', lostpointercapture: 'cancel', keydown: 'key' })) {
      this.containerTarget.addEventListener(event, this[method].bind(this))
    }
    this.connect()
  }

  connect () {
    this.slot = 'right'
    this.drag = null
    this.place(this.slot)
  }

  point (event) {
    const matrix = this.element.getScreenCTM()
    if (!matrix) return null
    return new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse())
  }

  start (event) {
    if (this.drag || !event.isPrimary || event.button !== 0) return
    const point = this.point(event)
    if (!point) return
    event.preventDefault()
    this.containerTarget.focus({ preventScroll: true })
    this.drag = { id: event.pointerId, point, origin: SLOTS[this.slot], current: SLOTS[this.slot] }
    this.containerTarget.classList.add('is-dragging')
    this.containerTarget.setPointerCapture(event.pointerId)
  }

  move (event) {
    if (!this.drag || event.pointerId !== this.drag.id) return
    const point = this.point(event)
    if (!point) return
    this.drag.current = {
      x: this.drag.origin.x + point.x - this.drag.point.x,
      y: this.drag.origin.y + point.y - this.drag.point.y
    }
    this.position(this.drag.current)
  }

  finish (event) {
    if (!this.drag || event.pointerId !== this.drag.id) return
    const position = this.drag.current
    const distance = (slot) => Math.hypot(position.x - SLOTS[slot].x, position.y - SLOTS[slot].y)
    this.release(distance('left') < distance('right') ? 'left' : 'right')
  }

  cancel (event) {
    if (this.drag && event.pointerId === this.drag.id) this.release(this.slot)
  }

  release (slot) {
    const pointerId = this.drag?.id
    this.drag = null
    this.containerTarget.classList.remove('is-dragging')
    if (pointerId !== undefined && this.containerTarget.hasPointerCapture(pointerId)) {
      this.containerTarget.releasePointerCapture(pointerId)
    }
    this.place(slot)
  }

  key (event) {
    if (event.key === 'Escape' && this.drag) {
      event.preventDefault()
      this.release(this.slot)
    } else if (['ArrowLeft', 'ArrowRight', 'Enter', ' '].includes(event.key)) {
      event.preventDefault()
      const slot = event.key === 'ArrowLeft' ? 'left' : event.key === 'ArrowRight' ? 'right' : this.slot === 'left' ? 'right' : 'left'
      this.release(slot)
    }
  }

  position ({ x, y }) {
    this.containerTarget.style.transform = `translate(${x}px, ${y}px)`
  }

  place (slot) {
    this.slot = slot
    this.position(SLOTS[slot])
    this.containerTarget.dataset.position = slot
    this.containerTarget.setAttribute('aria-label', `Black Dotenvx container, top ${slot}. Drag to move, or use left and right arrow keys.`)
  }
}

document.querySelectorAll('[data-container-stack]').forEach(element => new ContainerStack(element))
})()
