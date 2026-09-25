---
title: Members
description: Meet the people practicing safer secrets management with Dotenvx.
permalink: /members
layout: radar
body_class: home-page members-page
---

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Members">
    <div class="armor-shell">
      {% include components/design-hero.html compact=true name_heading=true name=page.title description=page.description %}
    </div>
  </section>
  <section class="radar-section member-directory-section" aria-label="Member directory">
    <div class="armor-shell">
      <div class="member-token-grid" data-member-token-grid>
        {% for token in (1..32) %}
        <button type="button" class="member-token-slot" data-token-slot aria-pressed="false" aria-label="Membership token {{ token }} of 32. Hover or focus to see the back."></button>
        {% endfor %}
      </div>
      <script type="module" src="/assets/js/member-token-grid.js?v={{ site.time | date: '%s' }}"></script>
      <div class="member-directory-join">
        <p>Be part of the next chapter of .env.</p>
        <a class="design-link" href="/membership">Explore membership →</a>
      </div>
    </div>
  </section>
</div>
