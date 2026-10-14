---
layout: docs-markdown
title: "1Password"
social_title: "Use 1Password secrets in .env files"
description: "Use 1Password secret references in .env files and resolve them securely at runtime with dotenvx."
icon: 1password
permalink: /docs/1password/
redirect_from:
  - /docs/guides/1password
  - /docs/guides/1password/
  - /docs/secrets-in-1password
  - /docs/secrets-in-1password/
video: one-password
quickstart_pager: true
---

## Prerequisites

To get the most out of this guide, you'll need to:

- [Install op](https://developer.1password.com/docs/cli/get-started/)

## Install

Get the Dotenvx CLI.

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

## Add a secret reference

Reference a secret from your 1Password vault.

```console
$ echo "HELLO=op://Personal/hello/password" > .env
```
{: copy="echo \"HELLO=op://Personal/hello/password\" > .env"}

## Run

Run your command with the secret resolved from 1Password.

```console
$ dotenvx run -- sh -c 'echo Hello $HELLO'
Hello World
```
{: copy="dotenvx run -- sh -c 'echo Hello $HELLO'"}
