---
layout: "docs-cli"
title: "set --no-bitwarden"
description: "Disable Bitwarden features."
permalink: "/docs/cli/set-no-bitwarden/"
command: "dotenvx set --no-bitwarden"
eyebrow: "dotenvx set"
eyebrow_href: "/docs/cli/set/"
---

{% capture cli_example %}
$ dotenvx set HELLO World --no-bitwarden
{% endcapture %}
{% capture cli_example_copy %}
dotenvx set HELLO World --no-bitwarden
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
