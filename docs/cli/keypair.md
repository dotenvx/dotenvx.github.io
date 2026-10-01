---
layout: docs-cli
title: Keypair
description: Print public/private keys for .env file.
permalink: /docs/cli/keypair/
redirect_from:
  - /docs/advanced/keypair
  - /docs/advanced/keypair/
  - /docs/ref/cli/keypair
  - /docs/ref/cli/keypair/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Options
options:
  - title: "keypair -f"
    href: /docs/cli/keypair-f/
  - title: "keypair -fk"
    href: /docs/cli/keypair-fk/
  - title: "keypair KEY"
    href: /docs/cli/keypair-key/
  - title: "keypair --format json"
    href: /docs/cli/keypair-json/
  - title: "keypair --format shell"
    href: /docs/cli/keypair-shell/
  - title: "keypair --format colon"
    href: /docs/cli/keypair-colon/
  - title: "keypair --pretty-print"
    href: /docs/cli/keypair-pretty-print/
  - title: "keypair --no-armor"
    href: /docs/cli/keypair-no-armor/
  - title: "keypair --no-native"
    href: /docs/cli/keypair-no-native/
---

```console
$ dotenvx keypair
{"DOTENV_PUBLIC_KEY":"<publicKey>","DOTENV_PRIVATE_KEY":"<privateKey>"}
```
{: copy="dotenvx keypair"}
