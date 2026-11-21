---
noindex: true
sitemap: false
title: Search
description: Search Dotenvx docs, pricing, and the rest of the site.
permalink: /search/

---

{% assign search_path = '/search/' %}
{% capture search_content %}
<form class="site-search-page" data-site-search-page data-site-search-writer data-site-search-index="{{ '/search.json' | relative_url }}" action="{{ search_path | relative_url }}" method="get" role="search">
  <div class="site-search-page-field">
    <input
      type="text"
      class="design-input site-search-input"
      name="q"
      aria-label="Search Dotenvx"
      id="site-search-page-input"
      data-site-search-input
      placeholder="Search docs, blog, and more…"
      inputmode="search"
      enterkeyhint="search"
      autocomplete="off"
      autofocus
      data-1p-ignore="true"
      data-lpignore="true"
      data-bwignore="true"
      data-form-type="other"
    >
  </div>
  <div class="site-search-page-results" data-site-search-results aria-live="polite">

  </div>
</form>
{% endcapture %}


{{ search_content }}
