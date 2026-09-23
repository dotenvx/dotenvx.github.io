---
layout: "docs-cli"
title: "native pull -fk"
description: "Path to your .env.keys file."
permalink: "/docs/cli/native-pull-fk/"
command: "dotenvx native pull -fk"
eyebrow: "dotenvx native pull"
eyebrow_href: "/docs/cli/native/pull/"
---

{% capture cli_example %}
$ dotenvx native pull -fk .env.production.keys
{% endcapture %}
{% capture cli_example_copy %}
dotenvx native pull -fk .env.production.keys
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
