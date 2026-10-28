---
title: About
description: "Working out of LA & SF–on a small important file"
permalink: /about/
layout: radar
body_class: home-page about-page
---

<style>
  .about-story { margin: 2.5rem 0; }
  .about-chapter { display: grid; grid-template-columns: 3rem 1fr; gap: 1rem; padding: 1.5rem; }
  .about-chapter + .about-chapter { border-top: 1px solid var(--design-line); }
  .about-chapter-number { font-family: var(--design-font-mono); color: var(--design-mid); padding-top: .15rem; }
  .about-chapter h2 { font-size: 1em; font-weight: 600; margin: 0 0 .65rem; }
  .about-chapter p { margin: 0; }
  .about-chapter a { display: inline-block; margin-top: .8rem; }
  @media (max-width: 600px) { .about-chapter { grid-template-columns: 1.5rem 1fr; gap: .75rem; padding: 1.25rem; } }
  .about-links { display: flex; justify-content: center; text-align: center; flex-wrap: wrap; gap: 1rem 2rem; margin-top: 2rem; }
</style>

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="About">
    <div class="armor-shell">

      {% capture about_actions %}
        {% include components/design-btn.html label="Contact us" href="/contact" %}
        {% include components/design-btn.html label="Careers" href="/careers/" class="design-btn--secondary" %}
      {% endcapture %}
      {% include components/office-hero.html description=page.description actions=about_actions %}
    </div>
  </section>

  <section class="radar-section">
    <div class="armor-shell">
      {% capture about_content %}
      <div class="about-company">
        <p class="design-paragraph">Dotenvx keeps secrets safe without making software harder to ship. We're the team behind Dotenv, Dotenvx, and the next chapter of .env.</p>
        <p class="design-paragraph">We started with a problem every developer recognizes: an app needs credentials, but those credentials don't belong in its source code. Dotenv gave them a home in a small, readable file. No dashboard to learn. No service to depend on. Just a file and the code you were already writing.</p>
        <p class="design-paragraph">That simplicity mattered. But the secrets on one developer's laptop also had to reach teammates, build servers, and production. Keeping the file out of Git meant finding another way to move it around. We wanted secrets to follow the same path as the software they configure, without exposing their values.</p>
        <p class="design-paragraph">That's why we built Dotenvx. Encryption lets the file travel with your code while its private key stays separate. The familiar .env becomes something you can version, review, and share through Git.</p>
        <p class="design-paragraph">Now we're asking the next question: how can an agent work on your app without being handed its secrets? Dotenvxfile carries our approach forward, making the rules for secrets explicit so software can enforce them.</p>
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
            <p class="design-paragraph">We're building Dotenvxfile to keep secrets out of agents' reach. Your app gets secrets; your agents get rules.</p>
            <a class="design-link" href="/agents">Dotenvxfile →</a>
          </div>
        </section>
      </div>

      <nav class="about-links" aria-label="More about Dotenvx">
        <a class="design-link" href="/contact/">Contact</a>
        <a class="design-link" href="/changelog">Changelog</a>
        <a class="design-link" href="/trust/">Trust Center</a>
        <a class="design-link" href="/careers/">Careers</a>
      </nav>
      {% endcapture %}
      {% include components/design-content-width.html content=about_content %}
    </div>
  </section>
</div>
