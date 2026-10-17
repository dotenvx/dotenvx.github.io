(() => {
  // Capture focus so dynamically inserted drawer fields are handled too.
  const revealAndSelect = event => {
    if (event.target.matches('[data-secret-example-value]')) {
      event.target.type = 'text'
    }
    if (event.target.matches('.design-secret-field')) event.target.select()
  }
  document.addEventListener('focus', revealAndSelect, true)
  document.addEventListener('click', event => {
    // A masked field may already have focus when drawer content is inserted.
    if (event.target.matches('[data-secret-example-value]') && event.target.type === 'password') {
      revealAndSelect(event)
    }
  })
  document.addEventListener('blur', event => {
    if (event.target.matches('[data-secret-example-value]')) event.target.type = 'password'
  }, true)
})()
