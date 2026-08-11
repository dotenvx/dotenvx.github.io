---
layout: docs-cli
title: run -f directory --convention=nextjs
description: Run a command using the Next.js convention from a directory. This is useful with monorepos.
permalink: /docs/cli/run-f-directory-convention-nextjs/
redirect_from:
  - /docs/ref/cli/run-f-directory-convention-nextjs/
  - /docs/ref/cli/run-f-directory-convention-nextjs
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
The directory becomes the base for every file in the convention:

{% capture cli_code_0 %}
$ cd apps/web

dotenvx run -f ../.. --convention=nextjs -- node index.js
⟐ injected env (1) from ../../.env.development.local, ../../.env.local, ../../.env.development, ../../.env
Hello development local
{% endcapture %}
{% capture cli_code_0_copy %}cd apps/web{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}
