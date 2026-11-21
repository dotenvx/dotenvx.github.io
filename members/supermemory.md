---
title: "Supermemory: One key. No chasing."
description: How Dhravya Shah uses one private key to unlock his team's secrets at Supermemory with Dotenvx.
permalink: /members/supermemory
og_image:
  template: logo
  logo: _includes/logos/supermemory.svg
  alt: Supermemory

---


{{ page.description }}

<div class="main-member-logo">{% include logos/supermemory.html %}</div>

    {% capture story %}
      {% include components/design-quote.html
        text='"Dotenvx is so underrated. I set one key and all my secrets just work."'
        author="Dhravya Shah"
        author_image=site.data.practitioners.dhravya.image
        author_url="https://x.com/DhravyaShah"
        organization="CEO at Supermemory"
        class="!mt-0 !mb-10"
      %}

      <p class="design-paragraph">As Dhravya's team at Supermemory grew, secrets were passed around in .env files. New hires would join, something would be missing, someone would add code that required a new secret, and someone else would pull the latest commit and not realize anything new was needed.</p>
      <p class="design-paragraph">And then the quick fixes kick in. Secrets get sent over Slack. Everyone knows it's not great, but shipping wins.</p>
      <p class="design-paragraph">Then Dhravya and his team introduced Dotenvx. Secrets were encrypted and committed with the code. Now when code changes, secrets travel with it.</p>
      <p class="design-paragraph">Onboarding became simple. A new dev clones the repo, receives a single private key, and they're unblocked. In production, they set that one key once, and everything the app needs is there at runtime. No side channel secret sharing, no "did you update your env?"</p>


      <p class="design-paragraph">For Dhravya, the win wasn't just encryption, it was deleting a whole category of coordination overhead. <strong>One private key and every secret the code needs just shows up.</strong></p>
      <p class="design-paragraph">One key, no chasing.</p>
      <hr class="member-story-divider">
      <p class="design-paragraph"><strong>Dhravya is CEO of Supermemory and previously worked at Cloudflare.</strong></p>
    {% endcapture %}

<div>
{{ story | strip }}
</div>
