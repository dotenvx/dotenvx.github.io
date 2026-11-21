---
description: "Compare Dotenvx Armor plans for secrets access control, audit history, and team security. Dotenvx is free and open source."
title: "Pricing (Legacy)"
image: "/assets/img/og-image-pricing.png"
layout: radar
writer_layout: wide
---

{% if writer_preview %}
> Compare legacy Dotenvx Armor plans

[See current pricing]({{ '/pricing' | relative_url }})

{% endif %}
<div class="{% if writer_preview %}writer-pricing-comparison{% else %}pricing-page{% endif %}">
  {% unless writer_preview %}{% include components/pricing/hero.html %}{% endunless %}
  {% include components/pricing/plans.html %}
  {% include components/pricing/compare-access.html %}
  {% include components/pricing/compare-audit.html %}
  {% include components/pricing/compare-auditability.html %}
  {% include components/pricing/compare-support.html %}
  {% if writer_preview %}
    {% include components/faq-yes.html %}
  {% else %}
    {% include components/faq-yes.html source=true %}
  {% endif %}
</div>
