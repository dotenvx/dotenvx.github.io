---
layout: docs-cli
title: Del
description: Delete a single environment variable.
permalink: /docs/cli/del/
redirect_from:
  - /docs/ref/cli/del/
  - /docs/ref/cli/del
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Options
options:
  - title: "del KEY"
    href: /docs/cli/del-key/
  - title: "del KEY -f"
    href: /docs/cli/del-key-f/
---
{% capture cli_code_0 %}
$ dotenvx del HELLO
◇ removed HELLO (.env)
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx del HELLO{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
