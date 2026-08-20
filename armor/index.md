---
title: "Armor ⛨"
image: "/assets/img/og-image-armor.png"
layout: radar
---

<style>
  .armor-install-choice {
    width: 100%;
  }

  .armor-install-choice .design-choice-current {
    min-height: 6.5rem;
    padding: 1.25rem 1.35rem;
  }

  .armor-install-choice .design-btn[hidden],
  .armor-install-choice [hidden] {
    display: none !important;
  }

  .armor-you-actions {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    .armor-hero-desc-line2 {
      display: block;
    }
  }
</style>

{% capture armor_hero_description %}
Turn your keys into Armored Keys ⛨. <span class="armor-hero-desc-line2">Move them off device–and more.</span>
{% endcapture %}

<div class="armor-page">
  {% include components/design-hero.html
    class="home-design-hero"
    eyebrow="For security teams"
    title="ARMOR⛨"
    description=armor_hero_description
    public_key="025ba50c55b823bcb7841fe43643fe827ef74c183b2544040943aa5856c7c39646"
    keysee_render_mode="solid"
  %}

  <section class="radar-section" aria-label="Get started with Armor">
    <div class="armor-shell">
      {% capture armor_choice_current %}
        <div id="armor-panel-you" class="armor-you-actions">
          {% include components/design-btn.html
            label="Sign Up Free"
            href="/signup"
            class="design-btn--trial"
          %}
          {% include components/design-btn.html
            label="See Pricing"
            href="/pricing"
          %}
        </div>
        {% include components/design-btn.html
          label="Copy Prompt"
          id="armor-panel-agent"
          class="armor-install-prompt-btn"
          hidden=true
        %}
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
        aria_label="Sign up"
        current=armor_choice_current
        options=armor_choice_options
        class="armor-install-choice"
      %}
    </div>
  </section>

  {% include components/home-features.html data="armor_features" %}

  {% include components/armor-in-use.html %}

  {% include components/armor-usage.html url="https://armor.dotenvx.com/public/usage" %}

  {% include components/faq-yes.html %}

  <section class="radar-section" aria-label="Next step">
    <div class="armor-shell">
      <div class="home-cta">
        {% include components/design-cta-message.html
          text="Once the private key isn't on the machine, encrypted .env finally feels finished. That's Armor."
        %}
        {% include components/design-btn.html
          label="Sign Up Free ›"
          href="https://armor.dotenvx.com/signup"
        %}
      </div>
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
  var agentText = 'Sign up for Dotenvx Armor and complete the full flow.\n\n1. Run `dotenvx login`.\n2. Open the authentication UI and let me choose the sign-in provider and complete authentication. Do not ask which provider I selected. Monitor the waiting CLI process and continue automatically once it reports a successful login.\n3. Run `dotenvx set HELLO "World" -f .env` to create an encrypted `.env` with a local private key.\n4. Run `dotenvx armor up -f .env` to move the private key off-device into Armor.\n5. Confirm the local `.env.keys` private key was removed without displaying any private keys, device keys, tokens, or credentials.\n6. Run `dotenvx armor open -f .env` and leave the resulting Armor page open for me to view.\n7. Run `dotenvx get HELLO -f .env` and confirm it returns `World`, proving Armor can retrieve the off-device private key and decrypt the value.\n\nOnly pause when the authentication UI requires action from me; afterward, detect success from the waiting CLI and continue automatically.'
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
    if (!choice || !options.length || !panelYou || !panelAgent) return

    function show(next) {
      options.forEach(function (option) {
        option.setAttribute('aria-pressed', option.getAttribute('data-choice-value') === next ? 'true' : 'false')
      })
      panelYou.hidden = next !== 'you'
      panelAgent.hidden = next !== 'agent'
      panelAgent.textContent = 'Copy Prompt'
    }

    options.forEach(function (option) {
      option.addEventListener('click', function () {
        show(option.getAttribute('data-choice-value') || 'you')
      })
    })

    panelAgent.addEventListener('click', function (event) {
      event.preventDefault()
      copyText(agentText, function () {
        panelAgent.textContent = 'Copied'
        clearTimeout(copyTimeout)
        copyTimeout = setTimeout(function () {
          panelAgent.textContent = 'Copy Prompt'
        }, 1100)
      })
    })

    var usageScript = document.createElement('script')
    usageScript.src = '/assets/js/armor-usage.js'
    document.body.appendChild(usageScript)
  })
})()
</script>
