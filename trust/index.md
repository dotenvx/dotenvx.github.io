---
title: Trust Center
description: "From the creator of dotenv, Dotenvx extends the .env workflow trusted by developers for over a decade with encryption, key separation, and secure secret distribution."
permalink: /trust/
layout: radar
body_class: home-page trust-page
---

<style>
  .trust-content { max-width: 80rem; padding-top: 2.5rem; }
  .trust-header { display: flex; flex-direction: column; gap: 1rem; text-align: left; }
  .trust-header > :is(h1, p) { margin: 0; }
  .trust-description { max-width: 40rem; text-wrap: pretty; }
  .trust-header h1 { font: inherit; font-weight: 700; }
  @media (min-width: 768px) { .trust-content { padding-top: 3.5rem; } }
  .trust-nav { display: flex; flex-wrap: wrap; gap: .75rem; padding-block: 1rem; border-block: 1px solid var(--design-line); margin-block: 2rem; }
  .trust-overview { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); gap: 2rem; }
  .trust-overview > section { min-width: 0; }
  .trust-section { margin-top: 2.5rem; scroll-margin-top: 2rem; }
  .trust-overview h2 { margin-top: 0; }
  .trust-frameworks { display: inline-flex; align-items: center; isolation: isolate; }
  .trust-frameworks > span { position: relative; display: inline-flex; flex-shrink: 0; }
  .trust-frameworks > span + span { margin-left: -.5rem; }
  .trust-frameworks > span:first-child { z-index: 1; }
  .trust-page .design-table td { white-space: normal; vertical-align: top; }
  .trust-page .design-table td p { margin-top: .5rem; margin-bottom: 0; }
  .trust-controls-table .design-table { table-layout: fixed; }
  .trust-controls-table .design-table th:last-child { width: 9rem; }
  .trust-maintainer { margin-top: 2.5rem; padding-top: 1rem; border-top: 1px solid var(--design-line); }
  @media (max-width: 800px) { .trust-overview { grid-template-columns: 1fr; } }
</style>

<div class="armor-shell design-prose trust-content">
<header class="trust-header">
  <h1>{{ page.title | escape }}</h1>
  <p class="trust-description">{{ page.description | escape }}</p>
  <p><a class="design-link" href="mailto:security@dotenvx.com">security@dotenvx.com</a></p>
</header>

<nav class="trust-nav" aria-label="Trust center sections">
  {% include components/design-btn.html href="#compliance" label="Compliance" %}
  {% include components/design-btn.html href="#documents" label="Documents · 4" %}
  {% assign control_count = 0 %}
  {% for group in site.data.trust.control_groups %}{% assign control_count = control_count | plus: group.controls.size %}{% endfor %}
  {% capture controls_label %}Security Controls · {{ control_count }}{% endcapture %}
  {% include components/design-btn.html href="#controls" label=controls_label %}
  {% capture subprocessors_label %}Subprocessors · {{ site.data.trust.subprocessors.size }}{% endcapture %}
  {% include components/design-btn.html href="#subprocessors" label=subprocessors_label %}
</nav>

