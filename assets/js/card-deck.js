(() => {
class CardDeck {
  constructor(root) {
    this.root = root
    this.cards = [...root.querySelectorAll('.design-card-deck-stage > .design-card')]
    this.buttons = [...root.querySelectorAll('[data-deck-step]')]
    this.next = root.querySelector('[data-deck-next]')
    this.index = 0
    this.busy = false
    this.click = e => {
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
      card.inert = slot !== 0
      card.setAttribute('aria-hidden', String(slot !== 0))
    })
    this.buttons.forEach((button,i) => button.setAttribute('aria-pressed', String(i === this.index)))
    if (this.next) this.next.textContent = 'Next: ' + this.buttons[(this.index + 1) % this.cards.length].textContent + ' →'
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
