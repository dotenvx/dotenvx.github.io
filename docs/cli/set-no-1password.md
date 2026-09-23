---
layout: "docs-cli"
title: "set --no-1password"
description: "Disable 1Password features."
permalink: "/docs/cli/set-no-1password/"
command: "dotenvx set --no-1password"
eyebrow: "dotenvx set"
eyebrow_href: "/docs/cli/set/"
---

{% capture cli_example %}
$ dotenvx set HELLO World --no-1password
{% endcapture %}
{% capture cli_example_copy %}
dotenvx set HELLO World --no-1password
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
