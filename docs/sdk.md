---
title: SDK
permalink: /docs/sdk/
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

  .docs-sdk-lists {
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
  title="SDK"
  description="Load and manage encrypted env from Node.js."
  visual=docs_hero_visual
%}

{% capture sdk_methods_items %}
  <li><a class="design-link" href="/docs/sdk/config">config</a></li>
  <li><a class="design-link" href="/docs/sdk/parse">parse</a></li>
  <li><a class="design-link" href="/docs/sdk/config-set-key-value">set</a></li>
  <li><a class="design-link" href="/docs/sdk/config-get-key">get</a></li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-sdk-lists">
      {% include components/design-list.html
        title="Methods"
        items=sdk_methods_items
      %}
    </div>
  </div>
</section>
