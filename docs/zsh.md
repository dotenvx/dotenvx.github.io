---
layout: docs-markdown
title: "Zsh"
social_title: "Encrypt a .env file in Zsh"
description: "Encrypt a .env file in Zsh with dotenvx, commit it safely, and inject its secrets at runtime."
icon: zsh
permalink: /docs/zsh/
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
$ dotenvx run --quiet -- zsh -c 'echo Hello $HELLO'
```
{: copy="dotenvx run --quiet -- zsh -c 'echo Hello $HELLO'"}
