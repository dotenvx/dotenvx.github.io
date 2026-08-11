---
title: Documentation
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

  eyebrow="Dotenvx"
  eyebrow_href="/"
  title="Documentation"
  description="Get started with dotenvx—install, encrypt, and run. Guides for languages, infra, coding agents, and more."
  visual=docs_hero_visual
%}


{% capture docs_quickstart_items %}
  <li>
    <a class="design-link" href="/docs/cli-quickstart">CLI</a>
    <span class="design-list-meta">dotenvx encrypt</span>
  </li>
  <li>
    <a class="design-link" href="/docs/claude">Claude</a>
    <span class="design-list-meta">dotenvx run --redact -- claude</span>
  </li>
  <li>
    <a class="design-link" href="/docs/codex">Codex</a>
    <span class="design-list-meta">dotenvx run --redact -- codex</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cursor">Cursor</a>
    <span class="design-list-meta">dotenvx run --redact -- cursor</span>
  </li>
  <li>
    <a class="design-link" href="/docs/github-actions">GitHub Actions</a>
    <span class="design-list-meta">.github/workflows</span>
  </li>
  <li>
    <a class="design-link" href="/docs/nodejs">Node.js</a>
    <span class="design-list-meta">dotenvx run -- node index.js</span>
  </li>
  <li>
    <a class="design-link" href="/docs/quickstarts">…</a>
    <span class="design-list-meta">30+ Quickstart Guides</span>
  </li>
  <li>
    <a class="design-link" href="/docs/1password">1Password</a>
    <span class="design-list-meta">op://</span>
  </li>
  <li>
    <a class="design-link" href="/docs/bitwarden">Bitwarden</a>
    <span class="design-list-meta">bw://</span>
  </li>
{% endcapture %}

{% capture docs_cli_items %}
  <li>
    <a class="design-link" href="/docs/cli/run">Run</a>
    <span class="design-list-meta">dotenvx run</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get">Get</a>
    <span class="design-list-meta">dotenvx get</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set">Set</a>
    <span class="design-list-meta">dotenvx set</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/del">Del</a>
    <span class="design-list-meta">dotenvx del</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/encrypt">Encrypt</a>
    <span class="design-list-meta">dotenvx encrypt</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli">…</a>
    <span class="design-list-meta">full reference</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/lock">Lock ⊡</a>
    <span class="design-list-meta">dotenvx lock</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/native">Native ⌥</a>
    <span class="design-list-meta">dotenvx native</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/introduction">Armor ⛨</a>
    <span class="design-list-meta">dotenvx armor</span>
  </li>
{% endcapture %}

{% capture docs_sdk_items %}
  <li>
    <a class="design-link" href="/docs/sdk/config">config</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/parse">parse</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk">…</a>
    <span class="design-list-meta">full reference</span>
  </li>
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
        title="SDKs"
        items=docs_sdk_items
      %}
    </div>
  </div>
</section>
