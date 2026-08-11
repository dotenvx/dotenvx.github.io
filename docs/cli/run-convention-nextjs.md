---
layout: docs-cli
title: run --convention=nextjs
description: Load envs using the Next.js convention.
permalink: /docs/cli/run-convention-nextjs/
redirect_from:
  - /docs/ref/cli/run-convention-nextjs/
  - /docs/ref/cli/run-convention-nextjs
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
echo "HELLO=local" > .env.local
echo "HELLO=development" > .env.development
echo "HELLO=env" > .env
echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx run --convention=nextjs -- node index.js
⟐ injected env (1) from .env.development.local, .env.local, .env.development, .env
Hello development local
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=development local" > .env.development.local{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

You can also set `DOTENV_CONFIG_CONVENTION=nextjs`.

{% capture cli_code_1 %}
$ DOTENV_CONFIG_CONVENTION=nextjs dotenvx run -- node index.js
⟐ injected env (1) from .env.development.local, .env.local, .env.development, .env
Hello development local
{% endcapture %}
{% capture cli_code_1_copy %}DOTENV_CONFIG_CONVENTION=nextjs dotenvx run -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

[Next.js env load order](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#environment-variable-load-order)
