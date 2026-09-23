---
title: "Dotenvx · A secure dotenv–from the creator of dotenv"
social_title: "Dotenvx · A secure dotenv–from the creator of dotenv"
description: "A secure dotenv–from the creator of dotenv."
layout: radar
body_class: home-page
---

<style>
  @media (min-width: 640px) {
    /* Balance the wider Ericsson mark against Google at the opposite end. */
    .home-page .home-company-cloud > div { transform: translateX(-0.25rem); }
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

  .home-production-providers {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    margin-bottom: 1rem;
  }
  .home-production-provider {
    display: inline-flex;
    width: 2.25rem;
    height: 2.25rem;
    border: 1px solid var(--design-line, #d4d4d4);
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    color: #fff;
    background: #000;
  }
  .home-production-provider + .home-production-provider { margin-left: -0.5rem; }
  .home-production-provider--cloudflare { background: #f38020; }
  .home-production-provider--aws { background: #232f3e; }
  .home-production-provider-icon { width: 72%; height: 72%; margin: auto; }
  .home-custody .design-settings-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .home-custody div.design-settings-tile:hover { background: transparent; }
  .home-custody .design-settings-tile .docs-hero-icon {
    color: var(--design-ink) !important;
    width: 1.5rem;
    height: 1.5rem;
  }
  .home-custody .home-custody-1password .docs-hero-icon {
    width: 1.375rem;
    height: 1.375rem;
  }
  .home-agents .design-codeblock { white-space: pre-wrap; overflow-wrap: anywhere; }
  .home-agents .design-codeblock-wrap { margin-bottom: 1.25rem; }
</style>

<div class="home-sections">
{% include components/home-hero.html compact=true %}

{% include components/home-logo-cloud.html %}

{% include components/home-commands-plain.html %}

<section class="radar-section home-foundations" aria-labelledby="home-foundations-title">
  <div class="armor-shell">
    {% include components/design-page-title.html title="Design" heading_tag="h2" title_class="text-center" id="home-foundations-title" %}
    {% capture foundations_content %}
      {% include components/home-proof.html %}
    {% endcapture %}
    {% include components/design-content-width.html content=foundations_content %}
  </div>
</section>

<section class="radar-section" aria-labelledby="home-one-key-title">
  <div class="armor-shell">
    {% include components/keysee-viewer.html
      public_key="0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"
      framing_padding="0.18"
      render_mode="wire"
      spin_speed="1"
      class="relative h-28 w-28 mx-auto mb-4 min-h-0 overflow-hidden bg-transparent"
    %}
    {% include components/design-page-title.html title="One Private Key" heading_tag="h2" title_class="text-center" id="home-one-key-title" %}
    {% capture one_key_content %}
      <p class="design-paragraph">One private key unlocks all the secrets in an encrypted .env file. For development, it's default stored in your operating system's secret store, like macOS Keychain, Windows Credential Manager, and Linux Secret Service.</p>
      <p class="design-paragraph">Launch your app with dotenvx run to decrypt its secrets just in time and inject them into your development environment. The private key stays in your OS secret store, outside git.</p>
      {% capture one_key_run %}
$ dotenvx run -- node index.js
⟐ injected env (17) from .env
    {% endcapture %}
      {% include components/design-codeblock.html value=one_key_run copy_text="dotenvx run -- npm start" label="Example application startup with encrypted secrets" format="cli" %}
      <p class="design-paragraph text-center one-key-action">{% include components/design-link.html href="/docs/quickstart/" label="Try it for yourself →" %}</p>
    {% endcapture %}
    {% include components/design-content-width.html content=one_key_content %}
  </div>
</section>

<section class="radar-section home-production" aria-labelledby="home-production-title">
  <div class="armor-shell">
    {% include components/design-provider-stack.html %}
    {% include components/design-page-title.html title="Ready for Production" heading_tag="h2" title_class="text-center" id="home-production-title" %}
    {% capture production_content %}
      <p class="design-paragraph">Set DOTENV_PRIVATE_KEY where your app runs. That one key unlocks the secrets in its encrypted .env file—so you provision a single key for each environment instead of copying every secret into every deployment.</p>
      <p class="design-paragraph">Add it to your hosting platform's environment variables or CI secrets. Your encrypted .env travels with your code. The private key stays in your deployment settings, outside git.</p>
      <div class="one-key-artifact">
        {% include components/design-secrets-artifact-row.html secret=true key="DOTENV_PRIVATE_KEY" value="b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf" %}
      </div>
      <div class="one-key-artifact">
        {% include components/design-secrets-artifact-row.html secret=true key="DOTENV_FILE" value=".env.production" %}
      </div>

      {% capture production_run %}
$ dotenvx run -- npm start
⟐ injected env (21) from .env.production

> my-app@1.0.0 start
> node server.js

App listening on port 80
      {% endcapture %}
      {% include components/design-codeblock.html value=production_run copy_text="dotenvx run-- npm start" label="Example application startup with production secrets" format="cli" %}
      <p class="design-paragraph text-center one-key-action">{% include components/design-link.html href="/docs/quickstart/" label="Deploy with dotenvx →" %}</p>
    {% endcapture %}
    {% include components/design-content-width.html content=production_content %}
  </div>
</section>

<section class="radar-section home-custody" aria-labelledby="home-custody-title">
  <div class="armor-shell">
    {% include components/design-page-title.html title="Your Keys. Your Choice." heading_tag="h2" title_class="text-center" id="home-custody-title" %}
    {% capture custody_content %}
      <p class="design-paragraph">Your private keys unlock your secrets. Keep them safe, outside git, in a place you trust. Use your operating system's secret store, a password manager you already rely on, or Armor ⛨.</p>
      <p class="design-paragraph">The encrypted .env stays with your code. You decide who has custody of the keys.</p>
      <div class="design-settings-grid">
        {% include components/design-settings-tile.html label="Keychain" icon="apple" %}
        {% include components/design-settings-tile.html label="Windows" icon="windows" title="Windows Credential Manager" %}
        {% include components/design-settings-tile.html label="Linux" icon="linux" title="Linux Secret Service" %}
        {% include components/design-settings-tile.html label="1Password" icon="1password" class="home-custody-1password" %}
        {% include components/design-settings-tile.html label="Bitwarden" icon="bitwarden" %}
        {% include components/design-settings-tile.html href="/armor" label="Armor" glyph="⛨" glyph_class="design-settings-tile-glyph--soft" %}
      </div>
    {% endcapture %}
    {% include components/design-content-width.html content=custody_content %}
  </div>
</section>

{% comment %}
Ready for Agents: restore this section when the proxy is ready to launch.
<section class="radar-section home-agents" aria-labelledby="home-agents-title">
  <div class="armor-shell">
    {% include components/design-page-title.html title="Ready for Agents" heading_tag="h2" title_class="text-center" id="home-agents-title" %}
    {% capture agents_content %}
      <p class="design-paragraph">Let agents use your APIs without handing them your API keys. Dotenvx gives your agent and its tools placeholders for the secrets you proxy. The real credentials stay outside the agent’s environment.</p>
      <p class="design-paragraph">Define where each secret can be used in an Envfile. When your agent makes an API call, the proxy replaces its placeholder in supported authentication headers—only for the domain you allow. Your encrypted .env still travels with your code.</p>
      {% capture agents_envfile %}
# Envfile
env "STRIPE_SECRET_KEY", proxy: { domain: "api.stripe.com" }
env "OPENAI_API_KEY", proxy: { domain: "api.openai.com" }
      {% endcapture %}
      {% include components/design-codeblock.html value=agents_envfile label="Envfile rules for proxied API credentials" language="ruby" %}
      <p class="design-paragraph">Start your agent with dotenvx run. It can call the APIs it needs while the proxy handles the credentials.</p>
      {% capture agents_run %}
$ dotenvx run -- claude
      {% endcapture %}
      {% include components/design-codeblock.html value=agents_run copy_text="dotenvx run -- claude" label="Run an agent with proxied API credentials" format="cli" %}
    {% endcapture %}
    {% include components/design-content-width.html content=agents_content %}
  </div>
</section>
{% endcomment %}

<section class="radar-section home-ending" id="install" aria-label="Next step">
  <div class="armor-shell">
    <div class="home-cta">
      {% capture closing_copy %}
      <p class="design-paragraph text-center">Once your secrets are in an encrypted git workflow, you'll wonder why you waited so long. It feels so good and unlocks so much.</p>
      {% endcapture %}
      {% include components/design-content-width.html content=closing_copy %}
      {% include components/design-btn.html label="Quickstart" href="/docs/quickstart/" data_umami_event="Homepage Closing Quickstart button" %}
    </div>
  </div>
</section>
</div>

<script src="{{ "/assets/js/secrets-artifact.js" | relative_url }}" defer></script>
