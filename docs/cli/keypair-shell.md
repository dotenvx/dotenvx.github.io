---
layout: docs-cli
title: "--format shell"
eyebrow: "dotenvx keypair"
eyebrow_href: /docs/cli/keypair/
description: Print a shell formatted response of public/private keys.
permalink: /docs/cli/keypair-shell/
redirect_from:
  - /docs/advanced/keypair-shell
  - /docs/advanced/keypair-shell/
  - /docs/ref/cli/keypair-shell
  - /docs/ref/cli/keypair-shell/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Keypair
    href: /docs/cli/keypair/
---

```console
$ echo "HELLO=World" > .env
dotenx encrypt

dotenvx keypair --format shell
DOTENV_PUBLIC_KEY=<publicKey> DOTENV_PRIVATE_KEY=<privateKey>
```
{: copy="echo \"HELLO=World\" > .env"}
