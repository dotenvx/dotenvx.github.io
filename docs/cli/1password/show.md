---
doc_type: cli
title: 1password show
description: Print a stored keypair.
permalink: "/docs/cli/1password/show/"
command: dotenvx 1password show
eyebrow: dotenvx 1password
eyebrow_href: "/docs/cli/1password/"
global_options: true
options:
- title: 1password show --pretty-print
  href: "/docs/cli/1password/show-pretty-print/"
---

Print a stored keypair.

```console
$ dotenvx 1password show "$DOTENV_PUBLIC_KEY"
```
{: copy="dotenvx 1password show \"$DOTENV_PUBLIC_KEY\""}

Replace DOTENV_PUBLIC_KEY with the public key of the stored keypair. The JSON output includes its private key.

Requires the 1password build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
