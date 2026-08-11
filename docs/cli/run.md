---
layout: docs-cli
title: Run
description: Inject env at runtime.
permalink: /docs/cli/run/
redirect_from:
  - /docs/ref/cli/run/
  - /docs/ref/cli/run
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Options
options:
  - title: run - Variable Expansion
    href: /docs/cli/run-variable-expansion/
  - title: run - Default Values
    href: /docs/cli/run-default-values/
  - title: run - Alternate Values
    href: /docs/cli/run-alternate-values/
  - title: "run - Interpolation Syntax Summary (Variable Expansion, Default/Alternate Values)"
    href: /docs/cli/run-interpolation-syntax-summary/
  - title: run - Command Substitution
    href: /docs/cli/run-command-substitution/
  - title: run - Shell Expansion
    href: /docs/cli/run-shell-expansion/
  - title: run - Multiline
    href: /docs/cli/run-multiline/
  - title: run - Contextual Help
    href: /docs/cli/run-contextual-help/
  - title: run -f
    href: /docs/cli/run-f/
  - title: run -f directory
    href: /docs/cli/run-f-directory/
  - title: run -fk
    href: /docs/cli/run-fk/
  - title: run --env HELLO=String
    href: /docs/cli/run-env/
  - title: run --redact
    href: /docs/cli/run-redact/
  - title: run --redact -- claude -p
    href: /docs/cli/run-redact-claude-print/
  - title: run --redact -- claude
    href: /docs/cli/run-redact-claude/
  - title: run --redact -- codex exec
    href: /docs/cli/run-redact-codex-exec/
  - title: run --redact -- codex
    href: /docs/cli/run-redact-codex/
  - title: run --mask
    href: /docs/cli/run-mask/
  - title: run --token
    href: /docs/cli/run-token/
  - title: run --overload
    href: /docs/cli/run-overload/
  - title: run --ignore
    href: /docs/cli/run-ignore/
  - title: run - Environment Variable Precedence
    href: /docs/cli/run-environment-variable-precedence/
  - title: DOTENV_PRIVATE_KEY=key run
    href: /docs/cli/run-dotenv-private-key/
  - title: DOTENV_PRIVATE_KEY_PRODUCTION=key run
    href: /docs/cli/run-dotenv-private-key-production/
  - title: DOTENV_PRIVATE_KEY_CI=key run
    href: /docs/cli/run-dotenv-private-key-ci/
  - title: DOTENV_PRIVATE_KEY=key DOTENV_PRIVATE_KEY_PRODUCTION=key run - Combine Multiple
    href: /docs/cli/run-dotenv-private-key-multiple/
  - title: run --verbose
    href: /docs/cli/run-verbose/
  - title: run --debug
    href: /docs/cli/run-debug/
  - title: run --quiet
    href: /docs/cli/run-quiet/
  - title: run --log-level
    href: /docs/cli/run-log-level/
  - title: run --validate
    href: /docs/cli/run-validate/
  - title: run --strict
    href: /docs/cli/run-strict/
  - title: run --convention=nextjs
    href: /docs/cli/run-convention-nextjs/
  - title: run -f directory --convention=nextjs
    href: /docs/cli/run-f-directory-convention-nextjs/
  - title: run --convention=flow
    href: /docs/cli/run-convention-flow/
  - title: DOTENV_ENV=production run --convention=flow
    href: /docs/cli/run-convention-flow-dotenv-env/
  - title: run --no-native
    href: /docs/cli/run-no-native/
  - title: run --no-armor
    href: /docs/cli/run-no-armor/
---
{% capture cli_code_0 %}
console.log(`Hello ${process.env.HELLO}`)
{% endcapture %}
{% capture cli_code_0_copy %}console.log(`Hello ${process.env.HELLO}`){% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

{% capture cli_code_1 %}
$ dotenvx encrypt
$ dotenvx run -- node index.js
⟐ injected env (14) from .env
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx encrypt
dotenvx run -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
