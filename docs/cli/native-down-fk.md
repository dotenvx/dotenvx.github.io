---
layout: "docs-cli"
title: "native down -fk"
description: "Path to your .env.keys file."
permalink: "/docs/cli/native-down-fk/"
command: "dotenvx native down -fk"
eyebrow: "dotenvx native down"
eyebrow_href: "/docs/cli/native/down/"
---

{% capture cli_example %}
$ dotenvx native down -fk .env.production.keys
{% endcapture %}
{% capture cli_example_copy %}
dotenvx native down -fk .env.production.keys
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
