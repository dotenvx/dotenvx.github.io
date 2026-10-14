---
layout: docs-markdown
title: "Cron"
social_title: "Encrypt .env secrets for cron jobs"
description: "Encrypt .env secrets for cron jobs with dotenvx and inject them securely at runtime."
mark: "* * * * *"
permalink: /docs/cron/
redirect_from:
  - /docs/secrets-in-cron/
  - /docs/secrets-in-cron
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

Then inject your encrypted secrets in cron jobs with `dotenvx run`.

```shell
# run every day at 8am
0 8 * * * dotenvx run -- /path/to/myscript.sh
```
