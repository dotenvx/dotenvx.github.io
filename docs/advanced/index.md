---
title: Advanced
description: Advanced usage and commands for dotenvx.
permalink: /docs/advanced/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Advanced"
  description="Become a power user of dotenvx."
  mark="advanced"
%}

{% capture advanced_cli_items %}
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
    <a class="design-link" href="/docs/cli/run-interpolation-syntax-summary">run - Interpolation Syntax Summary</a>
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
    <a class="design-link" href="/docs/cli/run-dotenv-private-key-multiple">Combine Multiple Private Keys</a>
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
    <a class="design-link" href="/docs/cli/run-fk">run -fk</a>
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
    <a class="design-link" href="/docs/cli/get-no-native">get KEY --no-native</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-no-armor">get KEY --no-armor</a>
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
    <a class="design-link" href="/docs/cli/get-eval">get --format eval</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-eval-export">get --format eval-export</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-all">get --all</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/get-all-pretty-print">get --all --pretty-print</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value">set KEY value</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-f">set KEY value -f</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-with-spaces">set KEY "value with spaces"</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-with-leading-dash">set KEY -- "- + * ÷"</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-plain">set KEY value --plain</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-plain-suffix">set KEY_PLAIN value</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-no-native">set KEY value --no-native</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/set-key-value-no-armor">set KEY value --no-armor</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/del-key">del KEY</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/del-key-f">del KEY -f</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/encrypt">encrypt</a>
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
    <a class="design-link" href="/docs/cli/encrypt-no-native">encrypt --no-native</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/encrypt-no-armor">encrypt --no-armor</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/decrypt">decrypt</a>
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
    <a class="design-link" href="/docs/cli/decrypt-no-native">decrypt --no-native</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/decrypt-no-armor">decrypt --no-armor</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair">keypair</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-f">keypair -f</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-fk">keypair -fk</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-key">keypair DOTENV_PRIVATE_KEY</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-shell">keypair --format shell</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-no-native">keypair --no-native</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/keypair-no-armor">keypair --no-armor</a>
  </li>
{% endcapture %}

{% capture advanced_utility_items %}
  <li>
    <a class="design-link" href="/docs/cli/ls">ls</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/gitignore">gitignore</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/gitignore-pattern">gitignore --pattern</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/genexample">genexample</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/genexample-f">genexample -f</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/genexample-directory">genexample directory</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/validate">validate</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/validate-ignore">validate --ignore</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/precommit">precommit</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/precommit-install">precommit --install</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/precommit-directory">precommit directory</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/prebuild">prebuild</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/prebuild-directory">prebuild directory</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/lock">lock</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/lock/up">lock up</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/lock/down">lock down</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/native">native</a>
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
    <a class="design-link" href="/docs/cli/armor/introduction">armor</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/up">armor up</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/down">armor down</a>
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
    <a class="design-link" href="/docs/cli/armor/login">armor login</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/logout">armor logout</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/status">armor status</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/armor/settings">armor settings</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/help">help</a>
  </li>
  <li>
    <a class="design-link" href="/docs/cli/version">--version</a>
  </li>
{% endcapture %}

{% capture advanced_extensions_items %}
  <li>
    <a class="design-link" href="/docs/cli/scan">ext scan</a>
  </li>
{% endcapture %}

{% capture advanced_library_items %}
  <li>
    <a class="design-link" href="/docs/sdk/config">config()</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-path">config(path: ['.env.local', '.env'])</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-overload">config(overload: true)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-mask">config(mask: true)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-quiet">config(quiet: true)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-strict">config(strict: true)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-ignore">config(ignore: ['.env.missing', '.env'])</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-env-keys-file">config(envKeysFile: '../../.env.keys')</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-convention">config(convention: 'nextjs')</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-path-directory-convention">config(path: directory, convention: 'nextjs')</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-no-armor">config(noArmor: true)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-no-1password">config(no1Password: true)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-no-bitwarden">config(noBitwarden: true)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/parse">parse(src)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/parse-process-env">parse(src, {processEnv:})</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/parse-private-key">parse(src, {privateKey:})</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-set-key-value">set(KEY, value)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-set-key-value-plain">set(KEY, value, {plain: true})</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/config-get-key">get(KEY)</a>
  </li>
  <li>
    <a class="design-link" href="/docs/sdk/get-mask">get(KEY, {mask: true})</a>
  </li>
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    <div class="docs-intro-lists">
      {% capture step_content %}
        {% include components/design-list.html
          title="CLI"
          items=advanced_cli_items
        %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html
          title="Utility Commands"
          items=advanced_utility_items
        %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html
          title="Extensions"
          items=advanced_extensions_items
        %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html
          title="Library"
          items=advanced_library_items
        %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}
    </div>

    <div class="docs-guide-body design-prose">
      <h2 class="design-page-title">Whitepaper</h2>
      <p class="design-paragraph"><strong>Dotenvx: Reducing Secrets Risk with Cryptographic Separation</strong></p>
      <p class="design-paragraph">An ideal secrets solution would not only centralize secrets but also contain the fallout of a breach. While secrets managers offer centralized storage and distribution, their design creates a large blast radius. Dotenvx reduces that blast radius by splitting secrets management into an encrypted secrets file and a separate decryption key.</p>
      <p class="design-paragraph"><a class="design-link" href="https://dotenvx.com/dotenvx.pdf">Read the whitepaper</a></p>
    </div>
  </div>
</section>
