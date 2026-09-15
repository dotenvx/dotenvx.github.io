---
title: "Dotenvx"
social_title: "Dotenvx"
description: "Encrypted secrets that travel with your code—from the creator of dotenv."
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

</style>

<div class="home-sections">
{% include components/home-hero2.html compact=true %}

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
      <p class="design-paragraph">One private key unlocks all the secrets in an encrypted .env file. Default stored in your operating system's secret store—macOS Keychain, Windows Credential Manager, or Linux Secret Service—the key is retrieved by dotenvx when your app runs.</p>
      <p class="design-paragraph">Your encrypted .env travels with your code. Launch your app with dotenvx run to decrypt its secrets just in time and inject them into the app’s environment. The private key stays in your OS secret store, outside your project and Git.</p>
      {% capture one_key_run %}
$ dotenvx run -- npm start
⟐ injected env (2) from .env

> my-app@1.0.0 start
> node server.js

App listening on port 3000

    {% endcapture %}
      {% include components/design-codeblock.html value=one_key_run copy_text="dotenvx run -- npm start" label="Example application startup with encrypted secrets" %}
      <p class="design-paragraph text-center one-key-action">{% include components/design-link.html href="/docs/quickstart/encryption/" label="Try it for yourself →" %}</p>
    {% endcapture %}
    {% include components/design-content-width.html content=one_key_content %}
  </div>
</section>

<section class="radar-section home-ending" id="install" aria-label="Next step">
  <div class="armor-shell">
    <div class="home-cta">
      {% capture closing_copy %}
      <p class="design-paragraph text-center">Once your secrets are in an encrypted git workflow, you'll wonder why you waited so long. It feels so good and unlocks so much.</p>
      {% endcapture %}
      {% include components/design-content-width.html content=closing_copy %}
      {% include components/design-btn.html label="Install" href="/install" data_umami_event="Homepage Closing Install button" %}
    </div>
  </div>
</section>
</div>

<script src="{{ "/assets/js/secrets-artifact.js" | relative_url }}" defer></script>
