---
title: Dotenvx Agent Infrastructure
description: "Make your secrets infrastructure secure for agents."
permalink: /infra
layout: radar
body_class: home-page
---

<style>
  .infra-content { display: flex; flex-direction: column; gap: 2.5rem; }
  .infra-content p { margin: 0; }
  .infra-section { display: flex; flex-direction: column; gap: 1rem; }
  .infra-card { background: var(--design-panel); width: 100%; }
  .infra-closing { text-align: center; align-items: center; }
  .infra-content .design-btn { max-width: 100%; white-space: normal; }
  .infra-hero .design-hero2-content {
    width: min(100%, 22rem);
    height: auto;
    aspect-ratio: 2820 / 2720;
  }
  .infra-container-stack { display: block; width: 100%; height: auto; }
</style>

{% assign infra_contact = "mailto:support@dotenvx.com?subject=Dotenvx%20Agent%20Infrastructure" %}
{% capture infra_actions %}
  {% include components/design-btn.html label="Talk to the experts" href=infra_contact %}
{% endcapture %}
{% capture infra_visual %}
  {% include components/infra-container-stack.html %}
{% endcapture %}

<div class="home-sections">
  <section class="design-hero home-hero2 infra-hero" aria-label="Dotenvx Agent Infrastructure">
    <div class="armor-shell">
      {% include components/design-hero2.html
        compact=true
        name_heading=true
        name="Dotenvx Agent Infrastructure"
        description="Make your secrets infrastructure secure for agents."
        actions=infra_actions
        content=infra_visual
      %}
    </div>
  </section>

  <section class="radar-section" aria-label="The offering">
    <div class="armor-shell">
      {% capture infra_content %}
        <div class="infra-section">
          <p class="design-paragraph">Give your agents the access to do real work. Let them use secrets, without seeing secrets.</p>
          <p class="design-paragraph">Bring in the team behind Dotenv and Dotenvx to make your infrastructure ready for agents—around your stack, your policies, and the way you operate.</p>
        </div>

        <div class="infra-section">
          {% capture infra_pricing_rows %}
            <thead><tr><th scope="col">Engagement</th><th scope="col" class="design-table-cell--right">Starting at</th></tr></thead>
            <tbody>
              <tr><td>Agentic Secrets Audit</td><td class="design-table-cell--right">$15,000</td></tr>
              <tr><td>Agentic Secrets Implementation</td><td class="design-table-cell--right">$50,000</td></tr>
            </tbody>
          {% endcapture %}
          {% capture infra_pricing_table %}
            {% include components/design-table.html content=infra_pricing_rows class="design-table-wrap--fill" %}
          {% endcapture %}
          {% include components/design-card.html content=infra_pricing_table class="infra-card" %}
          <p class="design-paragraph text-center">Scope and pricing agreed together. USD.</p>
        </div>

        <div class="infra-section infra-closing">
          <p class="design-paragraph"><strong>Let your agents cook. Safely.</strong></p>
          {% include components/design-btn.html label="Talk to us" href=infra_contact %}
        </div>
      {% endcapture %}
      {% include components/design-content-width.html content=infra_content class="infra-content" %}
    </div>
  </section>
</div>
