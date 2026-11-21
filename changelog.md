---
description: "Follow Dotenvx releases, new features, and fixes for encrypted .env files, the CLI, SDKs, and secrets management."
title: Changelog
social_title: "Changelog · Dotenvx"
image: "/assets/img/og-image-changelog.png"
permalink: /changelog/

---


      {% capture changelog_content %}
      <div>
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
              <h2>{{ entry_period_label }}</h2>
              <ul class="main-prose-list">
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
      </div>
      {% endcapture %}

> What we're working on, into the night

<p><img class="main-image" src="{{ '/changelog.png' | relative_url }}" alt="A person working on a laptop at an office desk" width="768" height="307"></p>

<div>
{{ changelog_content | strip }}
</div>
