---
layout: "docs-cli"
title: "native push -fk"
description: "Path to your .env.keys file."
permalink: "/docs/cli/native-push-fk/"
command: "dotenvx native push -fk"
eyebrow: "dotenvx native push"
eyebrow_href: "/docs/cli/native/push/"
---

{% capture cli_example %}
$ dotenvx native push -fk .env.production.keys
{% endcapture %}
{% capture cli_example_copy %}
dotenvx native push -fk .env.production.keys
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy %}
