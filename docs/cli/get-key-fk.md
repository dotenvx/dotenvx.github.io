---
layout: docs-cli
title: "KEY -fk"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Specify a .env.keys file or a directory containing one.
permalink: /docs/cli/get-key-fk/
redirect_from:
  - /docs/ref/cli/get-key-fk/
  - /docs/ref/cli/get-key-fk
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---

```console
$ cd apps/web

dotenvx get HELLO -f . -fk ../..
World
```
{: copy="cd apps/web"}

Here the workspace uses its own `.env`, while `-fk ../..` loads the shared root `.env.keys`.
