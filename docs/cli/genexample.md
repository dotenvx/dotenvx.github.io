---
layout: docs-cli
title: Genexample
description: Generate a .env.example file from your current .env file contents.
permalink: /docs/cli/genexample/
redirect_from:
  - /docs/ref/cli/genexample/
  - /docs/ref/cli/genexample
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
---
{% capture cli_code_0 %}
$ echo "HELLO=World" > .env

dotenvx genexample
▣ generated (.env.example)
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

{% capture cli_fix_9041501 %}
# .env.example
HELLO=""
{% endcapture %}
{% include components/design-codeblock.html value=cli_fix_9041501 copy=false %}
