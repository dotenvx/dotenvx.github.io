---
title: "Blog"
layout: radar
---

<section class="radar-hero blog-index-hero">
  <div class="armor-shell blog-index-shell">
    <p class="radar-kicker">Company</p>
    <h1 class="radar-title">Blog</h1>
    <p class="radar-lede">Notes on secrets, .env files, and building dotenvx.</p>
  </div>
</section>

<section class="radar-section">
  <div class="armor-shell blog-index-shell">
    <div class="radar-card-grid">
      {% for post in site.categories.blog %}
        <a href="{{ post.url }}" class="radar-card">
          {% if post.image %}
            <img alt="" loading="lazy" width="395" height="208" decoding="async" class="radar-card-thumb" src="{{ post.image }}">
          {% endif %}
          <time class="radar-card-meta radar-card-meta--top" datetime="{{ post.date | date: "%Y-%m-%d" }}">
            {{ post.date | date: "%B %d, %Y" }}
          </time>
          <span class="radar-card-name">{{ post.title }}</span>
        </a>
      {% endfor %}
    </div>
  </div>
</section>
