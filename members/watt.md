---
title: "Watt: Secrets with code. No new critical path."
description: How John Zila uses Dotenvx at Watt to securely version and deploy secrets with code, without a new critical path dependency.
permalink: /members/watt
og_image:
  template: logo
  logo: _includes/logos/wattdata.svg
  alt: Watt

---


{{ page.description }}

<div class="writer-member-logo">{% include logos/wattdata.html %}</div>

    {% assign john = site.data.practitioners.john-zila %}
    {% capture john_quote %}"{{ john.quote }}"{% endcapture %}
    {% capture story %}
      {% include components/design-quote.html
        text=john_quote
        author=john.name
        author_image=john.image
        author_url="https://www.linkedin.com/in/jzila/"
        organization="Cofounder / Chief Architect at Watt"
        class="!mt-0 !mb-10"
      %}

      <p class="design-paragraph">For John, managing secrets comes down to two requirements: keep them secure, and keep deployments independent of a new service.</p>
      <p class="design-paragraph">Dotenvx lets Watt store encrypted secrets in the repository, so configuration travels with the application. With the private key in the deployment environment, those secrets are decrypted at runtime without fetching them from a separate service.</p>
      <p class="design-paragraph">Secrets stay in the workflow his team already uses. <strong>No new critical path.</strong></p>
      <hr class="member-story-divider">
      <p class="design-paragraph"><strong>John is Cofounder and Chief Architect at Watt and was previously Head of Security DevOps at Zoom.</strong></p>
    {% endcapture %}

<div>
{{ story | strip }}
</div>
