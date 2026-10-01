---
layout: docs-cli
title: "-k"
eyebrow: "dotenvx decrypt"
eyebrow_href: /docs/cli/decrypt/
description: Decrypt the contents of a specified key inside an encrypted .env file.
permalink: /docs/cli/decrypt-k/
redirect_from:
  - /docs/advanced/decrypt-k
  - /docs/advanced/decrypt-k/
  - /docs/ref/cli/decrypt-k
  - /docs/ref/cli/decrypt-k/
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
dotenvx decrypt -k HELLO
◇ decrypted (.env)
```
{: copy="echo \"HELLO=World\nHOLA=Mundo\" > .env"}

Even specify a glob pattern.

```console
$ echo "HELLO=World\nHOLA=Mundo" > .env
dotenvx encrypt
◈ encrypted (.env)
dotenvx decrypt -k "HE*"
◇ decrypted (.env)
```
{: copy="echo \"HELLO=World\nHOLA=Mundo\" > .env"}
