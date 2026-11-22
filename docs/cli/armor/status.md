---
doc_type: cli
title: status
eyebrow: dotenvx armor
eyebrow_href: "/docs/cli/armor/introduction/"
description: Print Armor status.
permalink: "/docs/cli/armor/status/"
redirect_from:
- "/docs/ref/cli/armor/status/"
- "/docs/ref/cli/armor/status"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
- label: Armor
  href: "/docs/cli/armor/introduction/"
command: dotenvx armor status
global_options: true
---

```console
$ dotenvx armor status
on
```
{: copy="dotenvx armor status"}

The command prints `on` when you are logged in and Armor is enabled. Otherwise, it prints `off`.

Requires the armor build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
