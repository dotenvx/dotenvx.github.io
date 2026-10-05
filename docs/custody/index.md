---
layout: radar
title: Custody
description: Choose where your private keys live.
permalink: "/docs/custody/"
eyebrow: Docs
eyebrow_href: "/docs/introduction/"
mark: Custody
options:
- title: Local
  href: "/docs/custody/local/"
- title: Armor ⛨
  href: "/docs/custody/armor/"
- title: Password Managers
  href: "/docs/custody/password-managers/"
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title=page.title
  description=page.description
  mark="Custody"
%}

<section class="radar-section">
  <div class="armor-shell">
    <div class="design-content-width">
      <div class="docs-custody-lists">
        {% for category in page.options %}
          {% assign custody_page = site.pages | where: "url", category.href | first %}
          {% if custody_page %}
            {% capture category_content %}
              <p class="design-list-title">{{ category.title }}</p>
              {% if custody_page.options %}
                {% if custody_page.options_style == "cards" %}
                  <div class="docs-intro-cards">
                    <div class="design-settings-grid">
                      {% for option in custody_page.options %}
                        {% include components/design-key.html href=option.href label=option.title icon=option.icon glyph=option.glyph title=option.description %}
                      {% endfor %}
                    </div>
                  </div>
                {% else %}
                  <ul class="advanced-cli-commands">
                    {% for option in custody_page.options %}
                      <li><a class="design-link" href="{{ option.href }}">{{ option.title }}</a></li>
                    {% endfor %}
                  </ul>
                {% endif %}
              {% else %}
                <div class="docs-intro-cards">
                  <div class="design-settings-grid">
                    {% include components/design-key.html href=category.href label=custody_page.title glyph="⛨" %}
                  </div>
                </div>
              {% endif %}
            {% endcapture %}
            {% include components/design-step.html content=category_content %}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</section>
