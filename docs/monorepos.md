---
layout: docs-quickstart
title: "Monorepos"
social_title: "Encrypt .env files in a monorepo"
description: "Load shared or workspace-specific encrypted .env files across a monorepo with dotenvx."
icon: monorepos
permalink: /docs/monorepos/
redirect_from:
  - /docs/secrets-in-monorepos/
  - /docs/secrets-in-monorepos
setup_title: ""
setup_lede: "Point `-f` at a directory and dotenvx loads the `.env` inside it. This makes a shared root `.env` available from any workspace."
setup_copy: |
  my-monorepo/
    .env
    .env.keys
    apps/
      web/
        index.js
setup: |
  my-monorepo/
    .env
    .env.keys
    apps/
      web/
        index.js
encrypt_title: "Load the root `.env`"
encrypt_lede: "From `apps/web`, point `-f` two directories up."
encrypt_copy: "dotenvx run -f ../.. -- node index.js"
encrypt: |
  $ dotenvx run -f ../.. -- node index.js
  ⟐ injected env (1) from ../../.env
  Hello World
encrypt_after_lede: "Encrypted values work without extra configuration when `.env.keys` sits beside the resolved `.env`."
inject_title: "Use a convention"
inject_lede: "With a convention, the directory becomes the base for every convention file."
inject_copy: "dotenvx run -f ../.. --convention=nextjs -- node index.js"
inject: |
  $ dotenvx run -f ../.. --convention=nextjs -- node index.js
  ⟐ injected env (1) from ../../.env.development.local, ../../.env.local, ../../.env.development, ../../.env
  Hello development local
run_title: "Share only `.env.keys`"
run_lede: "If a workspace has its own `.env` but uses the root `.env.keys`, point `-fk` at the root directory."
run_copy: "dotenvx run -f . -fk ../.. -- node index.js"
run: |
  $ dotenvx run -f . -fk ../.. -- node index.js
---

See [Nx](/docs/nx) and [Turborepo](/docs/turborepo) for workspace-specific examples.
