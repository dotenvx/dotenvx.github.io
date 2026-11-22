---
doc_type: cli
title: Encrypt
description: Encrypt env files.
permalink: "/docs/cli/encrypt/"
redirect_from:
- "/docs/advanced/encrypt"
- "/docs/advanced/encrypt/"
- "/docs/ref/cli/encrypt"
- "/docs/ref/cli/encrypt/"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
options_title: Options
options:
- title: encrypt --file
  href: "/docs/cli/encrypt-f/"
- title: encrypt --keys-file
  href: "/docs/cli/encrypt-fk/"
- title: encrypt --token
  href: "/docs/cli/encrypt-token/"
- title: encrypt --with
  href: "/docs/cli/encrypt-with/"
- title: encrypt --stdout
  href: "/docs/cli/encrypt-stdout/"
- title: encrypt --no-create
  href: "/docs/cli/encrypt-no-create/"
- title: encrypt KEY_PLAIN
  href: "/docs/cli/encrypt-plain-suffix/"
command: dotenvx encrypt
global_options: true
---

```console
$ dotenvx encrypt
◈ encrypted (.env)
```
{: copy="dotenvx encrypt"}

Use [Dotenv.toml storage rules](/docs/dotenvtoml/) to select which values remain encrypted or plaintext.
