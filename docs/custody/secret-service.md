---
doc_type: custody
title: Secret Service
description: Keep your private keys in Linux Secret Service.
permalink: /docs/custody/secret-service/
eyebrow: Local
eyebrow_href: /docs/custody/local/
mark: Secret Service
---

Keep the private key in your Linux secret store. You need `secret-tool` and an available Secret Service on your desktop session.

## Store

Install the [native feature](/docs/cli/install-add/):

```console
$ dotenvx install --add native
```
{: copy="dotenvx install --add native"}

Start with an [encrypted .env and .env.keys](/docs/custody/classic/), then move the key:

```console
$ dotenvx native up
```
{: copy="dotenvx native up"}

Dotenvx verifies the key in Linux Secret Service before removing it from `.env.keys`. Your `.env` stays encrypted.

For `.env.production`, add `-f .env.production`.

## Run

```console
$ dotenvx run -- node index.js
```
{: copy="dotenvx run -- node index.js"}

Dotenvx reads the key from Linux Secret Service before starting your app. Run under the same user account, with access to the secret store.

## Move back

```console
$ dotenvx native down
```
{: copy="dotenvx native down"}

This moves the key back into `.env.keys`. Use `dotenvx native pull` to copy it back while keeping the stored key.

Keep `.env.keys` out of source control. See [native commands](/docs/cli/native/) for more.
