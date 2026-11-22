---
doc_type: cli
title: armor pull
eyebrow: dotenvx armor
eyebrow_href: "/docs/cli/armor/introduction/"
description: Pull an armored private key into .env.keys.
permalink: "/docs/cli/armor/pull/"
redirect_from:
- "/docs/advanced/armor-pull"
- "/docs/advanced/armor-pull/"
- "/docs/ref/cli/armor/pull"
- "/docs/ref/cli/armor/pull/"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
- label: Armor
  href: "/docs/cli/armor/introduction/"
command: dotenvx armor pull
options_title: Options
options:
- title: armor pull --file
  href: "/docs/cli/armor/pull-f/"
- title: armor pull --token
  href: "/docs/cli/armor/pull-token/"
- title: armor pull --team
  href: "/docs/cli/armor/pull-team/"
global_options: true
---

Copy a private key from Dotenvx Armor into `.env.keys`.

```console
$ dotenvx armor pull
```
{: copy="dotenvx armor pull"}

Requires the armor build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
