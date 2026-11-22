---
doc_type: cli
title: native show
description: Print a stored keypair.
permalink: "/docs/cli/native/show/"
command: dotenvx native show
eyebrow: dotenvx native
eyebrow_href: "/docs/cli/native/"
global_options: true
options:
- title: native show --pretty-print
  href: "/docs/cli/native/show-pretty-print/"
---

Print a stored keypair.

```console
$ dotenvx native show "$DOTENV_PUBLIC_KEY"
```
{: copy="dotenvx native show \"$DOTENV_PUBLIC_KEY\""}

Replace DOTENV_PUBLIC_KEY with the public key of the stored keypair. The JSON output includes its private key.

Requires the native build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
