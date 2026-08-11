---
layout: docs-cli
title: run -f
description: "Compose multiple .env files for environment variables loading, as you need."
permalink: /docs/cli/run-f/
redirect_from:
  - /docs/ref/cli/run-f/
  - /docs/ref/cli/run-f
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
video: https://github.com/user-attachments/assets/2ae47f12-ac3c-47a5-af88-436f50ade3e4
---
{% capture cli_code_0 %}
$ echo "HELLO=local" > .env.local
echo "HELLO=World" > .env
echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx run -f .env.local -f .env -- node index.js
⟐ injected env (1) from .env.local, .env
Hello local
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=local" > .env.local{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Note subsequent files do NOT override pre-existing variables defined in previous files or env. This follows historic principle. For example, above local wins – from the first file.
