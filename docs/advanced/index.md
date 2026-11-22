---
title: Advanced
description: Advanced usage and commands for dotenvx
permalink: /docs/advanced/

---

{% capture advanced_toml_content %}

## Dotenv.toml

<ul class="advanced-cli-commands">
<li><a class="design-link" href="/docs/dotenv-toml/quickstart/">Dotenv.toml Quickstart</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/env/">Declarations</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/strict/">Strictness</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/required/">Required</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/optional/">Optional</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/type/">Types</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/enum/">Choices</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/min/">Minimum</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/max/">Maximum</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/encrypted/">Encryption</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/redacted/">Redaction</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/file/">File overrides</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/syntax/">Syntax</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/commands/">Commands</a></li>
<li><a class="design-link" href="/docs/dotenv-toml/">All Dotenv.toml →</a></li>
</ul>
{% endcapture %}


> {{ page.description }}

## SDKs

{% assign sdk_page = site.pages | where: 'url', '/docs/sdk/' | first %}
{% include main-sdk-list.md languages=sdk_page.sdk_languages %}

## Custody

{% assign custody_page = site.pages | where: 'url', '/docs/custody/' | first %}
{% for option in custody_page.options -%}
- [{{ option.title }}]({{ option.href }})
{% endfor %}

## Guides

{% assign guides_page = site.pages | where: 'url', '/docs/guides/' | first %}
{% include main-guide-list.md sections=guides_page.guide_sections %}

{{ advanced_toml_content }}

{% include components/docs-cli-commands.html main=true %}

## Resources

<ul>
{% include components/docs-resource-items.html %}
</ul>
