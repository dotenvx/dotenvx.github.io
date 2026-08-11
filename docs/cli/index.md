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

{% capture cli_all_permutations_items %}
  <li>
    <a class="design-link" href="/docs/cli/run-variable-expansion">run - Variable Expansion</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-default-values">run - Default Values</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-alternate-values">run - Alternate Values</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-interpolation-syntax-summary">run - Interpolation Syntax Summary (Variable Expansion, Default/Alternate Values)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-command-substitution">run - Command Substitution</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-shell-expansion">run - Shell Expansion</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-multiline">run - Multiline</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-contextual-help">run - Contextual Help</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-f">run -f</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-f-directory">run -f directory</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-fk">run -fk</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-env">run --env HELLO=String</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-redact">run --redact</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-redact-claude-print">run --redact -- claude -p</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-redact-claude">run --redact -- claude</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-redact-codex-exec">run --redact -- codex exec</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-redact-codex">run --redact -- codex</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-mask">run --mask</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-token">run --token</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-overload">run --overload</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-ignore">run --ignore</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-environment-variable-precedence">run - Environment Variable Precedence</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-dotenv-private-key">DOTENV_PRIVATE_KEY=key run</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-dotenv-private-key-production">DOTENV_PRIVATE_KEY_PRODUCTION=key run</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-dotenv-private-key-ci">DOTENV_PRIVATE_KEY_CI=key run</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-dotenv-private-key-multiple">DOTENV_PRIVATE_KEY=key DOTENV_PRIVATE_KEY_PRODUCTION=key run - Combine Multiple</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-verbose">run --verbose</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-debug">run --debug</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-quiet">run --quiet</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-log-level">run --log-level</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-validate">run --validate</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-strict">run --strict</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-convention-nextjs">run --convention=nextjs</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-f-directory-convention-nextjs">run -f directory --convention=nextjs</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-convention-flow">run --convention=flow</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-convention-flow-dotenv-env">DOTENV_ENV=production run --convention=flow</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-no-native">run --no-native</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/run-no-armor">run --no-armor</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-key">get KEY</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-key-mask">get KEY --mask</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-key-f">get KEY -f</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-key-f-directory">get KEY -f directory</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-key-fk">get KEY -fk</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-key-env">get KEY --env</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-key-overload">get KEY --overload</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-key-strict">get KEY --strict</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-key-ignore">get KEY --ignore</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-key-convention-nextjs">get KEY --convention=nextjs</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-key-f-directory-convention-nextjs">get KEY -f directory --convention=nextjs</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-key-convention-flow">get KEY --convention=flow</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-json">get (json)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-include-key">get -ik</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-exclude-key">get -ek</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-shell">get --format shell</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-colon">get --format colon</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-eval">get --format eval</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-eval-export">get --format eval-export</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-all">get --all</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-pretty-print">get --pretty-print</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-all-pretty-print">get --all --pretty-print</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-no-armor">get --no-armor</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-no-native">get KEY --no-native</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value">set KEY value</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-f">set KEY value -f</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-fk">set KEY value -fk</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-encrypt">set KEY value --encrypt</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-plain">set KEY value --plain</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-plain-suffix">set KEY_PLAIN value</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-no-create">set KEY value --no-create</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-no-armor">set KEY value --no-armor</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-no-native">set KEY value --no-native</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-with-spaces">set KEY &quot;value with spaces&quot;</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-with-leading-dash">set KEY -- &quot;- + * ÷&quot;</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/del-key">del KEY</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/del-key-f">del KEY -f</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/encrypt-f">encrypt -f</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/encrypt-fk">encrypt -fk</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/encrypt-k">encrypt -k</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/encrypt-ek">encrypt -ek</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/encrypt-plain-suffix">encrypt KEY_PLAIN</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/encrypt-stdout">encrypt --stdout</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/encrypt-token">encrypt --token</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/encrypt-no-create">encrypt --no-create</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/encrypt-no-armor">encrypt --no-armor</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/encrypt-no-native">encrypt --no-native</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/decrypt-f">decrypt -f</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/decrypt-fk">decrypt -fk</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/decrypt-k">decrypt -k</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/decrypt-ek">decrypt -ek</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/decrypt-stdout">decrypt --stdout</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/decrypt-stdout-mask">decrypt --stdout --mask</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/decrypt-no-armor">decrypt --no-armor</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/decrypt-no-native">decrypt --no-native</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-f">keypair -f</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-fk">keypair -fk</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-key">keypair KEY</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-json">keypair --format json</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-shell">keypair --format shell</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-colon">keypair --format colon</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-pretty-print">keypair --pretty-print</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-no-armor">keypair --no-armor</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-no-native">keypair --no-native</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/gitignore-pattern">gitignore --pattern</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/genexample-f">genexample -f</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/genexample-directory">genexample directory</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/validate-ignore">validate --ignore</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/precommit-directory">precommit directory</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/precommit-install">precommit --install</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/prebuild-directory">prebuild directory</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/lock/up">lock up</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/lock/down">lock down</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/native/up">native up</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/native/down">native down</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/native/push">native push</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/native/pull">native pull</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/up">armor up</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/down">armor down</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/login">armor login</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/logout">armor logout</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/push">armor push</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/pull">armor pull</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/move">armor move</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/open">armor open</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/status">armor status</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/settings">armor settings</a>
  </li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-cli-lists">
      {% capture step_content %}
        <div class="docs-cli-cards">
          <p class="design-list-title">Commands</p>
          <div class="design-settings-grid">
            {% include components/design-settings-tile.html href="/docs/cli/run" label="Run" glyph="›" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/get" label="Get" glyph="↓" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/set" label="Set" glyph="↑" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/del" label="Del" glyph="×" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/encrypt" label="Encrypt" glyph="◈" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/decrypt" label="Decrypt" glyph="◇" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/keypair" label="Keypair" glyph="¤" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/ls" label="Ls" glyph="≡" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/gitignore" label="Gitignore" glyph="#" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/genexample" label="Genexample" glyph="…" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/validate" label="Validate" glyph="✓" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/precommit" label="Precommit" glyph="⇢" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/prebuild" label="Prebuild" glyph="▣" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/help" label="Help" glyph="?" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/version" label="Version" glyph="v" glyph_class="design-settings-tile-glyph--soft" %}
          </div>
        </div>
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        <div class="docs-cli-cards">
          <p class="design-list-title">Better Security</p>
          <div class="design-settings-grid">
            {% include components/design-settings-tile.html href="/docs/cli/lock" label="Lock" glyph="⊡" glyph_class="design-settings-tile-glyph--soft" %}
            {% include components/design-settings-tile.html href="/docs/cli/native" label="Native" glyph="⌥" glyph_class="design-settings-tile-glyph--soft" %}
          </div>
        </div>
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        <div class="docs-cli-cards">
          <p class="design-list-title">For Security Teams</p>
          <div class="design-settings-grid">
            {% include components/design-settings-tile.html href="/docs/cli/armor/introduction" label="Armor" glyph="⛨" glyph_class="design-settings-tile-glyph--soft" %}
          </div>
        </div>
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html
          title="Options"
          items=cli_all_permutations_items
        %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}
    </div>
  </div>
</section>
