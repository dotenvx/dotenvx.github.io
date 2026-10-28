(function () {
  document.querySelectorAll('[data-newsletter-form]').forEach(function (form) {
    if (form.dataset.newsletterReady) return;
    form.dataset.newsletterReady = 'true';
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      var button = form.querySelector('button[type="submit"]');
      var status = form.querySelector('[data-newsletter-status]');
      if (button.disabled) return;
      button.disabled = true;
      button.textContent = 'Subscribing…';
      status.textContent = '';
      var controller = new AbortController();
      var timeout = setTimeout(function () { controller.abort(); }, 15000);
      try {
        var response = await fetch(form.action, {
          method: 'POST',
          credentials: 'omit',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
          signal: controller.signal
        });
        if (!response.ok) {
          if (response.status === 429) throw new Error('Please wait a few minutes before trying again.');
          throw new Error('We couldn’t subscribe you. Please check your email address and try again.');
        }
        status.textContent = 'Check your inbox to confirm your subscription.';
        form.reset();
        button.textContent = 'Email sent';
      } catch (error) {
        status.textContent = error.name === 'AbortError' || error instanceof TypeError
          ? 'Unable to connect. Please try again in a moment.' : error.message;
        button.disabled = false;
        button.textContent = 'Subscribe';
      } finally {
        clearTimeout(timeout);
      }
    });
  });
}());
