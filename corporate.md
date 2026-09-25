---
title: Corporate Support
description: "Steward the next chapter of .env."
permalink: /corporate
layout: radar
body_class: home-page corporate-page
---

<div class="home-sections">
  <section class="design-hero-section home-hero" aria-label="Corporate Support">
    <div class="armor-shell">
      {% capture corporate_art %}
        {% include components/env-slab.html plaque=true %}
      {% endcapture %}
      {% include components/design-hero.html compact=true name_heading=true name=page.title description=page.description content=corporate_art %}
    </div>
  </section>

  <section class="radar-section" aria-label="Shape the future of .env">
    <div class="armor-shell">
      {% capture corporate_story %}
        <div class="design-prose">
          <p>Your company builds on .env. Help shape what it becomes.</p>
          <p>Meet with the maintainers, see work in progress, and share perspectives with other companies backing the future of Dotenv and Dotenvx—for humans and agents.</p>
          <p>Your contribution sustains the open-source work: maintaining the foundation, exploring new ideas, and developing patterns the whole software community can use.</p>
          <p>{% include components/design-link.html href="/ai" label="Explore the next chapter of .env →" %}</p>
        </div>
      {% endcapture %}
      {% include components/design-content-width.html content=corporate_story %}
    </div>
  </section>

  <section class="radar-section" aria-label="Corporate support tiers">
    <div class="armor-shell">
      {% include components/design-page-title.html title="Join the conversation shaping .env." heading_tag="h2" title_class="text-center" %}
      {% capture corporate_pricing_rows %}
        <thead>
          <tr>
            <th scope="col">Corporate support</th>
            <th scope="col">Annual contribution</th>
            <th scope="col">Participation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{% include components/design-link.html href="mailto:support@dotenvx.com?subject=Supporter%20corporate%20support" label="Supporter →" %}</th>
            <td>$10,000/yr</td>
            <td>Conversations with maintainers and fellow supporters, previews of work in progress, and public recognition as a corporate supporter.</td>
          </tr>
          <tr>
            <th scope="row">{% include components/design-link.html href="mailto:support@dotenvx.com?subject=Partner%20corporate%20support" label="Partner →" %}</th>
            <td>$25,000/yr</td>
            <td>Everything in Supporter, with prominent company recognition and opportunities to share your team’s perspective with the supporter community.</td>
          </tr>
          <tr>
            <th scope="row">{% include components/design-link.html href="mailto:support@dotenvx.com?subject=Lead%20Partner%20corporate%20support" label="Lead Partner →" %}</th>
            <td>$50,000/yr</td>
            <td>Everything in Partner, with leading company recognition and a featured supporter story celebrating your commitment to the future of .env.</td>
          </tr>
          <tr>
            <th scope="row">{% include components/design-link.html href="mailto:support@dotenvx.com?subject=Principal%20corporate%20support" label="Principal →" %}</th>
            <td>$100,000/yr</td>
            <td>Everything in Lead Partner, with top placement among corporate supporters and recognition as a principal backer of the next chapter of .env.</td>
          </tr>
        </tbody>
      {% endcapture %}
      {% capture corporate_pricing_table %}
        {% include components/design-table.html class="design-table-wrap--fill" content=corporate_pricing_rows %}
      {% endcapture %}
      {% include components/design-card.html content=corporate_pricing_table %}
    </div>
  </section>

  <section class="radar-section" aria-label="Build an open foundation together">
    <div class="armor-shell">
      {% capture corporate_invitation %}
        <div class="design-prose">
          <h2 class="design-list-title">A shared future. An open foundation.</h2>
          <p>Supporters get a meaningful voice in what comes next. Maintainers retain final technical decisions, and improvements developed through the program remain open for everyone to use.</p>
          <p>Meet the people building the next chapter of .env and the companies helping make it possible. Every corporate supporter is invited into the conversation.</p>
          <p>For a larger contribution, talk to us about a custom partnership.</p>
        </div>
      {% endcapture %}
      {% include components/design-content-width.html content=corporate_invitation %}
    </div>
  </section>
</div>
