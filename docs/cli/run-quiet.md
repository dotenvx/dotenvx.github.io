---
layout: docs-cli
title: "--quiet"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: "Use `--quiet` to suppress all output (except errors)."
permalink: /docs/cli/run-quiet/
redirect_from:
  - /docs/advanced/run-quiet
  - /docs/advanced/run-quiet/
  - /docs/ref/cli/run-quiet
  - /docs/ref/cli/run-quiet/
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

dotenvx run -f .env.production --quiet -- node index.js
Hello production
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=production" > .env.production{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

You can also set `DOTENV_CONFIG_QUIET=true`.

{% capture cli_code_1 %}
DOTENV_CONFIG_QUIET=true dotenvx run -f .env.production -- node index.js
Hello production
{% endcapture %}
{% capture cli_code_1_copy %}DOTENV_CONFIG_QUIET=true dotenvx run -f .env.production -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

[log levels](https://github.com/winstonjs/winston?tab=readme-ov-file#logging)
