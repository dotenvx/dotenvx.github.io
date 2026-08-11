---
layout: docs-cli
title: "--overload"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: "Override existing env variables. These can be variables already on your machine or variables loaded as files consecutively. The last variable seen will win."
permalink: /docs/cli/run-overload/
redirect_from:
  - /docs/advanced/run-overload
  - /docs/advanced/run-overload/
  - /docs/ref/cli/run-overload
  - /docs/ref/cli/run-overload/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
$ echo "HELLO=local" > .env.local
echo "HELLO=World" > .env
echo "console.log('Hello ' + process.env.HELLO)" > index.js

dotenvx run -f .env.local -f .env --overload -- node index.js
⟐ injected env (1) from .env.local, .env
Hello World
{% endcapture %}
{% capture cli_code_0_copy %}echo "HELLO=local" > .env.local{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Note that with `--overload` subsequent files DO override pre-existing variables defined in previous files.
