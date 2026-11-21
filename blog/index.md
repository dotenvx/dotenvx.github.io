---
description: "Read the Dotenvx blog for guides and updates on environment variables, encrypted .env files, developer secrets, and building Dotenvx."
title: "Blog"
layout: radar
body_class: home-page
writer_layout: single
---

{% assign blog_description = "Reflections on building Dotenvx" %}
{% assign listed_posts = site.categories.blog | where_exp: "post", "post.draft != true" %}
{% assign posts_by_year = listed_posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% if writer_preview %}
> {{ blog_description }}

<p><img class="writer-image" src="{{ '/blog.png' | relative_url }}" alt="Bronze statue of a seated figure resting his chin on his hand" width="768" height="307"></p>

{% for year_group in posts_by_year %}
## {{ year_group.name }}

<ul class="writer-blog-posts" role="list">
  {% for post in year_group.items %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%b %-d' }}</time>
  </li>
  {% endfor %}
</ul>

{% endfor %}
{% else %}
<style>
  .blog-index-lists {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
  .blog-index-newsletter {
    margin-top: 3rem;
  }
</style>

<div class="home-sections">
{% include components/blog/hero.html
  title="Blog"
  description=blog_description
%}

<section class="radar-section">
  <div class="armor-shell">
    {% capture blog_content %}
    <div class="blog-index-lists">
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
    <div class="blog-index-newsletter">
      {% include components/newsletter-signup.html source="blog" %}
    </div>
    {% endcapture %}
    {% include components/design-content-width.html content=blog_content %}
  </div>
</section>
</div>
{% endif %}
