---
layout: docs-cli
permalink: /docs/cli/run-envfile-file-rules/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
title: "run with Envfile file rules"
command: "dotenvx run -- node index.js"
description: "Use exact file blocks to override rules for selected files:"
---
Use exact file blocks to override rules for selected files:

{% capture cli_code_0 %}
env "HELLO"
env "PORT", type: "port"
env "STRIPE_SECRET_KEY", optional: true

file ".env.production" do
  encrypted true
  env "STRIPE_SECRET_KEY", required: true
  env "PORT", min: 1024
end
{% endcapture %}
{% capture cli_code_0_copy %}env "HELLO"
env "PORT", type: "port"
env "STRIPE_SECRET_KEY", optional: true

file ".env.production" do
  encrypted true
  env "STRIPE_SECRET_KEY", required: true
  env "PORT", min: 1024
end{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

Both `dotenvx run -f .env.production -- node index.js` and `dotenvx validate -f .env.production` use the production rules. Block declarations inherit top-level options and override only the options they specify. A block's `encrypted` directive applies to all inherited and newly declared variables; a per-variable `encrypted:` option inside that block overrides it.

Paths in file blocks are relative to the Envfile. They match the selected paths exactly after path normalization (`./.env.production` matches `.env.production`); they are not basename matches or globs. Directory inputs and `DOTENV_FILE` use their resolved file paths.

When no file block matches, top-level rules apply. When one or more blocks match, each matching block's inherited rules must hold for the final resolved environment. Shell values, fallback files, and `--overload` cannot bypass them. A selected missing file still activates its block. Multiple matching blocks cannot cancel each other's restrictions; conflicting proxy domains are rejected. Blocks cannot be nested, and duplicate declarations within one scope or duplicate file blocks are errors.
