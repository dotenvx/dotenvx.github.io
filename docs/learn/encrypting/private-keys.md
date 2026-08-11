---
title: Private Keys
description: Understand private decryption keys and where they should live.
permalink: /docs/learn/encrypting/private-keys/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Private Keys"
  description="Understand private decryption keys and where they should live."
  mark=".env.keys"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph">When <code class="design-code">dotenvx encrypt</code> creates encrypted values, it also creates a private decryption key.</p>

    <p class="design-paragraph">By default, the private key is written to <code class="design-code">.env.keys</code>.</p>

    {% capture private_keys %}
# .env.keys - DO NOT commit to source control
DOTENV_PRIVATE_KEY=dcd72b6a81ba7ec9af83d63720189c353b02bdef831fbe7a6712632204056a36
    {% endcapture %}
    {% include components/design-codeblock.html value=private_keys copy=false %}

    <h2 class="design-page-title">Source Control</h2>
    <p class="design-paragraph">Commit encrypted <code class="design-code">.env</code> files. Do not commit <code class="design-code">.env.keys</code>.</p>

    <p class="design-paragraph">The encrypted file is designed to move through git. The private key is the sensitive material that decrypts it.</p>

    <p class="design-paragraph">You can also keep private keys in a password manager and load them at runtime. See <a class="design-link" href="/docs/1password">Use dotenvx with 1Password</a> or <a class="design-link" href="/docs/bitwarden">Use dotenvx with Bitwarden</a>.</p>

    <h2 class="design-page-title">Armor</h2>
    <p class="design-paragraph">With Armor, the private key is stored remotely as an armored key instead of locally in <code class="design-code">.env.keys</code>.</p>

    {% capture armor_up %}
$ dotenvx armor up
    {% endcapture %}
    {% include components/design-codeblock.html value=armor_up copy_text="dotenvx armor up" %}

    <p class="design-paragraph">Use <a class="design-link" href="/docs/learn/armoring/introduction">Armoring</a> when you want private keys kept off device.</p>
    </div>
  </div>
</section>
