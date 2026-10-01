---
layout: docs-cli
title: "KEY --ignore"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Ignore specific error codes.
permalink: /docs/cli/get-key-ignore/
redirect_from:
  - /docs/ref/cli/get-key-ignore/
  - /docs/ref/cli/get-key-ignore
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---

```console
$ dotenvx get HELLO --ignore=MISSING_ENV_FILE
```
{: copy="dotenvx get HELLO --ignore=MISSING_ENV_FILE"}

Ignore multiple error codes by separating them with spaces.

```console
$ dotenvx get HELLO --ignore=MISSING_ENV_FILE MISSING_KEY
```
{: copy="dotenvx get HELLO --ignore=MISSING_ENV_FILE MISSING_KEY"}

You can also set `DOTENV_CONFIG_IGNORE`. Its value is a comma-separated list.

```console
$ DOTENV_CONFIG_IGNORE=MISSING_ENV_FILE,OTHER dotenvx get HELLO
```
{: copy="DOTENV_CONFIG_IGNORE=MISSING_ENV_FILE,OTHER dotenvx get HELLO"}
