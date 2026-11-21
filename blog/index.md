---
description: "Read the Dotenvx blog for guides and updates on environment variables, encrypted .env files, developer secrets, and building Dotenvx."
title: "Blog"
main_layout: single
---

{% assign blog_description = "Reflections on building Dotenvx" %}
{% assign listed_posts = site.categories.blog | where_exp: "post", "post.draft != true" %}
{% assign posts_by_year = listed_posts | group_by_exp: "post", "post.date | date: '%Y'" %}


> {{ blog_description }}

<p><img class="main-image" src="{{ '/blog.png' | relative_url }}" alt="Bronze statue of a seated figure resting his chin on his hand" width="768" height="307"></p>

{% for year_group in posts_by_year %}
## {{ year_group.name }}

<ul class="main-blog-posts" role="list">
  {% for post in year_group.items %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%b %-d' }}</time>
  </li>
  {% endfor %}
</ul>

{% endfor %}
