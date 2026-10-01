---
layout: docs-cli
title: "-f"
eyebrow: "dotenvx encrypt"
eyebrow_href: /docs/cli/encrypt/
description: Encrypt the contents of a specified .env file to an encrypted .env file.
permalink: /docs/cli/encrypt-f/
redirect_from:
  - /docs/advanced/encrypt-f
  - /docs/advanced/encrypt-f/
  - /docs/ref/cli/encrypt-f
  - /docs/ref/cli/encrypt-f/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Encrypt
    href: /docs/cli/encrypt/
---

```console
$ echo "HELLO=World" > .env
echo "HELLO=Production" > .env.production

dotenvx encrypt -f .env.production
◈ encrypted (.env.production)
```
{: copy="echo \"HELLO=World\" > .env"}
