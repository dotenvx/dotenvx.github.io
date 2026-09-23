---
layout: "docs-cli"
title: "validate --convention"
description: "Load a .env convention (available conventions: ['nextjs', 'flow'])."
permalink: "/docs/cli/validate-convention/"
command: "dotenvx validate --convention"
eyebrow: "dotenvx validate"
eyebrow_href: "/docs/cli/validate/"
---

{% capture cli_example %}
$ dotenvx validate --convention nextjs
{% endcapture %}
{% capture cli_example_copy %}
dotenvx validate --convention nextjs
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