<div class="trust-overview">
  <section id="compliance" aria-labelledby="compliance-heading">
    <h2 id="compliance-heading">Compliance Overview</h2>
    <p>Formal assurance work currently underway.</p>
    {% capture compliance_rows %}
      <thead><tr><th scope="col">Framework</th></tr></thead>
      <tbody>
        <tr><td><div class="flex items-center gap-4">{% include logos/framework-soc2.html uid="trust-overview-soc2" class="h-12 w-12" %}<div><strong>SOC 2 Type 2</strong><p>{% include components/design-badge.html label="Audit in Progress" %}</p></div></div></td></tr>
        <tr><td><div class="flex items-center gap-4">{% include logos/framework-gdpr.html class="h-12 w-12" %}<div><strong>GDPR</strong><p>{% include components/design-badge.html label="DPA in Preparation" %}</p></div></div></td></tr>
      </tbody>
    {% endcapture %}
    <div class="design-card">
      {% include components/design-table.html class="design-table-wrap--fill" content=compliance_rows %}
    </div>
  </section>
  <section id="documents" aria-labelledby="documents-heading">
    <h2 id="documents-heading">Documents</h2>
    <p>Security artifacts and review materials.</p>
    {% capture document_rows %}
      <thead><tr><th scope="col">Document</th><th scope="col">Action</th></tr></thead>
      <tbody>
        <tr><td><strong>Dotenvx Whitepaper</strong><p>Reducing secrets risk with cryptographic separation.</p></td><td><a class="design-link" href="/whitepaper.pdf">Open Document →</a></td></tr>
        <tr><td><strong>Pentest Report</strong><p>Security assessment report.</p></td><td><a class="design-link" href="mailto:security@dotenvx.com?subject=Pentest%20Report%20Access%20Request">Request Access →</a></td></tr>
        <tr><td><strong>Privacy Policy</strong><p>Data handling and privacy commitments.</p></td><td><a class="design-link" href="/privacy">Open Webpage →</a></td></tr>
        <tr><td><strong>Terms of Service</strong><p>Legal terms for using Dotenvx services.</p></td><td><a class="design-link" href="/terms">Open Webpage →</a></td></tr>
      </tbody>
    {% endcapture %}
    <div class="design-card">
      {% include components/design-table.html class="design-table-wrap--fill" content=document_rows %}
    </div>
  </section>
</div>

<section id="controls" class="trust-section" aria-labelledby="controls-heading">
  <h2 id="controls-heading">Security Controls</h2>
  <p>An overview of security controls in place.</p>
  {% for group in site.data.trust.control_groups %}
    <h3 id="{{ group.title | slugify }}">{{ group.title }}</h3>
    {% capture control_rows %}
      <thead><tr><th scope="col">Control</th><th scope="col">Frameworks</th></tr></thead>
      <tbody>
        {% for control in group.controls %}
          <tr><td><strong>{{ control.title | escape }}</strong><p>{{ control.description | escape }}</p></td><td><div class="trust-frameworks">{% for framework in control.frameworks %}
              <span role="img" aria-label="{{ framework | escape }}">
                {% if framework == 'SOC 2' %}
                  {% assign control_logo_uid = control.title | slugify | prepend: 'trust-control-' %}
                  {% include logos/framework-soc2.html uid=control_logo_uid class="h-5 w-5" %}
                {% elsif framework == 'GDPR' %}
                  {% include logos/framework-gdpr.html class="h-5 w-5" %}
                {% endif %}
              </span>
            {% endfor %}</div></td></tr>
        {% endfor %}
      </tbody>
    {% endcapture %}
    <div class="design-card">
      {% include components/design-table.html class="design-table-wrap--fill trust-controls-table" content=control_rows %}
    </div>
  {% endfor %}
</section>

<section id="subprocessors" class="trust-section" aria-labelledby="subprocessors-heading">
  <h2 id="subprocessors-heading">Subprocessors</h2>
  <p>Third-party providers used to deliver, secure, and operate Dotenvx services.</p>
  {% capture subprocessor_rows %}
    <thead><tr><th scope="col">Provider</th><th scope="col">Purpose</th></tr></thead>
    <tbody>
      {% for provider in site.data.trust.subprocessors %}
        <tr><td><strong>{{ provider.name | escape }}</strong></td><td>{{ provider.purpose | escape }}</td></tr>
      {% endfor %}
    </tbody>
  {% endcapture %}
  <div class="design-card">
      {% include components/design-table.html class="design-table-wrap--fill" content=subprocessor_rows %}
    </div>
</section>

<p class="trust-maintainer">Maintained by <a class="design-link" href="mailto:security@dotenvx.com">Dotenvx Security</a> · Monitored and powered by <a class="design-link" href="https://oneleet.com">Oneleet</a></p>

</div>
