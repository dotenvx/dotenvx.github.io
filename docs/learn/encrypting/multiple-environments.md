---
title: Multiple Environments
description: Use encrypted env files across multiple environments.
permalink: /docs/learn/encrypting/multiple-environments/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Multiple Environments"
  description="Use encrypted env files across multiple environments."
  mark=".env.*"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-guide-body design-prose">
    <p class="design-paragraph">Use the same encryption workflow for each environment. Create a <code class="design-code">.env.ENVIRONMENT</code> file, encrypt it, and decrypt it at runtime with <code class="design-code">-f</code>.</p>

    {% capture multi_env %}
# .env.production
HELLO="Production"
    {% endcapture %}
    {% include components/design-codeblock.html value=multi_env copy=false %}

    {% capture multi_encrypt %}
$ dotenvx encrypt -f .env.production
◈ encrypted (.env.production)
    {% endcapture %}
    {% include components/design-codeblock.html value=multi_encrypt copy_text="dotenvx encrypt -f .env.production" %}

    <p class="design-paragraph">Run with the same file.</p>

    {% capture multi_run %}
$ dotenvx run -f .env.production -- node index.js
⟐ injected env (2) from .env.production
Hello Production
    {% endcapture %}
    {% include components/design-codeblock.html value=multi_run copy_text="dotenvx run -f .env.production -- node index.js" %}

    <p class="design-paragraph">This keeps each environment's values separate while preserving the same encrypted-file workflow.</p>
    </div>
  </div>
</section>
