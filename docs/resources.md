---
title: Resources
description: Files and references for dotenvx.
permalink: /docs/resources/
layout: radar
---

{% unless writer_preview %}
{% include components/docs-hero.html
  eyebrow="Docs"
  title="Resources"
  description="Files and references for dotenvx."
  mark="docs"
%}
{% endunless %}

{% capture resources_items %}
{% include components/docs-resource-items.html %}
{% endcapture %}

{% if writer_preview %}
<ul>{{ resources_items }}</ul>
{% else %}
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
{% endif %}
