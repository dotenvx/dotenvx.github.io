---
layout: "docs-cli"
title: "validate --token"
description: "Set Armor \u26e8 token."
permalink: "/docs/cli/validate-token/"
command: "dotenvx validate --token"
eyebrow: "dotenvx validate"
eyebrow_href: "/docs/cli/validate/"
---

{% capture cli_example %}
$ dotenvx validate --token "$DOTENVX_TOKEN"
{% endcapture %}
{% capture cli_example_copy %}
dotenvx validate --token "$DOTENVX_TOKEN"
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
