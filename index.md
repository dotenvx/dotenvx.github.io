---
title: "Dotenvx"
layout: radar
---

<style>
  .home-hero-code {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: inherit;
    width: 100%;
  }

  .home-hero-code-copy {
    align-items: center;
    background: transparent;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    font: inherit;
    justify-content: center;
    padding: 0;
  }

  .home-hero-code-copy:hover .design-code,
  .home-hero-code-copy:focus-visible .design-code {
    color: var(--design-ink) !important;
    outline: none;
  }

  .home-hero-code-copy:focus-visible {
    outline: none;
  }

  @media (min-width: 900px) {
    .home-hero-code {
      height: 100%;
      min-height: inherit;
    }
  }

  /* Centered install choice — same arresting layout as /armor */
  .home-install-choice {
    width: 100%;
  }

  .home-install-choice .design-choice-current {
    min-height: 6.5rem;
    padding: 1.25rem 1.35rem;
  }

  .home-install-choice .design-btn[hidden],
  .home-install-choice [hidden] {
    display: none !important;
  }

  .home-install-you {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .home-install-code-copy {
    align-items: center;
    background: transparent;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    font: inherit;
    justify-content: center;
    padding: 0;
  }

  .home-install-code-copy:hover .design-code,
  .home-install-code-copy:focus-visible .design-code {
    color: var(--design-ink) !important;
    outline: none;
  }

  .home-install-code-copy:focus-visible {
    outline: none;
  }

  @media (max-width: 480px) {
    .home-hero-desc-line2 {
      display: block;
    }
  }
</style>

{% capture home_hero_eyebrow %}
  From the creator of
  <a href="https://github.com/motdotla/dotenv" target="_blank" rel="noopener noreferrer">
    <span>dotenv</span>
    <span aria-hidden="true">★</span>
    <span>20.5k</span>
  </a>
{% endcapture %}

{% capture home_hero_description %}
Designed as a secure dotenv. <span class="home-hero-desc-line2">You can encrypt your .env files–and more.</span>
{% endcapture %}

{% capture home_hero_visual %}
  <div class="home-hero-code">
    <button type="button" class="home-hero-code-copy" id="home-hero-encrypt" aria-label="Copy dotenvx encrypt">
      {% include components/design-code.html value="$ dotenvx encrypt" %}
    </button>
  </div>
{% endcapture %}

{% include components/design-hero.html
  class="home-design-hero"
  eyebrow=home_hero_eyebrow
  title="Dotenvx"
  description=home_hero_description
  visual=home_hero_visual
%}

{% include components/home-install.html %}

{% include components/home-workflow.html %}

{% include components/home-proof.html %}

{% include components/home-trust.html %}

{% include components/home-features.html %}

<section class="radar-section" aria-label="Next step">
  <div class="armor-shell">
    <div class="home-cta">
      {% include components/design-cta-message.html
        text="Once your secrets are in an encrypted git workflow, you'll wonder why you waited so long. It just feels so good."
      %}
      {% include components/design-btn.html
        label="Get Started ›"
        href="/docs"
      %}
    </div>
  </div>
</section>

<script>
(function () {
  var encryptText = 'dotenvx encrypt'
  var copyTimeouts = new WeakMap()

  function ready(fn) {
    if (document.readyState !== 'loading') fn()
    else document.addEventListener('DOMContentLoaded', fn)
  }

  function copyText(text, onDone) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(onDone)
      return
    }
    var textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    onDone()
  }

  function scheduleReset(target, reset) {
    var prevTimeout = copyTimeouts.get(target)
    if (prevTimeout) clearTimeout(prevTimeout)
    copyTimeouts.set(target, setTimeout(function () {
      copyTimeouts.delete(target)
      reset()
    }, 1100))
  }

  function flashCode(button, nextLabel) {
    var code = button.querySelector('code')
    if (!code) return
    if (!button.dataset.copyLabel) button.dataset.copyLabel = code.textContent
    code.textContent = nextLabel
    scheduleReset(button, function () {
      code.textContent = button.dataset.copyLabel
    })
  }

  ready(function () {
    var encryptBtn = document.getElementById('home-hero-encrypt')
    if (!encryptBtn) return
    encryptBtn.addEventListener('click', function () {
      copyText(encryptText, function () {
        flashCode(encryptBtn, 'copied')
      })
    })
  })
})()
</script>
