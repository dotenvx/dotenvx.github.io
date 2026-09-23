---
og_image:
  template: logo
  logo: _includes/icons/docs/nodejs.html
  alt: Node.js
layout: radar
title: Node.js
social_title: Encrypt a .env file in Node.js
description: Use Dotenvx with Node.js.
permalink: /docs/nodejs/
redirect_from:
  - /docs/languages/nodejs
  - /docs/languages/nodejs/
  - /docs/secrets-in-nodejs/
  - /docs/secrets-in-nodejs
---


{% capture nodejs_visual %}
  {% include icons/docs/nodejs.html class="docs-nodejs-logo" %}
{% endcapture %}
{% include components/docs-hero.html
  eyebrow="Docs"
  title="Node.js"
  description="Use Dotenvx with Node.js."
  visual=nodejs_visual
%}

<div class="armor-shell">
  <div class="design-content-width">
  <section class="docs-quickstart-body">
    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Install</h2>
    <p class="design-paragraph">Get the Dotenvx Node.js SDK.</p>
    {% capture install_commands %}
$ npm install @dotenvx/dotenvx
    {% endcapture %}
    {% include components/design-codeblock.html value=install_commands copy_text="npm install @dotenvx/dotenvx" format="cli" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Encrypt</h2>
    <p class="design-paragraph">Start with a secret value in your .env file, like:</p>
    {% capture plaintext_example %}
# .env
HELLO="Secret"
    {% endcapture %}
    {% include components/design-codeblock.html value=plaintext_example copy_text='HELLO="Secret"' language="dotenv" %}
    <p class="design-paragraph">Encrypt it with a single command.</p>
    {% capture encrypt_commands %}
$ npx dotenvx encrypt
◈ encrypted (.env)
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypt_commands copy_text="npx dotenvx encrypt" format="cli" %}
    <p class="design-paragraph">The values become ciphertext and only your private key can unlock them.</p>
    {% capture encrypted_example %}
# .env
DOTENV_PUBLIC_KEY="0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

HELLO="encrypted:BHLTACNJMr00nTG6yXpkCyWFKF/MY0ajN855tg3uVtKopTe2AGzSkQlcPd21pTOT3Ci8IKrdIg2TMZFoq1mDR6yb06QCRvqHXtpkZkAHYCEHfeWqqC8tMFovcYq5JS2uZSrC/qUGDA=="
    {% endcapture %}
    {% include components/design-codeblock.html value=encrypted_example class="design-codeblock--nowrap" language="dotenv" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Commit</h2>
    <p class="design-paragraph">Commit your encrypted .env files with your code. It's safe. Now you can securely share secrets through git.</p>
    {% capture commit_commands %}
$ git add .env
$ git commit -m "encrypt .env"
    {% endcapture %}
    {% capture commit_commands_copy %}
git add .env
git commit -m "encrypt .env"
    {% endcapture %}
    {% include components/design-codeblock.html value=commit_commands copy_text=commit_commands_copy format="cli" %}
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Ship</h2>
    <p class="design-paragraph">Load your secrets before your app uses them. Create an index.js file:</p>
    {% capture app_example %}
// index.js
require('@dotenvx/dotenvx').config()

console.log(`Hello ${process.env.HELLO}`)
    {% endcapture %}
    {% capture app_example_copy %}
require('@dotenvx/dotenvx').config()

console.log(`Hello ${process.env.HELLO}`)
    {% endcapture %}
    {% include components/design-codeblock.html value=app_example copy_text=app_example_copy language="javascript" %}
    <p class="design-paragraph">Run your app:</p>
    {% capture run_commands %}
$ node index.js
⟐ injected env (2) from .env
Hello Secret
    {% endcapture %}
    {% include components/design-codeblock.html value=run_commands copy_text="node index.js" format="cli" %}
    <p class="design-paragraph">Dotenvx uses your private key to decrypt and inject your secrets just-in-time to your code.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Deploy</h2>
    <p class="design-paragraph">Find your private key with the keypair command.</p>
    {% capture keypair_commands %}
$ npx dotenvx keypair
{"DOTENV_PUBLIC_KEY":"0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990","DOTENV_PRIVATE_KEY":"b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf"}
    {% endcapture %}
    {% include components/design-codeblock.html value=keypair_commands copy_text="npx dotenvx keypair" class="design-codeblock--nowrap" format="cli" %}
    <p class="design-paragraph">Deploy your code and encrypted .env file, install your npm dependencies, and set DOTENV_PRIVATE_KEY on your production environment. Keep .env.keys on your local machine.</p>
    {% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf" %}
    <p class="design-paragraph">And run your app:</p>
    {% include components/design-codeblock.html value=run_commands copy_text="node index.js" format="cli" %}
    <p class="design-paragraph">Dotenvx uses your private key to decrypt and inject your secrets just-in-time, but this time with the private key stored on your server.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Production</h2>
    <p class="design-paragraph">Give production its own secrets by creating a .env.production file:</p>
    {% capture production_example %}
# .env.production
HELLO="Production"
    {% endcapture %}
    {% include components/design-codeblock.html value=production_example copy_text='HELLO="Production"' language="dotenv" %}
    <p class="design-paragraph">Encrypt it:</p>
    {% capture production_encrypt %}
$ npx dotenvx encrypt -f .env.production
◈ encrypted (.env.production)
    {% endcapture %}
    {% include components/design-codeblock.html value=production_encrypt copy_text="npx dotenvx encrypt -f .env.production" format="cli" %}
    <p class="design-paragraph">Commit it:</p>
    {% capture production_commit %}
$ git add .env.production
$ git commit -m "encrypt .env.production"
    {% endcapture %}
    {% capture production_commit_copy %}
git add .env.production
git commit -m "encrypt .env.production"
    {% endcapture %}
    {% include components/design-codeblock.html value=production_commit copy_text=production_commit_copy format="cli" %}
    <p class="design-paragraph">Find the matching private key with npx dotenvx keypair -f .env.production. This time set DOTENV_PRIVATE_KEY and DOTENV_FILE on your server.</p>
    {% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015" path=".env.production" %}
    <p class="design-paragraph">Run it:</p>
    {% capture production_run %}
$ node index.js
⟐ injected env (2) from .env.production
Hello Production
    {% endcapture %}
    {% include components/design-codeblock.html value=production_run copy_text="node index.js" format="cli" %}
    <p class="design-paragraph">Dotenvx needs DOTENV_FILE so it knows to load .env.production. Same code, but this time, production secrets.</p>
    <p class="design-paragraph">You can even compose multiple environments like this with DOTENV_FILE=.env.production,.env for example. Comma separate them.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

    {% capture step_content %}
    <h2 class="design-page-title design-page-title--flush">Conclusion</h2>
    <p class="design-paragraph">You've encrypted a .env file, committed it to git, and loaded its secrets with the Node.js SDK. You've also learned how to set a private key on your server and load different secrets for production without changing your code.</p>
    <p class="design-paragraph">Your secrets now travel with your code, and each environment needs just one private key to use them.</p>
    {% endcapture %}
    {% include components/design-step.html content=step_content %}

  </section>
</div>
</div>
<script src="{{ '/assets/js/secrets-artifact.js' | relative_url }}" defer></script>
