---
title: Current Members
description: Thank you to our members–moving secrets security forward.
permalink: /members
layout: radar
body_class: home-page members-page
---

{% capture members_actions %}
  {% include components/design-btn.html href="/membership" label="Explore membership" %}
{% endcapture %}

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Members">
    <div class="armor-shell">
      <div class="member-hero-portraits" data-member-hero-portraits aria-label="Our members"></div>
      {% include components/design-hero.html compact=true name_heading=true name=page.title description=page.description actions=members_actions %}
    </div>
  </section>
  <section class="radar-section member-directory-section" aria-label="Member directory">
    <div class="armor-shell">
      <div class="member-directory-content">
        <section class="member-directory-group" aria-labelledby="member-companies-heading">
          <h2 id="member-companies-heading" class="member-group-title">5 Executives</h2>
          <div class="member-company-grid">
            {% include components/executive-card.html name="Watt" logo_width="50%" logo="logos/wattdata.html" href="https://wattdata.ai" domain="wattdata.ai" %}
            {% include components/executive-card.html name="Comp AI" logo_width="56%" logo="logos/compai.html" href="https://trycomp.ai" domain="trycomp.ai" %}
            {% include components/executive-card.html name="Kortix" logo_width="52%" logo="logos/kortix.html" href="https://kortix.ai" domain="kortix.ai" %}
            {% include components/executive-card.html name="Loloi" logo_width="32%" logo="logos/loloi.html" href="https://www.loloirugs.com/" domain="loloirugs.com" %}
            {% include components/executive-card.html name="Speak4" logo_width="58%" logo="logos/speak4.html" href="https://speak4.co/" domain="speak4.co" %}
          </div>
        </section>
        <section class="member-directory-group" aria-labelledby="member-people-heading">
          <h2 id="member-people-heading" class="member-group-title">Professionals</h2>
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
  {% include components/membership-join.html label="Explore membership" href="/membership" %}
</div>

<script src="/assets/js/member-portraits.js?v={{ site.time | date: '%s' }}" defer></script>
