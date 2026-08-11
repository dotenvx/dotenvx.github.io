---
title: Encrypted Files
description: Understand the encrypted .env file format.
permalink: /docs/learn/encrypting/encrypted-files/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Encrypted Files"
  description="Understand the encrypted .env file format."
  mark=".env"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph">Once encrypted, the <code class="design-code">.env</code> file is safe, and recommended, to commit to code.</p>

    {% capture encrypted_file %}
# .env
DOTENV_PUBLIC_KEY="0312770354c6661d9902a3a9e648b4599f71a8c365c132421b94e21fefcc7d9457"
HELLO="encrypted:BBLDHBFNnbfWt2A3PS8fzjEaLlZNB695T527ZrbF707xIv/OTmhnnxIr2bF07kr3npmgmrIcYm3dB/DOsKrptHLne06UlZpRh2AYNN/ITwdLGIom3HIZpOgc4cxs/jIXfsdgEghs"
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypted_file copy=false %}

    <h2 class="design-list-title">Format</h2>
    <ul class="design-bullets">
      <li><code class="design-code">KEY</code> names are preserved.</li>
      <li><code class="design-code">encrypted:</code> values are ciphertext.</li>
      <li>Plaintext values can be safely mixed in when a value is not sensitive.</li>
      <li><code class="design-code">DOTENV_PUBLIC_KEY</code> holds the public key used to encrypt values.</li>
    </ul>

    <p class="design-paragraph">The public key can live in source control because it can only encrypt values. It cannot decrypt them.</p>
    </div>
  </div>
</section>
