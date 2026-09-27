---
layout: "docs-cli"
title: "check -o"
description: "Override existing env variables (by default, existing env vars take precedence over .env files)."
permalink: "/docs/cli/check-o/"
command: "dotenvx check -o"
eyebrow: "dotenvx check"
eyebrow_href: "/docs/cli/check/"
redirect_from:
  - /docs/cli/validate-o/
  - /docs/cli/validate-o
---

{% capture cli_example %}
$ dotenvx check -o
{% endcapture %}
{% capture cli_example_copy %}
dotenvx check -o
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
