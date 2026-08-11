---
layout: docs-cli
title: DOTENV_ENV=production run --convention=flow
description: Use DOTENV_ENV to control dotenv-flow's environment.
permalink: /docs/cli/run-convention-flow-dotenv-env/
redirect_from:
  - /docs/advanced/run-convention-flow-dotenv-env
  - /docs/advanced/run-convention-flow-dotenv-env/
  - /docs/ref/cli/run-convention-flow-dotenv-env
  - /docs/ref/cli/run-convention-flow-dotenv-env/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
$ echo "HELLO=production local" > .env.production.local
echo "HELLO=production" > .env.production
echo "HELLO=local" > .env.local
echo "HELLO=env" > .env
echo "console.log('Hello ' + process.env.HELLO)" > index.js

DOTENV_ENV=production dotenvx run --convention=flow -- node index.js 
⟐ injected env (1) from .env.production.local, .env.production, .env.local, .env
Hello production local
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=production local" > .env.production.local{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

While dotenvx's implementation of [dotenv-flow](https://www.npmjs.com/package/dotenv-flow) supports `NODE_ENV`, it also introduces `DOTENV_ENV`. We recommend using `DOTENV_ENV` over `NODE_ENV` – as dotenvx works everywhere, not just node. [see code](https://github.com/dotenvx/dotenvx/blob/2f35b84a9a3101ec4d2c6cf850fd3659375f7105/src/lib/helpers/conventions.js#L2)
