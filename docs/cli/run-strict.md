---
layout: docs-cli
title: run --strict
description: Exit with code 1 if any errors are encountered - like a missing .env file or decryption failure.
permalink: /docs/cli/run-strict/
redirect_from:
  - /docs/advanced/run-strict
  - /docs/advanced/run-strict/
  - /docs/ref/cli/run-strict
  - /docs/ref/cli/run-strict/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
$ echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx run -f .env.missing --strict -- node index.js
[MISSING_ENV_FILE] missing file (/path/to/.env.missing). fix: [echo "HELLO=World" > .env.missing]
{% endcapture %}
{% capture cli_code_0_copy %}echo "console.log('Hello ' + process.env.HELLO)" > index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
