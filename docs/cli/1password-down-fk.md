---
layout: "docs-cli"
title: "1password down -fk"
description: "Path to your .env.keys file."
permalink: "/docs/cli/1password-down-fk/"
command: "dotenvx 1password down -fk"
eyebrow: "dotenvx 1password down"
eyebrow_href: "/docs/cli/1password-down/"
---

{% capture cli_example %}
$ dotenvx 1password down -fk .env.production.keys
{% endcapture %}
{% capture cli_example_copy %}
dotenvx 1password down -fk .env.production.keys
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
