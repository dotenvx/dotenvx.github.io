---
layout: docs-cli
title: Ls
description: Print all .env files in a tree structure.
permalink: /docs/cli/ls/
redirect_from:
  - /docs/cli/ext
  - /docs/cli/ext-ls
  - /docs/cli/ext-ls-directory
  - /docs/cli/ext-ls-directory/
  - /docs/cli/ext-ls-ef
  - /docs/cli/ext-ls-ef/
  - /docs/cli/ext-ls-f
  - /docs/cli/ext-ls-f/
  - /docs/cli/ext-ls/
  - /docs/cli/ext/
  - /docs/ref/cli/ls
  - /docs/ref/cli/ls/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
video: cli-ls
---

```console
$ dotenvx ls
├─ .env.production
├─ .env
└─ apps
   └─ backend
      └─ .env
```
{: copy="dotenvx ls"}

Pass a directory to list `.env` files under that path.

```console
$ dotenvx ls apps/backend
└─ .env
```
{: copy="dotenvx ls apps/backend"}

## JSON output

Use `--json` to print matching `.env` files as a JSON array of absolute filepaths.

```console
$ dotenvx ls --json
[
  "/path/to/project/.env",
  "/path/to/project/apps/backend/.env"
]
```
{: copy="dotenvx ls --json"}

Progress and summary details are written to stderr, so stdout can be safely piped to another command or file.

```console
$ dotenvx ls --json > dotenv-files.json
```
{: copy="dotenvx ls --json > dotenv-files.json"}
