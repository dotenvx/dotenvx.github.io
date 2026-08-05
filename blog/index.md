---
title: "Blog"
layout: radar
---

{% include components/blog/hero.html
  eyebrow="Dotenvx"
  title="Blog"
  description="Notes on secrets, .env files, and building dotenvx."
  shell_class="blog-index-shell"
%}

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
