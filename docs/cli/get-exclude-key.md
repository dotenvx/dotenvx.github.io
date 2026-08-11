---
layout: docs-cli
title: get -ek
description: Exclude keys that match a glob pattern.
permalink: /docs/cli/get-exclude-key/
redirect_from:
  - /docs/ref/cli/get-exclude-key/
  - /docs/ref/cli/get-exclude-key
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Get
    href: /docs/cli/get/
---
Pass `--exclude-key`, or its `-ek` alias. Glob patterns are supported.

{% capture cli_code_0 %}
$ echo "DOTENV_PUBLIC_KEY=public\nHELLO=World" > .env

$ dotenvx get --format=eval-export -ek "DOTENV_PUBLIC_KEY*"
export HELLO='World'
{% endcapture %}
{% capture cli_code_0_copy %}echo "DOTENV_PUBLIC_KEY=public\nHELLO=World" > .env
dotenvx get --format=eval-export -ek "DOTENV_PUBLIC_KEY*"{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
