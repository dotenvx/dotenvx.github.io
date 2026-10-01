---
layout: docs-cli
title: "-fk"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Specify a .env.keys file or a directory containing one. This is useful with monorepos.
permalink: /docs/cli/run-fk/
redirect_from:
  - /docs/advanced/run-fk
  - /docs/advanced/run-fk/
  - /docs/ref/cli/run-fk
  - /docs/ref/cli/run-fk/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---

```console
$ cd apps/web

dotenvx run -f . -fk ../.. -- node index.js
```
{: copy="cd apps/web"}

Here the workspace uses its own `.env`, while `-fk ../..` loads the shared root `.env.keys`.
