---
layout: "docs-cli"
title: "1password pull -fk"
description: "Path to your .env.keys file."
permalink: "/docs/cli/1password-pull-fk/"
command: "dotenvx 1password pull -fk"
eyebrow: "dotenvx 1password pull"
eyebrow_href: "/docs/cli/1password-pull/"
---

{% capture cli_example %}
$ dotenvx 1password pull -fk .env.production.keys
{% endcapture %}
{% capture cli_example_copy %}
dotenvx 1password pull -fk .env.production.keys
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
