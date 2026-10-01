---
layout: radar
og_image:
  template: logo
  logo: _includes/icons/docs/nextjs.html
  alt: Next.js
title: Next.js
social_title: Encrypt a .env file in Next.js
description: "Use Dotenvx with Next.js to load encrypted .env files and manage environment variables across local development and deployments."
permalink: /docs/nextjs/
redirect_from:
  - /docs/platforms/vercel
  - /docs/platforms/vercel/
  - /docs/frameworks/next
  - /docs/frameworks/next/
  - /docs/secrets-in-nextjs
  - /docs/secrets-in-nextjs/
---


{% include components/docs-hero.html
  eyebrow="Docs"
  title="Next.js"
  description="Use Dotenvx with Next.js."
  icon="nextjs"
  show_icon=true
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

## Install

In your Next.js project, install Dotenvx and @dotenvx/next-env.

```console
$ npm install @dotenvx/dotenvx
$ npm install @dotenvx/next-env
```
{: copy="npm install @dotenvx/dotenvx
npm install @dotenvx/next-env"}



Add this override to your package.json:

```json
{
  "overrides": {
    "@next/env": "npm:@dotenvx/next-env"
  }
}
```

Apply it:

```console
$ npm install
```
{: copy="npm install"}

Next.js now loads encrypted secrets automatically through @dotenvx/next-env.

<details markdown="block">
<summary class="design-paragraph">Override not taking effect?</summary>

Check npm ls @next/env to confirm Next.js resolves to @dotenvx/next-env. If npm still uses the original package, remove node_modules and package-lock.json, then run npm install again. Review the regenerated lockfile before committing it.

</details>
{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Encrypt

Start with a secret value in the .env file at your project root, like:

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

Commit your encrypted .env files with your code. It's safe. Now you can securely share secrets through git. Keep .env.keys out of git. The -f flag adds the encrypted file even if your Next.js project ignores .env files.

```console
$ git add -f .env
$ git commit -m "encrypt .env"
```
{: copy="git add -f .env
git commit -m \"encrypt .env\""}


{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Ship

Read your secrets through process.env. Create app/api/hello/route.js (or src/app/api/hello/route.js if you use src):

```javascript
// app/api/hello/route.js
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  return new Response(`Hello ${process.env.HELLO}`)
}
```

Run your app:

```console
$ npx next dev
```
{: copy="npx next dev"}

Visit /api/hello to see Hello Secret. Next.js loads and decrypts .env before your server code reads process.env.

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

Deploy your code and encrypted .env file, install your npm dependencies, and set DOTENV_PRIVATE_KEY in your hosting platform's environment variables. Make it available during both build and runtime. On Vercel, select the environments you deploy to. Keep .env.keys on your local machine.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf" %}

Build and run your app:

{% capture deploy_commands %}
$ npx next build
$ npx next start
{% endcapture %}
{% capture deploy_commands_copy %}
npx next build
npx next start
{% endcapture %}
{% include components/design-codeblock.html value=deploy_commands copy_text=deploy_commands_copy format="cli" %}

Your app reads the same secrets, but this time with the private key stored in your hosting environment.

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
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add -f .env.production
git commit -m \"encrypt .env.production\""}



Find the matching private key with npx dotenvx keypair -f .env.production. Set it as DOTENV_PRIVATE_KEY_PRODUCTION in your hosting platform's environment variables for both build and runtime.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY_PRODUCTION" value="c09d6f8918835c82f0df3b7d100c501ac199af5a76405892d641def691b5f015" %}

Build and run it:

{% include components/design-codeblock.html value=deploy_commands copy_text=deploy_commands_copy format="cli" %}

Next.js automatically loads .env.production for next build and next start. Visit /api/hello to see Hello Production. Same code, production secrets.

Next.js also loads .env as a fallback. If it contains encrypted values, keep its DOTENV_PRIVATE_KEY available alongside DOTENV_PRIVATE_KEY_PRODUCTION.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Conclusion

You've encrypted a .env file, committed it to git, and loaded its secrets through Next.js with @dotenvx/next-env. You've also learned how to set a private key on your server and load different secrets for production without changing your code.

Your encrypted secrets now travel with your code. Set the matching keys in your hosting environment, and Next.js handles loading them.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

</section>
</div>
</div>
<script src="{{ '/assets/js/secrets-artifact.js' | relative_url }}" defer></script>
