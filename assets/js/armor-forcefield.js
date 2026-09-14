(() => {
  document.querySelectorAll('[data-armor-forcefield]').forEach((shell) => {
    const resist = (event) => {
      shell.classList.remove('is-arming', 'is-repelling')
      const matrix = shell.querySelector('.armor-field').getScreenCTM()
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
    shell.addEventListener('click', resist)
    shell.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        resist()
      }
    })
    shell.classList.add('is-arming')
  })
})()
