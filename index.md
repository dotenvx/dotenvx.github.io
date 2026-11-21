---
seo_title: "Dotenvx · Encrypt your .env files"
title: "Dotenvx · A secure dotenv–from the creator of dotenv"
social_title: "Dotenvx · A secure dotenv–from the creator of dotenv"
description: "Encrypt .env files, commit them safely, and load environment variables in any language or framework with Dotenvx, from the creator of dotenv."
layout: home
body_class: home-page
writer_layout: two-columns
---

{% capture home_design_content %}
Three widely used and proven primitives make up Dotenvx's design. Git, .env, and secp256k1.
{: .design-paragraph}

We chose git because it is the best way to deliver digital goods. It is the container ship of the digital world. All code travels on its ships. Why not secrets? Why invent an inferior secrets delivery mechanism when the world class one is right there at your fingertips.
{: .design-paragraph}

We chose .env because it is the open standard for loading secrets into code. It represents environment variables, the core primitive that all secrets end up injected into at runtime of code.
{: .design-paragraph}

Lastly, we needed to choose an encryption algorithm. Encryption of the values inside the .env file would allow us to place those values with code, leveraging git's distribution advantages while still following the twelve-factor config – by separating the decryption key from the code (environment).
{: .design-paragraph}

It was important that we choose a proven, simple, asymmetric standard with small keys. We chose secp256k1, battle-tested by Bitcoin for more than seventeen years. We made cryptography an opinionated choice so developers wouldn't have to. Encryption just worked.
{: .design-paragraph}

The result is a system built entirely from primitives, developers already understand, and infrastructure they already use. Secrets can travel with code without becoming part of the code. Git distributes them, .env defines how apps consume them, and secp256k1 keeps their values unreadable. The kicker, all this works by setting a single private key on your infrastructure - no more risky async coordination of secrets, no more centralized downtime risk. Your secrets are always just there with your code, ready to be unlocked at runtime.
{: .design-paragraph}

{% if writer_preview %}
Best of all, attackers hate this. They have to gain access to both the encrypted `.env` file in your repository and the private key in your deployment environment to decrypt your secrets. This separation sharply reduces your risk of exposure as documented in our [whitepaper]({{ '/whitepaper.pdf' | relative_url }}){: target="_blank" rel="noopener"}.
{: .design-paragraph}

<p><a href="{{ '/whitepaper.pdf' | relative_url }}#page=13" target="_blank" rel="noopener" aria-label="Read page 13 of the whitepaper (opens in a new tab)"><img class="writer-image" src="{{ '/whitepaper.png' | relative_url }}" alt="Whitepaper page comparing hypothetical secret exposure risk over time for traditional secrets managers and Dotenvx" width="1188" height="1322"></a></p>
{% else %}
[Read the whitepaper →](/dotenvx.pdf){: .design-link}
{: .design-paragraph .text-center}
{% endif %}
{% endcapture %}

