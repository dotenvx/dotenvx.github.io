---
title: About
description: "A small file. A lasting commitment to keeping secrets safe."
permalink: /about/
redirect_from:
  - /company
  - /company/
layout: radar
body_class: home-page about-page
---

<style>
  .about-company { margin-bottom: 2.5rem; }
  .about-company-label { font-family: var(--design-font-mono); color: var(--design-mid); font-size: .8rem; letter-spacing: .08em; text-transform: uppercase; margin-bottom: .75rem; }
  .about-story { margin: 2.5rem 0; }
  .about-chapter { display: grid; grid-template-columns: 3rem 1fr; gap: 1rem; padding: 1.5rem; }
  .about-chapter + .about-chapter { border-top: 1px solid var(--design-line); }
  .about-chapter-number { font-family: var(--design-font-mono); color: var(--design-mid); padding-top: .15rem; }
  .about-chapter h2 { font-size: 1em; font-weight: 600; margin: 0 0 .65rem; }
  .about-chapter p { margin: 0; }
  .about-chapter a { display: inline-block; margin-top: .8rem; }
  .about-links { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin-top: 2rem; }
  .about-link-card { padding: 1.5rem; gap: .6rem; color: var(--design-ink); text-decoration: none; }
  .about-link-card strong { font-weight: 600; }
  .about-link-card span { color: var(--design-body); font-size: .9em; line-height: 1.5; }
  .about-link-card:hover, .about-link-card:focus-visible { background: var(--design-hover); }
  @media (max-width: 600px) { .about-links { grid-template-columns: 1fr; } }
  @media (max-width: 600px) { .about-chapter { grid-template-columns: 1.5rem 1fr; gap: .75rem; padding: 1.25rem; } }
</style>

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="About">
    <div class="armor-shell">
      {% capture about_visual %}{% include components/joined-slab-hero.html %}{% endcapture %}
      {% include components/design-hero.html
        compact=true
        name_heading=true
        name=page.title
        description=page.description
        content=about_visual
      %}
    </div>
  </section>

  <section class="radar-section">
    <div class="armor-shell">
      {% capture about_content %}
      <div class="about-company">
        <p class="design-paragraph">DOTENVX LLC keeps secrets safe without making software harder to ship. We're the company behind Dotenv, Dotenvx, and the next chapter of .env.</p>
        <p class="design-paragraph">We started with a problem every developer recognizes: an app needs credentials, but those credentials don't belong in its source code. Dotenv gave them a home in a small, readable file. No dashboard to learn. No service to depend on. Just a file and the code you were already writing.</p>
        <p class="design-paragraph">That simplicity mattered. But the secrets on one developer's laptop also had to reach teammates, build servers, and production. Keeping the file out of Git meant finding another way to move it around. We wanted secrets to follow the same path as the software they configure, without exposing their values.</p>
        <p class="design-paragraph">That's why we built Dotenvx. Encryption lets the file travel with your code while its private key stays separate. The familiar .env becomes something you can version, review, and share through Git.</p>
        <p class="design-paragraph">Now we're asking the next question: how can an agent work on your app without being handed its secrets? Envfile carries our approach forward, making the rules for secrets explicit so software can enforce them.</p>
      </div>

      <div class="design-card about-story">
        <section class="about-chapter" aria-labelledby="about-dotenv">
          <span class="about-chapter-number" aria-hidden="true">01</span>
          <div>
            <h2 id="about-dotenv">Secrets separate from code</h2>
            <p class="design-paragraph">We created Dotenv to separate secrets from code. One small file made configuration safe.</p>
            <a class="design-link" href="https://www.npmjs.com/package/dotenv">Dotenv →</a>
          </div>
        </section>
        <section class="about-chapter" aria-labelledby="about-dotenvx">
          <span class="about-chapter-number" aria-hidden="true">02</span>
          <div>
            <h2 id="about-dotenvx">Secrets encrypted alongside code</h2>
            <p class="design-paragraph">We created Dotenvx to make that same file safe to commit and share through Git. Secrets stay encrypted alongside your code and decrypt in memory at runtime.</p>
            <a class="design-link" href="https://www.npmjs.com/package/@dotenvx/dotenvx">Dotenvx →</a>
          </div>
        </section>
        <section class="about-chapter" aria-labelledby="about-agents">
          <span class="about-chapter-number" aria-hidden="true">03</span>
          <div>
            <h2 id="about-agents">Secrets separate from agents</h2>
            <p class="design-paragraph">We're building Envfile to keep secrets out of agents' reach. Your app gets secrets; your agents get rules.</p>
            <a class="design-link" href="/agents">Envfile →</a>
          </div>
        </section>
      </div>

      <p class="design-paragraph">We keep coming back to that small file. Developers understand it. Projects can carry it. Our job is to make it safer as the way we build software changes.</p>
      <nav class="about-links" aria-label="More about Dotenvx">
        <a class="design-card about-link-card" href="/opensource/"><strong>Open Source →</strong><span>Explore our projects, talks, and published work.</span></a>
        <a class="design-card about-link-card" href="https://trust.oneleet.com/dotenvx" target="_blank" rel="noopener noreferrer"><strong>Trust Center ↗</strong><span>Learn about our security and compliance.</span></a>
        <a class="design-card about-link-card" href="/careers/"><strong>Careers →</strong><span>Help build the next chapter of .env.</span></a>
        <a class="design-card about-link-card" href="/changelog"><strong>Changelog →</strong><span>See what we're shipping.</span></a>
      </nav>
      {% endcapture %}
      {% include components/design-content-width.html content=about_content %}
    </div>
  </section>
</div>
