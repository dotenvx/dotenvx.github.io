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
    <li><a class="design-link" href="{{ option.href }}">{{ option.label | escape }}</a></li>
  {% endfor %}
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
  <div class="design-content-width">
    <div class="docs-intro-lists">
      {% capture step_content %}
        <h2 class="design-page-title design-page-title--flush">CLI commands</h2>
        <ul class="advanced-cli-commands">
          {% for command in site.data.advanced_cli %}
            <li><a class="design-link" href="{{ command.href }}">{{ command.label | escape }}</a></li>
          {% endfor %}
        </ul>
      {% endcapture %}
      {% include components/design-step.html content=step_content %}

      {% capture step_content %}
        {% include components/design-list.html
          title="SDK"
          items=advanced_sdk_items
        %}
      {% endcapture %}
      {% include components/design-step.html content=step_content %}
    </div>

  </div>
</div>
</section>
