---
title: ".env.keys (old format deprecated)"
description: "(DEPRECATED) The .env.keys file contains holds environment DOTENV_KEYs"
permalink: /docs/env-keys-file-deprecated/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title=".env.keys (old format deprecated)"
  description="The .env.keys file holds environment DOTENV_KEYs."
  mark=".env.keys"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <p class="design-paragraph"><a class="design-link" href="/docs/deprecated">Deprecated</a> — The format detailed here has been DEPRECATED since May 2024. Please see <a class="design-link" href="/docs/env-keys-file">updated .env.keys file format</a>.</p>

    <p class="design-paragraph"><code class="design-code">.env.keys</code> holds your environment decryption DOTENV_KEYs. Here is what it looks like.</p>

    {% capture keys_deprecated_example %}
#/!!!!!!!!!!!!!!!!!!!.env.keys!!!!!!!!!!!!!!!!!!!!!!/
#/   DOTENV_KEYs. DO NOT commit to source control   /
#/   [how it works](https://dotenv.org/env-keys)    /
#/--------------------------------------------------/
DOTENV_KEY_DEVELOPMENT="dotenv://:key_e507c60efa8841d8d5bbb85bd701ee92406cf3b06506d1d80f1553c2a72791e4@dotenvx.com/vault/.env.vault?environment=development"
DOTENV_KEY_PRODUCTION="dotenv://:key_10283719af6a30ef49050048617f4fea10c23a38021fbebeb9fd858caa01852e@dotenvx.com/vault/.env.vault?environment=production"
    {% endcapture %}
    {% include components/design-codeblock.html value=keys_deprecated_example copy=false %}

    <p class="design-paragraph">Some quick takeaways:</p>
    <ul class="design-bullets">
      <li>It uses the <a class="design-link" href="/docs/env-file">.env</a> format</li>
      <li><code class="design-code">DOTENV_KEY_DEVELOPMENT</code> contains the decryption key to <code class="design-code">DOTENV_VAULT_DEVELOPMENT</code> in <a class="design-link" href="/docs/env-vault-file">.env.vault</a></li>
      <li><code class="design-code">DOTENV_KEY_PRODUCTION</code> contains the decryption key to <code class="design-code">DOTENV_VAULT_PRODUCTION</code> in <a class="design-link" href="/docs/env-vault-file">.env.vault</a></li>
    </ul>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Generating</h2>
    <p class="design-paragraph">It's auto-generated when running <a class="design-link" href="/docs/quickstart/encryption"><code class="design-code">dotenvx encrypt</code></a>.</p>

    {% capture keys_deprecated_gen %}
$ dotenvx encrypt
◈ encrypted to .env.vault (.env)
◈ key added to .env.keys (DOTENV_KEY_DEVELOPMENT)
    {% endcapture %}
    {% include components/design-codeblock.html value=keys_deprecated_gen copy_text="dotenvx encrypt" %}

    <p class="design-paragraph">Do not commit <code class="design-code">.env.keys</code> to source code. Keep them somewhere safe like 1Password or <a class="design-link" href="/armor">Armor ⛨</a>.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">History</h2>
    <p class="design-paragraph">The <code class="design-code">.env.keys</code> file came out of development work on <a class="design-link" href="https://github.com/dotenv-org/dotenv-vault">dotenv-vault</a> – around early 2023.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
