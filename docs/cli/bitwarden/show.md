---
doc_type: cli
title: bitwarden show
description: Print a stored keypair.
permalink: "/docs/cli/bitwarden/show/"
command: dotenvx bitwarden show
eyebrow: dotenvx bitwarden
eyebrow_href: "/docs/cli/bitwarden/"
global_options: true
options:
- title: bitwarden show --pretty-print
  href: "/docs/cli/bitwarden/show-pretty-print/"
---

Print a stored keypair.

```console
$ dotenvx bitwarden show "$DOTENV_PUBLIC_KEY"
```
{: copy="dotenvx bitwarden show \"$DOTENV_PUBLIC_KEY\""}

Replace DOTENV_PUBLIC_KEY with the public key of the stored keypair. The JSON output includes its private key.

Requires the bitwarden build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
