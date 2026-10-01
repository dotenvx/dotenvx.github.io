---
layout: docs-cli
title: "-ek"
eyebrow: "dotenvx encrypt"
eyebrow_href: /docs/cli/encrypt/
description: Specify the key(s) to NOT encrypt by passing --exclude-key.
permalink: /docs/cli/encrypt-ek/
redirect_from:
  - /docs/advanced/encrypt-ek
  - /docs/advanced/encrypt-ek/
  - /docs/ref/cli/encrypt-ek
  - /docs/ref/cli/encrypt-ek/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Encrypt
    href: /docs/cli/encrypt/
---

```console
$ echo "HELLO=World\nHELLO2=Universe" > .env

dotenvx encrypt -ek HELLO
◈ encrypted (.env)
```
{: copy="echo \"HELLO=World\nHELLO2=Universe\" > .env"}

Even specify a glob pattern.

```console
$ echo "HELLO=World\nHOLA=Mundo" > .env

dotenvx encrypt -ek "HO*"
◈ encrypted (.env)
```
{: copy="echo \"HELLO=World\nHOLA=Mundo\" > .env"}
