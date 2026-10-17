---
layout: docs-side-path
title: Use the CLI
description: Load secrets before Bun starts your application.
permalink: /docs/bun/cli/
markdown_url: /docs/bun/cli.md
parent_url: /docs/bun/#ship
parent_title: Bun
side_path_kind: Alternative
---

The CLI loads secrets before your application imports any modules. Keep env = false in bunfig.toml and remove the Dotenvx import and config() call from index.ts.

Use these package scripts:

```json
{
  "scripts": {
    "start": "bunx --bun dotenvx run --strict -- bun index.ts",
    "dev": "bunx --bun dotenvx run --strict -- bun --watch index.ts",
    "start:prod": "bunx --bun dotenvx run -f .env.production --strict -- bun index.ts"
  }
}
```
{: label="package.json"}

The --bun flag runs the Dotenvx CLI with Bun. Dotenvx then starts your app with the decrypted values in process.env.

## Run locally

```console
$ bun run start
⟐ injected env (2) from .env (022 0D8) via .env.keys
Server running on http://localhost:3000/
```
{: copy="bun run start"}

Use bun run dev to watch your code. Restart the command after changing an environment file so Dotenvx reloads it.

## Run in production

Follow [Production](/docs/bun/#production) to encrypt and deploy .env.production and provision its key. Use the production script to select that file:

```console
$ bun run start:prod
```
{: copy="bun run start:prod"}

This script selects .env.production explicitly, so it does not need DOTENV_FILE.
