---
title: Membership
description: "Be part of the .env story."
permalink: /membership
layout: radar
body_class: home-page membership-page
practitioner_ids:
  - dhravya
  - john-zila
---

<style>
  .membership-plan-price { display: block; margin-top: .5rem; font-family: var(--design-font-sans); font-size: var(--design-text-body, 1rem); font-weight: 400; letter-spacing: normal; text-transform: none; color: var(--design-body); }
  .membership-hero-card { display: block; width: calc(var(--hero-illustration-width) * 1.4); max-width: none; height: auto; flex: none; box-shadow: 0 5px 8px rgb(0 0 0 / .12); border-radius: 8px; }
  html.dark .membership-hero-card { --member-card-edge: var(--design-line); --member-card-outline: var(--design-mid); --member-card-inset: var(--design-line); --member-card-divider: var(--design-line); box-shadow: 0 2px 0 var(--design-line); }
  .membership-comparison .design-table-wrap { overflow: visible; }
  .membership-comparison .design-table { table-layout: fixed; }
  .membership-comparison .design-table a.design-link { font-weight: inherit !important; }
  .membership-addon-row { scroll-margin-top: 6rem; }
  .membership-comparison .pricing-value-detail:focus-within::after { content: attr(data-tooltip); opacity: 1; visibility: visible; transform: translate(-50%, 0); }
  .membership-comparison .pricing-value-detail--right:focus-within::after { transform: translate(0, 0); }
  .membership-comparison .design-table .membership-section-row { background-color: var(--design-bg); }
  .membership-comparison .design-table .membership-section-row th { color: var(--design-mid); font-family: var(--design-font-mono); font-size: var(--design-text-compact); font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
  .membership-comparison .design-table thead th { width: 30%; text-align: center; white-space: normal; vertical-align: top; }
  .membership-comparison .design-table thead th:first-child { width: 40%; text-align: left; }
  .membership-plan-actions .design-btn { font-size: .875rem; padding: .55rem .75rem; white-space: nowrap; }
  .membership-comparison .membership-plan-actions td { padding-inline: .25rem; }
  .membership-members { margin-top: 3rem; }
  .membership-members .design-list-title { margin: 0 0 1.5rem; text-align: center; font-size: var(--design-text-compact); color: var(--design-mid); font-weight: 400; }
  .membership-proof > .radar-section { margin-block: 0; padding-block: 0; }
</style>

{% capture membership_visual %}
  {% include_relative assets/img/dotenv-membership-card.svg %}
{% endcapture %}

{% capture membership_practitioner %}
  {% include components/practitioner-portraits.html ids=page.practitioner_ids %}
{% endcapture %}

{% capture membership_slab %}
  {% include components/env-slab.html %}
{% endcapture %}

{% capture membership_actions %}
  {% include components/design-btn.html href="/signup" label="Sign up" %}
  {% include components/design-btn.html href="/members" label="Members" class="design-btn--secondary" %}
{% endcapture %}

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Membership">
    <div class="armor-shell">
      {% include components/design-hero.html compact=true name_heading=true name=page.title description=page.description content=membership_slab actions=membership_actions %}

    </div>
  </section>


  {% include components/armor/logo-cloud.html %}

  <section class="radar-section" aria-label="Membership pricing">
    <div class="armor-shell">
      {% capture membership_pricing_rows %}
        <thead>
          <tr>
            <th scope="col">Membership</th>
            <th scope="col" class="design-table-cell--center pricing-summary-plan">Professional<span class="membership-plan-price">$100/yr</span></th>
            <th scope="col" class="design-table-cell--center pricing-summary-plan">Executive<span class="membership-plan-price">$1,000/yr</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><a class="design-link" href="/members">Members</a></th>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Members. Pro includes you and one invited collaborator." data-tooltip="Pro includes you and one invited collaborator.">You + one</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Members. The Executive plan covers the members of your team." data-tooltip="The Executive plan covers the members of your team.">Your team</span></td>
          </tr>
          <tr>
            <th scope="row"><a class="design-link" href="/members">Public Recognition</a></th>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Public Recognition. Show your commitment to secrets security with an optional public member profile, including your photo and work." data-tooltip="Show your commitment to secrets security with an optional public member profile, including your photo and work.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Public Recognition. Show your company’s commitment to secrets security with an optional public company profile and logo." data-tooltip="Show your company’s commitment to secrets security with an optional public company profile and logo.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
          </tr>
          <tr>
            <th scope="row">Agentic Readiness</th>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Agentic Readiness. Make your commitment to safer secrets handling for AI agents public, alongside your Dotenv membership." data-tooltip="Make your commitment to safer secrets handling for AI agents public, alongside your Dotenv membership.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Agentic Readiness. Make your commitment to safer secrets handling for AI agents public, alongside your Dotenv membership." data-tooltip="Make your commitment to safer secrets handling for AI agents public, alongside your Dotenv membership.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
          </tr>
          <tr>
            <th scope="row">Company Spotlight</th>
            <td class="design-table-cell--center pricing-empty"><span aria-label="Not included">—</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Company Spotlight. A feature highlighting how your team approaches secrets security." data-tooltip="A feature highlighting how your team approaches secrets security.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
          </tr>
          <tr>
            <th scope="row">Perks</th>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Perks. Discounts or credits from complementary tools, services, and APIs. Coming soon." data-tooltip="Discounts or credits from complementary tools, services, and APIs. Coming soon.">{% include components/design-check.html tone="success" size="sm" label="Coming soon" %}</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Perks. Discounts or credits from complementary tools, services, and APIs. Coming soon." data-tooltip="Discounts or credits from complementary tools, services, and APIs. Coming soon.">{% include components/design-check.html tone="success" size="sm" label="Coming soon" %}</span></td>
          </tr>
          <tr>
            <th scope="row">Secrets Manager</th>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Secrets Manager: Armor included. Hardened Dotenvx for security professionals with full access control of your secrets." data-tooltip="Hardened Dotenvx for security professionals with full access control of your secrets. Govern every unlock and see every access–human or agent.">Armor <span aria-hidden="true">⛨</span></span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Secrets Manager: Armor included. Hardened Dotenvx for security professionals with full access control of your secrets." data-tooltip="Hardened Dotenvx for security professionals with full access control of your secrets. Govern every unlock and see every access–human or agent.">Armor <span aria-hidden="true">⛨</span></span></td>
          </tr>
          <tr class="membership-plan-actions">
            <th scope="row"><span class="sr-only">Sign up</span></th>
            <td class="design-table-cell--center"><a class="design-btn" href="/signup" aria-label="Sign up for the Professional plan">Sign up</a></td>
            <td class="design-table-cell--center"><a class="design-btn" href="/signup" aria-label="Sign up for the Executive plan">Sign up</a></td>
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

  <div class="membership-proof">
  {% include components/membership-armor.html %}

  <section class="radar-section" aria-label="Members">
    <div class="armor-shell">
      {% include components/practitioner-portraits.html ids=page.practitioner_ids show_all=true %}
    </div>
  </section>

  </div>

  {% include components/membership-join.html %}

</div>
