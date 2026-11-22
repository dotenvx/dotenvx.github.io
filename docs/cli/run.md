---
doc_type: cli
title: Run
description: Inject environment variables into a child process.
permalink: "/docs/cli/run/"
redirect_from:
- "/docs/ref/cli/run/"
- "/docs/ref/cli/run"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
options_title: Options
options:
- title: run --file
  href: "/docs/cli/run-f/"
- title: run --keys-file
  href: "/docs/cli/run-fk/"
- title: run --env
  href: "/docs/cli/run-env/"
- title: run --overload
  href: "/docs/cli/run-overload/"
- title: run --strict
  href: "/docs/cli/run-strict/"
- title: run --ignore
  href: "/docs/cli/run-ignore/"
- title: run --convention
  href: "/docs/cli/run-convention/"
- title: run --token
  href: "/docs/cli/run-token/"
- title: run - Variable Expansion
  href: "/docs/cli/run-variable-expansion/"
- title: run - Default Values
  href: "/docs/cli/run-default-values/"
- title: run - Alternate Values
  href: "/docs/cli/run-alternate-values/"
- title: run - Interpolation Syntax Summary (Variable Expansion, Default/Alternate
    Values)
  href: "/docs/cli/run-interpolation-syntax-summary/"
- title: run - Command Substitution
  href: "/docs/cli/run-command-substitution/"
- title: run - Shell Expansion
  href: "/docs/cli/run-shell-expansion/"
- title: run - Multiline
  href: "/docs/cli/run-multiline/"
- title: run - Contextual Help
  href: "/docs/cli/run-contextual-help/"
- title: run -f
  href: "/docs/cli/run-f/"
- title: run -f directory
  href: "/docs/cli/run-f-directory/"
- title: run - Environment Variable Precedence
  href: "/docs/cli/run-environment-variable-precedence/"
- title: DOTENV_PRIVATE_KEY=key run
  href: "/docs/cli/run-dotenv-private-key/"
- title: DOTENV_FILE=.env.production run
  href: "/docs/cli/run-dotenv-private-key-production/"
- title: DOTENV_FILE=.env.ci run
  href: "/docs/cli/run-dotenv-private-key-ci/"
- title: DOTENV_FILE=.env.production,.env run - Combine Multiple
  href: "/docs/cli/run-dotenv-private-key-multiple/"
- title: run with a Dotenvx.toml
  href: "/docs/cli/run-validate/"
- title: run --convention=nextjs
  href: "/docs/cli/run-convention-nextjs/"
- title: DOTENV_ENV=production run --convention=flow
  href: "/docs/cli/run-convention-flow-dotenv-env/"
command: dotenvx run
global_options: true
---

Given you have an app with environment variables:

```javascript
console.log(`Hello ${process.env.HELLO}`)
```

Encrypt your .env file. Your secrets stay safely encrypted at rest.

```console
$ dotenvx encrypt
◈ encrypted (.env)
```
{: copy="dotenvx encrypt"}

And then decrypt and inject them at runtime - just in time.

```console
$ dotenvx run -- node index.js
⟐ injected env (14) from .env
```
{: copy="dotenvx run -- node index.js"}

This works cross-platform across plaintext and encrypted .env files.

Configure validation, storage, and redaction rules with [Dotenvx.toml](/docs/dotenvxtoml/).
