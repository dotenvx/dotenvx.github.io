---
layout: docs-cli
title: push
eyebrow: "dotenvx armor"
eyebrow_href: /docs/cli/armor/introduction/
description: Push armored key from .env.keys.
permalink: /docs/cli/armor/push/
redirect_from:
  - /docs/advanced/armor-push
  - /docs/advanced/armor-push/
  - /docs/ref/cli/armor/push
  - /docs/ref/cli/armor/push/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Armor
    href: /docs/cli/armor/introduction/
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
