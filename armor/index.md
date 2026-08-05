---
title: "Armor ⛨"
image: "/assets/img/og-image-armor.png"
layout: radar
---

<style>
  .armor-design-hero .design-page-title {
    font-size: clamp(3.25rem, 8.5vw, 4.85rem);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1.02;
  }

  .armor-install-choice {
    width: 100%;
  }

  .armor-install-choice .design-choice-current {
    min-height: 6.5rem;
    padding: 1.25rem 1.35rem;
  }

  .armor-install-copy {
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

  .armor-install-copy[hidden] {
    display: none !important;
  }

  .armor-install-copy code,
  .armor-install-copy-label {
    color: inherit;
    font-family: var(--design-font-mono);
    font-size: clamp(1rem, 2.4vw, 1.35rem);
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 1.35;
  }

  .armor-install-copy:hover,
  .armor-install-copy:focus-visible {
    color: var(--design-gold);
    outline: none;
  }
</style>

<div class="armor-page">
  {% include components/design-hero.html
    class="armor-design-hero"
    eyebrow="For professional software teams"
    title="Armor ⛨"
    description="Move your private keys off device. And keep their secrets under guard."
    public_key="025ba50c55b823bcb7841fe43643fe827ef74c183b2544040943aa5856c7c39646"
    keysee_render_mode="solid"
  %}

  <section class="radar-section" aria-label="Get started with Armor">
    <div class="armor-shell">
      {% capture armor_choice_current %}
        <button type="button" class="armor-install-copy" id="armor-panel-you">
          <code>dotenvx armor up</code>
        </button>
        <button type="button" class="armor-install-copy" id="armor-panel-agent" hidden>
          <span class="armor-install-copy-label" id="armor-prompt-label">Copy Prompt</span>
        </button>
      {% endcapture %}
      {% capture armor_choice_options %}
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
        current=armor_choice_current
        options=armor_choice_options
        class="armor-install-choice"
      %}
    </div>
  </section>

  {% comment %}
  {% include components/armor/lightning.html %}
  {% include components/armor/hero.html %}
  {% include components/armor/keys.html %}
  {% include components/armor/grant.html %}
  {% include components/armor/cta.html %}
  {% endcomment %}
</div>

<script>
(function () {
  var youText = 'dotenvx armor up'
  var agentText = 'Log in to Dotenvx Armor with `dotenvx login`, generate a .env file that includes a private key, run `dotenvx armor up` to move that key off device under Armor, then run `dotenvx armor open` to open and view it.'
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
    var choice = document.querySelector('.armor-install-choice')
    var options = choice ? choice.querySelectorAll('.design-choice-option') : []
    var panelYou = document.getElementById('armor-panel-you')
    var panelAgent = document.getElementById('armor-panel-agent')
    var promptLabel = document.getElementById('armor-prompt-label')
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
