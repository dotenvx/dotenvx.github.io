---
title: "Supermemory: One key. No chasing."
description: How Supermemory uses one private key to unlock all its secrets with Dotenvx.
permalink: /customers/supermemory
layout: radar
body_class: home-page
---

<div class="home-sections">
<section class="design-hero home-hero2">
  <div class="armor-shell">
    <div class="design-hero2 design-hero2--compact design-hero2--secondary">
      {% include logos/supermemory.html class="mx-auto max-w-full h-auto" %}
      <div class="design-page-header-desc design-hero2-description">
        <h1 class="design-hero2-name">One key, no chasing.</h1>
      </div>
    </div>
  </div>
</section>

<section class="radar-section">
  <div class="armor-shell">
    {% capture story %}
      {% include components/design-quote.html
        text='"Dotenvx is so underrated. I set one key and all my secrets just work."'
        author="Dhravya Shah"
        author_url="https://x.com/DhravyaShah"
        organization="Supermemory"
        class="!mt-0 !mb-10"
      %}

      <p class="design-paragraph">As Supermemory's team grew, secrets were passed around in .env files. New hires would join, something would be missing, someone would add code that required a new secret, and someone else would pull the latest commit and not realize anything new was needed.</p>
      <p class="design-paragraph">And then the quick fixes kick in. Secrets get sent over Slack. Everyone knows it's not great, but shipping wins.</p>
      <p class="design-paragraph"><strong>Then the Supermemory team introduced Dotenvx.</strong> Secrets were encrypted and committed with the code. Now when code changes, secrets travel with it.</p>
      <p class="design-paragraph">Onboarding became simple. A new dev clones the repo, receives a single private key, and they're unblocked. In production, they set that one key once, and everything the app needs is there at runtime. No side channel secret sharing, no "did you update your env?"</p>


      <p class="design-paragraph">For Supermemory, the win wasn't just encryption, it was deleting a whole category of coordination overhead. <strong>One private key and every secret the code needs just shows up.</strong></p>
      <p class="design-paragraph">One key, no chasing.</p>
    {% endcapture %}
    {% include components/design-content-width.html content=story %}
  </div>
</section>
</div>
