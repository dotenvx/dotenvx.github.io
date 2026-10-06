---
layout: docs-custody
title: 1Password
description: Keep your private keys in 1Password.
permalink: "/docs/custody/1password/"
eyebrow: Custody
eyebrow_href: "/docs/custody/"
mark: 1Password
---

Store the private key in 1Password. Your encrypted `.env` stays in your project.

## Store

Install the 1Password CLI (`op` version 2) and sign in. Start with an [encrypted .env and .env.keys](/docs/custody/env-keys/), then move the key:

```console
$ dotenvx 1password up
```
{: copy="dotenvx 1password up"}

Dotenvx creates a vault item, verifies it, and removes the key from `.env.keys`. It saves a reference to the item in your local Dotenvx settings.

For `.env.production`, add `-f .env.production`.

## Run

```console
$ dotenvx run -- node index.js
```
{: copy="dotenvx run -- node index.js"}

Dotenvx reads the key through `op` before starting your app. Keep the CLI signed in with access to the vault.

## Move back

```console
$ dotenvx 1password down
```
{: copy="dotenvx 1password down"}

This writes the key to `.env.keys` and deletes its 1Password item. Use `dotenvx 1password pull` to copy it back without deleting the item.

Keep `.env.keys` out of source control. See [1Password commands](/docs/cli/1password/) for more.
