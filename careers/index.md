---
title: Careers
description: "Help build the next chapter of Dotenv. In the code, and in the companies that use it."
permalink: /careers/
layout: radar
body_class: home-page careers-page
---

<style>
  .careers-card-heading { padding: 1.25rem; border-bottom: 1px solid var(--design-line); }
  .careers-role { padding: 1.25rem; }
  .careers-card-heading .design-list-title { margin: 0; }
  .careers-role .design-list-title { margin: 0 0 1rem; }
</style>

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Careers">
    <div class="armor-shell">
      {% include components/design-hero.html
        compact=true
        secondary=true
        name_heading=true
        name=page.title
        description=page.description
      %}
    </div>
  </section>

  <section class="radar-section" aria-labelledby="open-roles">
    <div class="armor-shell">
      {% capture roles_card %}
        <div class="careers-card-heading">
          <h2 class="design-list-title" id="open-roles">Opportunities</h2>
        </div>
        <div class="careers-role">
          <h3 class="design-list-title"><a class="design-link" href="/careers/corporate-sponsorships/">Corporate Sponsorships →</a></h3>
          <p class="design-paragraph">Build relationships with companies that want to back the future of the .env standard. Find prospective sponsors, start conversations, and turn shared interest into corporate partnerships.</p>
        </div>
      {% endcapture %}
      {% capture roles_content %}
        {% include components/design-card.html class="pricing-summary-card" content=roles_card %}
      {% endcapture %}
      {% include components/design-content-width.html content=roles_content %}
    </div>
  </section>
</div>
