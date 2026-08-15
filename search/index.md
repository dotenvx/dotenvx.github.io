---
title: Search
description: Search Dotenvx docs, pricing, and the rest of the site.
permalink: /search/
layout: radar
---

<style>
  .search-hero-ascii {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: inherit;
    width: 100%;
  }

  .search-hero-ascii-art {
    color: var(--design-ink);
    font-family: var(--design-font-mono);
    font-size: 4.5rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1;
    margin: 0;
    user-select: none;
  }

  @media (min-width: 900px) {
    .search-hero-ascii {
      height: 100%;
      justify-content: flex-end;
      min-height: inherit;
    }

    .search-hero-ascii-art {
      font-size: 12rem;
    }
  }
</style>

{% capture search_hero_visual %}
  <div class="search-hero-ascii" aria-hidden="true">
    <span class="search-hero-ascii-art">/</span>
  </div>
{% endcapture %}

{% include components/design-hero.html
  class="company-design-hero"
  eyebrow="Dotenvx"
  title="Search"
  description="Find docs, pricing, and product pages."
  visual=search_hero_visual
%}

<section class="radar-section">
  <div class="armor-shell">
    <form class="site-search-page" data-site-search-page action="/search/" method="get" role="search">
      <div class="site-search-page-field">
        <input
          type="text"
          class="design-input site-search-input"
          name="q"
          id="site-search-page-input"
          data-site-search-input
          placeholder="Search for Claude, pricing, encrypt…"
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
        <p class="design-paragraph">Type to search docs, pricing, and the rest of the site.</p>
      </div>
    </form>
  </div>
</section>
