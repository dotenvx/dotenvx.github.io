---
layout: "docs-cli"
title: "validate -e"
description: "Environment variable(s) set as string (example: \"HELLO=World\")."
permalink: "/docs/cli/validate-e/"
command: "dotenvx validate -e"
eyebrow: "dotenvx validate"
eyebrow_href: "/docs/cli/validate/"
---

{% capture cli_example %}
$ dotenvx validate -e "HELLO=World"
{% endcapture %}
{% capture cli_example_copy %}
dotenvx validate -e "HELLO=World"
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
