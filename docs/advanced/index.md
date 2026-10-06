---
title: Advanced
description: Advanced usage and commands for dotenvx.
permalink: /docs/advanced/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Advanced"
  description="Become a power user of dotenvx."
  mark="advanced"
%}

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

<section class="radar-section">
<div class="armor-shell">
<div class="design-content-width">
<div class="docs-intro-lists">
{% capture step_content %}
{% include components/docs-cli-commands.html group="standard" %}
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}
{% include components/docs-cli-commands.html group="hidden" title="Hidden Commands" %}
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Envfile

<ul class="advanced-cli-commands">
<li><a class="design-link" href="/docs/quickstart/envfile/">Envfile Quickstart</a></li>
<li><a class="design-link" href="/docs/envfile/env/">Declarations</a></li>
<li><a class="design-link" href="/docs/envfile/strict/">Strictness</a></li>
<li><a class="design-link" href="/docs/envfile/required/">Required</a></li>
<li><a class="design-link" href="/docs/envfile/optional/">Optional</a></li>
<li><a class="design-link" href="/docs/envfile/type/">Types</a></li>
<li><a class="design-link" href="/docs/envfile/enum/">Choices</a></li>
<li><a class="design-link" href="/docs/envfile/min/">Minimum</a></li>
<li><a class="design-link" href="/docs/envfile/max/">Maximum</a></li>
<li><a class="design-link" href="/docs/envfile/encrypted/">Encryption</a></li>
<li><a class="design-link" href="/docs/envfile/redacted/">Redaction</a></li>
<li><a class="design-link" href="/docs/envfile/proxy/">Proxy</a></li>
<li><a class="design-link" href="/docs/envfile/file/">File overrides</a></li>
<li><a class="design-link" href="/docs/envfile/syntax/">Syntax</a></li>
<li><a class="design-link" href="/docs/envfile/commands/">Commands</a></li>
<li><a class="design-link" href="/docs/envfile/">All Envfile →</a></li>
</ul>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## SDK – Node.js

<ul class="advanced-cli-commands">{{ advanced_sdk_items }}</ul>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
{% capture step_content %}

## SDK – Ruby

<ul class="advanced-cli-commands">
<li><a class="design-link" href="/docs/sdk/ruby/">Ruby SDK</a></li>
</ul>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
{% capture step_content %}

## SDK – Python

<ul class="advanced-cli-commands">
<li><a class="design-link" href="/docs/sdk/python/">Python SDK</a></li>
</ul>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
{% capture step_content %}

## Primitives

<ul class="advanced-cli-commands">{{ advanced_rust_items }}</ul>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</div>

</div>
</div>
</section>
