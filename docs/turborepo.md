---
layout: docs-quickstart
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
encrypt_title: "1. Encrypt"
encrypt_lede: "Keep the environment file beside the workspace that uses it and encrypt it."
encrypt_copy: "dotenvx encrypt -f apps/web/.env"
encrypt: |
  $ dotenvx encrypt -f apps/web/.env
encrypt_after_lede: "Commit `apps/web/.env`, but never commit `apps/web/.env.keys`."
inject_title: "2. Run"
inject_lede: "Point `-f` at the workspace directory and run Turbo through dotenvx."
inject_copy: "dotenvx run -f apps/web -- npx turbo dev --filter=web"
inject: |
  $ dotenvx run -f apps/web -- npx turbo dev --filter=web
inject_after_lede: "Dotenvx resolves `apps/web/.env`, decrypts it, and injects its values into the Turbo process."
run_title: "3. Add a script"
run_lede: "Keep the same command in the root package scripts if the team runs it frequently."
run_copy: |
  {
    "scripts": {
      "dev:web": "dotenvx run -f apps/web -- turbo dev --filter=web"
    }
  }
run: |
  {
    "scripts": {
      "dev:web": "dotenvx run -f apps/web -- turbo dev --filter=web"
    }
  }
---

Declare environment variables that affect task outputs in `turbo.json` as required by Turborepo's environment-variable configuration.

For a shared root `.env` or separate `.env.keys` location, see [Secrets in monorepos](/docs/monorepos).
