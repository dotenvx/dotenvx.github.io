---
layout: docs-markdown
title: "Express"
social_title: "Encrypt a .env file in Express"
description: "Encrypt a .env file in Express with the Dotenvx Node.js SDK, commit it safely, and load its secrets at runtime."
icon: express
permalink: /docs/express/
markdown_url: /docs/express.md
agent_prompt: Set up Dotenvx with Express for me.
redirect_from:
  - /docs/secrets-in-express/
  - /docs/secrets-in-express
  - /docs/frameworks/express
  - /docs/frameworks/express/
quickstart_pager: true
---

## Prerequisites

Create an [Express app](https://expressjs.com/en/starter/installing/).

## Install

In your Express project, install Dotenvx.

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx" package-manager="npm"}

```console
$ pnpm add @dotenvx/dotenvx
```
{: copy="pnpm add @dotenvx/dotenvx" package-manager="pnpm"}

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
◈ encrypted .env (022 0D8) via .env.keys ⛉
```
{: copy="npx dotenvx encrypt" package-manager="npm"}

```console
$ pnpm exec dotenvx encrypt
◈ encrypted .env (022 0D8) via .env.keys ⛉
```
{: copy="pnpm exec dotenvx encrypt" package-manager="pnpm"}

The values become ciphertext and only your private key can unlock them.

```dotenv
# .env
DOTENV_PUBLIC_KEY="0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

HELLO="encrypted:BHLTACNJMr00nTG6yXpkCyWFKF/MY0ajN855tg3uVtKopTe2AGzSkQlcPd21pTOT3Ci8IKrdIg2TMZFoq1mDR6yb06QCRvqHXtpkZkAHYCEHfeWqqC8tMFovcYq5JS2uZSrC/qUGDA=="
```
{: class="design-codeblock--nowrap"}

## Commit

Commit your encrypted .env files with your code. It's safe. Now you can securely share secrets through git.

```console
$ git add .env
$ git commit -m "encrypt .env"
```
{: copy="git add .env
git commit -m \"encrypt .env\""}

## Ship

Read your secrets through process.env. Create index.js:

```javascript
// index.js
require('@dotenvx/dotenvx').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(`Hello ${process.env.HELLO}`)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
```

Add a start script to your package.json:

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```
{: label="package.json"}

Run your app:

```console
$ npm start
⟐ injected env (2) from .env (022 0D8) via .env.keys
Server running on http://localhost:3000
```
{: copy="npm start" package-manager="npm"}

```console
$ pnpm start
⟐ injected env (2) from .env (022 0D8) via .env.keys
Server running on http://localhost:3000
```
{: copy="pnpm start" package-manager="pnpm"}

Dotenvx loads and decrypts .env before Express reads process.env.

Visit [http://localhost:3000](http://localhost:3000) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:3000" text="Hello Secret" %}

## Share

Have teammates? Share access with Dotenvx Armor ⛨

Log in to Dotenvx.

```console
$ npx dotenvx login
◉ logged in (username)
```
{: copy="npx dotenvx login" class="design-codeblock--nowrap" package-manager="npm"}

```console
$ pnpm exec dotenvx login
◉ logged in (username)
```
{: copy="pnpm exec dotenvx login" class="design-codeblock--nowrap" package-manager="pnpm"}

Create the Armored Key ⛨

```console
$ npx dotenvx armor up
⛨ armored .env (022 0D8)
```
{: copy="npx dotenvx armor up" class="design-codeblock--nowrap" package-manager="npm"}

```console
$ pnpm exec dotenvx armor up
⛨ armored .env (022 0D8)
```
{: copy="pnpm exec dotenvx armor up" class="design-codeblock--nowrap" package-manager="pnpm"}

Invite your teammate.

```console
$ npx dotenvx armor invite
⛨ invited person@example.com to team
```
{: copy="npx dotenvx armor invite" class="design-codeblock--nowrap" package-manager="npm"}

```console
$ pnpm exec dotenvx armor invite
⛨ invited person@example.com to team
```
{: copy="pnpm exec dotenvx armor invite" class="design-codeblock--nowrap" package-manager="pnpm"}

Your teammate accepts the invitation, pulls the repository, installs dependencies, and logs in with dotenvx login. They can then run the app:

```console
$ npm start
⟐ injected env (2) from .env (022 0D8) via Armor ⛨
Server running on http://localhost:3000
```
{: copy="npm start" package-manager="npm"}

```console
$ pnpm start
⟐ injected env (2) from .env (022 0D8) via Armor ⛨
Server running on http://localhost:3000
```
{: copy="pnpm start" package-manager="pnpm"}

Visit [http://localhost:3000](http://localhost:3000) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:3000" text="Hello Secret" %}

[**Share a private key** Alternative →](/docs/express/share-private-key/){: .side-path}

## Production

Create a .env.production file.

```dotenv
# .env.production
HELLO="Production"
```
{: copy="HELLO=\"Production\""}

Encrypt it with an Enclaved Key ◊

```console
$ npx dotenvx encrypt -f .env.production
◈ encrypted .env.production (022 0D8) via Armor Enclave ◊
```
{: copy="npx dotenvx encrypt -f .env.production" package-manager="npm"}

```console
$ pnpm exec dotenvx encrypt -f .env.production
◈ encrypted .env.production (022 0D8) via Armor Enclave ◊
```
{: copy="pnpm exec dotenvx encrypt -f .env.production" package-manager="pnpm"}

When prompted, choose **Enclaved**, select your deployment service, connection, and resource, and use DOTENV_PRIVATE_KEY_PRODUCTION as the private key name.

Commit .env.production.

```console
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add -f .env.production
git commit -m \"encrypt .env.production\""}

Deploy your code and encrypted .env.production file to the selected resource. Install your dependencies there:

```console
$ npm install
```
{: copy="npm install" package-manager="npm"}

```console
$ pnpm install
```
{: copy="pnpm install" package-manager="pnpm"}

Set DOTENV_FILE to .env.production in your deployment environment so Dotenvx knows which file to load. Keep .env.keys on your local machine.

Run your app:

```console
$ npm start
```
{: copy="npm start" package-manager="npm"}

```console
$ pnpm start
```
{: copy="pnpm start" package-manager="pnpm"}

Dotenvx loads and decrypts .env.production with your Enclaved Key ◊

Open your deployed app's URL to see Hello Production.

{% include components/design-browser.html url="https://your-app.example.com" text="Hello Production" %}

[**Deploy with a private key** Alternative →](/docs/express/deploy-private-key/){: .side-path}

## Conclusion

You've encrypted your secrets, shared access with Armor, and loaded production secrets in Express with an Enclaved Key. Your secrets now travel with your code.
