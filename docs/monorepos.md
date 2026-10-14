---
layout: docs-markdown
title: "Monorepos"
social_title: "Encrypt .env files in a monorepo"
description: "Load shared or workspace-specific encrypted .env files across a monorepo with dotenvx."
icon: monorepos
permalink: /docs/monorepos/
redirect_from:
  - /docs/secrets-in-monorepos/
  - /docs/secrets-in-monorepos
quickstart_pager: true
---

Point `-f` at a directory and dotenvx loads the `.env` inside it. This makes a shared root `.env` available from any workspace.

```text
my-monorepo/
  .env
  .env.keys
  apps/
    web/
      index.js
```

## Load the root `.env`

From `apps/web`, point `-f` two directories up.

```console
$ dotenvx run -f ../.. -- node index.js
⟐ injected env (1) from ../../.env
Hello World
```
{: copy="dotenvx run -f ../.. -- node index.js"}

Encrypted values work without extra configuration when `.env.keys` sits beside the resolved `.env`.

## Use a convention

With a convention, the directory becomes the base for every convention file.

```console
$ dotenvx run -f ../.. --convention=nextjs -- node index.js
⟐ injected env (1) from ../../.env.development.local, ../../.env.local, ../../.env.development, ../../.env
Hello development local
```
{: copy="dotenvx run -f ../.. --convention=nextjs -- node index.js"}

## Share only `.env.keys`

If a workspace has its own `.env` but uses the root `.env.keys`, point `-fk` at the root directory.

```console
$ dotenvx run -f . -fk ../.. -- node index.js
```
{: copy="dotenvx run -f . -fk ../.. -- node index.js"}

See [Nx](/docs/nx) and [Turborepo](/docs/turborepo) for workspace-specific examples.
