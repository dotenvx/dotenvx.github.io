---
title: Resources
description: Files and references for dotenvx.
permalink: /docs/resources/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Resources"
  description="Files and references for dotenvx."
  mark="docs"
%}

{% capture resources_items %}
  {% for resource in site.data.docs_resources %}
    <li><a class="design-link" href="{{ resource.href | relative_url }}"{% if resource.new_tab %} target="_blank" rel="noopener noreferrer"{% endif %}>{{ resource.label | escape }}</a></li>
  {% endfor %}
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
  <div class="design-content-width">
    <div class="docs-intro-lists">
      {% include components/design-list.html
        title="Resources"
        items=resources_items
      %}
    </div>
  </div>
</div>
</section>
