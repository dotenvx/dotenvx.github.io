---
layout: docs-cli
title: "KEY value -f"
eyebrow: "dotenvx set"
eyebrow_href: /docs/cli/set/
description: Set an (encrypted) key/value for another .env file.
permalink: /docs/cli/set-key-value-f/
redirect_from:
  - /docs/advanced/set-key-value-f
  - /docs/advanced/set-key-value-f/
  - /docs/ref/cli/set-key-value-f
  - /docs/ref/cli/set-key-value-f/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Set
    href: /docs/cli/set/
---

```console
$ touch .env.production

dotenvx set HELLO production -f .env.production
◈ encrypted HELLO (.env.production)
```
{: copy="touch .env.production"}
