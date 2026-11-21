---
title: Corporate Involvement
description: "Steward the next chapter of .env."
permalink: /corporate/
og_image:
  template: mark
  image: assets/img/corporate-cube.png
  alt: Silver desk cube engraved with .ENV

---


{{ page.description }}

<div class="main-corporate-hero">
{% include components/env-slab.html cube=true %}
</div>

      {% capture corporate_story %}
        <div class="design-prose">
          <p>We’re looking for companies that care about the future of .env and want to help steward it.</p>
          <p>Meet with the maintainers, see work in progress, and share perspectives with other companies backing the future of Dotenv and Dotenvx—for humans and agents.</p>
          <p>Your contribution sustains the open-source work: maintaining the foundation, exploring new ideas, and developing patterns the whole software community can use.</p>
          <p class="text-center"><a href="{{ site.data.redirects['/agents/'] | relative_url }}">Explore Dotenvx.toml</a></p>
        </div>
      {% endcapture %}

<div>
{{ corporate_story | strip }}
</div>


{% for tier in site.data.corporate_tiers %}
<section class="main-corporate-tier">
  <h2>{{ tier.name }}</h2>
  <p>{{ tier.price }}</p>
  <p>{{ tier.description }}</p>
  <p><a href="mailto:scott@dotenvx.com?subject={{ tier.name | url_encode }}%20corporate%20support">Start the Conversation</a></p>
</section>
{% endfor %}


      {% capture corporate_invitation %}
        <div class="design-prose">
          <h2 class="design-list-title text-center">A shared future.</h2>
          <p>Supporters get a meaningful voice in what comes next. Maintainers retain final technical decisions, and improvements developed through the program remain open for everyone to use.</p>
          <p>It starts with a conversation about what matters to your team and how we might work together.</p>
        </div>
      {% endcapture %}

<div>
{{ corporate_invitation | strip }}
</div>
