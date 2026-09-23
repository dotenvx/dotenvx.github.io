---
layout: "docs-cli"
title: "1password push -fk"
description: "Path to your .env.keys file."
permalink: "/docs/cli/1password-push-fk/"
command: "dotenvx 1password push -fk"
eyebrow: "dotenvx 1password push"
eyebrow_href: "/docs/cli/1password-push/"
---

{% capture cli_example %}
$ dotenvx 1password push -fk .env.production.keys
{% endcapture %}
{% capture cli_example_copy %}
dotenvx 1password push -fk .env.production.keys
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
