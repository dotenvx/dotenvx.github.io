---
doc_type: cli
title: Keypair
description: Print public and private keys for env files.
permalink: "/docs/cli/keypair/"
redirect_from:
- "/docs/advanced/keypair"
- "/docs/advanced/keypair/"
- "/docs/ref/cli/keypair"
- "/docs/ref/cli/keypair/"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
options_title: Options
options:
- title: keypair --file
  href: "/docs/cli/keypair-f/"
- title: keypair --keys-file
  href: "/docs/cli/keypair-fk/"
- title: keypair --token
  href: "/docs/cli/keypair-token/"
- title: keypair --pretty-print
  href: "/docs/cli/keypair-pretty-print/"
- title: keypair --format
  href: "/docs/cli/keypair-format/"
- title: keypair KEY
  href: "/docs/cli/keypair-key/"
- title: keypair --format json
  href: "/docs/cli/keypair-json/"
- title: keypair --format shell
  href: "/docs/cli/keypair-shell/"
command: dotenvx keypair
global_options: true
---

```console
$ dotenvx keypair
{"DOTENV_PUBLIC_KEY":"<publicKey>","DOTENV_PRIVATE_KEY":"<privateKey>"}
```
{: copy="dotenvx keypair"}
