---
layout: docs-cli
title: precommit directory
description: Prevent .env files from being committed to code for a specified directory. Useful for monorepos.
permalink: /docs/cli/precommit-directory/
redirect_from:
  - /docs/advanced/precommit-directory
  - /docs/advanced/precommit-directory/
  - /docs/ref/cli/precommit-directory
  - /docs/ref/cli/precommit-directory/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Precommit
    href: /docs/cli/precommit/
---
{% capture cli_code_0 %}
$ echo "HELLO=World" > .env
mkdir -p apps/backend
echo "HELLO=Backend" > apps/backend/.env

dotenvx precommit apps/backend
☠ apps/backend/.env not encrypted/gitignored
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=World" > .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
