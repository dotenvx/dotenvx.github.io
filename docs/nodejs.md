---
og_image:
  template: logo
  logo: _includes/icons/docs/nodejs.html
  alt: Node.js
layout: radar
title: Node.js
social_title: Encrypt a .env file in Node.js
description: "Load and decrypt .env files in Node.js with Dotenvx. Get started with the Node.js SDK or inject environment variables using the CLI."
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
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

## Install

Get the Dotenvx Node.js SDK.

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Encrypt

Start with a secret value in your .env file, like:

```dotenv
# .env
HELLO="Secret"
```
{: copy="HELLO=\"Secret\""}

Encrypt it with a single command.

```console
$ npx dotenvx encrypt
◈ encrypted (.env)
```
{: copy="npx dotenvx encrypt"}

The values become ciphertext and only your private key can unlock them.

```dotenv
# .env
DOTENV_PUBLIC_KEY="0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

HELLO="encrypted:BHLTACNJMr00nTG6yXpkCyWFKF/MY0ajN855tg3uVtKopTe2AGzSkQlcPd21pTOT3Ci8IKrdIg2TMZFoq1mDR6yb06QCRvqHXtpkZkAHYCEHfeWqqC8tMFovcYq5JS2uZSrC/qUGDA=="
```
{: class="design-codeblock--nowrap"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Commit

Commit your encrypted .env files with your code. It's safe. Now you can securely share secrets through git.

```console
$ git add .env
$ git commit -m "encrypt .env"
```
{: copy="git add .env
git commit -m \"encrypt .env\""}


{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Ship

Load your secrets before your app uses them. Create an index.js file:

```javascript
// index.js
require('@dotenvx/dotenvx').config()

console.log(`Hello ${process.env.HELLO}`)
```
{: copy="require('@dotenvx/dotenvx').config()

console.log(`Hello ${process.env.HELLO\}`)"}



Run your app:

{% capture run_commands %}
$ node index.js
⟐ injected env (2) from .env
Hello Secret
{% endcapture %}
{% include components/design-codeblock.html value=run_commands copy_text="node index.js" format="cli" %}

Dotenvx uses your private key to decrypt and inject your secrets just-in-time to your code.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Deploy

Find your private key with the keypair command.

```console
$ npx dotenvx keypair
{"DOTENV_PUBLIC_KEY":"0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990","DOTENV_PRIVATE_KEY":"b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf"}
```
{: copy="npx dotenvx keypair" class="design-codeblock--nowrap"}

Deploy your code and encrypted .env file, install your npm dependencies, and set DOTENV_PRIVATE_KEY on your production environment. Keep .env.keys on your local machine.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf" %}

And run your app:

{% include components/design-codeblock.html value=run_commands copy_text="node index.js" format="cli" %}

Dotenvx uses your private key to decrypt and inject your secrets just-in-time, but this time with the private key stored on your server.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Production

Give production its own secrets by creating a .env.production file:

```dotenv
# .env.production
HELLO="Production"
```
{: copy="HELLO=\"Production\""}

Encrypt it:

```console
$ npx dotenvx encrypt -f .env.production
◈ encrypted (.env.production)
```
{: copy="npx dotenvx encrypt -f .env.production"}

Commit it:

```console
$ git add .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add .env.production
git commit -m \"encrypt .env.production\""}



Find the matching private key with npx dotenvx keypair -f .env.production. This time set DOTENV_PRIVATE_KEY and DOTENV_FILE on your server.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015" path=".env.production" %}

Run it:

```console
$ node index.js
⟐ injected env (2) from .env.production
Hello Production
```
{: copy="node index.js"}

Dotenvx needs DOTENV_FILE so it knows to load .env.production. Same code, but this time, production secrets.

You can even compose multiple environments like this with DOTENV_FILE=.env.production,.env for example. Comma separate them.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Conclusion

You've encrypted a .env file, committed it to git, and loaded its secrets with the Node.js SDK. You've also learned how to set a private key on your server and load different secrets for production without changing your code.

Your secrets now travel with your code, and each environment needs just one private key to use them.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

</section>
</div>
</div>
<script src="{{ '/assets/js/secrets-artifact.js' | relative_url }}" defer></script>
