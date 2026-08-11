---
title: CLI
permalink: /docs/cli/
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

  .docs-cli-lists {
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
  title="CLI"
  description="Encrypt, run, and manage .env files from the command line."
  visual=docs_hero_visual
%}

{% capture cli_commands_items %}
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
    <a class="design-link" href="/docs/cli/decrypt">Decrypt</a>
    <span class="design-list-meta">dotenvx decrypt</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair">Keypair</a>
    <span class="design-list-meta">dotenvx keypair</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/ls">Ls</a>
    <span class="design-list-meta">dotenvx ls</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/gitignore">Gitignore</a>
    <span class="design-list-meta">dotenvx gitignore</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/genexample">Genexample</a>
    <span class="design-list-meta">dotenvx genexample</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/validate">Validate</a>
    <span class="design-list-meta">dotenvx validate</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/precommit">Precommit</a>
    <span class="design-list-meta">dotenvx precommit</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/prebuild">Prebuild</a>
    <span class="design-list-meta">dotenvx prebuild</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/help">Help</a>
    <span class="design-list-meta">dotenvx help</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/version">Version</a>
    <span class="design-list-meta">dotenvx --version</span>
  </li>
{% endcapture %}

{% capture cli_better_security_items %}
  <li>
    <a class="design-link" href="/docs/cli/lock">Lock ⊡</a>
    <span class="design-list-meta">dotenvx lock</span>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/native">Native ⌥</a>
    <span class="design-list-meta">dotenvx native</span>
  </li>
{% endcapture %}

{% capture cli_security_teams_items %}
  <li>
    <a class="design-link" href="/docs/cli/armor/introduction">Armor ⛨</a>
    <span class="design-list-meta">dotenvx armor</span>
  </li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-cli-lists">
      {% include components/design-list.html
        title="Commands"
        items=cli_commands_items
      %}
      {% include components/design-list.html
        title="Better Security"
        items=cli_better_security_items
      %}
      {% include components/design-list.html
        title="For Security Teams"
        items=cli_security_teams_items
      %}
    </div>
  </div>
</section>
