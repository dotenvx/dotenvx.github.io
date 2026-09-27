---
layout: "docs-cli"
title: "check --no-1password"
description: "Disable 1Password secret reference resolution."
permalink: "/docs/cli/check-no-1password/"
command: "dotenvx check --no-1password"
eyebrow: "dotenvx check"
eyebrow_href: "/docs/cli/check/"
redirect_from:
  - /docs/cli/validate-no-1password/
  - /docs/cli/validate-no-1password
---

{% capture cli_example %}
$ dotenvx check --no-1password
{% endcapture %}
{% capture cli_example_copy %}
dotenvx check --no-1password
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
