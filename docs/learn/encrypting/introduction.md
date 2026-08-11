---
title: Encrypting
description: Learn how Dotenvx encryption keeps secrets safe in source control.
permalink: /docs/learn/encrypting/introduction/
layout: radar
redirect_from:
  - /docs/learn/encrypting/
  - /docs/learn/encrypting
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Encrypting"
  description="Learn how Dotenvx encryption keeps secrets safe in source control."
  mark="encrypt"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph">Dotenvx encrypts secret values in <code class="design-code">.env</code> files while keeping the file readable, reviewable, and safe to commit.</p>

    <p class="design-paragraph">Start with a plaintext <code class="design-code">.env</code> file.</p>

    {% capture encrypt_env %}
# .env
HELLO="World"
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_env copy=false %}

    <p class="design-paragraph">Run <code class="design-code">dotenvx encrypt</code>.</p>

    {% capture encrypt_cmd %}
$ dotenvx encrypt
◈ encrypted (.env)
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_cmd copy_text="dotenvx encrypt" %}

    <p class="design-paragraph">The values become ciphertext, the keys stay readable, and a public encryption key is added to the file.</p>

    {% capture encrypt_result %}
# .env
DOTENV_PUBLIC_KEY="0312770354c6661d9902a3a9e648b4599f71a8c365c132421b94e21fefcc7d9457"
HELLO="encrypted:BBLDHBFNnbfWt2A3PS8fzjEaLlZNB695T527ZrbF707xIv/OTmhnnxIr2bF07kr3npmgmrIcYm3dB/DOsKrptHLne06UlZpRh2AYNN/ITwdLGIom3HIZpOgc4cxs/jIXfsdgEghs"
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_result copy=false %}

    <h2 class="design-page-title">Next</h2>
    <ul class="design-bullets">
      <li><a class="design-link" href="/docs/learn/encrypting/encrypted-files">Encrypted Files</a></li>
      <li><a class="design-link" href="/docs/learn/encrypting/private-keys">Private Keys</a></li>
      <li><a class="design-link" href="/docs/learn/encrypting/runtime-decryption">Runtime Decryption</a></li>
      <li><a class="design-link" href="/docs/learn/encrypting/multiple-environments">Multiple Environments</a></li>
    </ul>
    </div>
  </div>
</section>
