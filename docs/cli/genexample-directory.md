---
layout: docs-cli
title: genexample directory
description: Generate a .env.example file inside the specified directory. Useful for monorepos.
permalink: /docs/cli/genexample-directory/
redirect_from:
  - /docs/advanced/genexample-directory
  - /docs/advanced/genexample-directory/
  - /docs/ref/cli/genexample-directory
  - /docs/ref/cli/genexample-directory/
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
mkdir -p apps/backend
echo "HELLO=Backend" > apps/backend/.env

dotenvx genexample apps/backend
▣ generated (.env.example)
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

{% capture cli_file_0 %}
# apps/backend/.env.example
HELLO=""
{% endcapture %}
{% include components/design-codeblock.html value=cli_file_0 copy=false %}
