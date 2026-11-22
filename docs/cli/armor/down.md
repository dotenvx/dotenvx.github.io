---
doc_type: cli
title: down
eyebrow: dotenvx armor
eyebrow_href: "/docs/cli/armor/introduction/"
description: Dearmor a private key.
permalink: "/docs/cli/armor/down/"
redirect_from:
- "/docs/advanced/armor-down"
- "/docs/advanced/armor-down/"
- "/docs/ref/cli/armor/down"
- "/docs/ref/cli/armor/down/"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
- label: Armor
  href: "/docs/cli/armor/introduction/"
command: dotenvx armor down
global_options: true
options:
- title: armor down --file
  href: "/docs/cli/armor-down-f/"
- title: armor down --token
  href: "/docs/cli/armor-down-token/"
- title: armor down --team
  href: "/docs/cli/armor-down-team/"
---

```console
$ dotenvx armor down
```
{: copy="dotenvx armor down"}

Use a specific env file.

```console
$ dotenvx armor down -f .env.production
```
{: copy="dotenvx armor down -f .env.production"}

Use a token or team.

```console
$ dotenvx armor down --token token --team team
```
{: copy="dotenvx armor down --token token --team team"}

Requires the armor build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
