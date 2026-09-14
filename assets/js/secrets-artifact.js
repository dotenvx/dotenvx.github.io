(() => {
  document.querySelectorAll('[data-secret-example-value]').forEach(field => {
    field.addEventListener('focus', () => { field.type = 'text' })
    field.addEventListener('blur', () => { field.type = 'password' })
  })
})()
