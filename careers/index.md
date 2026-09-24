---
title: Careers
description: "Help build the next chapter of Dotenv. In the code, and in the companies that use it."
permalink: /careers/
layout: radar
body_class: home-page careers-page
---



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
      {% capture roles_rows %}
        <thead>
          <tr><th scope="col" id="open-roles">Openings</th></tr>
        </thead>
        <tbody>
          <tr><td><a class="design-link" href="/careers/agent-engineer/">Agent Engineer →</a></td></tr>
          <tr><td><a class="design-link" href="/careers/corporate-sponsorships/">Corporate Sponsorships →</a></td></tr>
        </tbody>
      {% endcapture %}
      {% capture roles_card %}
        {% include components/design-table.html class="design-table-wrap--fill" content=roles_rows %}
      {% endcapture %}
      {% capture roles_content %}
        {% include components/design-card.html class="pricing-summary-card" content=roles_card %}
      {% endcapture %}
      {% include components/design-content-width.html content=roles_content %}
    </div>
  </section>
</div>
