---
layout: "docs-cli"
title: "check --token"
description: "Set Armor \u26e8 token."
permalink: "/docs/cli/check-token/"
command: "dotenvx check --token"
eyebrow: "dotenvx check"
eyebrow_href: "/docs/cli/check/"
redirect_from:
  - /docs/cli/validate-token/
  - /docs/cli/validate-token
---

{% capture cli_example %}
$ dotenvx check --token "$DOTENVX_TOKEN"
{% endcapture %}
{% capture cli_example_copy %}
dotenvx check --token "$DOTENVX_TOKEN"
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
