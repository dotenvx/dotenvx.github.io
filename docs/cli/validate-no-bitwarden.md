---
layout: "docs-cli"
title: "validate --no-bitwarden"
description: "Disable Bitwarden secret reference resolution."
permalink: "/docs/cli/validate-no-bitwarden/"
command: "dotenvx validate --no-bitwarden"
eyebrow: "dotenvx validate"
eyebrow_href: "/docs/cli/validate/"
---

{% capture cli_example %}
$ dotenvx validate --no-bitwarden
{% endcapture %}
{% capture cli_example_copy %}
dotenvx validate --no-bitwarden
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
