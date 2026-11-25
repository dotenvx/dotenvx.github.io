---
seo_title: "Dotenvx · Encrypt your .env files"
title: "Dotenvx · A secure dotenv–from the creator of dotenv"
social_title: "Dotenvx · A secure dotenv–from the creator of dotenv"
description: "Encrypt .env files, commit them safely, and load environment variables in any language or framework with Dotenvx, from the creator of dotenv."
main_layout: columns
---

{% capture home_design_content %}
Three widely used and proven primitives make up Dotenvx's design. Git, .env, and secp256k1.
{: .design-paragraph}

We chose Git because it is the best way to deliver digital goods. It is the container ship of the digital world. All code travels on its ships. Why not secrets? Why invent an inferior secrets delivery mechanism when the world-class one is right there at your fingertips.
{: .design-paragraph}

We chose .env because it is the open standard for loading secrets into code. It represents environment variables, the core primitive that all secrets end up injected into at runtime of code.
{: .design-paragraph}

Lastly, we needed to choose an encryption algorithm. Encryption of the values inside the .env file would allow us to place those values with code, leveraging git's distribution advantages while still following the twelve-factor config – by separating the decryption key from the code (environment).
{: .design-paragraph}

It was important that we choose a proven, simple, asymmetric standard with small keys. We chose secp256k1, battle-tested by Bitcoin for more than seventeen years. We made cryptography an opinionated choice so developers wouldn't have to. Encryption just worked.
{: .design-paragraph}

The result is a system built entirely from primitives, developers already understand, and infrastructure they already use. Secrets can travel with code without becoming part of the code. Git distributes them, .env defines how apps consume them, and secp256k1 keeps their values unreadable. The kicker, all this works by setting a single private key on your infrastructure - no more risky async coordination of secrets, no more centralized downtime risk. Your secrets are always just there with your code, ready to be unlocked at runtime.
{: .design-paragraph}

{% endcapture %}

{% capture home_intro %}
A secure dotenv–from the creator of [dotenv](https://github.com/motdotla/dotenv){: .design-link}
{% endcapture %}








{% capture home_usage_section %}
{% capture home_section_content %}

### Encrypt
{: #encrypt}

{% assign cli = site.data.install_methods | where: 'name', 'CLI' | first %}
```console
$ {{ cli.command }}
```
{: copy="{{ cli.command }}"}

```cli
$ dotenvx encrypt
◈ encrypted (.env)
```
{: label="Encrypt your .env file" copy="dotenvx encrypt"}

Your .env values become ciphertext. The private key that unlocks them goes in .env.keys.
{: .design-paragraph}

### Commit
{: #commit}

```cli
$ git add .env
$ git commit -m "encrypt .env"
```
{: label="Commit your encrypted .env file" copy='git add .env
git commit -m "encrypt .env"'}

Your encrypted .env travels with your code. Keep .env.keys out of git. The secrets and the key that unlocks them stay separate.
{: .design-paragraph}

### Ship
{: #ship}

```cli
$ dotenvx run -- node index.js
⟐ injected env (2) from .env
```
{: label="Run your deployed app" copy="dotenvx run -- node index.js"}

Locally, the key is read from .env.keys. Dotenvx decrypts your secrets and injects them into your app at runtime.
{: .design-paragraph}

For production, use a separate encrypted file and key. See the [production quickstart]({{ '/docs/quickstart/' | relative_url }}#what-about-production).
{: .design-paragraph}


{% endcapture %}
{% include components/home-section.html title="Usage" id="home-commands-plain-title" content=home_section_content class="home-commands-plain" %}





{% capture home_key_visual %}

{% endcapture %}

{% capture home_section_content %}


In development, launch your app with dotenvx run to decrypt its secrets just in time and inject them into your development environment.
{: .design-paragraph}

```cli
$ dotenvx run -- node index.js
⟐ injected env (17) from .env
```
{: label="Example application startup with encrypted secrets" copy="dotenvx run -- node index.js"}


{% endcapture %}


{% capture home_provider_visual %}

{% endcapture %}

{% capture home_section_content %}

In production, set DOTENV_PRIVATE_KEY in your hosting platform's environment variables or CI secrets. One key unlocks each environment's secrets. Your encrypted .env travels with your code; the private key stays in your deployment settings, outside git.
{: .design-paragraph}




```cli
$ dotenvx run -- npm start
⟐ injected env (21) from .env.production

> my-app@1.0.0 start
> node server.js

App listening on port 80
```
{: label="Example application startup with production secrets" copy="dotenvx run -- npm start"}


{% endcapture %}


{% endcapture %}





<div class="main-section-columns" markdown="block">

<div markdown="block">

> {{ home_intro | strip }}




<p><img class="main-image" src="{{ '/home.png' | relative_url }}" alt="A man holding a drink served in a pineapple" width="768" height="307"></p>

[Install]({{ '/docs/install/' | relative_url }}){: data-umami-event="Homepage Install button"} • [Quickstart]({{ '/docs/quickstart/' | relative_url }}){: data-umami-event="Homepage Quickstart button"}

{{ home_usage_section | strip }}

</div>

<div markdown="block">

<span id="what-if-your-repo-is-breached"></span>

## Dual-Breach Required

Decrypting .env values at rest requires both the encrypted file and its matching private key. Dotenvx lets you keep the file in Git and the key in a separate store. An attacker who gains access to either store alone gets only one of the two.
{: .design-paragraph}

Read more about this separation in our [whitepaper]({{ '/whitepaper.pdf' | relative_url }}#page=5){: target="_blank" rel="noopener"}.
{: .design-paragraph}

In the whitepaper’s illustrative model, separating the encrypted `.env` file from its private key lowers the annual chance of exposing stored secrets from 1% to 0.005%, a 99.5% reduction, assuming the two breaches are independent. [See the calculation on page 13]({{ '/whitepaper.pdf' | relative_url }}#page=13){: target="_blank" rel="noopener"}.
{: .design-paragraph}

<p><img class="main-image" src="{{ '/whitepaper.png' | relative_url }}" alt="Whitepaper page comparing hypothetical secret exposure risk over time for traditional secrets managers and Dotenvx" width="1188" height="1322"></p>

## Why this design?

{{ home_design_content | strip }}

</div>

<div markdown="block">

## Who holds the key?

By default, you do. Keep the private key on your machine for development and in your deployment environment for production.
{: .design-paragraph}

When you need to manage access across a team, [Armor]({{ '/armor/' | relative_url }}) adds managed key custody, approvals, and auditing.
{: .design-paragraph}

[Custody]({{ '/docs/custody/' | relative_url }})

## Who’s using dotenvx?

- [22 million](https://www.npmjs.com/package/@dotenvx/dotenvx) weekly npm installs
- [Google](https://github.com/search?q=dotenvx+org%3Agoogle&type=code), [NASA](https://github.com/search?q=repo%3Anasa%2Fearthdata-search+dotenvx&type=code), [AWS](https://docs.amplify.aws/nextjs/deploy-and-host/amplify-hosting/secrets-and-vars/#local-environment-2), and [CrowdStrike](https://github.com/search?q=org%3ACrowdStrike+dotenvx&type=code)
- The previous [Head of DevSecOps at Zoom](/members/watt/)

</div>

</div>
