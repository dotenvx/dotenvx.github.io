---
title: Corporate Sponsorships
description: "Bring companies together to support the next chapter of .env."
permalink: /careers/corporate-sponsorships/
layout: radar
body_class: home-page careers-page
---

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Corporate Sponsorships">
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

  <section class="radar-section" aria-label="The opportunity">
    <div class="armor-shell">
      {% capture sponsorship_content %}
        <div class="design-prose">
          <p><a href="/careers/">← All opportunities</a></p>
          <p>Dotenv helped make .env part of everyday development. Dotenvx is extending that familiar workflow with encryption and tools for humans and agents. Help bring companies into that next chapter through corporate sponsorships.</p>

          <h2>The work</h2>
          <p>Find prospective sponsors, reach the right people, and turn those conversations into paid partnerships. Work directly with us to shape the sponsorship offer and bring companies on board.</p>
          <p>Connect with developer-tool companies, cloud platforms, security teams, and builders of agents. Show how their support can fund maintenance, compatibility testing, and integrations their users can benefit from. Sponsorship gives them a way to contribute experience and be recognized for backing the ecosystem.</p>

          <p><a href="/ai">Read our story</a> and explore the <a href="/corp">corporate support page</a>.</p>

          <h2>What you bring</h2>
          <p>You know how to start a conversation and see it through to an agreement. You're comfortable speaking with leaders at developer tools and security companies, and explaining why supporting shared infrastructure matters.</p>


          <h2>Let's talk</h2>
          <p>Tell us about partnerships you've brought together and how you'd approach corporate sponsorships for Dotenv.</p>
        </div>
        {% include components/design-btn.html
          label="Get in touch"
          href="/contact"
          data_umami_event="Careers Sponsorships Contact button"
        %}
      {% endcapture %}
      {% include components/design-content-width.html content=sponsorship_content %}
    </div>
  </section>
</div>
