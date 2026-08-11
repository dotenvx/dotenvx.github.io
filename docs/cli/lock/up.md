---
layout: docs-cli
title: up
eyebrow: "dotenvx lock"
eyebrow_href: /docs/cli/lock/
description: Lock a private key in .env.keys with a local passphrase.
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
video: https://github.com/user-attachments/assets/ab1818c6-9ee4-41a4-92e2-27984a97e8c5
---
{% capture cli_code_0 %}
$ dotenvx lock up
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx lock up{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Here's what a locked key looks like:

{% capture cli_code_1 %}
# .env.keys
DOTENV_PRIVATE_KEY=locked:02f5b97ad58b49ae324cd4e7937bc19b251d006b31cacf46f789eeaf03f923cedc:AZIPDxKqjPLiGl5b4CqVGbR3CIBDUcqHthGaoeWLoUvxbTHJkj3jGoGWGaxFSDUJGQUmWDaExRzxKpVydYF_7qiWr1ecqksOFho5t3EMwKbqX2-y-LZO9K3a4SJaYAjDJXpn3NwG4vAt1oLmGA
{% endcapture %}
{% capture cli_code_1_copy %}# .env.keys{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

Choose a strong passphrase. If an attacker gets your `.env.keys` file, they can try to brute force the locked private key offline.

For stronger security, use [Armor](/docs/cli/armor/introduction).

Specify files with -f and -fk.

{% capture cli_code_2 %}
$ dotenvx lock up -f .env.production -fk .env.keys
{% endcapture %}
{% capture cli_code_2_copy %}dotenvx lock up -f .env.production -fk .env.keys{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
