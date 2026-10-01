---
layout: docs-cli
title: down
eyebrow: "dotenvx armor"
eyebrow_href: /docs/cli/armor/introduction/
description: Dearmor private key.
permalink: /docs/cli/armor/down/
redirect_from:
  - /docs/advanced/armor-down
  - /docs/advanced/armor-down/
  - /docs/ref/cli/armor/down
  - /docs/ref/cli/armor/down/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Armor
    href: /docs/cli/armor/introduction/
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
