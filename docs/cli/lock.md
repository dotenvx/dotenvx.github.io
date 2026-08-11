---
layout: docs-cli
title: Lock
description: Lock private keys with a local passphrase to keep them protected inside .env.keys.
permalink: /docs/cli/lock/
redirect_from:
  - /docs/ref/cli/lock/
  - /docs/ref/cli/lock
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Commands
options:
  - title: up
    href: /docs/cli/lock/up/
  - title: down
    href: /docs/cli/lock/down/
---
{% capture cli_code_0 %}
$ dotenvx lock
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx lock{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

## Security note

Lock security is only as good as the passphrase you choose. If an attacker gets your `.env.keys` file, they can try to brute force the locked private keys offline for as long as they want.

For stronger security, use [Armor](/docs/cli/armor/introduction) to move private keys out of `.env.keys` and into Dotenvx Armor.
