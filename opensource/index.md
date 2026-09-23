---
title: Open Source
permalink: /opensource/
layout: radar
body_class: home-page
---

<style>
  .open-source-lists {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
  .open-source-hero-key { aspect-ratio: 4 / 3; width: 100%; }
</style>

{% capture open_source_visual %}
  {% include components/keysee-viewer.html
    public_key="025ba50c55b823bcb7841fe43643fe827ef74c183b2544040943aa5856c7c39646"
    render_mode="wire"
    class="open-source-hero-key relative min-h-0 overflow-hidden bg-transparent"
  %}
{% endcapture %}

<div class="home-sections">
<section class="design-hero-section home-hero" aria-label="Open Source">
  <div class="armor-shell">
    {% include components/design-hero.html
      compact=true
      secondary=true
      name="Open Source"
      description="We're big into secrets, encryption, and agentic identity."
      content=open_source_visual
    %}
  </div>
</section>

<section class="radar-section">
  <div class="armor-shell">
    {% capture open_source_content %}
    <div class="open-source-lists">
      <div class="design-list">
        <p class="design-list-title">Projects</p>
        {% capture projects_table %}
          <thead><tr><th scope="col">Name</th><th scope="col" class="design-table-cell--right">Stars</th></tr></thead>
          <tbody>
            <tr><td><a class="design-link" href="https://github.com/motdotla/dotenv" target="_blank" rel="noopener noreferrer">dotenv</a></td><td class="design-table-cell--right">20,539</td></tr>
            <tr><td><a class="design-link" href="https://github.com/dotenvx/dotenvx" target="_blank" rel="noopener noreferrer">dotenvx</a></td><td class="design-table-cell--right">5,799</td></tr>
            <tr><td><a class="design-link" href="https://github.com/dotenvx/dotenv-expand" target="_blank" rel="noopener noreferrer">dotenv-expand</a></td><td class="design-table-cell--right">1,056</td></tr>
            <tr><td><a class="design-link" href="https://github.com/dotenvx/react-native-dotenv" target="_blank" rel="noopener noreferrer">react-native-dotenv</a></td><td class="design-table-cell--right">858</td></tr>
            <tr><td><a class="design-link" href="https://github.com/vestauth/vestauth" target="_blank" rel="noopener noreferrer">vestauth</a></td><td class="design-table-cell--right">169</td></tr>
            <tr><td><a class="design-link" href="https://github.com/dotenvx/llmstxt" target="_blank" rel="noopener noreferrer">llmstxt</a></td><td class="design-table-cell--right">149</td></tr>
            <tr><td><a class="design-link" href="https://github.com/dotenvx/python-dotenvx" target="_blank" rel="noopener noreferrer">python-dotenvx</a></td><td class="design-table-cell--right">8</td></tr>
            <tr><td><a class="design-link" href="https://github.com/dotenvx/dotenvx-ruby" target="_blank" rel="noopener noreferrer">dotenvx-ruby</a></td><td class="design-table-cell--right">3</td></tr>
            <tr><td><a class="design-link" href="https://www.npmjs.com/package/@dotenvx/primitives" target="_blank" rel="noopener noreferrer">@dotenvx/primitives</a></td><td class="design-table-cell--right">—</td></tr>
            <tr><td><a class="design-link" href="https://crates.io/crates/dotenvx-primitives" target="_blank" rel="noopener noreferrer">dotenvx-primitives (Rust)</a></td><td class="design-table-cell--right">—</td></tr>
            <tr><td><a class="design-link" href="https://keysee.io" target="_blank" rel="noopener noreferrer">KEYSEE⎔</a></td><td class="design-table-cell--right">—</td></tr>
          </tbody>
        {% endcapture %}
        {% include components/design-table.html content=projects_table class="design-table-wrap--fill" %}
      </div>

      <div class="design-list">
        <p class="design-list-title">Published Work</p>
        {% capture published_work_table %}
          <thead><tr><th scope="col">Name</th><th scope="col" class="design-table-cell--right">Format</th></tr></thead>
          <tbody>
            <tr><td><a class="design-link" href="https://dotenvx.com/whitepaper.pdf" target="_blank" rel="noopener noreferrer">Dotenvx: Reducing Secrets Risk with Cryptographic Separation</a></td><td class="design-table-cell--right">PDF</td></tr>
            <tr><td><a class="design-link" href="https://keysee.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer">KEYSEE⎔: Deterministic Visual Identity for Public Keys</a></td><td class="design-table-cell--right">PDF</td></tr>
          </tbody>
        {% endcapture %}
        {% include components/design-table.html content=published_work_table class="design-table-wrap--fill" %}
      </div>

      <div class="design-list">
        <p class="design-list-title">Talks</p>
        {% capture talks_table %}
          <thead><tr><th scope="col">Name</th><th scope="col" class="design-table-cell--right">Event</th></tr></thead>
          <tbody>
            <tr><td><a class="design-link" href="https://www.youtube.com/watch?v=CDXFEbqLsB0" target="_blank" rel="noopener noreferrer">How HTTP Message Signatures Remove the Need for API Keys</a></td><td class="design-table-cell--right">AAuth Night</td></tr>
            <tr><td><a class="design-link" href="https://www.youtube.com/watch?v=BCKGvKTk3cU&t=3205s" target="_blank" rel="noopener noreferrer">The Dark Ages of App Configuration</a></td><td class="design-table-cell--right">SF Ruby</td></tr>
          </tbody>
        {% endcapture %}
        {% include components/design-table.html content=talks_table class="design-table-wrap--fill" %}
      </div>

      <div class="design-list">
        <p class="design-list-title">Sponsorship</p>
        {% capture sponsorship_table %}
          <thead><tr><th scope="col">Name</th><th scope="col" class="design-table-cell--right">Annual contribution</th></tr></thead>
          <tbody>
            <tr><td><a class="design-link" href="https://github.com/yao-pkg/pkg" target="_blank" rel="noopener noreferrer">yao-pkg/pkg</a></td><td class="design-table-cell--right">$1,200</td></tr>
            <tr><td><a class="design-link" href="https://github.com/ecies/js" target="_blank" rel="noopener noreferrer">ecies/js</a></td><td class="design-table-cell--right">$384</td></tr>
            <tr><td><a class="design-link" href="https://github.com/abetomo" target="_blank" rel="noopener noreferrer">abetomo</a></td><td class="design-table-cell--right">$240</td></tr>
          </tbody>
        {% endcapture %}
        {% include components/design-table.html content=sponsorship_table class="design-table-wrap--fill" %}
      </div>
    </div>
    {% endcapture %}
    {% include components/design-content-width.html content=open_source_content %}
  </div>
</section>

<section class="radar-section" aria-label="Open source next step">
  <div class="armor-shell">
    {% capture open_source_closing %}
      <div class="text-center">
        {% include components/design-btn.html label="View on GitHub" href="https://github.com/dotenvx" target="_blank" rel="noopener noreferrer" %}
      </div>
    {% endcapture %}
    {% include components/design-content-width.html content=open_source_closing %}
  </div>
</section>

</div>
