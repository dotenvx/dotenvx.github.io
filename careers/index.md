---
title: Careers
description: "Help build the next chapter of dotenv. In the code, and in the companies that use it."
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

  <section class="radar-section" aria-labelledby="sales">
    <div class="armor-shell">
      {% capture sales_content %}
        <div class="design-step">
          <header class="design-page-header">
            <p class="design-page-header-eyebrow">Sales</p>
            <h2 class="design-page-title design-page-title--flush" id="sales">Enterprise Sales Partner</h2>
          </header>
          <p class="design-paragraph">Commission-based · No base salary</p>
          <p class="design-paragraph">Developers bring dotenv and Dotenvx into their companies. Help turn that adoption into enterprise business.</p>
          <p class="design-paragraph">We're looking for someone who knows how to find an opportunity, reach the right people, and bring in a customer. You'll connect with engineering and security leaders and help them bring Dotenvx into their infrastructure.</p>

          <h3 class="design-list-title">The work</h3>
          <ul class="design-list-items">
            <li>Find companies that would benefit from Dotenvx.</li>
            <li>Start conversations with the people responsible for secrets infrastructure, developer tooling, and agent adoption.</li>
            <li>Work with us to turn those conversations into paid enterprise customers.</li>
          </ul>

          <h3 class="design-list-title">How you're paid</h3>
          <p class="design-paragraph">This is a commission-based sales opportunity with no base salary. You earn a meaningful percentage of first-year revenue from customers you bring in. We'll agree on the percentage and payment terms before we start.</p>

          <h3 class="design-list-title">Let's talk</h3>
          <p class="design-paragraph">Tell us about the enterprise deals you've sourced and how you'd approach Dotenvx.</p>
          {% include components/design-btn.html
            label="Talk to us about sales"
            href="/contact"
            data_umami_event="Careers Sales Contact button"
          %}
        </div>
      {% endcapture %}
      {% include components/design-content-width.html content=sales_content %}
    </div>
  </section>
</div>
