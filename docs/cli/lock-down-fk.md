---
layout: "docs-cli"
title: "lock down -fk"
description: "Path to your .env.keys file."
permalink: "/docs/cli/lock-down-fk/"
command: "dotenvx lock down -fk"
eyebrow: "dotenvx lock down"
eyebrow_href: "/docs/cli/lock/down/"
---

{% capture cli_example %}
$ dotenvx lock down -fk .env.production.keys
{% endcapture %}
{% capture cli_example_copy %}
dotenvx lock down -fk .env.production.keys
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
