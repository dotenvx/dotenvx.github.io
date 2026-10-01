---
layout: docs-cli
title: KEY
eyebrow: "dotenvx keypair"
eyebrow_href: /docs/cli/keypair/
description: Print specific keypair for .env file.
permalink: /docs/cli/keypair-key/
redirect_from:
  - /docs/advanced/keypair-key
  - /docs/advanced/keypair-key/
  - /docs/ref/cli/keypair-key
  - /docs/ref/cli/keypair-key/
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
dotenvx encrypt

dotenvx keypair DOTENV_PRIVATE_KEY
<privateKey>
```
{: copy="echo \"HELLO=World\" > .env"}
