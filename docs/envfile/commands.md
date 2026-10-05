---
layout: docs-cli
title: Commands
description: Generate, validate, and use your Envfile.
permalink: "/docs/envfile/commands/"
eyebrow: Envfile
eyebrow_href: "/docs/envfile/"
command: dotenvx spec
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
```sh
dotenvx spec
dotenvx check
dotenvx encrypt
dotenvx run -- node index.js
```

`dotenvx spec` creates an Envfile with `strict true` and variable declarations, without copying secret values. In a terminal, it lets you select env files and scan code for references. Use `-f .env.production` to select one file, `--stdout` to preview the result, or `--overwrite` to replace an existing Envfile and its custom rules.

Use `dotenvx check -f .env.production` to validate a specific file and its overrides. See the [quickstart](/docs/quickstart/envfile/) for a complete example.
