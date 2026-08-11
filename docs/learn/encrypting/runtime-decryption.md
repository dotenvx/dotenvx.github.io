---
title: Runtime Decryption
description: Decrypt encrypted values just in time at runtime.
permalink: /docs/learn/encrypting/runtime-decryption/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Runtime Decryption"
  description="Decrypt encrypted values just in time at runtime."
  mark="run"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph">Use <code class="design-code">dotenvx run</code> to inject encrypted and plaintext values into a process just in time.</p>

    <p class="design-paragraph">This command reads the private key, decrypts each encrypted value, and injects the result into <code class="design-code">process.env</code>.</p>

    {% capture runtime_js %}
// index.js
console.log(`Hello ${process.env.HELLO}`)
    {% endcapture %}
    {% include components/design-codeblock.html value=runtime_js copy=false %}

    {% capture runtime_run %}
$ dotenvx run -- node index.js
⟐ injected env (2) from .env
Hello World
    {% endcapture %}
    {% include components/design-codeblock.html value=runtime_run copy_text="dotenvx run -- node index.js" %}

    <p class="design-paragraph">The application receives normal environment variables. It does not need to know whether a value came from plaintext or ciphertext.</p>
    </div>
  </div>
</section>
