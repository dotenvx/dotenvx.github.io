---
layout: "docs-cli"
title: "check --convention"
description: "Load a .env convention (available conventions: ['nextjs', 'flow'])."
permalink: "/docs/cli/check-convention/"
command: "dotenvx check --convention"
eyebrow: "dotenvx check"
eyebrow_href: "/docs/cli/check/"
redirect_from:
  - /docs/cli/validate-convention/
  - /docs/cli/validate-convention
---

{% capture cli_example %}
$ dotenvx check --convention nextjs
{% endcapture %}
{% capture cli_example_copy %}
dotenvx check --convention nextjs
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
