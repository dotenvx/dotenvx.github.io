---
title: Quickstart
description: Encrypt your first .env file.
permalink: /docs/quickstart/encryption/
layout: radar
redirect_from:
  - /docs/quickstarts/encryption
  - /docs/quickstarts/encryption/
---

{% capture encrypt_hero_visual %}
  <div class="docs-env-hero-example">
    <code class="design-code">$ dotenvx encrypt</code>
  </div>
{% endcapture %}

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Quickstart"
  description="Encrypt your first .env file."
  visual=encrypt_hero_visual
%}

<div class="armor-shell">
  <div class="design-content-width">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Encrypt</h2>
    <p class="design-paragraph">Start with a value in your .env file, like:</p>
    {% capture plaintext_example %}
# .env
HELLO="Secret"
    {% endcapture %}
    {% include components/design-codeblock.html value=plaintext_example copy_text='HELLO="Secret"' %}
    <p class="design-paragraph">Encrypt it with a single command.</p>
    {% capture encrypt_commands %}
$ dotenvx encrypt
◈ encrypted (.env)
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_commands copy_text="dotenvx encrypt" %}
    <p class="design-paragraph">Your encrypted secrets stay in .env and your private key is put in .env.keys.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Commit</h2>
    <p class="design-paragraph">Edit your .gitignore to ignore .env.keys and allow .env.</p>
    {% capture gitignore_example %}
# .gitignore
.env.keys
!.env
    {% endcapture %}
    {% capture gitignore_copy %}
.env.keys
!.env
    {% endcapture %}
    {% include components/design-codeblock.html value=gitignore_example copy_text=gitignore_copy %}
    <p class="design-paragraph">Commit your encrypted .env file to code.</p>
    {% capture commit_commands %}
$ git add .
$ git commit -m "Add encrypted sample secret"
[main 6c79581] Add encrypted sample secret
    {% endcapture %}
    {% capture commit_commands_copy %}
git add .
git commit -m "Add encrypted sample secret"
    {% endcapture %}
    {% include components/design-codeblock.html value=commit_commands copy_text=commit_commands_copy %}
    <p class="design-paragraph">Your .env.keys file stays on your machine for now.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Run</h2>
    <p class="design-paragraph">Use your secret in an app. Ours is a simple hello world Node.js app—create an index.js file:</p>
    {% capture app_example %}
// index.js
console.log(`Hello ${process.env.HELLO}`)
    {% endcapture %}
    {% capture app_example_copy %}
console.log(`Hello ${process.env.HELLO}`)
    {% endcapture %}
    {% include components/design-codeblock.html value=app_example copy_text=app_example_copy %}
    <p class="design-paragraph">Run it with dotenvx:</p>
    {% capture run_commands %}
$ dotenvx run -- node index.js
⟐ injected env (2) from .env
Hello Secret
    {% endcapture %}
    {% include components/design-codeblock.html value=run_commands copy_text="dotenvx run -- node index.js" %}
    <p class="design-paragraph"><strong>Your secret is encrypted in Git, and your app can still read it.</strong> The .env file stays encrypted on disk.</p>
    <p class="design-paragraph">To ship to production, deploy the encrypted .env and set <code class="design-code">DOTENV_PRIVATE_KEY</code> in your hosting platform's secret settings. Keep .env.keys out of the deployment. <a class="design-link" href="/docs/platforms/">Find your platform's guide →</a></p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

  </section>
</div>
</div>
