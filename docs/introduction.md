---
title: Introduction
permalink: /docs/introduction/
layout: radar
---

<style>
  .docs-hero-ascii {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: inherit;
    width: 100%;
  }

  .docs-hero-ascii-art {
    color: var(--design-ink);
    font-family: var(--design-font-mono);
    font-size: var(--design-text-title);
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: 1;
    margin: 0;
    text-align: center;
    user-select: none;
    white-space: pre;
  }

  @media (min-width: 900px) {
    .docs-hero-ascii {
      height: 100%;
      min-height: inherit;
    }
  }

  .docs-intro-lists {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    max-width: 36rem;
  }
</style>

{% capture docs_hero_visual %}
  <div class="docs-hero-ascii" aria-hidden="true">
    <pre class="docs-hero-ascii-art">&lt;docs/&gt;</pre>
  </div>
{% endcapture %}

{% include components/design-hero.html
  class="company-design-hero docs-design-hero"

  eyebrow="Docs"
  eyebrow_href="/docs/introduction"
  title="Introduction"
  description="Get started with dotenvx—install, encrypt, and run."
  visual=docs_hero_visual
%}


{% capture docs_quickstart_items %}
  <li>
    <a class="design-link" href="/docs/secrets-with-cli">CLI</a>
    <span class="design-list-meta">dotenvx encrypt</span>
  </li>
  <li>
    <a class="design-link" href="/docs/claude">Claude</a>
    <a class="design-link" href="/docs/codex">Codex</a>
    <a class="design-link" href="/docs/cursor">Cursor</a>
    <span class="design-list-meta">dotenvx run --redact -- claude</span>
  </li>
  <li>
    <a class="design-link" href="/docs/1password">1Password</a>
    <a class="design-link" href="/docs/bitwarden">Bitwarden</a>
    <span class="design-list-meta">op:// bw://</span>
  </li>
  <li>
    <a class="design-link" href="/docs/nodejs">Node.js</a>
    <span class="design-list-meta">dotenvx run -- node index.js</span>
  </li>
  <li>
    <a class="design-link" href="/docs/python">Python</a>
    <span class="design-list-meta">dotenvx run -- python main.py</span>
  </li>
  <li>
    <a class="design-link" href="/docs/quickstarts">more</a>
  </li>
{% endcapture %}

{% capture docs_cli_items %}
  <li>
    <a class="design-link" href="/docs/cli/encrypt">Encrypt</a>
    <span class="design-list-meta">dotenvx encrypt</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run">Run</a>
    <span class="design-list-meta">dotenvx run</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set">Set</a>
    <span class="design-list-meta">dotenvx set</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get">Get</a>
    <span class="design-list-meta">dotenvx get</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli">more</a>
  </li>
{% endcapture %}

{% capture docs_sdk_items %}
  <li><a class="design-link" href="/docs/sdk/config">config</a></li>
  <li><a class="design-link" href="/docs/sdk/parse">parse</a></li>
  <li><a class="design-link" href="/docs/sdk">more</a></li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-intro-lists">
      {% include components/design-list.html
        title="Quickstarts"
        items=docs_quickstart_items
      %}
      {% include components/design-list.html
        title="CLI"
        items=docs_cli_items
      %}
      {% include components/design-list.html
        title="SDK"
        items=docs_sdk_items
      %}
    </div>
  </div>
</section>
