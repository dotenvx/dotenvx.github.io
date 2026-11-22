---
title: Advanced
description: Advanced usage and commands for dotenvx
permalink: /docs/advanced/

---

{% capture advanced_toml_content %}

## Dotenv.toml

<ul class="advanced-cli-commands">
<li><a class="design-link" href="/docs/dotenvtoml/quickstart/">Dotenv.toml Quickstart</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/env/">Declarations</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/strict/">Strictness</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/required/">Required</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/optional/">Optional</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/type/">Types</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/enum/">Choices</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/min/">Minimum</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/max/">Maximum</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/encrypted/">Encryption</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/redacted/">Redaction</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/file/">File overrides</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/syntax/">Syntax</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/commands/">Commands</a></li>
<li><a class="design-link" href="/docs/dotenvtoml/">All Dotenv.toml →</a></li>
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
