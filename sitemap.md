---
description: "Browse the Dotenvx website, documentation, CLI and SDK references, guides, product pages, and blog posts in one sitemap."
title: Sitemap
permalink: /sitemap/
writer_layout: single
---


{% assign sitemap_docs = site.data.sitemap_tree | where: "label", "Docs" | first %}
{% assign sitemap_pages = site.data.sitemap_tree | where_exp: "node", "node.label != 'Docs'" %}
<ul class="writer-sitemap-tree">
  <li><a href="{{ '/' | relative_url }}">Home</a></li>
  {% include components/design-list-tree.html nodes=sitemap_pages %}
</ul>

{% if sitemap_docs %}
## [Docs]({{ '/docs/' | relative_url }})

<ul class="writer-sitemap-tree">
  {% include components/design-list-tree.html nodes=sitemap_docs.children %}
</ul>
{% endif %}
