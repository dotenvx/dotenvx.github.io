---
layout: "docs-cli"
title: "validate -o"
description: "Override existing env variables (by default, existing env vars take precedence over .env files)."
permalink: "/docs/cli/validate-o/"
command: "dotenvx validate -o"
eyebrow: "dotenvx validate"
eyebrow_href: "/docs/cli/validate/"
---

{% capture cli_example %}
$ dotenvx validate -o
{% endcapture %}
{% capture cli_example_copy %}
dotenvx validate -o
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
