---
title: "Blog"
layout: radar
body_class: home-page
---

<style>
  .blog-index-lists {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
</style>

<div class="home-sections">
{% include components/blog/hero.html
  title="Blog"
  description="Notes on secrets, .env files, and building dotenvx."
%}

<section class="radar-section">
  <div class="armor-shell">
    {% capture blog_content %}
    <div class="blog-index-lists">
      {% assign posts_by_year = site.categories.blog | group_by_exp: "post", "post.date | date: '%Y'" %}
      {% for year_group in posts_by_year %}
        {% capture blog_year_items %}
          {% for post in year_group.items %}
            <li>
              <a class="design-link" href="{{ post.url }}">{{ post.title }}</a>
              <span class="design-list-meta">
                <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%b %-d, %Y" }}</time>
              </span>
            </li>
          {% endfor %}
        {% endcapture %}
        {% include components/design-list.html
          title=year_group.name
          items=blog_year_items
        %}
      {% endfor %}
    </div>
    {% endcapture %}
    {% include components/design-content-width.html content=blog_content %}
  </div>
</section>
</div>
