---
title: Quickstart
description: Encrypt your first .env file.
permalink: /docs/quickstart/
layout: radar
redirect_from:
  - /docs/quickstarts
  - /docs/quickstarts/
  - /docs/quickstart/environments
  - /docs/quickstart/environments/
  - /docs/quickstarts/environments
  - /docs/quickstarts/environments/
  - /docs/quickstart/encryption
  - /docs/quickstart/encryption/
  - /docs/quickstart/run
  - /docs/quickstart/run/
  - /docs/quickstarts/run
  - /docs/quickstarts/run/
  - /docs/quickstarts/encryption
  - /docs/quickstarts/encryption/
---

{% capture encrypt_hero_visual %}
  {% include components/logo.html class="docs-dotenvx-logo" %}
{% endcapture %}

{% include components/docs-hero.html
  eyebrow="Docs"
  title="Quickstart"
  description="Encrypt your first .env file."
  visual=encrypt_hero_visual
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

## Install

Get the Dotenvx CLI.

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

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
$ dotenvx encrypt
◈ encrypted (.env)
```
{: copy="dotenvx encrypt"}

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

Use your secret in an app. Here's a Node.js example, but dotenvx works with any language.

```javascript
// index.js
console.log(`Hello ${process.env.HELLO}`)
```
{: copy="console.log(`Hello ${process.env.HELLO\}`)"}

Run it with dotenvx:

{% capture run_commands %}
$ dotenvx run -- node index.js
⟐ injected env (2) from .env
Hello Secret
{% endcapture %}
{% include components/design-codeblock.html value=run_commands copy_text="dotenvx run -- node index.js" format="cli" %}

Dotenvx uses your private key to decrypt and inject your secrets just-in-time to your code.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Deploy

Find your private key with the keypair command.

```console
$ dotenvx keypair
{"DOTENV_PUBLIC_KEY":"0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990","DOTENV_PRIVATE_KEY":"b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf"}
```
{: copy="dotenvx keypair" class="design-codeblock--nowrap"}

Set it as DOTENV_PRIVATE_KEY on your production environment.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf" %}

And run your app:

{% include components/design-codeblock.html value=run_commands copy_text="dotenvx run -- node index.js" format="cli" %}

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
$ dotenvx encrypt -f .env.production
◈ encrypted (.env.production)
```
{: copy="dotenvx encrypt -f .env.production"}

Commit it:

```console
$ git add .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add .env.production
git commit -m \"encrypt .env.production\""}



This time set DOTENV_PRIVATE_KEY and DOTENV_FILE on your server.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015" path=".env.production" %}

Run it:

```console
$ dotenvx run -- node index.js
⟐ injected env (2) from .env.production
Hello Production
```
{: copy="dotenvx run -- node index.js"}

Dotenvx needs DOTENV_FILE so it knows to load .env.production. Same code, but this time, production secrets.

You can even compose multiple environments like this with DOTENV_FILE=.env.production,.env for example. Comma separate them.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Conclusion

You've encrypted a .env file, committed it to git, and used its secrets in an app. You've also learned how to set a private key on your server and load different secrets for production without changing your code.

Your secrets now travel with your code, and each environment needs just one private key to use them.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

</section>
</div>
</div>
<script src="{{ '/assets/js/secrets-artifact.js' | relative_url }}" defer></script>
