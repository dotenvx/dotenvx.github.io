---
layout: "docs-cli"
title: "feedback --hostname"
description: "Send feedback to a specific Armor API host."
permalink: "/docs/cli/feedback-hostname/"
command: "dotenvx feedback --hostname"
eyebrow: "dotenvx feedback"
eyebrow_href: "/docs/cli/feedback/"
---

{% capture cli_example %}
$ dotenvx feedback "The quickstart worked well." --hostname https://armor.dotenvx.com
{% endcapture %}
{% capture cli_example_copy %}
dotenvx feedback "The quickstart worked well." --hostname https://armor.dotenvx.com
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
