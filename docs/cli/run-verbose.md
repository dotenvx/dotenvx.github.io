---
layout: docs-cli
title: "--verbose"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: "Set log level to `verbose`."
permalink: /docs/cli/run-verbose/
redirect_from:
  - /docs/advanced/run-verbose
  - /docs/advanced/run-verbose/
  - /docs/ref/cli/run-verbose
  - /docs/ref/cli/run-verbose/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
$ echo "HELLO=production" > .env.production
echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx run -f .env.production --verbose -- node index.js
loading env from .env.production (/path/to/.env.production)
HELLO set
⟐ injected env (1) from .env.production
Hello production
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=production" > .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

[log levels](https://github.com/winstonjs/winston?tab=readme-ov-file#logging)