{% capture home_intro %}
A secure dotenv–from the creator of [dotenv](https://github.com/motdotla/dotenv){: .design-link}
{% endcapture %}
{% if homepage_markdown %}
{% if writer_preview %}
<div markdown="block">

{% endif %}
{% if writer_preview %}> {% endif %}{{ home_intro | strip }}

{% unless writer_preview %}
[Install](/docs/install/) · [Quickstart](/docs/quickstart/) · [HTML homepage](/)
{% endunless %}

{% if writer_preview %}
<p><img class="writer-image" src="{{ '/home.png' | relative_url }}" alt="A man holding a drink served in a pineapple" width="768" height="307"></p>

[Quickstart]({{ '/docs/quickstart/' | relative_url }}){: data-umami-event="Homepage Quickstart button"}

{{ home_design_content | strip }}

</div>
{% endif %}
{% else %}
{% assign home_intro_html = home_intro | markdownify %}
{% include components/home-hero.html compact=true description=home_intro_html %}
{% endif %}

{% unless writer_preview %}
{% include components/home-logo-cloud.html %}
{% endunless %}

{% capture home_usage_section %}
{% capture home_section_content %}
{% if writer_preview %}
**Install** the Dotenvx CLI.
{: #install}

{% assign cli = site.data.install_methods | where: 'name', 'CLI' | first %}
```bash
{{ cli.command }}
```

{% else %}
### **Encrypt**
{: .home-command-label}
{% endif %}

{% capture home_usage_paragraph %}
{% if writer_preview %}**Encrypt**{% else %}Encrypt{% endif %} your secrets in .env files. The values become ciphertext and only your private key can unlock them.
{: {% if writer_preview %}#encrypt {% endif %}.design-paragraph}
{% endcapture %}
{% if writer_preview %}
{{ home_usage_paragraph | strip }}
{% endif %}

```cli
$ dotenvx encrypt
◈ encrypted (.env)
```
{: label="Encrypt your .env file" copy="dotenvx encrypt"}

{% unless writer_preview %}
{{ home_usage_paragraph | strip }}
{% endunless %}

{% unless writer_preview %}
### **Commit**
{: .home-command-label}
{% endunless %}

{% capture home_usage_paragraph %}
{% if writer_preview %}**Commit**{% else %}Commit{% endif %} your encrypted .env files with your code. It's safe. Now you can securely share secrets through git.
{: {% if writer_preview %}#commit {% endif %}.design-paragraph}
{% endcapture %}
{% if writer_preview %}
{{ home_usage_paragraph | strip }}
{% endif %}

```cli
$ git add .env
$ git commit -m "encrypt .env"
```
{: label="Commit your encrypted .env file" copy='git add .env
git commit -m "encrypt .env"'}

{% unless writer_preview %}
{{ home_usage_paragraph | strip }}
{% endunless %}

{% unless writer_preview %}
### **Ship**
{: .home-command-label}
{% endunless %}

{% capture home_usage_paragraph %}
{% if writer_preview %}**Ship**{% else %}Ship{% endif %} your code and secrets together. Dotenvx uses your private key to decrypt and inject your secrets just-in-time to your code.
{: {% if writer_preview %}#ship {% endif %}.design-paragraph}
{% endcapture %}
{% if writer_preview %}
{{ home_usage_paragraph | strip }}
{% endif %}

```cli
$ dotenvx run -- node index.js
⟐ injected env (2) from .env
```
{: label="Run your deployed app" copy="dotenvx run -- node index.js"}

{% unless writer_preview %}
{{ home_usage_paragraph | strip }}
{% endunless %}
{% endcapture %}
{% include components/home-section.html title="Usage" id="home-commands-plain-title" content=home_section_content class="home-commands-plain" %}

{% unless writer_preview %}
{% include components/home-member-stories.html %}
{% endunless %}

{% unless writer_preview %}
{% include components/home-section.html title="Design" id="home-foundations-title" content=home_design_content class="home-foundations" copy_class="home-design-copy" %}
{% endunless %}

{% capture home_key_visual %}
{% unless homepage_markdown %}
{% include components/keysee-viewer.html
      public_key="0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"
      framing_padding="0.18"
      render_mode="wire"
      spin_speed="1"
      class="relative h-28 w-28 mx-auto mb-4 min-h-0 overflow-hidden bg-transparent"
    %}
{% endunless %}
{% endcapture %}

{% capture home_section_content %}
{% unless writer_preview %}
One private key unlocks all the secrets in an encrypted .env file. For development, it's default stored in your operating system's secret store, like macOS Keychain, Windows Credential Manager, and Linux Secret Service.
{: .design-paragraph}
{% endunless %}

{% if writer_preview %}In development, launch{% else %}Launch{% endif %} your app with dotenvx run to decrypt its secrets just in time and inject them into your development environment.{% unless writer_preview %} The private key stays in your OS secret store, outside git.{% endunless %}
{: .design-paragraph}

```cli
$ dotenvx run -- node index.js
⟐ injected env (17) from .env
```
{: label="Example application startup with encrypted secrets" copy="dotenvx run -- node index.js"}

{% unless writer_preview %}
[Try it for yourself →](/docs/quickstart/){: .design-link}
{: .design-paragraph .text-center .one-key-action}
{% endunless %}
{% endcapture %}
{% unless writer_preview %}
{% include components/home-section.html title="One Private Key" id="home-one-key-title" content=home_section_content visual=home_key_visual %}
{% endunless %}

{% capture home_provider_visual %}
{% unless homepage_markdown %}
{% include components/design-provider-stack.html %}
{% endunless %}
{% endcapture %}

{% capture home_section_content %}
{% if writer_preview %}
In production, set DOTENV_PRIVATE_KEY in your hosting platform's environment variables or CI secrets. One key unlocks each environment's secrets. Your encrypted .env travels with your code; the private key stays in your deployment settings, outside git.
{: .design-paragraph}
{% else %}
Set DOTENV_PRIVATE_KEY where your app runs. That one key unlocks the secrets in its encrypted .env file—so you provision a single key for each environment instead of copying every secret into every deployment.
{: .design-paragraph}

Add it to your hosting platform's environment variables or CI secrets. Your encrypted .env travels with your code. The private key stays in your deployment settings, outside git.
{: .design-paragraph}
{% endif %}

{% unless homepage_markdown %}
{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf" %}
{% endunless %}

```cli
$ dotenvx run -- npm start
⟐ injected env (21) from .env.production

> my-app@1.0.0 start
> node server.js

App listening on port 80
```
{: label="Example application startup with production secrets" copy="dotenvx run -- npm start"}

{% unless writer_preview %}
[Deploy with dotenvx →](/docs/quickstart/){: .design-link}
{: .design-paragraph .text-center .one-key-action}
{% endunless %}
{% endcapture %}
{% unless writer_preview %}
{% include components/home-section.html title="Ready for Production" id="home-production-title" content=home_section_content class="home-production" visual=home_provider_visual %}
{% endunless %}

{% endcapture %}
{% unless writer_preview %}
{{ home_usage_section | strip }}
{% endunless %}

{% unless writer_preview %}
{% capture home_section_content %}
Your private keys unlock your secrets. Keep them safe, outside git, in a place you trust. Use your operating system's secret store, a password manager you already rely on, or Armor ⛨.
{: .design-paragraph}

The encrypted .env stays with your code. You decide who has custody of the keys.
{: .design-paragraph}

{% unless homepage_markdown %}
<div class="design-settings-grid">
        {% include components/design-settings-tile.html label="Keychain" icon="apple" %}
        {% include components/design-settings-tile.html label="Windows" icon="windows" title="Windows Credential Manager" %}
        {% include components/design-settings-tile.html label="Linux" icon="linux" title="Linux Secret Service" %}
        {% include components/design-settings-tile.html label="1Password" icon="1password" class="home-custody-1password" %}
        {% include components/design-settings-tile.html label="Bitwarden" icon="bitwarden" %}
        {% include components/design-settings-tile.html href="/armor" label="Armor" glyph="⛨" glyph_class="design-settings-tile-glyph--soft" %}
      </div>
{% endunless %}
{% endcapture %}
{% include components/home-section.html title="Your Keys. Your Choice." id="home-custody-title" content=home_section_content class="home-custody" %}

{% capture home_section_content %}
Encryption turns your .env into a shipping container for secrets. Commit it alongside your code and deliver both through the same repository, build, and release.
{: .design-paragraph}

{% unless homepage_markdown %}
<figure class="home-shipping-visual" aria-label="Git commit adding encrypted production secrets to the application repository, then deployed.">
        <div class="shipping-commit">
          <header class="shipping-commit-header">
            <span class="shipping-commit-icon" aria-hidden="true"><img class="shipping-commit-dotenvx" src="/assets/img/logo-env.svg" alt="" width="24" height="24">{% include logos/git-symbol.html %}</span>
            <div><strong>Add production secrets</strong><span class="shipping-commit-meta">1 file changed</span></div>
            <code class="shipping-commit-sha">7a3f91c</code>
          </header>
          <div class="shipping-commit-file"><code>.env.production</code><span class="shipping-commit-encrypted">Encrypted</span></div>
          <div class="shipping-commit-diff" aria-label="Added encrypted production credentials; ciphertext abbreviated">
            <code><span aria-hidden="true">+</span> DATABASE_URL="encrypted:…"</code>
            <code><span aria-hidden="true">+</span> REDIS_URL="encrypted:…"</code>
            <code><span aria-hidden="true">+</span> STRIPE_SECRET_KEY="encrypted:…"</code>
            <code><span aria-hidden="true">+</span> STRIPE_WEBHOOK_SECRET="encrypted:…"</code>
            <code><span aria-hidden="true">+</span> RESEND_API_KEY="encrypted:…"</code>
            <code><span aria-hidden="true">+</span> OPENAI_API_KEY="encrypted:…"</code>
          </div>
          <footer class="shipping-commit-footer"><code>7a3f91c <span aria-hidden="true">→</span> production</code></footer>
        </div>
      </figure>
{% endunless %}

Once your secrets are in an encrypted git workflow, you'll wonder why you waited so long. It feels so good and unlocks so much.
{: .design-paragraph .home-shipping-closing}
{% endcapture %}
{% include components/home-section.html title="Your Code. Your Secrets." id="home-shipping-title" content=home_section_content class="home-shipping" %}
{% endunless %}

{% if writer_preview %}
<div markdown="block">

{{ home_usage_section | strip }}

## Adoption

- 20 million weekly [npm installs](https://www.npmjs.com/package/@dotenvx/dotenvx)
- [Google](https://github.com/search?q=dotenvx+org%3Agoogle&type=code), [NASA](https://github.com/search?q=repo%3Anasa%2Fearthdata-search+dotenvx&type=code), [AWS](https://docs.amplify.aws/nextjs/deploy-and-host/amplify-hosting/secrets-and-vars/#local-environment-2), and [CrowdStrike](https://github.com/search?q=org%3ACrowdStrike+dotenvx&type=code) use Dotenvx
- [John Zila](/members/watt/) (former Head of Security DevOps at Zoom): *securely version and deploy secrets, without a new critical path dependency*
- [Dhravya Shah](/members/supermemory/) (CEO of Supermemory): *set one key and all your secrets just work*

</div>
{% else %}
{% capture home_closing_actions %}
{% if homepage_markdown %}
[Quickstart](/docs/quickstart/) · [Source](https://github.com/dotenvx/dotenvx)
{% else %}
<div class="home-cta home-closing-actions">
        {% include components/design-btn.html label="Quickstart" href="/docs/quickstart/" data_umami_event="Homepage Closing Quickstart button" %}
        {% capture source_button %}{% include logos/github.html class="home-source-icon" %}<span>Source</span>{% endcapture %}
        {% include components/design-btn.html content=source_button href="https://github.com/dotenvx/dotenvx" class="home-source-button" data_umami_event="Homepage Source button" %}
      </div>
{% endif %}
{% endcapture %}

{% capture home_section_content %}
Dotenvx is free and open source, for you to wield and keep your secrets safe. It’s a labor of love from me and a community of people who believe safer secrets should be within everyone’s reach.
{: .design-paragraph}

We’re building for the whole world of software: an elegant, open pattern for encrypting secrets that belongs to no single vendor. Your encrypted files travel with your code, without a secrets service in your application’s critical path. The goal is simple: make this pattern work wherever software runs, for everyone who builds it—human or agent.
{: .design-paragraph}
{% endcapture %}
{% include components/home-section.html title="Open Source" id="home-open-source-title" content=home_section_content class="home-open-source" anchor="install" copy_class="home-creator-note" after=home_closing_actions %}
{% endif %}
