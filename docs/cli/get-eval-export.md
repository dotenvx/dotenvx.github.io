---
layout: docs-cli
title: get --format eval-export
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
{% capture cli_code_0 %}
$ echo "HELLO=World" > .env
dotenvx get --format eval-export
export HELLO='World'
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Evaluate the output to make the values available to subsequent commands in your current shell.

{% capture cli_code_1 %}
$ eval "$(dotenvx get --format=eval-export)"
echo "$HELLO"
World
{% endcapture %}
{% capture cli_code_1_copy %}eval "$(dotenvx get --format=eval-export)"{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

Use `--include-key` to export only matching variables.

{% capture cli_code_2 %}
$ eval "$(dotenvx get -ik 'TF_VAR_*' --format=eval-export)"
terraform plan
terraform apply
{% endcapture %}
{% capture cli_code_2_copy %}eval "$(dotenvx get -ik 'TF_VAR_*' --format=eval-export)"{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}

The exported values remain in the current shell until you unset them or close the shell. Prefer `dotenvx run --` when variables only need to be available to a single command.
