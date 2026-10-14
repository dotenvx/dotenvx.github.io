---
layout: docs-markdown
title: "Fish"
social_title: "Encrypt a .env file in Fish"
description: "Encrypt a .env file in Fish with dotenvx, commit it safely, and inject its secrets at runtime."
icon: fish
permalink: /docs/fish/
redirect_from:
  - /docs/secrets-in-fish/
  - /docs/secrets-in-fish
quickstart_pager: true
---

## Install

Get the Dotenvx CLI.

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

## Encrypt

Encrypt your .env file.

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

## Inject

Then inject your encrypted secrets at runtime with dotenvx run.

```console
$ dotenvx run --quiet -- sh -c 'echo Hello $HELLO'
```
{: copy="dotenvx run --quiet -- sh -c 'echo Hello $HELLO'"}
