---
layout: docs-cli
title: "KEY -f"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: "Return a single environment variable's value from a specific .env file."
permalink: /docs/cli/get-key-f/
redirect_from:
  - /docs/advanced/get-key-f
  - /docs/advanced/get-key-f/
  - /docs/ref/cli/get-key-f
  - /docs/ref/cli/get-key-f/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---

```console
$ echo "HELLO=World" > .env
echo "HELLO=production" > .env.production

dotenvx get HELLO -f .env.production
production
```
{: copy="echo \"HELLO=World\" > .env"}
