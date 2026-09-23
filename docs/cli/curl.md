---
layout: "docs-cli"
title: "curl"
description: "Dotenvx Armor API."
permalink: "/docs/cli/curl/"
command: "dotenvx curl"
---

{% capture cli_example %}
$ dotenvx curl "https://armor.dotenvx.com/api/account"
{% endcapture %}
{% capture cli_example_copy %}
dotenvx curl "https://armor.dotenvx.com/api/account"
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
