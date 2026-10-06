---
layout: docs-custody
title: Armor
description: Manage private-key custody with Dotenvx Armor.
permalink: "/docs/custody/armor/"
eyebrow: Custody
eyebrow_href: "/docs/custody/"
mark: Armor
---

Keep your encrypted `.env` in your project. Let Armor manage access to its private key.

## Store

Start with an [encrypted .env](/docs/custody/env-keys/). Sign in, then move its private key into Armor:

```console
$ dotenvx armor login
$ dotenvx armor up
```
{: copy="dotenvx armor login
dotenvx armor up"}

Dotenvx removes the local key after Armor accepts it. Your `.env` stays encrypted.

For a specific environment, use `dotenvx armor up -f .env.production`.

## Run

```console
$ dotenvx run -- node index.js
```
{: copy="dotenvx run -- node index.js"}

Dotenvx requests the key from Armor before starting your app. Sign in on each machine that needs access. If approval is required, approve the request in Armor.

## Move back

Move the private key back into `.env.keys`:

```console
$ dotenvx armor down
```
{: copy="dotenvx armor down"}

Keep `.env.keys` out of source control.

See [Armor commands](/docs/cli/armor/introduction/) for teams, tokens, and other options.
