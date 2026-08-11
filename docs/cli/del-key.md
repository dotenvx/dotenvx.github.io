---
layout: docs-cli
title: KEY
eyebrow: "dotenvx del"
eyebrow_href: /docs/cli/del/
description: Delete a single key from your .env file.
permalink: /docs/cli/del-key/
redirect_from:
  - /docs/ref/cli/del-key/
  - /docs/ref/cli/del-key
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Del
    href: /docs/cli/del/
---
{% capture cli_code_0 %}
$ echo "HELLO=World" > .env

dotenvx del HELLO
◇ removed HELLO (.env)
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
