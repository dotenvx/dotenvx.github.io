---
doc_type: cli
title: armor show
description: Print a stored keypair.
permalink: "/docs/cli/armor/show/"
command: dotenvx armor show
eyebrow: dotenvx armor
eyebrow_href: "/docs/cli/armor/introduction/"
global_options: true
options:
- title: armor show --pretty-print
  href: "/docs/cli/armor/show-pretty-print/"
- title: armor show --token
  href: "/docs/cli/armor/show-token/"
- title: armor show --team
  href: "/docs/cli/armor/show-team/"
---

Print a stored keypair.

```console
$ dotenvx armor show "$DOTENV_PUBLIC_KEY"
```
{: copy="dotenvx armor show \"$DOTENV_PUBLIC_KEY\""}

Replace DOTENV_PUBLIC_KEY with the public key of the stored keypair. The JSON output includes its private key.

Requires the armor build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
