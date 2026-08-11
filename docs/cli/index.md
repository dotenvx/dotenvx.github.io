---
title: CLI
description: Encrypt, run, and manage .env files from the command line.
permalink: /docs/cli/
redirect_from:
  - /docs/cli/introduction
  - /docs/cli/introduction/
  - /docs/ref/cli
  - /docs/ref/cli/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="CLI"
  description="Encrypt, run, and manage .env files from the command line."
  icon="cli"
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
      {% capture step_content %}
        <h2 class="design-page-title design-page-title--flush">Commands</h2>
        {% include components/design-list.html items=cli_commands_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        <h2 class="design-page-title design-page-title--flush">Better Security</h2>
        {% include components/design-list.html items=cli_better_security_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        <h2 class="design-page-title design-page-title--flush">For Security Teams</h2>
        {% include components/design-list.html items=cli_security_teams_items %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}
    </div>
  </div>
</section>
