---
layout: docs-side-path
title: CI & Production
description: Encrypt .env.ci, .env.production, or another environment file.
permalink: /docs/quickstart/env-files/
markdown_url: /docs/quickstart/env-files.md
parent_url: /docs/quickstart/#encrypt
parent_title: Quickstart
side_path_kind: Alternative
---

Use -f to choose the file to encrypt.

## CI

```dotenv
# .env.ci
HELLO="CI"
```
{: copy="HELLO=\"CI\""}

```console
$ dotenvx encrypt -f .env.ci
```
{: copy="dotenvx encrypt -f .env.ci"}

[GitHub Actions guide →](/docs/github-actions/)

## Production

```dotenv
# .env.production
HELLO="Production"
```
{: copy="HELLO=\"Production\""}

```console
$ dotenvx encrypt -f .env.production
```
{: copy="dotenvx encrypt -f .env.production"}

Use the same file when running your command:

```console
$ dotenvx run -f .env.production -- printenv HELLO
```
{: copy="dotenvx run -f .env.production -- printenv HELLO"}

