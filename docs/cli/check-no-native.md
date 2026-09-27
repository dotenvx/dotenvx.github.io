---
layout: "docs-cli"
title: "check --no-native"
description: "Disable OS secret store features."
permalink: "/docs/cli/check-no-native/"
command: "dotenvx check --no-native"
eyebrow: "dotenvx check"
eyebrow_href: "/docs/cli/check/"
redirect_from:
  - /docs/cli/validate-no-native/
  - /docs/cli/validate-no-native
---

{% capture cli_example %}
$ dotenvx check --no-native
{% endcapture %}
{% capture cli_example_copy %}
dotenvx check --no-native
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
