---
title: "Watt: Secrets with code. No new critical path."
description: How John Zila uses Dotenvx at Watt to securely version and deploy secrets with code, without a new critical path dependency.
permalink: /members/watt
layout: radar
og_image:
  template: logo
  logo: _includes/logos/wattdata.svg
  alt: Watt
body_class: home-page
---

<div class="home-sections">
<section class="design-hero-section home-hero">
  <div class="armor-shell">
    <div class="design-hero design-hero--compact design-hero--secondary">
      {% include logos/wattdata.html class="mx-auto max-w-full w-48 h-auto" %}
      <div class="design-page-header-desc design-hero-description">
        <h1 class="design-hero-name">Secrets with code. No new critical path.</h1>
      </div>
    </div>
  </div>
</section>

<section class="radar-section">
  <div class="armor-shell">
    {% assign john = site.data.practitioners.john-zila %}
    {% capture john_quote %}"{{ john.quote }}"{% endcapture %}
    {% capture story %}
      {% include components/design-quote.html
        text=john_quote
        author=john.name
        author_url="https://www.linkedin.com/in/jzila/"
        organization="Cofounder and Chief Architect"
        class="!mt-0 !mb-10"
      %}

      <p class="design-paragraph">For John, managing secrets comes down to two requirements: keep them secure, and keep deployments independent of a new service in the critical path.</p>
      <p class="design-paragraph">Dotenvx lets him and his team at Watt version and deploy secrets alongside code. Encrypted secrets can live in the repository, so the configuration their application needs travels with the code that uses it.</p>
      <p class="design-paragraph">That keeps secrets in the workflow his team already uses to version and deploy the application. With the private key available in the deployment environment, Dotenvx decrypts those secrets at runtime without fetching them from a separate secrets service.</p>
      <p class="design-paragraph">For John, that's the win: <strong>securely versioned secrets, deployed with code, without taking on a new critical path dependency.</strong></p>
      <p class="design-paragraph">It just works.</p>
      <hr class="member-story-divider">
      <p class="design-paragraph"><strong>John is Cofounder and Chief Architect at Watt and was previously Head of Security DevOps at Zoom.</strong></p>
    {% endcapture %}
    {% include components/design-content-width.html content=story %}
  </div>
</section>
</div>
