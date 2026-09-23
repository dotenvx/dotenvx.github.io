---
layout: docs-cli
title: "run with an Envfile"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: "When an Envfile is present, run automatically validates the resolved environment before starting your command. No validation flag is needed."
permalink: /docs/cli/run-validate/
redirect_from:
  - /docs/ref/cli/run-validate/
  - /docs/ref/cli/run-validate
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
command: "dotenvx run -- node index.js"
---
When an `Envfile` is present, `run` automatically validates the resolved environment before starting your command. No validation flag is needed.

{% capture cli_code_0 %}
# Envfile
env "DATABASE_URL", type: "url"
env "API_KEY"
env "SENTRY_DSN", optional: true
{% endcapture %}
{% capture cli_code_0_copy %}# Envfile
env "DATABASE_URL", type: "url"
env "API_KEY"
env "SENTRY_DSN", optional: true{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy language="ruby" %}

{% capture cli_code_1 %}
$ dotenvx run -- node index.js
[INVALID_ENV] DATABASE_URL is required; API_KEY is required
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx run -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy format="cli" %}

Envfile validation failures stop the command. Other loading errors require `--strict` to stop execution.
