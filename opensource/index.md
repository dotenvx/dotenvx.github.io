---
description: "Explore Dotenvx open source projects and the community building tools for environment variables and encrypted .env files."
title: Open Source
permalink: /opensource/
layout: radar
body_class: home-page
writer_layout: columns
projects:
  - name: dotenv
    href: https://github.com/motdotla/dotenv
    summary: loads .env files into Node.js applications.
    stars: "20,539"
  - name: dotenvx
    href: https://github.com/dotenvx/dotenvx
    summary: encrypts .env files so secrets can ship with code.
    stars: "5,799"
  - name: dotenv-expand
    href: https://github.com/dotenvx/dotenv-expand
    summary: expands variable references in .env files.
    stars: "1,056"
  - name: react-native-dotenv
    href: https://github.com/dotenvx/react-native-dotenv
    summary: loads environment variables in React Native.
    stars: "858"
  - name: vestauth
    href: https://github.com/vestauth/vestauth
    summary: authenticates agents with signed requests.
    stars: "169"
  - name: llmstxt
    href: https://github.com/dotenvx/llmstxt
    summary: generates llms.txt from a sitemap.
    stars: "149"
  - name: python-dotenvx
    href: https://github.com/dotenvx/python-dotenvx
    summary: loads encrypted .env files in Python.
    stars: "8"
  - name: dotenvx-ruby
    href: https://github.com/dotenvx/dotenvx-ruby
    summary: loads encrypted .env files in Ruby.
    stars: "3"
  - name: "@dotenvx/primitives"
    href: https://www.npmjs.com/package/@dotenvx/primitives
    summary: provides Dotenvx primitives for JavaScript.
  - name: dotenvx-primitives (Rust)
    href: https://crates.io/crates/dotenvx-primitives
    summary: provides Dotenvx primitives for Rust.
  - name: KEYSEE⎔
    href: https://keysee.io
    summary: turns public keys into deterministic visuals.
papers:
  - name: "Dotenvx: Reducing Secrets Risk with Cryptographic Separation"
    href: https://dotenvx.com/whitepaper.pdf
  - name: "KEYSEE⎔: Deterministic Visual Identity for Public Keys"
    href: https://keysee.io/whitepaper.pdf
talks:
  - name: How HTTP Message Signatures Remove the Need for API Keys
    href: https://www.youtube.com/watch?v=CDXFEbqLsB0
    event: AAuth Night
  - name: The Dark Ages of App Configuration
    href: https://www.youtube.com/watch?v=BCKGvKTk3cU&t=3205s
    event: SF Ruby
sponsorships:
  - name: yao-pkg/pkg
    href: https://github.com/yao-pkg/pkg
    annual: "$1,200"
  - name: ecies/js
    href: https://github.com/ecies/js
    annual: "$384"
  - name: abetomo
    href: https://github.com/abetomo
    annual: "$240"
---

{% if writer_preview %}
> Tools for environment variables, encryption, and agent identity

[Dotenvx on GitHub](https://github.com/dotenvx)

## Projects

{% for project in page.projects -%}
- [{{ project.name }}]({{ project.href }}) {{ project.summary }}
{% endfor -%}
{: .writer-docs-list}

## Papers

{% for paper in page.papers -%}
- [{{ paper.name }}]({{ paper.href }}) (PDF)
{% endfor -%}
{: .writer-docs-list}

## Talks

{% for talk in page.talks -%}
- [{{ talk.name }}]({{ talk.href }}) at {{ talk.event }}
{% endfor -%}
{: .writer-docs-list}

## Sponsorship

{% for sponsor in page.sponsorships -%}
- [{{ sponsor.name }}]({{ sponsor.href }}) · {{ sponsor.annual }} per year
{% endfor -%}
{: .writer-docs-list}

{% else %}
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
      name_heading=true
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
            {% for project in page.projects %}
            <tr><td><a class="design-link" href="{{ project.href | escape }}" target="_blank" rel="noopener noreferrer">{{ project.name | escape }}</a></td><td class="design-table-cell--right">{{ project.stars | default: '—' }}</td></tr>
            {% endfor %}
          </tbody>
        {% endcapture %}
        {% include components/design-table.html content=projects_table class="design-table-wrap--fill" %}
      </div>

      <div class="design-list">
        <p class="design-list-title">Published Work</p>
        {% capture published_work_table %}
          <thead><tr><th scope="col">Name</th><th scope="col" class="design-table-cell--right">Format</th></tr></thead>
          <tbody>
            {% for paper in page.papers %}
            <tr><td><a class="design-link" href="{{ paper.href | escape }}" target="_blank" rel="noopener noreferrer">{{ paper.name | escape }}</a></td><td class="design-table-cell--right">PDF</td></tr>
            {% endfor %}
          </tbody>
        {% endcapture %}
        {% include components/design-table.html content=published_work_table class="design-table-wrap--fill" %}
      </div>

      <div class="design-list">
        <p class="design-list-title">Talks</p>
        {% capture talks_table %}
          <thead><tr><th scope="col">Name</th><th scope="col" class="design-table-cell--right">Event</th></tr></thead>
          <tbody>
            {% for talk in page.talks %}
            <tr><td><a class="design-link" href="{{ talk.href | escape }}" target="_blank" rel="noopener noreferrer">{{ talk.name | escape }}</a></td><td class="design-table-cell--right">{{ talk.event | escape }}</td></tr>
            {% endfor %}
          </tbody>
        {% endcapture %}
        {% include components/design-table.html content=talks_table class="design-table-wrap--fill" %}
      </div>

      <div class="design-list">
        <p class="design-list-title">Sponsorship</p>
        {% capture sponsorship_table %}
          <thead><tr><th scope="col">Name</th><th scope="col" class="design-table-cell--right">Annual contribution</th></tr></thead>
          <tbody>
            {% for sponsor in page.sponsorships %}
            <tr><td><a class="design-link" href="{{ sponsor.href | escape }}" target="_blank" rel="noopener noreferrer">{{ sponsor.name | escape }}</a></td><td class="design-table-cell--right">{{ sponsor.annual | escape }}</td></tr>
            {% endfor %}
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
{% endif %}
