---
title: Membership
description: "Be part of the .env story."
permalink: /membership
layout: radar
body_class: home-page membership-page
---

<style>
  .membership-plan-price { display: block; margin-top: .5rem; font-family: var(--design-font-mono); font-size: var(--design-text-body, 1rem); font-weight: 400; letter-spacing: normal; text-transform: none; color: var(--design-body); }
  .membership-hero-card { display: block; width: calc(var(--hero-illustration-width) * 1.4); max-width: none; height: auto; flex: none; box-shadow: 0 5px 8px rgb(0 0 0 / .12); border-radius: 8px; }
  html.dark .membership-hero-card { --member-card-edge: var(--design-line); --member-card-outline: var(--design-mid); --member-card-inset: var(--design-line); --member-card-divider: var(--design-line); box-shadow: 0 2px 0 var(--design-line); }
  .membership-comparison .design-table-wrap { overflow: visible; }
  .membership-comparison .design-table { table-layout: fixed; }
  .membership-comparison .design-table a.design-link { font-weight: inherit !important; }
  .membership-feature-label { display: inline-flex; align-items: center; flex-wrap: wrap; gap: .375rem; }
  .membership-subrow-label { display: inline-block; padding-left: 1rem; }
  .membership-addon-row { scroll-margin-top: 6rem; }
  .membership-comparison .pricing-value-detail:focus-within::after { content: attr(data-tooltip); opacity: 1; visibility: visible; transform: translate(-50%, 0); }
  .membership-comparison .pricing-value-detail--label:focus-within::after,
  .membership-comparison .pricing-value-detail--right:focus-within::after { transform: translate(0, 0); }
  .membership-comparison .design-table .membership-section-row { background-color: var(--design-bg); }
  .membership-comparison .design-table .membership-section-row th { color: var(--design-mid); font-family: var(--design-font-mono); font-size: var(--design-text-compact); font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
  .membership-comparison .design-table thead th { width: 20%; text-align: center; white-space: normal; overflow-wrap: anywhere; vertical-align: top; }
  .membership-comparison .design-table thead th:first-child { width: 40%; text-align: left; }
  .membership-plan-actions .design-btn { font-size: .875rem; padding: .55rem .75rem; white-space: nowrap; }
  .membership-comparison .membership-plan-actions td { padding-inline: .25rem; }
  .membership-members { margin-top: 3rem; }
  .membership-members .design-list-title { margin: 0 0 1.5rem; text-align: center; font-size: var(--design-text-compact); color: var(--design-mid); font-weight: 400; }
  .membership-dotenvx { scroll-margin-top: 6rem; }
  .membership-benefits-note { max-width: 36rem; margin: 2rem auto 0; text-align: center; }
  .membership-corporate-content { display: grid; grid-template-columns: 12rem minmax(0, 1fr); align-items: center; gap: 2rem; }
  .membership-corporate-content .env-slab-stage { height: 12rem; }
  @media (max-width: 640px) {
    .membership-corporate-content { grid-template-columns: 1fr; gap: 1rem; }
    .membership-corporate-content .env-slab { max-width: 16rem; margin-inline: auto; }
  }
</style>

{% capture membership_visual %}
  {% include_relative assets/img/dotenv-membership-card.svg %}
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

  {% include components/membership-dotenvx.html %}

  <section class="radar-section" aria-label="Membership pricing">
    <div class="armor-shell">
      {% include components/design-page-title.html title="Additional Benefits" heading_tag="h2" title_class="text-center" %}
      {% capture membership_pricing_rows %}
        <thead>
          <tr>
            <th scope="col">Membership</th>
            <th scope="col" class="design-table-cell--center pricing-summary-plan">User</th>
            <th scope="col" class="design-table-cell--center pricing-summary-plan">Professional</th>
            <th scope="col" class="design-table-cell--center pricing-summary-plan">Executive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><a class="design-link" href="/members">Public Recognition</a></th>
            <td class="design-table-cell--center pricing-empty"><span aria-label="Not included">—</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Public Recognition. Show your commitment to secrets security with an optional public member profile, including your photo and work." data-tooltip="Show your commitment to secrets security with an optional public member profile, including your photo and work.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Public Recognition. Show your company’s commitment to secrets security with an optional public company profile and logo." data-tooltip="Show your company’s commitment to secrets security with an optional public company profile and logo.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
          </tr>
          <tr>
            <th scope="row">Agentic Readiness</th>
            <td class="design-table-cell--center pricing-empty"><span aria-label="Not included">—</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Agentic Readiness. Make your commitment to safer secrets handling for AI agents public, alongside your Dotenv membership." data-tooltip="Make your commitment to safer secrets handling for AI agents public, alongside your Dotenv membership.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Agentic Readiness. Make your commitment to safer secrets handling for AI agents public, alongside your Dotenv membership." data-tooltip="Make your commitment to safer secrets handling for AI agents public, alongside your Dotenv membership.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
          </tr>
          <tr>
            <th scope="row">Company Spotlight</th>
            <td class="design-table-cell--center pricing-empty"><span aria-label="Not included">—</span></td>
            <td class="design-table-cell--center pricing-empty"><span aria-label="Not included">—</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Company Spotlight. A feature highlighting how your team approaches secrets security." data-tooltip="A feature highlighting how your team approaches secrets security.">{% include components/design-check.html tone="success" size="sm" label="Included" %}</span></td>
          </tr>
          <tr>
            <th scope="row">Perks</th>
            <td class="design-table-cell--center pricing-empty"><span aria-label="Not included">—</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail" tabindex="0" aria-label="Perks. Discounts or credits from complementary tools, services, and APIs. Coming soon." data-tooltip="Discounts or credits from complementary tools, services, and APIs. Coming soon.">{% include components/design-check.html tone="success" size="sm" label="Coming soon" %}</span></td>
            <td class="design-table-cell--center"><span class="pricing-value-detail pricing-value-detail--right" tabindex="0" aria-label="Perks. Discounts or credits from complementary tools, services, and APIs. Coming soon." data-tooltip="Discounts or credits from complementary tools, services, and APIs. Coming soon.">{% include components/design-check.html tone="success" size="sm" label="Coming soon" %}</span></td>
          </tr>
        </tbody>
      {% endcapture %}
      {% capture membership_pricing_table %}
        {% include components/design-table.html class="design-table-wrap--fill" content=membership_pricing_rows %}
      {% endcapture %}
      <div class="membership-comparison">
        {% include components/design-card.html class="pricing-summary-card" content=membership_pricing_table %}
      </div>
      <p class="design-paragraph membership-benefits-note">Your membership helps fund the ongoing development of Dotenvx. By becoming a member, you’re backing what we’re building next and giving us the support to keep going. It makes a real difference. We thank you.</p>
    </div>
  </section>


  <section class="radar-section" aria-labelledby="membership-corporate-title">
    <div class="armor-shell">
      {% include components/design-page-title.html title="Corporate Involvement" heading_tag="h2" title_class="text-center" id="membership-corporate-title" %}
      <div class="membership-corporate-content">
        {% include components/env-slab.html cube=true %}
        <div>
          <p class="design-paragraph">If your company relies on .env, you can help shape what comes next. Corporate involvement brings your team closer to the maintainers, with a chance to see work in progress and share what matters to you.</p>
          <p class="design-paragraph">Your support gives us more room to maintain the foundation and build new tools that stay open for everyone. We’d love to hear what we could build together.</p>
          <p class="design-paragraph">{% include components/design-link.html href="/corporate" label="Explore corporate involvement →" %}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="radar-section" aria-labelledby="membership-careers-title">
    <div class="armor-shell">
      {% include components/design-page-title.html title="Careers" heading_tag="h2" title_class="text-center" id="membership-careers-title" %}
      {% capture membership_careers_content %}
        <p class="design-paragraph">Want to help build the next chapter of .env? Join us in making secrets safer for developers and the agents working alongside them.</p>
        <p class="design-paragraph">Whether you’re building the tools or bringing companies into the work, there’s a chance to make a lasting contribution to something people use every day.</p>
        <p class="design-paragraph text-center">{% include components/design-link.html href="/careers/" label="Explore open roles →" %}</p>
      {% endcapture %}
      {% include components/design-content-width.html content=membership_careers_content %}
    </div>
  </section>

  <section class="radar-section" aria-labelledby="membership-join-title">
    <div class="armor-shell">
      {% include components/design-page-title.html title="Be part of the .env story." heading_tag="h2" title_class="text-center" id="membership-join-title" %}
      <div class="design-hero-actions">{% include components/design-btn.html href="/signup" label="Sign up" %}</div>
    </div>
  </section>

</div>
