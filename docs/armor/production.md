---
title: Production
description: Deploy with dotenvx armor.
permalink: /docs/armor/production/
layout: radar
redirect_from:
  - /docs/ops/production
  - /docs/ops/production/
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Production"
  description="Ready to deploy to production? Here's how with dotenvx and dotenvx armor."
  mark="armor"
%}

<div class="armor-shell">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <p class="design-paragraph">Deploying to production with <code class="design-code">dotenvx armor</code> is the same as deploying with <code class="design-code">dotenvx</code>.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Add production environment</h2>
    <p class="design-paragraph">Create a <code class="design-code">.env.production</code> file.</p>

    {% capture armor_prod_env %}
# .env.production
HELLO="production"
    {% endcapture %}
    {% include components/design-codeblock.html value=armor_prod_env copy=false %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Encrypt production</h2>

    {% capture armor_prod_encrypt %}
$ dotenvx encrypt -f .env.production
    {% endcapture %}
    {% include components/design-codeblock.html value=armor_prod_encrypt copy_text="dotenvx encrypt -f .env.production" %}

    <p class="design-paragraph">Your <code class="design-code">.env.production</code> file is now encrypted, and you have a <code class="design-code">.env.keys</code> file.</p>

    {% capture armor_prod_encrypted %}
#/-------------------[DOTENV_PUBLIC_KEY]--------------------/
#/            public-key encryption for .env files          /
#/       [how it works](https://dotenvx.com/encryption)     /
#/----------------------------------------------------------/
DOTENV_PUBLIC_KEY_PRODUCTION="025a54defaeff32caa2bbe60537b88b5b89716eade6df08418d7a68f5c4f742be6"

# .env.production
HELLO="encrypted:BD+uttK9iBuXnfx6HukDK06IGk0pQARwivtxM+ZiePvhRxHyQL3UD0sf0ayLw/P5Y/BED//zRiTlUf6nENuu7QhNJ24g3uADfrDfhvYi/MOHjmfKyRiu+yOxSw6e+c0yRNukS+n8SxONnec="
    {% endcapture %}
    {% include components/design-codeblock.html value=armor_prod_encrypted copy=false %}

    {% capture armor_prod_keys %}
#/------------------!DOTENV_PRIVATE_KEYS!-------------------/
#/ private decryption keys. DO NOT commit to source control /
#/     [how it works](https://dotenvx.com/encryption)       /
#/----------------------------------------------------------/

# .env.production
DOTENV_PRIVATE_KEY_PRODUCTION="424d0ea072eb17c6bee9b4b42ff6333513cf128ea3d5d60ccf79246ca7c3f786"
    {% endcapture %}
    {% include components/design-codeblock.html value=armor_prod_keys copy=false %}

    <p class="design-paragraph">We're ready to inject the encrypted <code class="design-code">.env.production</code> secrets into the app on boot.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Set decryption key</h2>
    <p class="design-paragraph">Set <code class="design-code">DOTENV_PRIVATE_KEY_PRODUCTION</code> on your production server using the production key in your <code class="design-code">.env.keys</code> file.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Run dotenvx</h2>
    <p class="design-paragraph">With <code class="design-code">DOTENV_PRIVATE_KEY_PRODUCTION</code> set on your server, run dotenvx ahead of your app boot process.</p>

    {% capture armor_prod_run %}
$ dotenvx run -- your-command
    {% endcapture %}
    {% include components/design-codeblock.html value=armor_prod_run copy_text="dotenvx run -- your-command" %}

    <p class="design-paragraph">Dotenvx will decrypt your secrets just-in-time and inject them into your application process.</p>
    <p class="design-paragraph">See <a class="design-link" href="/docs/platforms">platforms</a> for more detailed guides.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}
  </section>
</div>
