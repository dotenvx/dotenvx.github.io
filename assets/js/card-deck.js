(() => {
class CardDeck {
  constructor(root) {
    this.root = root
    this.cards = [...root.querySelectorAll('.design-card-deck-stage > .design-card')]
    this.buttons = [...root.querySelectorAll('[data-deck-step]')]
    this.next = root.querySelector('[data-deck-next]')
    this.expanded = false
    this.expand = root.querySelector('[data-deck-expand]')
    this.index = 0
    this.busy = false
    this.click = e => {
      if (e.target.closest('[data-deck-expand]')) { this.toggleExpanded(); return }
      if (this.expanded) return
      const step = e.target.closest('[data-deck-step]')
      if (step) this.go(Number(step.dataset.deckStep))
      if (e.target.closest('[data-deck-next]')) this.go((this.index + 1) % this.cards.length)
      const card = e.target.closest('.design-card-deck-stage > .design-card')
      if (card !== this.cards[this.index]) return
      if (e.target.closest('button, a, input, textarea, select, [contenteditable="true"]')) return
      if (window.getSelection()?.toString()) return
      this.go((this.index + 1) % this.cards.length)
    }
    root.addEventListener('click', this.click)
    root.classList.add('is-ready')
    this.paint()
  }
  paint() {
    this.cards.forEach((card, i) => {
      const slot = (i - this.index + this.cards.length) % this.cards.length
      card.dataset.slot = slot
      card.inert = !this.expanded && slot !== 0
      card.setAttribute('aria-hidden', String(!this.expanded && slot !== 0))
    })
    this.buttons.forEach((button,i) => button.setAttribute('aria-pressed', String(i === this.index)))
    if (this.next) this.next.textContent = 'Next: ' + this.buttons[(this.index + 1) % this.cards.length].textContent + ' →'
  }
  toggleExpanded() {
    if (this.busy) return
    this.cards.forEach(card => card.getAnimations().forEach(animation => animation.cancel()))
    const before = this.cards.map(card => card.getBoundingClientRect())
    this.expanded = !this.expanded
    this.root.classList.toggle('is-expanded', this.expanded)
    this.expand.setAttribute('aria-expanded', String(this.expanded))
    const label = this.expanded ? 'Collapse to card stack' : 'Show all three steps'
    this.expand.setAttribute('aria-label', label)
    this.expand.title = label
    this.paint()
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    this.cards.forEach((card, i) => {
      const after = card.getBoundingClientRect()
      const target = getComputedStyle(card).transform
      card.animate([
        { transform: `translate(${before[i].left - after.left}px, ${before[i].top - after.top}px) scale(${before[i].width / after.width}, ${before[i].height / after.height})` },
        { transform: target === 'none' ? 'none' : target }
      ], { duration: this.expanded ? 480 : 350, delay: this.expanded ? i * 45 : 0, fill: 'backwards', easing: 'cubic-bezier(.2,.85,.25,1.06)' })
    })
  }
  go(index) {
    if (this.busy || index === this.index) return
    this.busy = true
    const outgoing = this.cards[this.index]
    outgoing.classList.add('is-leaving')
    this.timer = setTimeout(() => {
      outgoing.classList.remove('is-leaving')
      this.index = index
      this.paint()
      this.busy = false
    }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 220)
  }
  destroy() { clearTimeout(this.timer); this.root.removeEventListener('click', this.click) }
}

document.querySelectorAll('[data-card-deck]').forEach(root => new CardDeck(root))
})()
