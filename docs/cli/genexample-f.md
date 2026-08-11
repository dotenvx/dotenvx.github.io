---
layout: docs-cli
title: genexample -f
description: Pass multiple .env files to generate your .env.example file from the combination of their contents.
permalink: /docs/cli/genexample-f/
redirect_from:
  - /docs/advanced/genexample-f
  - /docs/advanced/genexample-f/
  - /docs/ref/cli/genexample-f
  - /docs/ref/cli/genexample-f/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Genexample
    href: /docs/cli/genexample/
---
{% capture cli_code_0 %}
$ echo "HELLO=World" > .env
echo "DB_HOST=example.com" > .env.production

dotenvx genexample -f .env -f .env.production
▣ generated (.env.example)
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

{% capture cli_file_0 %}
# .env.example
HELLO=""
DB_HOST=""
{% endcapture %}
{% include components/design-codeblock.html value=cli_file_0 copy=false %}
