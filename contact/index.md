---
description: "Contact the Dotenvx team for product questions, support, and help managing encrypted environment variables."
title: "Contact"
permalink: /contact/
layout: radar
body_class: home-page contact-page
---

{% if writer_preview %}
We are based in LA.

<p><img class="writer-image writer-office-image" src="{{ '/dotenvx-la-office-crt.png' | relative_url }}" alt="Dotenvx Los Angeles office" width="600" height="449"></p>
{% else %}
<style>
  .contact-lists > .design-list + .design-list { margin-top: 0; }
  .contact-lists { display: flex; flex-direction: column; gap: 2.5rem; }
</style>

<div class="home-sections">
<section class="design-hero-section home-hero" aria-label="Contact">
  <div class="armor-shell">

    {% include components/office-hero.html description="We are based in LA and keep an office in SF–visiting often" %}
  </div>
</section>

<section class="radar-section">
  <div class="armor-shell">
{% endif %}
    {% capture contact_email %}
      <div class="design-list">
        {% if writer_preview %}<h2>Email</h2>{% else %}<p class="design-list-title">Email</p>{% endif %}
        <ul class="{% if writer_preview %}writer-prose-list{% else %}design-list-items{% endif %}">
          <li><a class="design-link" href="mailto:support@dotenvx.com">support@dotenvx.com</a></li>
          {% unless writer_preview %}<li><a class="design-link" href="mailto:security@dotenvx.com">security@dotenvx.com</a></li>{% endunless %}
        </ul>
      </div>
    {% endcapture %}
    {% capture contact_lists %}
    <div class="contact-lists">
      {% if writer_preview %}{{ contact_email }}{% endif %}
      <div class="design-list">
        {% if writer_preview %}<h2>Offices</h2>{% else %}<p class="design-list-title">Offices</p>{% endif %}
        <ul class="{% if writer_preview %}writer-prose-list{% else %}design-list-items{% endif %}">
          <li>
            <a
              class="design-link"
              href="https://maps.google.com/?q=2450+Colorado+Ave+%23100,+Santa+Monica,+CA+90404"
              target="_blank"
              rel="noopener noreferrer"
            >Los Angeles</a>
            <p class="design-paragraph">2450 Colorado Ave #100, Santa Monica, CA 90404</p>
          </li>
          {% unless writer_preview %}
          <li>
            <a
              class="design-link"
              href="https://maps.google.com/?q=1160+Battery+Street+East+%23100,+San+Francisco,+CA+94111"
              target="_blank"
              rel="noopener noreferrer"
            >San Francisco</a>
            <p class="design-paragraph">1160 Battery Street East #100, San Francisco, CA 94111</p>
          </li>
          {% endunless %}
        </ul>
      </div>

      {% unless writer_preview %}{{ contact_email }}{% endunless %}
    </div>
    {% endcapture %}
{% if writer_preview %}
<div>
{% include writer-contact-details.html %}
</div>
{% else %}
    {% include components/design-content-width.html content=contact_lists class="contact-content" %}
  </div>
</section>
</div>
{% endif %}
