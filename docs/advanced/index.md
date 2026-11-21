---
title: Advanced
description: Advanced usage and commands for dotenvx
permalink: /docs/advanced/

---

{% capture advanced_toml_content %}

## Dotenvx.toml

<ul class="advanced-cli-commands">
<li><a class="design-link" href="/docs/dotenvxtoml/quickstart/">Dotenvx.toml Quickstart</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/env/">Declarations</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/strict/">Strictness</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/required/">Required</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/optional/">Optional</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/type/">Types</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/enum/">Choices</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/min/">Minimum</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/max/">Maximum</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/encrypted/">Encryption</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/redacted/">Redaction</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/file/">File overrides</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/syntax/">Syntax</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/commands/">Commands</a></li>
<li><a class="design-link" href="/docs/dotenvxtoml/">All Dotenvx.toml →</a></li>
</ul>
{% endcapture %}


> {{ page.description }}

## SDKs

{% assign sdk_page = site.pages | where: 'url', '/docs/sdk/' | first %}
{% include writer-sdk-list.md languages=sdk_page.sdk_languages %}

## Custody

{% assign custody_page = site.pages | where: 'url', '/docs/custody/' | first %}
{% for option in custody_page.options -%}
- [{{ option.title }}]({{ option.href }})
{% endfor %}

## Guides

{% assign guides_page = site.pages | where: 'url', '/docs/guides/' | first %}
{% include writer-guide-list.md sections=guides_page.guide_sections %}

{{ advanced_toml_content }}

{% include components/docs-cli-commands.html writer=true %}

## Resources

<ul>
{% include components/docs-resource-items.html %}
</ul>
