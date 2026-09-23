---
layout: docs-cli
title: "lock up"
eyebrow: "dotenvx lock"
eyebrow_href: /docs/cli/lock/
description: "Lock a private key in .env.keys with a local passphrase."
permalink: /docs/cli/lock/up/
redirect_from:
  - /docs/advanced/lock-up
  - /docs/advanced/lock-up/
  - /docs/ref/cli/lock/up
  - /docs/ref/cli/lock/up/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Lock
    href: /docs/cli/lock/
video: cli-lock
command: "dotenvx lock up"
options_title: Options
options:
  - title: "lock up -f"
    href: /docs/cli/lock/up-f/
  - title: "lock up -fk"
    href: /docs/cli/lock/up-fk/
---
Lock a private key in `.env.keys` with a local passphrase.

{% capture cli_code_0 %}
$ dotenvx lock up
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx lock up{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}
