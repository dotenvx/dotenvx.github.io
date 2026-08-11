---
layout: docs-cli
title: del KEY -f
description: Delete a key from another .env file.
permalink: /docs/cli/del-key-f/
redirect_from:
  - /docs/ref/cli/del-key-f/
  - /docs/ref/cli/del-key-f
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Del
    href: /docs/cli/del/
---
{% capture cli_code_0 %}
$ echo "HELLO=production" > .env.production

dotenvx del HELLO -f .env.production
◇ removed HELLO (.env.production)
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=production" > .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
