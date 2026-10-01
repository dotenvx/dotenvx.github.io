---
layout: docs-cli
title: "Values with spaces"
eyebrow: "dotenvx set"
eyebrow_href: /docs/cli/set/
description: Set a value containing spaces.
permalink: /docs/cli/set-key-value-with-spaces/
redirect_from:
  - /docs/advanced/set-key-value-with-spaces
  - /docs/advanced/set-key-value-with-spaces/
  - /docs/ref/cli/set-key-value-with-spaces
  - /docs/ref/cli/set-key-value-with-spaces/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Set
    href: /docs/cli/set/
---

```console
$ touch .env.ci

dotenvx set HELLO "my ci" -f .env.ci
◈ encrypted HELLO (.env.ci)
```
{: copy="touch .env.ci"}
