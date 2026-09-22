---
title: "Dotenvx Armor for Security Teams"
social_title: "Dotenvx Armor for Security Teams"
description: "Hardened Dotenvx for security teams with full access control of your secrets–govern every unlock and see every access."
image: "/assets/img/og-image-armor.png"
layout: radar
---

<style>
  .armor-forcefield { overflow: visible; pointer-events: none; outline: none; -webkit-user-select: none; user-select: none; }
  .armor-forcefield * { pointer-events: none; }
  .armor-forcefield .armor-forcefield-hit { pointer-events: all; cursor: pointer; }
  .armor-forcefield:focus-visible { outline: none; }
  .armor-attack-tracer { stroke: #626b73; stroke-width: 1.4; stroke-linecap: round; vector-effect: non-scaling-stroke; }
  html.dark .armor-attack-tracer { stroke: #b9c3cc; }
  html:not(.dark) .armor-energy-haze { opacity: 0.045; }
  html:not(.dark) .armor-energy-edge { opacity: 0.22; }
  html:not(.dark) .armor-energy-trace { opacity: 0.07; }
  .armor-energy-flow { animation: armor-energy-flow 8s linear infinite; }
  .armor-field-side .armor-energy-flow { animation-delay: -3s; }
  .armor-field-end .armor-energy-flow { animation-delay: -5s; }
  @keyframes armor-energy-flow { to { stroke-dashoffset: -1155; } }
  .armor-field-panel { transform-box: fill-box; transform-origin: center; }
  .is-arming .armor-field-panel { animation: armor-field-snap 1.6s both; }
  .is-arming .armor-field-top { animation-delay: 0s; }
  .is-arming .armor-field-side { animation-delay: 0.1s; }
  .is-arming .armor-field-end { animation-delay: 0.2s; }
  .armor-field {
    /* Ripple circles grow beyond the shield; they must not move its scale origin. */
    transform-box: view-box; transform-origin: 440px 407px;
    --field-rest-scale: 1.06;
    scale: var(--field-rest-scale);
    transition: scale 420ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .is-repelling .armor-field { animation: armor-field-release 850ms ease-out; }
  @keyframes armor-field-release {
    0%, 100% { scale: var(--field-rest-scale); }
    18%, 40% { scale: 0.91; }
  }
  .armor-impact-wave { stroke: #65758b; }
  html.dark .armor-impact-wave { stroke: #c5d4e8; }
  .is-repelling .armor-impact-wave { animation: armor-impact-wave 950ms linear both; }
  .is-repelling .armor-impact-wave-echo { animation-delay: 85ms; }
  @keyframes armor-impact-wave {
    0% { r: 2px; opacity: 0.8; }
    12% { r: 55px; opacity: 0.7; }
    40% { r: 270px; opacity: 0.38; }
    70% { r: 570px; opacity: 0.13; }
    100% { r: 900px; opacity: 0; }
  }
  @keyframes armor-field-snap {
    0% { transform: scale(1.16); opacity: 0; }
    35% { transform: scale(1.1); opacity: 0.35; }
    72% { transform: scale(0.985); opacity: 1; }
    86%, 100% { transform: scale(1); opacity: 1; }
  }
  @keyframes armor-field-seal {
    0% { opacity: 0; }
    18% { opacity: 0.55; }
    100% { opacity: 0; }
  }
  @media (prefers-reduced-motion: reduce) {
    .armor-field { transition: none; }
    .is-arming .armor-field-panel, .armor-energy-flow,
    .is-repelling .armor-impact-wave, .is-repelling .armor-field { animation: none; }
  }

</style>

{% capture armor_hero_container %}
  <svg class="design-hero2-container-stack armor-forcefield" viewBox="60 -335.061526 973 1089" role="button" tabindex="0" aria-label="Launch a dart at the clicked point on the protective field" data-armor-forcefield>
    <g transform="translate(106.5 -197.561526)">
    <g aria-hidden="true">
      {% include components/shipping-container.html color="#575B60" face_color="#111214" label=".ENV.PROD ⛨" %}
      {% include components/armor/forcefield.html %}
    </g>
    {% comment %}Stable silhouette hit area keeps hover from flickering as the field tightens.{% endcomment %}
    <path class="armor-forcefield-hit" aria-hidden="true" fill="transparent"
      transform="translate(440 407) scale(1.06) translate(-440 -407)"
      d="M29 184Q29 174 38 169L277 30Q286 25 295 30L842 346Q851 351 851 361V644Q851 654 842 659L625 785Q616 790 607 785L38 456Q29 451 29 441Z" />
    </g>
  </svg>
{% endcapture %}

<script src="{{ '/assets/js/armor-forcefield.js' | relative_url }}?v=4" defer></script>

{% capture armor_hero2_description %}
  {{ page.description }}
{% endcapture %}
{% capture armor_hero2_actions %}
  {% include components/design-btn.html label="Sign Up" href="/signup" data_umami_event="Armor Hero Signup button" %}
  {% include components/design-btn.html label="Pricing" href="/pricing" data_umami_event="Armor Hero Pricing button" %}
{% endcapture %}

<div class="armor-page">
  <div class="home-sections armor-intro">
  {% include components/home-hero2.html
    compact=true
    name=page.title
    actions=armor_hero2_actions
    content=armor_hero_container
    description=armor_hero2_description
  %}

    {% include components/armor/logo-cloud.html %}
  </div>

  {% include components/home-features.html data="armor_features" %}

  {% include components/armor-in-use.html %}

  {% include components/faq-yes.html %}

  <section class="radar-section" aria-label="Next step">
    <div class="armor-shell">
      <div class="home-cta">
        {% include components/design-cta-message.html
          text="Once the private key isn't on the machine, encrypted .env finally feels finished. That's Armor."
        %}
        {% include components/design-btn.html
          label="Sign Up Free ›"
          href="https://armor.dotenvx.com/signup"
        %}
      </div>
    </div>
  </section>

  {% comment %}
  {% include components/armor/lightning.html %}
  {% include components/armor/hero.html %}
  {% include components/armor/keys.html %}
  {% include components/armor/grant.html %}
  {% include components/armor/cta.html %}
  {% endcomment %}
</div>
