---
layout: docs-cli
title: "--ignore"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Ignore specific error codes.
permalink: /docs/cli/run-ignore/
redirect_from:
  - /docs/ref/cli/run-ignore/
  - /docs/ref/cli/run-ignore
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---

```console
$ dotenvx run --ignore=MISSING_ENV_FILE -- yourcommand
```
{: copy="dotenvx run --ignore=MISSING_ENV_FILE -- yourcommand"}

Ignore multiple error codes by separating them with spaces.

```console
$ dotenvx run --ignore=MISSING_ENV_FILE MISSING_KEY -- yourcommand
```
{: copy="dotenvx run --ignore=MISSING_ENV_FILE MISSING_KEY -- yourcommand"}

You can also set `DOTENV_CONFIG_IGNORE`. Its value is a comma-separated list.

```console
$ DOTENV_CONFIG_IGNORE=MISSING_ENV_FILE,OTHER dotenvx run -- yourcommand
```
{: copy="DOTENV_CONFIG_IGNORE=MISSING_ENV_FILE,OTHER dotenvx run -- yourcommand"}
