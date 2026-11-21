---
seo_title: "Dotenvx · Encrypt your .env files"
title: "Dotenvx · A secure dotenv–from the creator of dotenv"
social_title: "Dotenvx · A secure dotenv–from the creator of dotenv"
description: "Encrypt .env files, commit them safely, and load environment variables in any language or framework with Dotenvx, from the creator of dotenv."
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


Best of all, attackers hate this. They have to gain access to both the encrypted `.env` file in your repository and the private key in your deployment environment to decrypt your secrets. This separation sharply reduces your risk of exposure as documented in our [whitepaper]({{ '/whitepaper.pdf' | relative_url }}){: target="_blank" rel="noopener"}.
{: .design-paragraph}

<p><a href="{{ '/whitepaper.pdf' | relative_url }}#page=13" target="_blank" rel="noopener" aria-label="Read page 13 of the whitepaper (opens in a new tab)"><img class="writer-image" src="{{ '/whitepaper.png' | relative_url }}" alt="Whitepaper page comparing hypothetical secret exposure risk over time for traditional secrets managers and Dotenvx" width="1188" height="1322"></a></p>

{% endcapture %}

{% capture home_intro %}
A secure dotenv–from the creator of [dotenv](https://github.com/motdotla/dotenv){: .design-link}
{% endcapture %}


<div markdown="block">


> {{ home_intro | strip }}




<p><img class="writer-image" src="{{ '/home.png' | relative_url }}" alt="A man holding a drink served in a pineapple" width="768" height="307"></p>

[Quickstart]({{ '/docs/quickstart/' | relative_url }}){: data-umami-event="Homepage Quickstart button"}

{{ home_design_content | strip }}

</div>





{% capture home_usage_section %}
{% capture home_section_content %}

**Install** the Dotenvx CLI.
{: #install}

{% assign cli = site.data.install_methods | where: 'name', 'CLI' | first %}
```bash
{{ cli.command }}
```



{% capture home_usage_paragraph %}
**Encrypt** your secrets in .env files. The values become ciphertext and only your private key can unlock them.
{: #encrypt .design-paragraph}
{% endcapture %}

{{ home_usage_paragraph | strip }}


```cli
$ dotenvx encrypt
◈ encrypted (.env)
```
{: label="Encrypt your .env file" copy="dotenvx encrypt"}





{% capture home_usage_paragraph %}
**Commit** your encrypted .env files with your code. It's safe. Now you can securely share secrets through git.
{: #commit .design-paragraph}
{% endcapture %}

{{ home_usage_paragraph | strip }}


```cli
$ git add .env
$ git commit -m "encrypt .env"
```
{: label="Commit your encrypted .env file" copy='git add .env
git commit -m "encrypt .env"'}





{% capture home_usage_paragraph %}
**Ship** your code and secrets together. Dotenvx uses your private key to decrypt and inject your secrets just-in-time to your code.
{: #ship .design-paragraph}
{% endcapture %}

{{ home_usage_paragraph | strip }}


```cli
$ dotenvx run -- node index.js
⟐ injected env (2) from .env
```
{: label="Run your deployed app" copy="dotenvx run -- node index.js"}


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





<div markdown="block">

{{ home_usage_section | strip }}

## Adoption

- 20 million weekly [npm installs](https://www.npmjs.com/package/@dotenvx/dotenvx)
- [Google](https://github.com/search?q=dotenvx+org%3Agoogle&type=code), [NASA](https://github.com/search?q=repo%3Anasa%2Fearthdata-search+dotenvx&type=code), [AWS](https://docs.amplify.aws/nextjs/deploy-and-host/amplify-hosting/secrets-and-vars/#local-environment-2), and [CrowdStrike](https://github.com/search?q=org%3ACrowdStrike+dotenvx&type=code) use Dotenvx
- [Dhravya Shah](/members/supermemory/) (CEO of Supermemory): *set one key and all your secrets just work*
- [John Zila](/members/watt/) (former Head of Security DevOps at Zoom): *securely version and deploy secrets, without a new critical path dependency*

</div>
