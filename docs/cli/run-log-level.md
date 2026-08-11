---
layout: docs-cli
title: run --log-level
description: "Set `--log-level` to whatever you wish."
permalink: /docs/cli/run-log-level/
redirect_from:
  - /docs/ref/cli/run-log-level/
  - /docs/ref/cli/run-log-level
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
For example, to supress warnings (risky), set log level to `error`.

{% capture cli_code_0 %}
$ echo "HELLO=production" > .env.production
echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx run -f .env.production --log-level=error -- node index.js
Hello production
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=production" > .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Available log levels are `error, warn, info, verbose, debug, silly` ([source](https://github.com/winstonjs/winston?tab=readme-ov-file#logging))
