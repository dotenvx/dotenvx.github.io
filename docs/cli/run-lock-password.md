---
layout: "docs-cli"
title: "run --lock-password"
description: "Password to unlock private keys (defaults to DOTENVX_LOCK_PASSWORD)."
permalink: "/docs/cli/run-lock-password/"
command: "dotenvx run --lock-password"
eyebrow: "dotenvx run"
eyebrow_href: "/docs/cli/run/"
---

{% capture cli_example %}
$ dotenvx run --lock-password "$DOTENVX_LOCK_PASSWORD" -- node index.js
{% endcapture %}
{% capture cli_example_copy %}
dotenvx run --lock-password "$DOTENVX_LOCK_PASSWORD" -- node index.js
{% endcapture %}
{% include components/design-codeblock.html value=cli_example copy_text=cli_example_copy format="cli" %}
