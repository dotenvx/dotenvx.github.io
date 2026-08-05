---
title: "Dotenvx"
layout: radar
---

<style>
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

  .home-install-copy code,
  .home-install-copy-label {
    color: inherit;
    font-family: var(--design-font-mono);
    font-size: clamp(1rem, 2.4vw, 1.35rem);
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 1.35;
  }

  .home-install-copy:hover,
  .home-install-copy:focus-visible {
    color: var(--design-gold);
    outline: none;
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

{% include components/design-hero.html
  class="home-design-hero"
  eyebrow=home_hero_eyebrow
  title="Dotenvx"
  description="A secure dotenv–encrypt your .env files."
  public_key="025ba50c55b823bcb7841fe43643fe827ef74c183b2544040943aa5856c7c39646"
  keysee_render_mode="solid"
%}

<section class="radar-section" aria-label="Install dotenvx">
  <div class="armor-shell">
    {% capture home_choice_current %}
      <button type="button" class="home-install-copy" id="hero-panel-you">
        <code>curl -sfS https://dotenvx.sh | sh</code>
      </button>
      <button type="button" class="home-install-copy" id="hero-panel-agent" hidden>
        <span class="home-install-copy-label" id="hero-prompt-label">Copy Prompt</span>
      </button>
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

<script>
(function () {
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

  ready(function () {
    var choice = document.querySelector('.home-install-choice')
    var options = choice ? choice.querySelectorAll('.design-choice-option') : []
    var panelYou = document.getElementById('hero-panel-you')
    var panelAgent = document.getElementById('hero-panel-agent')
    var promptLabel = document.getElementById('hero-prompt-label')
    if (!choice || !options.length || !panelYou || !panelAgent) return

    function show(next) {
      tab = next
      options.forEach(function (option) {
        option.setAttribute('aria-pressed', option.getAttribute('data-choice-value') === tab ? 'true' : 'false')
      })
      panelYou.hidden = tab !== 'you'
      panelAgent.hidden = tab !== 'agent'
      promptLabel.textContent = 'Copy Prompt'
    }

    options.forEach(function (option) {
      option.addEventListener('click', function () {
        show(option.getAttribute('data-choice-value') || 'you')
      })
    })

    panelYou.addEventListener('click', function () {
      copyText(youText, function () {
        var code = panelYou.querySelector('code')
        var prev = code.textContent
        code.textContent = 'copied'
        clearTimeout(copyTimeout)
        copyTimeout = setTimeout(function () {
          code.textContent = prev
        }, 1100)
      })
    })

    panelAgent.addEventListener('click', function () {
      copyText(agentText, function () {
        promptLabel.textContent = 'Copied'
        clearTimeout(copyTimeout)
        copyTimeout = setTimeout(function () {
          promptLabel.textContent = 'Copy Prompt'
        }, 1100)
      })
    })
  })
})()
</script>
