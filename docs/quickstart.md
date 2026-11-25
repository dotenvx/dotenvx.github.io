---
title: Quickstart
description: Encrypt your first .env file
permalink: /docs/quickstart/
markdown_url: /docs/quickstart.md
agent_prompt: Set up Dotenvx in my project for me.
main_layout: two-columns
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
hero_include: "components/logo.html"
hero_class: "docs-dotenvx-logo"
secrets_artifact: true
---

> {{ page.description }}

## Encrypt

Create a .env file in your project root.

```dotenv
# .env
HELLO="Secret"
```

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

When prompted, choose **Classic (.env.keys)**.

Your .env values become ciphertext. The private key that unlocks them goes in .env.keys.

## Commit

Add this line to your .gitignore:

```gitignore
.env.keys
```

Then commit the encrypted .env with your code. The -f flag includes it even if your project ignores .env files.

```console
$ git add -f .env
$ git add .gitignore
$ git commit -m "encrypt .env"
```
{: copy="git add -f .env
git add .gitignore
git commit -m \"encrypt .env\""}

Keep .env.keys private and backed up. It holds the key you need to decrypt your file.

## Ship

Create index.js:

```javascript
console.log(`Hello ${process.env.HELLO}`)
```

Run your app with Dotenvx:

```console
$ dotenvx run -- node index.js
```
{: copy="dotenvx run -- node index.js"}

```text
Hello Secret
```

Dotenvx reads the key from .env.keys, decrypts your values, and injects them into your app at runtime. Replace node index.js with your own app’s command.

## What about production?
{: #production .quickstart-production}

<span id="what-about-production"></span>

The same workflow works in production. Use a separate encrypted file and key for each environment.

Create a separate .env.production:

```dotenv
HELLO="Production"
```

```console
$ dotenvx encrypt -f .env.production
```
{: copy="dotenvx encrypt -f .env.production"}

Choose **Classic (.env.keys)** again. Dotenvx adds a separate production key to .env.keys.

Copy the value named DOTENV_PRIVATE_KEY_PRODUCTION into an environment variable with that same name in your deployment settings.

Commit the encrypted production file:

```console
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add -f .env.production
git commit -m \"encrypt .env.production\""}

Run your deployed app with:

```console
$ dotenvx run -f .env.production -- node index.js
```
{: copy="dotenvx run -f .env.production -- node index.js"}

Your encrypted file travels with your code. The production key stays in your deployment environment.
