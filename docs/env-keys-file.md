---
title: ".env.keys"
description: ".env.keys holds your private decryption keys."
permalink: /docs/env-keys-file/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title=".env.keys"
  description=".env.keys holds your private decryption keys."
  mark=".env.keys"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Format</h2>

    {% capture env_keys_example %}
#/------------------!DOTENV_PRIVATE_KEYS!-------------------/
#/ private decryption keys. DO NOT commit to source control /
#/     [how it works](https://dotenvx.com/encryption)       /
#/----------------------------------------------------------/

# .env
DOTENV_PRIVATE_KEY="ccc387ba193a315cbcd1ad7d8d007e6124763894554418e7c90b7dbcd7edca23"

# .env.production
DOTENV_PRIVATE_KEY_PRODUCTION="d4d2e22102c58f741cdddacaf69a1a64751fc014aafb90de0f1e7e6cb4d08330"
    {% endcapture %}
    {% include components/design-codeblock.html value=env_keys_example copy=false %}

    <p class="design-paragraph">Some quick takeaways:</p>
    <ul class="design-bullets">
      <li>It uses the <a class="design-link" href="/docs/env-file">.env</a> format</li>
      <li><code class="design-code">DOTENV_PRIVATE_KEY</code> contains the decryption key for <code class="design-code">.env</code></li>
      <li><code class="design-code">DOTENV_PRIVATE_KEY_PRODUCTION</code> contains the decryption key for <code class="design-code">.env.production</code></li>
    </ul>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Encryption</h2>
    <p class="design-paragraph"><a class="design-link" href="https://en.bitcoin.it/wiki/Secp256k1">secp256k1</a> is the public-key encryption algorithm used to generate the public/private key pair.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Generating</h2>
    <p class="design-paragraph">It's auto-generated when running <a class="design-link" href="/docs/cli/set"><code class="design-code">dotenvx set KEY value</code></a>.</p>

    {% capture env_keys_set %}
$ dotenvx set HELLO World
    {% endcapture %}
    {% include components/design-codeblock.html value=env_keys_set copy_text="dotenvx set HELLO World" %}

    <p class="design-paragraph">Do not commit <code class="design-code">.env.keys</code> to source code. Keep them somewhere safe like 1Password or <a class="design-link" href="/armor">Armor ⛨</a>.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">History</h2>
    <p class="design-paragraph">The <code class="design-code">.env.keys</code> file originally came out of development work on <a class="design-link" href="https://github.com/dotenv-org/dotenv-vault">dotenv-vault</a> in early 2023. Its current format came out during <a class="design-link" href="https://github.com/dotenvx/dotenvx/issues/189">an effort in May 2024</a> to support encryption without the ability to decrypt.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
