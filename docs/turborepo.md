---
layout: docs-markdown
title: "Turborepo"
social_title: "Encrypt a .env file in Turborepo"
description: "Encrypt a Turborepo workspace .env file and inject its secrets when Turbo runs the application."
icon: turborepo
permalink: /docs/turborepo/
redirect_from:
  - /docs/monorepos/turborepo
  - /docs/monorepos/turborepo/
  - /docs/secrets-in-turborepo
  - /docs/secrets-in-turborepo/
quickstart_pager: true
---

## Encrypt

Keep the environment file beside the workspace that uses it and encrypt it.

```console
$ dotenvx encrypt -f apps/web/.env
```
{: copy="dotenvx encrypt -f apps/web/.env"}

Commit `apps/web/.env`, but never commit `apps/web/.env.keys`.

## Run

Point `-f` at the workspace directory and run Turbo through dotenvx.

```console
$ dotenvx run -f apps/web -- npx turbo dev --filter=web
```
{: copy="dotenvx run -f apps/web -- npx turbo dev --filter=web"}

Dotenvx resolves `apps/web/.env`, decrypts it, and injects its values into the Turbo process.

## Add a script

Keep the same command in the root package scripts if the team runs it frequently.

```json
{
  "scripts": {
    "dev:web": "dotenvx run -f apps/web -- turbo dev --filter=web"
  }
}
```

Declare environment variables that affect task outputs in `turbo.json` as required by Turborepo's environment-variable configuration.

For a shared root `.env` or separate `.env.keys` location, see [Secrets in monorepos](/docs/monorepos).
