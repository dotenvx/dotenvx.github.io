---
title: Current Members
description: Thank you for being part of the .env story.
permalink: /members
layout: radar
body_class: home-page members-page
---

{% capture members_actions %}
  {% include components/design-btn.html href="/membership" label="Membership Benefits" %}
{% endcapture %}

{% capture members_visual %}
  <div class="member-hero-portraits" data-member-hero-portraits aria-label="Our members"></div>
{% endcapture %}

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Members">
    <div class="armor-shell">
      {% include components/design-hero.html compact=true name_heading=true name=page.title description=page.description content=members_visual actions=members_actions %}
    </div>
  </section>
  <section class="radar-section member-directory-section" aria-label="Member directory">
    <div class="armor-shell">
      <div class="member-directory-content">
        <section class="member-directory-group" aria-labelledby="member-companies-heading">
          <h2 id="member-companies-heading" class="member-group-title">Businesses</h2>
          <div class="member-company-grid" data-executive-members aria-busy="true"></div>
          <p class="member-directory-status" data-executive-status role="status">Loading teams…</p>
          <template id="executive-member-template">
            <div class="member-portrait-square member-company-preview member-company-static">
              <span class="member-portrait-turn">
                <span class="member-company-face member-company-front">
                  <img class="member-company-logo member-company-logo--image" alt="" width="160" height="160" loading="lazy">
                  <span class="member-company-initials" hidden></span>
                </span>
              </span>
            </div>
          </template>
        </section>
        <section class="member-directory-group" aria-labelledby="member-people-heading">
          <h2 id="member-people-heading" class="member-group-title">Members</h2>
          <div class="member-people-grid" data-members-url="https://armor.dotenvx.com/public/members.json" aria-busy="true"></div>
          <p class="member-directory-status" role="status">Loading members…</p>
          <template id="professional-member-template">
            {% include components/professional-card.html photo_back=true initials="" name="" image="" %}
          </template>
          <noscript><p>Enable JavaScript to view the member directory.</p></noscript>
        </section>

      </div>
    </div>
  </section>
  {% include components/membership-join.html label="Membership Benefits" href="/membership" %}
</div>

<script src="/assets/js/member-portraits.js?v={{ site.time | date: '%s' }}" defer></script>
