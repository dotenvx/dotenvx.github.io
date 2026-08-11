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

{% capture cli_code_0 %}
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
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx help{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Pass a command name for detailed help:

{% capture cli_code_1 %}
$ dotenvx help run
Usage: dotenvx run [options] -- yourcommand
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx help run{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}
