---
doc_type: cli
title: native up
eyebrow: dotenvx native
eyebrow_href: "/docs/cli/native/"
description: Move a private key from .env.keys into the secret store.
permalink: "/docs/cli/native/up/"
redirect_from:
- "/docs/ref/cli/native/up/"
- "/docs/ref/cli/native/up"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
- label: Native
  href: "/docs/cli/native/"
video: cli-native-up
command: dotenvx native up
options_title: Options
options:
- title: native up --file
  href: "/docs/cli/native/up-f/"
- title: native up --keys-file
  href: "/docs/cli/native/up-fk/"
global_options: true
---

Move a private key from `.env.keys` into your OS secret store.

```console
$ dotenvx native up
```
{: copy="dotenvx native up"}

Requires the native build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
