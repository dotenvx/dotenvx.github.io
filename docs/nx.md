---
layout: docs-quickstart
title: "Nx"
social_title: "Encrypt a .env file in Nx"
description: "Encrypt an Nx workspace .env file and inject its secrets when Nx runs the application."
icon: nx
permalink: /docs/nx/
redirect_from:
  - /docs/secrets-in-nx/
  - /docs/secrets-in-nx
encrypt_title: "1. Encrypt"
encrypt_lede: "Keep the environment file beside the Nx application and encrypt it."
encrypt_copy: "dotenvx encrypt -f apps/app/.env"
encrypt: |
  $ dotenvx encrypt -f apps/app/.env
encrypt_after_lede: "Commit `apps/app/.env`, but never commit `apps/app/.env.keys`."
inject_title: "2. Run"
inject_lede: "Point `-f` at the application directory and run the Nx target through dotenvx."
inject_copy: "dotenvx run -f apps/app -- npx nx serve app"
inject: |
  $ dotenvx run -f apps/app -- npx nx serve app
inject_after_lede: "Dotenvx resolves `apps/app/.env`, decrypts it, and injects its values only into the Nx process."
run_title: "3. Add a script"
run_lede: "Keep the same command in the root package scripts if the team runs it frequently."
run_copy: |
  {
    "scripts": {
      "dev:app": "dotenvx run -f apps/app -- nx serve app"
    }
  }
run: |
  {
    "scripts": {
      "dev:app": "dotenvx run -f apps/app -- nx serve app"
    }
  }
---

For a shared root `.env` or separate `.env.keys` location, see [Secrets in monorepos](/docs/monorepos).
