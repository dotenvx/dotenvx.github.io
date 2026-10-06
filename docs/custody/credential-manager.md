---
layout: docs-custody
title: Credential Manager
description: Keep your private keys in Windows Credential Manager.
permalink: /docs/custody/credential-manager/
eyebrow: Local
eyebrow_href: /docs/custody/local/
mark: Credential Manager
---

Keep the private key in Windows Credential Manager, under your user account.

## Store

Start with an [encrypted .env and .env.keys](/docs/custody/env-keys/), then move the key:

```console
$ dotenvx native up
```
{: copy="dotenvx native up"}

Dotenvx verifies the key in Windows Credential Manager before removing it from `.env.keys`. Your `.env` stays encrypted.

For `.env.production`, add `-f .env.production`.

## Run

```console
$ dotenvx run -- node index.js
```
{: copy="dotenvx run -- node index.js"}

Dotenvx reads the key from Windows Credential Manager before starting your app. Run under the same user account, with access to the secret store.

## Move back

```console
$ dotenvx native down
```
{: copy="dotenvx native down"}

This moves the key back into `.env.keys`. Use `dotenvx native pull` to copy it back while keeping the stored key.

Keep `.env.keys` out of source control. See [native commands](/docs/cli/native/) for more.
