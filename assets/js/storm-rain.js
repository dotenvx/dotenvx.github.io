(function () {

class StormRain {
  constructor (element) { this.element = element; this.connect() }
  connect () {
    this.ctx = this.element.getContext('2d')
    if (!this.ctx) return
    this.motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    this.sync = () => {
      cancelAnimationFrame(this.raf)
      this.raf = null
      if (!document.documentElement.classList.contains('storm') || document.hidden || this.motion.matches) {
        this.ctx.clearRect(0, 0, this.element.width, this.element.height)
        return
      }
      this.resize()
      this.last = null
      this.raf = requestAnimationFrame(this.frame)
    }
    this.onResize = () => {
      if (document.documentElement.classList.contains('storm')) this.resize()
    }
    this.frame = (time) => {
      this.raf = requestAnimationFrame(this.frame)
      if (this.last !== null && time - this.last < 30) return
      const dt = this.last === null ? 0 : Math.min((time - this.last) / 1000, 0.06)
      this.last = time
      const ctx = this.ctx
      ctx.clearRect(0, 0, this.width, this.height)
      const gust = 0.18 + Math.sin(time / 4300) * 0.06 + Math.sin(time / 1700) * 0.025
      for (const drop of this.drops) {
        drop.x += drop.speed * (gust + drop.drift) * dt
        drop.y += drop.speed * dt
        if (drop.y > this.height + 30 || drop.x > this.width + 30) {
          Object.assign(drop, this.drop(false))
        }
        const tailX = drop.x - drop.length * (gust + drop.drift)
        const tailY = drop.y - drop.length
        const fade = ctx.createLinearGradient(tailX, tailY, drop.x, drop.y)
        fade.addColorStop(0, 'rgba(174, 196, 210, 0)')
        fade.addColorStop(1, `rgba(174, 196, 210, ${drop.alpha})`)
        ctx.strokeStyle = fade
        ctx.lineWidth = drop.width
        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(drop.x, drop.y)
        ctx.stroke()
      }
    }
    window.addEventListener('radar:theme-change', this.sync)
    window.addEventListener('resize', this.onResize)
    document.addEventListener('visibilitychange', this.sync)
    this.motion.addEventListener('change', this.sync)
    this.sync()
  }

  resize () {
    const rect = this.element.parentElement.getBoundingClientRect()
    this.width = rect.width
    this.height = rect.height
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    this.element.width = Math.max(1, Math.round(this.width * dpr))
    this.element.height = Math.max(1, Math.round(this.height * dpr))
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const count = Math.min(360, Math.max(70, Math.round(this.width * this.height / 3300)))
    this.drops = Array.from({ length: count }, () => this.drop(true))
  }

  drop (initial) {
    const depth = Math.random() ** 2
    return {
      x: Math.random() * (this.width + this.height * 0.3) - this.height * 0.3,
      y: initial ? Math.random() * this.height : -30 - Math.random() * 100,
      speed: 480 + depth * 650 + Math.random() * 120,
      length: 8 + depth * 24,
      width: 0.5 + depth * 0.7,
      alpha: 0.13 + depth * 0.29,
      drift: (Math.random() - 0.5) * 0.05
    }
  }

  disconnect () {
    cancelAnimationFrame(this.raf)
    window.removeEventListener('radar:theme-change', this.sync)
    window.removeEventListener('resize', this.onResize)
    document.removeEventListener('visibilitychange', this.sync)
    this.motion?.removeEventListener('change', this.sync)
  }
}

const canvas = document.querySelector('[data-storm-rain]')
if (canvas) new StormRain(canvas)
})()
