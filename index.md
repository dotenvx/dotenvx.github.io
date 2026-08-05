---
title: "Dotenvx"
layout: radar
---

<style>
  /* Sparse ascii visual — don't inherit the 17rem/23rem hero media slot */
  .home-design-hero .design-hero-visual {
    min-height: 8.5rem;
  }

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
    .home-design-hero .design-hero-visual {
      min-height: 23rem;
    }

    .home-hero-code {
      height: 100%;
      min-height: inherit;
    }
  }

  .home-install-choice {
    width: 100%;
  }

  .home-install-choice .design-choice-current {
    min-height: 6.5rem;
    padding: 1.25rem 1.35rem;
  }

  .home-install-copy {
    align-items: center;
    background: transparent;
    border: 0;
    color: var(--design-ink);
    cursor: pointer;
    display: flex;
    font: inherit;
    justify-content: center;
    padding: 0;
    text-align: center;
    width: 100%;
  }

  .home-install-copy[hidden] {
    display: none !important;
  }

  .home-install-copy:hover,
  .home-install-copy:focus-visible {
    color: var(--design-gold);
    outline: none;
  }

  .home-install-prompt-btn[hidden] {
    display: none !important;
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
  description="Designed as a secure dotenv. You can encrypt your .env files–and more."
  visual=home_hero_visual
%}

<section class="radar-section" aria-label="Install dotenvx">
  <div class="armor-shell">
    {% capture home_choice_current %}
      <button type="button" class="home-install-copy" id="hero-panel-you">
        {% include components/design-code.html value="$ curl -sfS https://dotenvx.sh | sh" %}
      </button>
      {% include components/design-btn.html
        label="Copy Prompt"
        id="hero-panel-agent"
        class="home-install-prompt-btn"
        hidden=true
      %}
    {% endcapture %}
    {% capture home_choice_options %}
      {% include components/design-choice-option.html
        label="For you"
        selected=true
        value="you"
      %}
      {% include components/design-choice-option.html
        label="For your agent"
        value="agent"
      %}
    {% endcapture %}
    {% include components/design-choice.html
      count=2
      aria_label="Audience"
      current=home_choice_current
      options=home_choice_options
      class="home-install-choice"
    %}
  </div>
</section>

<section class="radar-section" aria-label="Next step">
  <div class="armor-shell">
    {% include components/design-cta-message.html
      text="Once your secrets are in an encrypted git workflow, you'll wonder why you waited so long. It just feels so good."
    %}
  </div>
</section>

<script>
(function () {
  var encryptText = 'dotenvx encrypt'
  var youText = 'curl -sfS https://dotenvx.sh | sh'
  var agentText = 'Install dotenvx (curl -sfS https://dotenvx.sh | sh), encrypt this project\'s .env with dotenvx encrypt, keep .env.keys out of git, and run the app with dotenvx run -- your-command.'
  var tab = 'you'
  var copyTimeout

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

  function flashCode(button, nextLabel) {
    var code = button.querySelector('code')
    if (!code) return
    var prev = code.textContent
    code.textContent = nextLabel
    clearTimeout(copyTimeout)
    copyTimeout = setTimeout(function () {
      code.textContent = prev
    }, 1100)
  }

  ready(function () {
    var encryptBtn = document.getElementById('home-hero-encrypt')
    var choice = document.querySelector('.home-install-choice')
    var options = choice ? choice.querySelectorAll('.design-choice-option') : []
    var panelYou = document.getElementById('hero-panel-you')
    var panelAgent = document.getElementById('hero-panel-agent')

    if (encryptBtn) {
      encryptBtn.addEventListener('click', function () {
        copyText(encryptText, function () {
          flashCode(encryptBtn, 'copied')
        })
      })
    }

    if (!choice || !options.length || !panelYou || !panelAgent) return

    function show(next) {
      tab = next
      options.forEach(function (option) {
        option.setAttribute('aria-pressed', option.getAttribute('data-choice-value') === tab ? 'true' : 'false')
      })
      panelYou.hidden = tab !== 'you'
      panelAgent.hidden = tab !== 'agent'
      panelAgent.textContent = 'Copy Prompt'
    }

    options.forEach(function (option) {
      option.addEventListener('click', function () {
        show(option.getAttribute('data-choice-value') || 'you')
      })
    })

    panelYou.addEventListener('click', function () {
      copyText(youText, function () {
        flashCode(panelYou, 'copied')
      })
    })

    panelAgent.addEventListener('click', function () {
      copyText(agentText, function () {
        panelAgent.textContent = 'Copied'
        clearTimeout(copyTimeout)
        copyTimeout = setTimeout(function () {
          panelAgent.textContent = 'Copy Prompt'
        }, 1100)
      })
    })
  })
})()
</script>
