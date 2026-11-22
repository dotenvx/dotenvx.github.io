---
doc_type: cli
title: Decrypt
description: Decrypt env files.
permalink: "/docs/cli/decrypt/"
redirect_from:
- "/docs/advanced/decrypt"
- "/docs/advanced/decrypt/"
- "/docs/ref/cli/decrypt"
- "/docs/ref/cli/decrypt/"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
options_title: Options
options:
- title: decrypt --file
  href: "/docs/cli/decrypt-f/"
- title: decrypt --keys-file
  href: "/docs/cli/decrypt-fk/"
- title: decrypt --token
  href: "/docs/cli/decrypt-token/"
- title: decrypt --stdout
  href: "/docs/cli/decrypt-stdout/"
command: dotenvx decrypt
global_options: true
---

```console
$ dotenvx decrypt
◇ decrypted (.env)
```
{: copy="dotenvx decrypt"}

Use [Dotenvx.toml storage rules](/docs/dotenvxtoml/) to select which values remain encrypted or plaintext.
