(() => {
  // Delegated focus events also handle fields loaded into side-path drawers.
  document.addEventListener('focusin', event => {
    if (event.target.matches('[data-secret-example-value]')) event.target.type = 'text'
  })
  document.addEventListener('focusout', event => {
    if (event.target.matches('[data-secret-example-value]')) event.target.type = 'password'
  })
})()
