---
layout: docs-cli
title: "-f directory"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Run a command using the .env file in a directory. This is useful with monorepos.
permalink: /docs/cli/run-f-directory/
redirect_from:
  - /docs/advanced/run-f-directory
  - /docs/advanced/run-f-directory/
  - /docs/ref/cli/run-f-directory
  - /docs/ref/cli/run-f-directory/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
From a workspace, point `-f` at the monorepo root to load its `.env`:

```console
$ cd apps/web

dotenvx run -f ../.. -- node index.js
⟐ injected env (1) from ../../.env
Hello World
```
{: copy="cd apps/web"}

When `.env.keys` sits beside the resolved `.env`, encrypted values are decrypted automatically.
