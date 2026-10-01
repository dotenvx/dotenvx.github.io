---
layout: docs-cli
title: Help
description: Display help for dotenvx or a specific command.
permalink: /docs/cli/help/
redirect_from:
  - /docs/ref/cli/help/
  - /docs/ref/cli/help
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
---
Display the top-level command list and options:

```console
$ dotenvx help
Usage: dotenvx run -- yourcommand

a secure dotenv–from the creator of `dotenv`

Options:
  -V, --version  output the version number
  -h, --help     display help for command

Commands:
  run
  get [KEY]
  set <KEY> <value>
  encrypt
  decrypt
  keypair [KEY]
  ls [directory]
  gitignore
  genexample [directory]
  validate
  precommit [directory]
  prebuild [directory]
```
{: copy="dotenvx help"}

Pass a command name for detailed help:

```console
$ dotenvx help run
Usage: dotenvx run [options] -- yourcommand
```
{: copy="dotenvx help run"}
