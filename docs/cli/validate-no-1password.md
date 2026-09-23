---
layout: "docs-cli"
title: "validate --no-1password"
description: "Disable 1Password secret reference resolution."
permalink: "/docs/cli/validate-no-1password/"
command: "dotenvx validate --no-1password"
eyebrow: "dotenvx validate"
eyebrow_href: "/docs/cli/validate/"
---

{% capture cli_example %}
$ dotenvx validate --no-1password
{% endcapture %}
{% capture cli_example_copy %}
dotenvx validate --no-1password
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
