---
layout: docs-cli
title: "--format colon"
eyebrow: "dotenvx keypair"
eyebrow_href: /docs/cli/keypair/
description: Print a colon formatted response of public/private keys.
permalink: /docs/cli/keypair-colon/
redirect_from:
  - /docs/ref/cli/keypair-colon/
  - /docs/ref/cli/keypair-colon
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

dotenvx keypair --format colon
DOTENV_PUBLIC_KEY:<publicKey> DOTENV_PRIVATE_KEY:<privateKey>
```
{: copy="echo \"HELLO=World\" > .env"}
