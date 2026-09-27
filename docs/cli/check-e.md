---
layout: "docs-cli"
title: "check -e"
description: "Environment variable(s) set as string (example: \"HELLO=World\")."
permalink: "/docs/cli/check-e/"
command: "dotenvx check -e"
eyebrow: "dotenvx check"
eyebrow_href: "/docs/cli/check/"
redirect_from:
  - /docs/cli/validate-e/
  - /docs/cli/validate-e
---

{% capture cli_example %}
$ dotenvx check -e "HELLO=World"
{% endcapture %}
{% capture cli_example_copy %}
dotenvx check -e "HELLO=World"
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
