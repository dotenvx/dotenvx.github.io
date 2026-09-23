---
title: Security
description: "From the creator of dotenv—advancing the .env standard with encryption built in."
permalink: /security/
layout: radar
body_class: home-page security-page
---

{% capture security_actions %}
  {% include components/design-btn.html
    label="Read the whitepaper"
    href="/dotenvx.pdf"
    target="_blank"
    rel="noopener noreferrer"
    data_umami_event="Security Whitepaper button"
  %}
{% endcapture %}

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Security">
    <div class="armor-shell">
      {% include components/design-hero.html
        compact=true
        name_heading=true
        name=page.title
        description=page.description
        actions=security_actions
      %}
    </div>
  </section>
</div>
