---
layout: docs-cli
title: "-fk"
eyebrow: "dotenvx encrypt"
eyebrow_href: /docs/cli/encrypt/
description: Specify path to .env.keys. This is useful with monorepos.
permalink: /docs/cli/encrypt-fk/
redirect_from:
  - /docs/advanced/encrypt-fk
  - /docs/advanced/encrypt-fk/
  - /docs/ref/cli/encrypt-fk
  - /docs/ref/cli/encrypt-fk/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Encrypt
    href: /docs/cli/encrypt/
---

```console
$ mkdir -p apps/app1
echo "HELLO=World" > apps/app1/.env

dotenvx encrypt -fk .env.keys -f apps/app1/.env
◈ encrypted (apps/app1/.env)
```
{: copy="mkdir -p apps/app1"}

Put it to use.

```console
$ dotenvx run -fk .env.keys -f apps/app1/.env
```
{: copy="dotenvx run -fk .env.keys -f apps/app1/.env"}

Use with a relative path.

```console
$ cd apps/app1
dotenvx run -fk ../../.env.keys -f .env
```
{: copy="cd apps/app1"}
