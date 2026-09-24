---
title: Corporate sponsorship
description: "Help advance the foundation."
permalink: /sponsorship
layout: radar
body_class: home-page sponsorship-page
---

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Corporate sponsorship">
    <div class="armor-shell">
      {% include components/design-hero.html compact=true name_heading=true name=page.title description=page.description %}
    </div>
  </section>

  <section class="radar-section" aria-label="Backing the open-source work">
    <div class="armor-shell">
      {% capture sponsorship_story %}
        <div class="design-prose">
          <p>Does your company depend on Dotenv? Help fund the open-source work advancing secrets security for humans and agents.</p>
          <p>Dotenv helped make .env part of how the world builds software. Dotenvx is carrying that familiar workflow forward with encryption, deliberate access to keys, and guardrails for a changing development landscape.</p>
          <p>Corporate sponsorship gives your organization a way to invest in that shared foundation. Fund the maintenance that keeps it dependable, the integrations that bring it to more tools and languages, and the work that makes secrets safer to handle as agents become part of everyday development.</p>
          <p>{% include components/design-link.html href="/ai" label="Read about the next chapter of .env →" %}</p>
        </div>
      {% endcapture %}
      {% include components/design-content-width.html content=sponsorship_story %}
    </div>
  </section>

  <section class="radar-section" aria-label="Shape a sponsorship">
    <div class="armor-shell">
      {% capture sponsorship_invitation %}
        <div class="design-prose">
          <h2 class="design-list-title">Build it with us.</h2>
          <p>Tell us how your company depends on Dotenv and what you want to help advance. Together, we can define an annual contribution, the work it supports, and how your company is recognized.</p>
          <p>Conversations can focus on ongoing maintenance, an integration your ecosystem needs, or safer workflows for humans and agents. We’ll agree on the scope and expectations before a sponsorship begins.</p>
          <p>For personal or team access to Armor and member benefits, explore {% include components/design-link.html href="/membership" label="membership" %}.</p>
          <p>{% include components/design-btn.html href="mailto:support@dotenvx.com?subject=Corporate%20sponsorship" label="Discuss sponsorship" %}</p>
        </div>
      {% endcapture %}
      {% include components/design-content-width.html content=sponsorship_invitation %}
    </div>
  </section>
</div>
