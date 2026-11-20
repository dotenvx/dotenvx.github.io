---
title: Advanced
description: Advanced usage and commands for dotenvx
permalink: /docs/advanced/
layout: radar
---

{% if writer_preview %}
> {{ page.description }}

<p><img class="writer-image" src="{{ '/advanced.png' | relative_url }}" alt="Desk with a computer and a vase of sunflowers" width="768" height="307"></p>
{% else %}
{% include components/docs-hero.html
  eyebrow="Docs"
  title="Advanced"
  description="Become a power user of dotenvx."
  mark="advanced"
%}
{% endif %}

{% unless writer_preview %}
<section class="radar-section">
<div class="armor-shell">
<div class="design-content-width">
<div class="docs-intro-lists">
{% endunless %}
{% capture step_content %}
{% include components/docs-cli-commands.html group="standard" writer=writer_preview %}
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true writer=writer_preview %}

{% capture step_content %}
{% include components/docs-cli-commands.html group="hidden" title="Hidden Commands" writer=writer_preview %}
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true writer=writer_preview %}

{% capture step_content %}

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
{% include components/design-step.html content=step_content markdown=true writer=writer_preview %}

{% if writer_preview %}

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
{% else %}
{% capture advanced_sdk_items %}
  {% for option in site.data.advanced_sdk %}
    {% if option.href contains "/docs/sdk/nodejs/" %}
      {% unless option.href == "/docs/sdk/nodejs/primitives/" %}
      <li><a class="design-link" href="{{ option.href }}">{{ option.label | remove_first: "Node.js " | escape }}</a></li>
      {% endunless %}
    {% endif %}
  {% endfor %}
{% endcapture %}

{% capture advanced_rust_items %}
  <li><a class="design-link" href="/docs/sdk/nodejs/primitives/">Node.js – @dotenvx/primitives</a></li>
  {% for option in site.data.advanced_sdk %}
    {% if option.href contains "/docs/sdk/rust/" %}
      <li><a class="design-link" href="{{ option.href }}">Rust – dotenvx-primitives</a></li>
    {% endif %}
  {% endfor %}
{% endcapture %}

{% capture step_content %}

## SDK – Node.js

<ul class="advanced-cli-commands">{{ advanced_sdk_items }}</ul>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true writer=writer_preview %}
{% capture step_content %}

## SDK – Ruby

<ul class="advanced-cli-commands">
<li><a class="design-link" href="/docs/sdk/ruby/">Ruby SDK</a></li>
</ul>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true writer=writer_preview %}
{% capture step_content %}

## SDK – Python

<ul class="advanced-cli-commands">
<li><a class="design-link" href="/docs/sdk/python/">Python SDK</a></li>
</ul>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true writer=writer_preview %}
{% capture step_content %}

## Primitives

<ul class="advanced-cli-commands">{{ advanced_rust_items }}</ul>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true writer=writer_preview %}
</div>

</div>
</div>
</section>
{% endif %}
