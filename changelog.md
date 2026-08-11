---
title: Changelog
social_title: Changelog
image: "/assets/img/og-image-changelog.png"
permalink: /changelog/
layout: radar
---

<style>
  .changelog-index {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    max-width: 36rem;
  }

  .changelog-index .design-list-items li {
    color: var(--design-body, var(--design-ink));
    font-family: var(--design-font-sans);
    font-size: var(--design-text-size);
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.45;
  }

  .changelog-hero-ascii {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: inherit;
    width: 100%;
  }

  .changelog-hero-ascii-art {
    color: var(--design-ink);
    font-family: var(--design-font-mono);
    font-size: var(--design-text-size);
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.2;
    margin: 0;
    text-align: center;
    user-select: none;
    white-space: pre;
  }

  @media (min-width: 900px) {
    .changelog-hero-ascii {
      height: 100%;
      min-height: inherit;
    }
  }
</style>

{% capture changelog_hero_visual %}
  <div class="changelog-hero-ascii" aria-hidden="true">
    <pre class="changelog-hero-ascii-art">●────●────●────●
v1   v2   v3   v99</pre>
  </div>
{% endcapture %}

<div class="changelog-page">
  {% include components/design-hero.html
    class="company-design-hero"
    eyebrow="Company"
    title="Changelog"
    description="Check back often. We're working hard almost daily on Dotenvx and Armor."
    visual=changelog_hero_visual
  %}

  <section class="radar-section">
    <div class="armor-shell">
      <nav class="changelog-index" aria-label="Changelog">
        {% comment %}
          Busy months (3+ entries) stay monthly. Sparse months (1–2) roll into quarters.
        {% endcomment %}
        {% assign current_period = "" %}
        {% for entry in site.data.changelog %}
          {% assign entry_month = entry.date | date: "%Y-%m" %}
          {% assign entry_year = entry.date | date: "%Y" %}
          {% assign entry_month_num = entry.date | date: "%m" | plus: 0 %}
          {% assign entry_quarter = entry_month_num | minus: 1 | divided_by: 3 | plus: 1 %}
          {% assign month_count = 0 %}
          {% for peer in site.data.changelog %}
            {% assign peer_month = peer.date | date: "%Y-%m" %}
            {% if peer_month == entry_month %}
              {% assign month_count = month_count | plus: 1 %}
            {% endif %}
          {% endfor %}
          {% if month_count >= 3 %}
            {% assign entry_period = entry_month %}
            {% assign entry_period_label = entry.date | date: "%B %Y" %}
          {% else %}
            {% capture entry_period %}{{ entry_year }}-Q{{ entry_quarter }}{% endcapture %}
            {% case entry_quarter %}
              {% when 1 %}
                {% assign entry_period_label = "January – March " | append: entry_year %}
              {% when 2 %}
                {% assign entry_period_label = "April – June " | append: entry_year %}
              {% when 3 %}
                {% assign entry_period_label = "July – September " | append: entry_year %}
              {% else %}
                {% assign entry_period_label = "October – December " | append: entry_year %}
            {% endcase %}
          {% endif %}
          {% if entry_period != current_period %}
            {% unless current_period == "" %}
                </ul>
              </div>
            {% endunless %}
            {% assign current_period = entry_period %}
            <div class="design-list">
              <p class="design-list-title">{{ entry_period_label }}</p>
              <ul class="design-list-items">
          {% endif %}
                <li>
                  {% if entry.url and entry.url != "" %}
                    <a
                      class="design-link{% if entry.milestone %} design-link--milestone{% endif %}"
                      href="{{ entry.url }}"
                      {% if entry.url contains "://" %}target="_blank" rel="noopener noreferrer"{% endif %}
                    >{{ entry.summary }}</a>
                  {% elsif entry.milestone %}
                    <span class="design-link--milestone">{{ entry.summary }}</span>
                  {% else %}
                    {{ entry.summary }}
                  {% endif %}
                </li>
        {% endfor %}
        {% unless current_period == "" %}
              </ul>
            </div>
        {% endunless %}
      </nav>
    </div>
  </section>

  <section class="radar-section" aria-label="Install dotenvx">
    <div class="armor-shell">
      {% include components/design-cta-message.html
        text="From here, the fastest next step is installing dotenvx."
      %}
    </div>
  </section>
</div>
