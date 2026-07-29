---
title: "Blog"
layout: radar
---

<section class="radar-hero blog-index-hero">
  <div class="radar-shell blog-index-shell">
    <p class="radar-kicker">Writing</p>
    <h1 class="radar-title">Blog</h1>
    <p class="radar-lede">Notes on secrets, .env files, and building dotenvx.</p>
  </div>
</section>

<section class="radar-section">
  <div class="radar-shell blog-index-shell">
    <ul class="blog-index-grid">
      {% for post in site.categories.blog %}
        <li>
          <a href="{{ post.url }}" class="blog-index-card">
            {% if post.image %}
              <img alt="" loading="lazy" width="395" height="208" decoding="async" class="blog-index-thumb" src="{{ post.image }}">
            {% endif %}
            <time class="blog-index-date" datetime="{{ post.date | date: "%Y-%m-%d" }}">
              {{ post.date | date: "%B %d, %Y" }}
            </time>
            <h2 class="blog-index-title">{{ post.title }}</h2>
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>
