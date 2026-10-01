---
layout: docs-cli
title: "--format eval-export"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Return export statements for loading .env values into the current shell.
permalink: /docs/cli/get-eval-export/
redirect_from:
  - /docs/ref/cli/get-eval-export/
  - /docs/ref/cli/get-eval-export
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---

```console
$ echo "HELLO=World" > .env
dotenvx get --format eval-export
export HELLO='World'
```
{: copy="echo \"HELLO=World\" > .env"}

Evaluate the output to make the values available to subsequent commands in your current shell.

```console
$ eval "$(dotenvx get --format=eval-export)"
echo "$HELLO"
World
```
{: copy="eval \"$(dotenvx get --format=eval-export)\""}

Use `--include-key` to export only matching variables.

```console
$ eval "$(dotenvx get -ik 'TF_VAR_*' --format=eval-export)"
terraform plan
terraform apply
```
{: copy="eval \"$(dotenvx get -ik 'TF_VAR_*' --format=eval-export)\""}

The exported values remain in the current shell until you unset them or close the shell. Prefer `dotenvx run --` when variables only need to be available to a single command.
