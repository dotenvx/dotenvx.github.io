---
doc_type: cli
title: encrypt --with
description: Encrypt using a specific public key.
permalink: "/docs/cli/encrypt-with/"
command: dotenvx encrypt --with
eyebrow: dotenvx encrypt
eyebrow_href: "/docs/cli/encrypt/"
---

Encrypt using a specific public key.

Set DOTENV_PUBLIC_KEY to the recipient public key. Use a fresh env file, or a file whose existing public key matches that key.

```console
$ dotenvx encrypt --with "$DOTENV_PUBLIC_KEY"
```
{: copy="dotenvx encrypt --with \"$DOTENV_PUBLIC_KEY\""}
