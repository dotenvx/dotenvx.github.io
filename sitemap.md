---
title: Sitemap
permalink: /sitemap
layout: radar
---

{% include components/design-hero.html
  class="company-design-hero"
  eyebrow="Dotenvx"
  title="Sitemap"
  description="Every public page on dotenvx.com, in one place."
%}

{% assign sitemap_pages = site.html_pages | concat: site.posts | sort: "url" %}
{% capture sitemap_items %}
  {% for sitemap_page in sitemap_pages %}
    {% assign sitemap_url = sitemap_page.url %}
    {% unless sitemap_page.redirect_to or sitemap_page.sitemap == false or sitemap_url == "/404.html" or sitemap_url == "/sitemap" %}
      <li>
        <a class="design-link" href="{{ sitemap_url | relative_url }}">{{ sitemap_page.title | default: sitemap_url | escape }}</a>
        <span class="design-list-meta">{{ sitemap_url }}</span>
      </li>
    {% endunless %}
  {% endfor %}
{% endcapture %}

<section class="radar-section">
  <div class="armor-shell">
    {% include components/design-list.html
      title="Pages"
      items=sitemap_items
    %}
  </div>
</section>
