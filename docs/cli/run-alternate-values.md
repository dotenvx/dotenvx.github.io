---
layout: docs-cli
title: "Alternate Values"
eyebrow: "dotenvx run"
eyebrow_href: /docs/cli/run/
description: Use alternate values when environment variables are set and non-empty.
permalink: /docs/cli/run-alternate-values/
redirect_from:
  - /docs/advanced/run-alternate-values
  - /docs/advanced/run-alternate-values/
  - /docs/ref/cli/run-alternate-values
  - /docs/ref/cli/run-alternate-values/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
# .env
NODE_ENV=production

# Alternate value syntax: use alternate if set and non-empty, otherwise empty
DEBUG_MODE=${NODE_ENV:+false}
LOG_LEVEL=${NODE_ENV:+error}

# Alternative syntax (no colon): use alternate if set, otherwise empty
CACHE_ENABLED=${NODE_ENV+true}
{% endcapture %}
{% capture cli_code_0_copy %}# .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

{% capture cli_code_1 %}
// index.js
console.log('NODE_ENV', process.env.NODE_ENV)
console.log('DEBUG_MODE', process.env.DEBUG_MODE)
console.log('LOG_LEVEL', process.env.LOG_LEVEL)
console.log('CACHE_ENABLED', process.env.CACHE_ENABLED)
{% endcapture %}
{% capture cli_code_1_copy %}// index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_1 copy_text=cli_code_1_copy %}

{% capture cli_code_2 %}
$ dotenvx run --debug -- node index.js
⟐ injected env (4) from .env
NODE_ENV production
DEBUG_MODE false
LOG_LEVEL error
CACHE_ENABLED true
{% endcapture %}
{% capture cli_code_2_copy %}dotenvx run --debug -- node index.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_2 copy_text=cli_code_2_copy %}
