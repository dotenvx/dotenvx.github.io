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

## Dotenvxfile

<ul class="advanced-cli-commands">
<li><a class="design-link" href="/docs/quickstart/dotenvxfile/">Dotenvxfile Quickstart</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/env/">Declarations</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/strict/">Strictness</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/required/">Required</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/optional/">Optional</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/type/">Types</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/enum/">Choices</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/min/">Minimum</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/max/">Maximum</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/encrypted/">Encryption</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/redacted/">Redaction</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/file/">File overrides</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/syntax/">Syntax</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/commands/">Commands</a></li>
<li><a class="design-link" href="/docs/dotenvxfile/">All Dotenvxfile →</a></li>
</ul>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true writer=writer_preview %}

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
{% unless writer_preview %}
</div>

</div>
</div>
</section>
{% endunless %}
