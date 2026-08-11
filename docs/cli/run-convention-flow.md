---
layout: docs-cli
title: run --convention=flow
description: Load envs using the dotenv-flow convention.
permalink: /docs/cli/run-convention-flow/
redirect_from:
  - /docs/advanced/run-convention-flow
  - /docs/advanced/run-convention-flow/
  - /docs/ref/cli/run-convention-flow
  - /docs/ref/cli/run-convention-flow/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
$ echo "HELLO=development local" > .env.development.local
echo "HELLO=development" > .env.development
echo "HELLO=local" > .env.local
echo "HELLO=env" > .env
echo "console.log('Hello ' + process.env.HELLO)" > index.js

NODE_ENV=development dotenvx run --convention=flow -- node index.js 
⟐ injected env (1) from .env.development.local, .env.development, .env.local, .env
Hello development local
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=development local" > .env.development.local{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

You can also set `DOTENV_CONFIG_CONVENTION=flow`.

{% capture cli_code_1 %}
$ NODE_ENV=development DOTENV_CONFIG_CONVENTION=flow dotenvx run -- node index.js
⟐ injected env (1) from .env.development.local, .env.development, .env.local, .env
Hello development local
{% endcapture %}
{% capture cli_code_1_copy %}NODE_ENV=development DOTENV_CONFIG_CONVENTION=flow dotenvx run -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

[dotenv-flow env load order](https://www.npmjs.com/package/dotenv-flow)

Further, we recommend using `DOTENV_ENV` over `NODE_ENV` – as dotenvx works everywhere, not just node.

{% capture cli_code_2 %}
$ DOTENV_ENV=development dotenvx run --convention=flow -- node index.js
⟐ injected env (1) from .env.development.local, .env.development, .env.local, .env
Hello development local
{% endcapture %}
{% capture cli_code_2_copy %}DOTENV_ENV=development dotenvx run --convention=flow -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
