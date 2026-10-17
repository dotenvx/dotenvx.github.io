---
layout: docs-markdown
title: "Bun"
social_title: "Encrypt a .env file in Bun"
description: "Encrypt a .env file in Bun with the Dotenvx Node.js SDK, commit it safely, and load its secrets at runtime."
icon: bun
permalink: /docs/bun/
markdown_url: /docs/bun.md
agent_prompt: Set up Dotenvx with Bun for me.
redirect_from:
  - /docs/secrets-in-bun/
  - /docs/secrets-in-bun
quickstart_pager: true
---

## Prerequisites

Install the [latest Bun](https://bun.sh/docs/installation) and open your Bun project.

## Install

Install Dotenvx:

```console
$ bun add @dotenvx/dotenvx
```
{: copy="bun add @dotenvx/dotenvx"}

Disable Bun's [automatic .env loading](https://bun.sh/docs/runtime/environment-variables#disabling-automatic-env-loading) so Dotenvx handles your encrypted files. Add this top-level setting to bunfig.toml:

```toml
# bunfig.toml
env = false
```

Keep this file with your app when deploying.

## Encrypt

Start with a secret value in the .env file at your project root, like:

```dotenv
# .env
HELLO="Secret"
```
{: copy="HELLO=\"Secret\""}

Encrypt it with a single command.

```console
$ bunx --bun dotenvx encrypt
◈ encrypted .env (022 0D8) via .env.keys ⛉
```
{: copy="bunx --bun dotenvx encrypt"}

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

Create a Bun server that reads your secret:

```typescript
// index.ts
import { config } from '@dotenvx/dotenvx';

config({ strict: true });

const server = Bun.serve({
  port: Number(process.env.PORT || 3000),
  fetch() {
    return new Response(`Hello ${process.env.HELLO}`);
  },
});

console.log(`Server running on ${server.url}`);
```

HELLO is a demonstration value. Use real secrets in server-side operations without returning them to the browser.

Add these scripts to package.json, keeping your other scripts:

```json
{
  "scripts": {
    "start": "bun index.ts",
    "dev": "bun --watch index.ts"
  }
}
```
{: label="package.json"}

Run your app:

```console
$ bun run start
⟐ injected env (2) from .env (022 0D8) via .env.keys
Server running on http://localhost:3000/
```
{: copy="bun run start"}

Dotenvx loads and decrypts .env before the server starts. Use bun run dev to restart when your code changes.

Visit [http://localhost:3000](http://localhost:3000) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:3000" text="Hello Secret" %}

[**Use the CLI** Alternative →](/docs/bun/cli/){: .side-path}

## Share

Have teammates? Share access with Dotenvx Armor ⛨

Log in to Dotenvx.

```console
$ bunx --bun dotenvx login
◉ logged in (username)
```
{: copy="bunx --bun dotenvx login" class="design-codeblock--nowrap"}

Create the Armored Key ⛨

```console
$ bunx --bun dotenvx armor up
⛨ armored .env (022 0D8)
```
{: copy="bunx --bun dotenvx armor up" class="design-codeblock--nowrap"}

Invite your teammate.

```console
$ bunx --bun dotenvx armor invite
⛨ invited person@example.com to team
```
{: copy="bunx --bun dotenvx armor invite" class="design-codeblock--nowrap"}

Your teammate accepts the invitation, pulls the repository, installs dependencies, and logs in with dotenvx login. They can then run the app:

```console
$ bun run start
⟐ injected env (2) from .env (022 0D8) via Armor ⛨
Server running on http://localhost:3000
```
{: copy="bun run start"}

Visit [http://localhost:3000](http://localhost:3000) to see Hello Secret.

{% include components/design-browser.html url="http://localhost:3000" text="Hello Secret" %}

[**Share a private key** Alternative →](/docs/bun/share-private-key/){: .side-path}

## Production

Create a .env.production file.

```dotenv
# .env.production
HELLO="Production"
```
{: copy="HELLO=\"Production\""}

Encrypt it with an Enclaved Key ◊

```console
$ bunx --bun dotenvx encrypt -f .env.production
◈ encrypted .env.production (022 0D8) via Armor Enclave ◊
```
{: copy="bunx --bun dotenvx encrypt -f .env.production"}

When prompted, choose **Enclaved**, select your deployment service, connection, and resource, and use DOTENV_PRIVATE_KEY_PRODUCTION as the private key name.

Commit .env.production.

```console
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add -f .env.production
git commit -m \"encrypt .env.production\""}

Deploy your code, package.json, Bun lockfile, bunfig.toml, and encrypted .env.production file to a resource with Bun installed. Install your dependencies there:

```console
$ bun install
```
{: copy="bun install"}

Set DOTENV_FILE to .env.production in your deployment environment so Dotenvx knows which file to load. Keep .env.keys on your local machine.

Set NODE_ENV to production and PORT to the port your host expects. Run your app from the project root:

```console
$ bun run start
```
{: copy="bun run start"}

Dotenvx loads and decrypts .env.production with your Enclaved Key ◊

Open your deployed app's URL to see Hello Production.

{% include components/design-browser.html url="https://your-app.example.com" text="Hello Production" %}

[**Deploy with a private key** Alternative →](/docs/bun/deploy-private-key/){: .side-path}

## Conclusion

You've encrypted your secrets, shared access with Armor, and loaded production secrets in Bun with an Enclaved Key. Your secrets now travel with your code.
