---
title: Encryption
description: Add encryption to your .env files with a single command. Use dotenvx encrypt.
permalink: /docs/quickstart/encryption/
layout: radar
redirect_from:
  - /docs/quickstarts/encryption
  - /docs/quickstarts/encryption/
---

{% capture encrypt_hero_file %}
# .env
STRIPE_API_KEY="encrypted:dfjkdfjd"
TWILIO_API_KEY="encrypted:a1b2c3d4"
{% endcapture %}
{% assign encrypt_hero_copy = "STRIPE_API_KEY=\"encrypted:dfjkdfjd\"
TWILIO_API_KEY=\"encrypted:a1b2c3d4\"" %}

{% capture encrypt_hero_visual %}
  <div class="docs-env-hero-example">
    {% include components/design-codeblock.html value=encrypt_hero_file copy_text=encrypt_hero_copy %}
  </div>
{% endcapture %}

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Encryption"
  description="Add encryption to your .env files with a single command. Use dotenvx encrypt."
  visual=encrypt_hero_visual
  video="https://github.com/user-attachments/assets/48f1ef52-073f-4f91-b1ea-6390795c860d"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">1. Encrypt</h2>
    <p class="design-paragraph">Encrypt your <code class="design-code">.env</code> file.</p>
    {% capture encrypt_cmd %}
$ dotenvx encrypt
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_cmd copy_text="dotenvx encrypt" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">2. Encrypted .env</h2>
    <p class="design-paragraph">Your public encryption key <code class="design-code">DOTENV_PUBLIC_KEY</code> lands at the top of <code class="design-code">.env</code> so anyone on your team can encrypt secrets.</p>
    {% capture encrypt_env %}
# .env
DOTENV_PUBLIC_KEY="037cfbfc90234cfdab7eb54050566293789efaa1a35dc420749662db400dc9c4b2"

HELLO="encrypted:BAZb6wDPFaFeFzq8Ut48oiNFSPtYvJmv4AwVDFVcNKiIcGxrxuRIFGWxZ3xVjxOgOo6w65bWFTpAfbatSz52+VvwDYZ3nFUO828nzovH5ZhsIoxPuPb7K0ZphmNynR7Hxci4a+fB"
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_env copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">3. Private key</h2>
    <p class="design-paragraph">Your private decryption key lives in <code class="design-code">.env.keys</code>. Do not commit it — only holders of this key can decrypt secrets.</p>
    {% capture encrypt_keys %}
# .env.keys
DOTENV_PRIVATE_KEY="81dac4d2c42e67a2c6542d3b943a4674a05c4be5e7e5a40a689be7a3bd49a07e"
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_keys copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">4. Run locally</h2>
    <p class="design-paragraph">In development, <code class="design-code">dotenvx run</code> reads <code class="design-code">.env.keys</code> to decrypt and inject secrets at runtime.</p>
    {% capture encrypt_dev %}
$ dotenvx run -- node index.js
⟐ injected env (2) from .env
Hello World
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_dev copy_text="dotenvx run -- node index.js" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">5. Run in production</h2>
    <p class="design-paragraph">Do not ship <code class="design-code">.env.keys</code>. Set <code class="design-code">DOTENV_PRIVATE_KEY</code> in the environment instead — dotenvx decrypts and injects at runtime.</p>
    {% capture encrypt_prod %}
$ DOTENV_PRIVATE_KEY="…" dotenvx run -- node index.js
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_prod copy=false %}
    <p class="design-paragraph">No more scattering secrets across third-party platforms where they <a class="design-link" href="https://techcrunch.com/2023/01/05/circleci-breach/">could leak</a>.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    {% capture encrypt_related_items %}
      <li>
        <a class="design-link" href="/docs/cli/lock/">Lock</a>
        <span class="design-list-meta">password-protect your private key</span>
      </li>
      <li>
        <a class="design-link" href="/docs/cli/native/">Native</a>
        <span class="design-list-meta">store the key in your OS keychain</span>
      </li>
      <li>
        <a class="design-link" href="/docs/cli/armor/introduction/">Armor</a>
        <span class="design-list-meta">managed private keys</span>
      </li>
    {% endcapture %}
    {% include components/design-list.html
      title="Related"
      items=encrypt_related_items
    %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
