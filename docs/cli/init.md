---
layout: docs-cli
permalink: /docs/cli/init/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "init"
command: "dotenvx init"
description: "Create an Envfile from .env files and source code."
options_title: Options
options:
  - title: "init -f"
    href: /docs/cli/init-f/
---
Create an `Envfile` from your `.env` files and source code. In an interactive terminal, select the files to include and whether to scan code for environment variable references.

```console
$ dotenvx init
◈ created (Envfile)
```
{: copy="dotenvx init"}

Outside an interactive terminal, the command reads `.env.example` and `.env` when present. Use `-f` to select a single file. It records variable declarations without copying secret values and leaves an existing `Envfile` unchanged.

Review the generated declarations, then run [`dotenvx check`](/docs/cli/check/) to check your configuration against the `Envfile`. Validation requires an `Envfile`; `.env.example` alone is not used for validation.
