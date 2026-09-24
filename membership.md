---
title: Membership
description: "For security professionals advancing secrets security—for humans and agents."
permalink: /membership
layout: radar
body_class: home-page membership-page
---

<style>
  .membership-page .design-hero-content { display: flex; align-items: center; justify-content: center; }
  .membership-hero-card { display: block; width: calc(var(--hero-illustration-width) * 1.4); max-width: none; height: auto; flex: none; box-shadow: 0 5px 8px rgb(0 0 0 / .12); border-radius: 8px; }
  html.dark .membership-hero-card { --member-card-edge: var(--design-line); --member-card-outline: var(--design-mid); --member-card-inset: var(--design-line); --member-card-divider: var(--design-line); box-shadow: 0 2px 0 var(--design-line); }
  .membership-comparison .design-table-wrap { overflow: visible; }
  .membership-comparison .design-table { table-layout: fixed; }
  .membership-addon-row { scroll-margin-top: 6rem; }
  .membership-comparison .pricing-value-detail:focus-within::after { content: attr(data-tooltip); opacity: 1; visibility: visible; transform: translate(-50%, 0); }
  .membership-comparison .pricing-value-detail--right:focus-within::after { transform: translate(0, 0); }
  .membership-comparison .design-table .membership-section-row { background-color: var(--design-bg); }
  .membership-comparison .design-table .membership-section-row th { color: var(--design-mid); font-family: var(--design-font-mono); font-size: var(--design-text-compact); font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
  .membership-comparison .design-table thead th { width: 30%; text-align: center; white-space: normal; vertical-align: top; }
  .membership-comparison .design-table thead th:first-child { width: 40%; text-align: left; }
  .membership-members .design-list-title { margin: 0 0 2rem; text-align: center; }
</style>

{% capture membership_visual %}
  {% include_relative assets/img/dotenv-membership-card.svg %}
{% endcapture %}

{% capture membership_actions %}
  {% include components/design-btn.html href="/signup" label="Become a member" %}
{% endcapture %}

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Membership">
    <div class="armor-shell">
      {% include components/design-hero.html compact=true name_heading=true name=page.title description=page.description content=membership_visual actions=membership_actions %}
    </div>
  </section>


  <section class="radar-section" aria-label="Membership pricing">
    <div class="armor-shell">
      {% capture membership_pricing_rows %}
        <thead>
          <tr>
            <th scope="col">Membership</th>
            <th scope="col" class="design-table-cell--center pricing-summary-plan">Professional</th>
            <th scope="col" class="design-table-cell--center pricing-summary-plan">Executive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Price</th>
            <td class="design-table-cell--center">$100/yr</td>
            <td class="design-table-cell--center">$1,000/yr</td>
          </tr>
          <tr>
            <th scope="row">Members</th>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Members. Pro includes you and one invited collaborator." data-tooltip="Pro includes you and one invited collaborator.">You + one</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Members. Executive covers the members of your team." data-tooltip="Executive covers the members of your team.">Your team</span></td>
          </tr>
          <tr>
            <th scope="row">Public Recognition</th>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Public Recognition. Show your commitment to secrets security with an optional public member profile, including your photo and work." data-tooltip="Show your commitment to secrets security with an optional public member profile, including your photo and work.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Public Recognition. Show your company’s commitment to secrets security with an optional public company profile and logo." data-tooltip="Show your company’s commitment to secrets security with an optional public company profile and logo.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
          </tr>
          <tr>
            <th scope="row">Practitioner Badge</th>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Practitioner Badge. Show that you practice the Dotenv and Dotenvx approach to secrets security. Share your badge on your website or GitHub README." data-tooltip="Show that you practice the Dotenv and Dotenvx approach to secrets security. Share your badge on your website or GitHub README.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Practitioner Badge. Show that your team practices the Dotenv and Dotenvx approach to secrets security. Share your badge on your company website or GitHub README." data-tooltip="Show that your team practices the Dotenv and Dotenvx approach to secrets security. Share your badge on your company website or GitHub README.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
          </tr>
          <tr>
            <th scope="row">Agentic Readiness Pledge</th>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Agentic Readiness Pledge. Make your commitment to safer secrets handling for AI agents public, alongside your Dotenv membership." data-tooltip="Make your commitment to safer secrets handling for AI agents public, alongside your Dotenv membership.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Agentic Readiness Pledge. Make your commitment to safer secrets handling for AI agents public, alongside your Dotenv membership." data-tooltip="Make your commitment to safer secrets handling for AI agents public, alongside your Dotenv membership.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
          </tr>
          <tr>
            <th scope="row">Company Spotlight</th>
            <td class="design-table-cell--center pricing-empty"><span aria-label="Not included">—</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Company Spotlight. A feature highlighting how your team approaches secrets security." data-tooltip="A feature highlighting how your team approaches secrets security.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
          </tr>
          <tr>
            <th scope="row">Partner Benefits</th>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Partner Benefits. Discounts or credits from complementary tools, services, and APIs." data-tooltip="Discounts or credits from complementary tools, services, and APIs.">Coming soon</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Partner Benefits. Discounts or credits from complementary tools, services, and APIs." data-tooltip="Discounts or credits from complementary tools, services, and APIs.">Coming soon</span></td>
          </tr>
          <tr>
            <th scope="row">Dotenvx Armor <span aria-hidden="true">⛨</span></th>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Dotenvx Armor. Hardened Dotenvx for security professionals with full access control of your secrets. Govern every unlock and see every access–human or agent." data-tooltip="Hardened Dotenvx for security professionals with full access control of your secrets. Govern every unlock and see every access–human or agent.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Dotenvx Armor. Hardened Dotenvx for security professionals with full access control of your secrets. Govern every unlock and see every access–human or agent." data-tooltip="Hardened Dotenvx for security professionals with full access control of your secrets. Govern every unlock and see every access–human or agent.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
          </tr>
        </tbody>
      {% endcapture %}
      {% capture membership_pricing_table %}
        {% include components/design-table.html class="design-table-wrap--fill" content=membership_pricing_rows %}
      {% endcapture %}
      <div class="membership-comparison">
        {% include components/design-card.html class="pricing-summary-card" content=membership_pricing_table %}
      </div>
    </div>
  </section>

  {% include components/membership-armor.html %}

  <section class="radar-section membership-members" aria-labelledby="membership-members-title">
    <div class="armor-shell">
      <h2 class="design-list-title" id="membership-members-title">Our members</h2>
      {% include components/armor/logo-cloud.html %}
    </div>
  </section>

  <section class="radar-section" aria-label="Become a member">
    <div class="armor-shell">
      <div class="home-cta">{{ membership_actions }}</div>
    </div>
  </section>

</div>
