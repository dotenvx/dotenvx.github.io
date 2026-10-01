---
layout: docs-cli
title: "-f directory"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Return an environment variable from the .env file in a directory. This is useful with monorepos.
permalink: /docs/cli/get-key-f-directory/
redirect_from:
  - /docs/advanced/get-key-f-directory
  - /docs/advanced/get-key-f-directory/
  - /docs/ref/cli/get-key-f-directory
  - /docs/ref/cli/get-key-f-directory/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
From a workspace, point `-f` at the monorepo root to read its `.env`:

```console
$ cd apps/web

dotenvx get HELLO -f ../..
World
```
{: copy="cd apps/web"}

When `.env.keys` sits beside the resolved `.env`, encrypted values are decrypted automatically.
