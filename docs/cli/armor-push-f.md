---
layout: "docs-cli"
title: "armor push -f"
description: "Path to your env file."
permalink: "/docs/cli/armor-push-f/"
command: "dotenvx armor push -f"
eyebrow: "dotenvx armor push"
eyebrow_href: "/docs/cli/armor/push/"
---

{% capture cli_example %}
$ dotenvx armor push -f .env.production
{% endcapture %}
{% capture cli_example_copy %}
dotenvx armor push -f .env.production
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
