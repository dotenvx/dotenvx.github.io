---
layout: docs-cli
title: set KEY value -f
description: Set an (encrypted) key/value for another .env file.
permalink: /docs/cli/set-key-value-f/
redirect_from:
  - /docs/ref/cli/set-key-value-f/
  - /docs/ref/cli/set-key-value-f
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Set
    href: /docs/cli/set/
---
{% capture cli_code_0 %}
$ touch .env.production

dotenvx set HELLO production -f .env.production
◈ encrypted HELLO (.env.production)
{% endcapture %}
{% capture cli_code_0_copy %}touch .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
