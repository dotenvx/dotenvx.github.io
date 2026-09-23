---
layout: docs-cli
title: "validate"
description: "Validate resolved .env values against an Envfile without running a command. An Envfile in the current directory is required; .env.example is not used for validation."
permalink: /docs/cli/validate/
redirect_from:
  - /docs/advanced/validate
  - /docs/advanced/validate/
  - /docs/ref/cli/validate
  - /docs/ref/cli/validate/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
options_title: Options
options:
  - title: "validate --ignore"
    href: /docs/cli/validate-ignore/
  - title: "validate -f"
    href: /docs/cli/validate-f/
  - title: "validate -fk"
    href: /docs/cli/validate-fk/
  - title: "validate --strict"
    href: /docs/cli/validate-strict/
command: "dotenvx validate"
---
Validate resolved `.env` values against an `Envfile` without running a command. An `Envfile` in the current directory is required; `.env.example` is not used for validation.

{% capture cli_code_0 %}
# Envfile
env "DATABASE_URL", type: "url"
env "PORT", type: "port"
env "SENTRY_DSN", optional: true
{% endcapture %}
{% capture cli_code_0_copy %}# Envfile
env "DATABASE_URL", type: "url"
env "PORT", type: "port"
env "SENTRY_DSN", optional: true{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy language="ruby" %}

{% capture cli_code_1 %}
$ dotenvx validate
[INVALID_ENV] DATABASE_URL is required; PORT is required
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx validate{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy format="cli" %}

The command enforces required values, types, enums, bounds, and encryption requirements. It exits with code `1` on validation or other loading errors. Missing env files are reported but do not fail validation when the resolved values satisfy Envfile. On success, it prints `▣ valid (.env)` (listing the loaded input files) and exits with code `0` on success. It does not change your shell's environment.

A missing Envfile reports `ENVFILE_REQUIRED`; invalid syntax reports `MALFORMED_ENVFILE`.
