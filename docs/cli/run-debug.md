---
layout: docs-cli
title: run --debug
description: "Set log level to `debug`."
permalink: /docs/cli/run-debug/
redirect_from:
  - /docs/advanced/run-debug
  - /docs/advanced/run-debug/
  - /docs/ref/cli/run-debug
  - /docs/ref/cli/run-debug/
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

dotenvx run -f .env.production --debug -- node index.js
process command [node index.js]
options: {"env":[],"envFile":[".env.production"]}
loading env from .env.production (/path/to/.env.production)
{"HELLO":"production"}
HELLO set
HELLO set to production
⟐ injected env (1) from .env.production
executing process command [node index.js]
expanding process command to [/opt/homebrew/bin/node index.js]
Hello production
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=production" > .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

[log levels](https://github.com/winstonjs/winston?tab=readme-ov-file#logging)
