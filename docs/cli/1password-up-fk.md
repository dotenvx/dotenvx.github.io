---
layout: "docs-cli"
title: "1password up -fk"
description: "Path to your .env.keys file."
permalink: "/docs/cli/1password-up-fk/"
command: "dotenvx 1password up -fk"
eyebrow: "dotenvx 1password up"
eyebrow_href: "/docs/cli/1password-up/"
---

{% capture cli_example %}
$ dotenvx 1password up -fk .env.production.keys
{% endcapture %}
{% capture cli_example_copy %}
dotenvx 1password up -fk .env.production.keys
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
