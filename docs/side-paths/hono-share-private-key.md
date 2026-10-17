---
layout: docs-side-path
title: Share a private key
description: Give a teammate access without Armor.
permalink: /docs/hono/share-private-key/
markdown_url: /docs/hono/share-private-key.md
parent_url: /docs/hono/#share
parent_title: Hono
side_path_kind: Alternative
---

You can share the private key directly if your team's security model allows each recipient to retain a permanent copy outside your access controls.

## Share the key

Find your private key with the keypair command.

```console
$ npx dotenvx keypair
{"DOTENV_PUBLIC_KEY":"0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990","DOTENV_PRIVATE_KEY":"b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf"}
```
{: copy="npx dotenvx keypair" class="design-codeblock--nowrap" package-manager="npm"}

```console
$ pnpm exec dotenvx keypair
{"DOTENV_PUBLIC_KEY":"0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990","DOTENV_PRIVATE_KEY":"b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf"}
```
{: copy="pnpm exec dotenvx keypair" class="design-codeblock--nowrap" package-manager="pnpm"}

Share the DOTENV_PRIVATE_KEY value through your team's approved private channel, such as Slack if your team permits it.

## Use the shared key

Your teammate pulls the repository, then creates a .env.keys file at the project root. They put the private key you sent them in that file:

```dotenv
# .env.keys
DOTENV_PRIVATE_KEY="b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf"
```

Keep .env.keys out of git. The encrypted .env file can stay committed alongside your code.

## Run the app

With the dependencies installed, your teammate can start the app:

```console
$ npm run dev
⟐ injected env (2) from .env (022 0D8) via .env.keys
```
{: copy="npm run dev" package-manager="npm"}

```console
$ pnpm dev
⟐ injected env (2) from .env (022 0D8) via .env.keys
```
{: copy="pnpm dev" package-manager="pnpm"}

Dotenvx loads and decrypts .env using their local private key. Visit [http://localhost:3000](http://localhost:3000) to see Hello Secret.

Anyone with a copy of the private key can decrypt files encrypted for that key. Removing their repository access does not revoke that copy. Use Armor when you want to manage access centrally.
