---
doc_type: cli
title: push
eyebrow: dotenvx armor
eyebrow_href: "/docs/cli/armor/introduction/"
description: Push an armored private key.
permalink: "/docs/cli/armor/push/"
redirect_from:
- "/docs/advanced/armor-push"
- "/docs/advanced/armor-push/"
- "/docs/ref/cli/armor/push"
- "/docs/ref/cli/armor/push/"
crumbs:
- label: Docs
  href: "/docs/introduction"
- label: CLI
  href: "/docs/cli"
- label: Armor
  href: "/docs/cli/armor/introduction/"
command: dotenvx armor push
global_options: true
options:
- title: armor push --file
  href: "/docs/cli/armor-push-f/"
- title: armor push --token
  href: "/docs/cli/armor-push-token/"
- title: armor push --team
  href: "/docs/cli/armor-push-team/"
---

```console
$ dotenvx armor push
```
{: copy="dotenvx armor push"}

Use a specific env file.

```console
$ dotenvx armor push -f .env.production
```
{: copy="dotenvx armor push -f .env.production"}

Use a token or team.

```console
$ dotenvx armor push --token token --team team
```
{: copy="dotenvx armor push --token token --team team"}

Requires the armor build feature. Add it with [dotenvx install --add](/docs/cli/install-add/).
