---
layout: docs-markdown
title: "Bitwarden"
social_title: "Use Bitwarden secrets in .env files"
description: "Use Bitwarden secret references in .env files and resolve them securely at runtime with dotenvx."
icon: bitwarden
permalink: /docs/bitwarden/
redirect_from:
  - /docs/guides/bitwarden
  - /docs/guides/bitwarden/
  - /docs/secrets-in-bitwarden
  - /docs/secrets-in-bitwarden/
video: bitwarden
quickstart_pager: true
---

## Prerequisites

To get the most out of this guide, you'll need to:

- [Install the Bitwarden CLI](https://bitwarden.com/help/cli/)

## Install

Get the Dotenvx CLI.

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

## Add a secret reference

Reference a login item from your Bitwarden vault. Item names can contain spaces.

```console
$ echo 'PASSWORD="bw://My GitHub Account/password"' > .env
```
{: copy="echo 'PASSWORD=\"bw://My GitHub Account/password\"' > .env"}

The reference format is `bw://<item>/<field>`. Use an item name or ID with the `username`, `password`, or `uri` field.

## Run

Run your command with the secret resolved from Bitwarden. If the vault is locked, Bitwarden prompts you to unlock it.

```console
$ dotenvx run -- sh -c 'echo Password loaded: ${PASSWORD:+yes}'
Password loaded: yes
```
{: copy="dotenvx run -- sh -c 'echo Password loaded: ${PASSWORD:+yes\}'"}
