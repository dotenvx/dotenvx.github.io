---
title: "Dotenvx Armor for Security Professionals"
social_title: "Dotenvx Armor for Security Professionals"
description: "Hardened Dotenvx for security professionals with full access control of your secrets. Govern every unlock and see every access–human or agent."
image: "/assets/img/og-image-armor.png"
layout: radar
writer_title: Armor
writer_layout: columns
---

{% if writer_preview %}
> Control who can decrypt your .env files

Keep encrypted `.env` files with your code. Armor manages who can use the private keys to decrypt them.

[Sign up](https://armor.dotenvx.com/signup) · [Pricing]({{ '/v2/pricing/' | relative_url }})

Kortix, [Supermemory]({{ '/v2/members/supermemory/' | relative_url }}), and Comp AI use Armor.

## Controls

- **Custody.** Move private keys off developer devices. Use Enclaved Keys to keep them on your infrastructure.
- **Access.** Grant and revoke access to individual keys for teammates and agents.
- **Approvals.** Require human approval for key access with Guard.
- **Audit.** See who accessed each key and when. Read audit logs through the [Armor API]({{ '/v2/docs/api/' | relative_url }}).
{: .writer-docs-list}

## Usage

Start with an [encrypted .env file]({{ '/v2/docs/quickstart/' | relative_url }}#encrypt). Sign in from your project directory and move the private key into Armor.

```console
$ dotenvx armor login
$ dotenvx armor up
```

Dotenvx requests the key from Armor when you run your app. The [Armor custody guide]({{ '/v2/docs/custody/armor/' | relative_url }}) covers approvals and moving keys back to `.env.keys`.

{% else %}
{% capture armor_hero_container %}
  {% include components/armor/hero-container.html %}
{% endcapture %}

{% capture armor_hero_description %}
  {{ page.description }}
{% endcapture %}
{% capture armor_hero_actions %}
  {% include components/design-btn.html label="Sign up" href="/signup" data_umami_event="Armor Hero Signup button" %}
  {% include components/design-btn.html label="Pricing" href="/pricing" data_umami_event="Armor Hero Pricing button" %}
{% endcapture %}

<div class="armor-page">
  <div class="home-sections armor-intro">
  {% include components/home-hero.html
    compact=true
    name=page.title
    actions=armor_hero_actions
    content=armor_hero_container
    description=armor_hero_description
  %}

    {% include components/armor/logo-cloud.html %}
  </div>

  {% include components/faq-yes.html %}

  <section class="radar-section" aria-label="Next step">
    <div class="armor-shell">
      <div class="home-cta">
        {% include components/design-cta-message.html
          text="Once the private key isn't on the machine, encrypted .env finally feels finished. That's Armor."
        %}
        {% include components/design-btn.html
          label="Sign Up Free ›"
          href="https://armor.dotenvx.com/signup"
        %}
      </div>
    </div>
  </section>

  {% comment %}
  {% include components/armor/lightning.html %}
  {% include components/armor/hero.html %}
  {% include components/armor/keys.html %}
  {% include components/armor/grant.html %}
  {% include components/armor/cta.html %}
  {% endcomment %}
</div>
{% endif %}
