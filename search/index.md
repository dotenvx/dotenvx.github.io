---
title: Search
description: Search Dotenvx docs, pricing, and the rest of the site.
permalink: /search/
layout: radar
---

{% include components/design-hero.html
  class="company-design-hero"
  eyebrow="Dotenvx"
  title="Search"
  description="Find docs, pricing, and product pages."
  hide_visual=true
%}

<section class="radar-section">
  <div class="armor-shell">
    <form class="site-search" data-site-search action="/search/" method="get" role="search">
      <div class="site-search-field">
        <input
          type="search"
          class="design-input site-search-input"
          name="q"
          id="site-search-input"
          data-site-search-input
          placeholder="Search for Claude, pricing, encrypt…"
          autocomplete="off"
          autofocus
          data-1p-ignore="true"
          data-lpignore="true"
          data-bwignore="true"
          data-form-type="other"
        >
      </div>
      <div class="site-search-results" data-site-search-results aria-live="polite">
        <p class="design-paragraph">Type to search docs, pricing, and the rest of the site.</p>
      </div>
    </form>
  </div>
</section>

<script src="{{ '/assets/js/site-search.js' | relative_url }}"></script>
