---
layout: docs-cli
title: "-ek"
eyebrow: "dotenvx decrypt"
eyebrow_href: /docs/cli/decrypt/
description: Decrypt the contents inside an encrypted .env file except for an excluded key.
permalink: /docs/cli/decrypt-ek/
redirect_from:
  - /docs/advanced/decrypt-ek
  - /docs/advanced/decrypt-ek/
  - /docs/ref/cli/decrypt-ek
  - /docs/ref/cli/decrypt-ek/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Decrypt
    href: /docs/cli/decrypt/
---

```console
$ echo "HELLO=World\nHOLA=Mundo" > .env
dotenvx encrypt
◈ encrypted (.env)
dotenvx decrypt -ek HOLA
◇ decrypted (.env)
```
{: copy="echo \"HELLO=World\nHOLA=Mundo\" > .env"}

Even specify a glob pattern.

```console
$ echo "HELLO=World\nHOLA=Mundo" > .env
dotenvx encrypt
◈ encrypted (.env)
dotenvx decrypt -ek "HO*"
◇ decrypted (.env)
```
{: copy="echo \"HELLO=World\nHOLA=Mundo\" > .env"}
