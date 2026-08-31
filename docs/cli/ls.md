---
layout: docs-cli
title: Ls
description: Print all .env files in a tree structure.
permalink: /docs/cli/ls/
redirect_from:
  - /docs/cli/ext
  - /docs/cli/ext-ls
  - /docs/cli/ext-ls-directory
  - /docs/cli/ext-ls-directory/
  - /docs/cli/ext-ls-ef
  - /docs/cli/ext-ls-ef/
  - /docs/cli/ext-ls-f
  - /docs/cli/ext-ls-f/
  - /docs/cli/ext-ls/
  - /docs/cli/ext/
  - /docs/ref/cli/ls
  - /docs/ref/cli/ls/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
video: cli-ls
---
{% capture cli_code_0 %}
$ dotenvx ls
├─ .env.production
├─ .env
└─ apps
   └─ backend
      └─ .env
{% endcapture %}
{% capture cli_code_0_copy %}dotenvx ls{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Pass a directory to list `.env` files under that path.

{% capture cli_code_1 %}
$ dotenvx ls apps/backend
└─ .env
{% endcapture %}
{% capture cli_code_1_copy %}dotenvx ls apps/backend{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

## JSON output

Use `--json` to print matching `.env` files as a JSON array of absolute filepaths.

{% capture cli_code_2 %}
$ dotenvx ls --json
[
  "/path/to/project/.env",
  "/path/to/project/apps/backend/.env"
]
{% endcapture %}
{% capture cli_code_2_copy %}dotenvx ls --json{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}

Progress and summary details are written to stderr, so stdout can be safely piped to another command or file.

{% capture cli_code_3 %}
$ dotenvx ls --json > dotenv-files.json
{% endcapture %}
{% capture cli_code_3_copy %}dotenvx ls --json > dotenv-files.json{% endcapture %}
{% include components/design-codeblock.html value=cli_code_3 copy_text=cli_code_3_copy %}
