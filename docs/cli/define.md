---
layout: docs-cli
permalink: /docs/cli/define/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "define"
command: "dotenvx define"
description: "Create an Envfile to validate your project's environment variables:"
options_title: Options
options:
  - title: "define -f"
    href: /docs/cli/define-f/
---
Create an `Envfile` to validate your project's environment variables:

{% capture cli_code_0 %}
$ dotenvx define
≡ defined (Envfile)
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx define{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy format="cli" %}

Merges variable names from both `.env.example` and `.env`, skipping missing files and including each name once. If neither default file exists, it creates a starter. An existing `Envfile` is always left unchanged.

The first line is `encrypted false` by default, or `encrypted true` if any application variable assignment in either input starts with `encrypted:`. Duplicate assignments are all inspected. This sets the encryption requirement for all declarations; use `encrypted: false` on individual variables that should remain plaintext.

Generated declarations are required by default. Review them and mark optional variables with `optional: true`.

Only names are copied: values are never included, decrypted, expanded, or fetched from secret providers. Dotenvx public and private key entries are excluded. Your env files are unchanged.

Run `dotenvx validate` (or `dotenvx validate -f .env.production` for another file) to check your configuration. Once `Envfile` exists, `dotenvx run` validates automatically before starting your command.
