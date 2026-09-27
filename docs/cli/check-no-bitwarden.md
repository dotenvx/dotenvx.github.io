---
layout: "docs-cli"
title: "check --no-bitwarden"
description: "Disable Bitwarden secret reference resolution."
permalink: "/docs/cli/check-no-bitwarden/"
command: "dotenvx check --no-bitwarden"
eyebrow: "dotenvx check"
eyebrow_href: "/docs/cli/check/"
redirect_from:
  - /docs/cli/validate-no-bitwarden/
  - /docs/cli/validate-no-bitwarden
---

{% capture cli_example %}
$ dotenvx check --no-bitwarden
{% endcapture %}
{% capture cli_example_copy %}
dotenvx check --no-bitwarden
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
