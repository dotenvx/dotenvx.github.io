---
layout: docs-custody
title: Bitwarden
description: Keep your private keys in Bitwarden.
permalink: "/docs/custody/bitwarden/"
eyebrow: Custody
eyebrow_href: "/docs/custody/"
mark: Bitwarden
---

Store the private key in Bitwarden. Your encrypted `.env` stays in your project.

## Store

Install the Bitwarden CLI (`bw`) and sign in:

```console
$ bw login
```
{: copy="bw login"}

Start with an [encrypted .env and .env.keys](/docs/custody/env-keys/), then move the key:

```console
$ dotenvx bitwarden up
```
{: copy="dotenvx bitwarden up"}

Dotenvx prompts to unlock your vault if needed. It creates a personal vault item, verifies it, and removes the key from `.env.keys`. A reference to the item stays in your local Dotenvx settings.

For `.env.production`, add `-f .env.production`.

## Run

```console
$ dotenvx run -- node index.js
```
{: copy="dotenvx run -- node index.js"}

Dotenvx reads the key through `bw` before starting your app. For noninteractive use, provide an unlocked `BW_SESSION`.

## Move back

```console
$ dotenvx bitwarden down
```
{: copy="dotenvx bitwarden down"}

This writes the key to `.env.keys` and deletes its Bitwarden item. Use `dotenvx bitwarden pull` to copy it back without deleting the item.

Keep `.env.keys` out of source control. See [Bitwarden commands](/docs/cli/bitwarden/) for more.
