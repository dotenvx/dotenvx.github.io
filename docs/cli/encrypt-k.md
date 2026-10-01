---
layout: docs-cli
title: "-k"
eyebrow: "dotenvx encrypt"
eyebrow_href: /docs/cli/encrypt/
description: Specify the key(s) to encrypt by passing --key.
permalink: /docs/cli/encrypt-k/
redirect_from:
  - /docs/advanced/encrypt-k
  - /docs/advanced/encrypt-k/
  - /docs/ref/cli/encrypt-k
  - /docs/ref/cli/encrypt-k/
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

dotenvx encrypt -k HELLO2
◈ encrypted (.env)
```
{: copy="echo \"HELLO=World\nHELLO2=Universe\" > .env"}

Even specify a glob pattern.

```console
$ echo "HELLO=World\nHOLA=Mundo" > .env

dotenvx encrypt -k "HE*"
◈ encrypted (.env)
```
{: copy="echo \"HELLO=World\nHOLA=Mundo\" > .env"}
