---
layout: docs-cli
title: "Values with leading dash"
eyebrow: "dotenvx set"
eyebrow_href: /docs/cli/set/
description: Set a value containing a leading dash.
permalink: /docs/cli/set-key-value-with-leading-dash/
redirect_from:
  - /docs/advanced/set-key-value-with-leading-dash
  - /docs/advanced/set-key-value-with-leading-dash/
  - /docs/ref/cli/set-key-value-with-leading-dash
  - /docs/ref/cli/set-key-value-with-leading-dash/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Set
    href: /docs/cli/set/
---
If your value starts with a dash (`-`), then place two dashes instructing the cli that there are no more flag arguments.

```console
$ touch .env.ci

dotenvx set HELLO -f .env.ci -- "- + * ÷"
◈ encrypted HELLO (.env.ci)
```
{: copy="touch .env.ci"}
