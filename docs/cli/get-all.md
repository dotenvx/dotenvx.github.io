---
layout: docs-cli
title: "--all"
eyebrow: "dotenvx get"
eyebrow_href: /docs/cli/get/
description: Return preset machine envs as well.
permalink: /docs/cli/get-all/
redirect_from:
  - /docs/advanced/get-all
  - /docs/advanced/get-all/
  - /docs/ref/cli/get-all
  - /docs/ref/cli/get-all/
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

dotenvx get --all
{"PWD":"/some/file/path","USER":"username","LIBRARY_PATH":"/usr/local/lib", ..., "HELLO":"World"}
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
