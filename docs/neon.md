---
layout: docs-markdown
og_image:
  template: logo
  logo: _includes/icons/docs/neon.html
  alt: Neon
title: "Neon"
social_title: "Encrypt Neon Postgres connection strings with dotenvx"
description: "Pull each Neon branch's connection strings into an encrypted .env file and inject them at runtime with dotenvx."
icon: neon
show_icon: true
permalink: /docs/neon/
markdown_url: /docs/neon.md
agent_prompt: Set up Dotenvx with Neon for me.
redirect_from:
  - /docs/guides/neon
  - /docs/guides/neon/
---

## Prerequisites

To get the most out of this guide, you'll need to:

- [Install the Neon CLI](https://neon.com/docs/reference/cli-install) and run `neon login`

## Install

Get the Dotenvx CLI.

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

## Link a Neon project

Link your directory to a Neon project. `--no-env-pull` keeps the Neon CLI from writing plaintext credentials to `.env.local`.

```console
$ neon link --no-env-pull
```
{: copy="neon link --no-env-pull"}

## Encrypt production

Pull your production branch's variables into `.env.production`.

```console
$ neon env pull --branch main --file .env.production
```
{: copy="neon env pull --branch main --file .env.production"}

The Neon CLI pulls variables for every service enabled on the branch. Only some of them are secrets. Add a [Dotenvxfile](/docs/dotenvxfile/) to tell Dotenvx which ones to encrypt. Remove the lines for services you don't use.

```ruby
# Dotenvxfile
strict true
required true
storage "encrypted"
redacted true

# Postgres
env "DATABASE_URL", type: "url"
env "DATABASE_URL_UNPOOLED", type: "url"
env "NEON_BRANCH", storage: "plaintext", redacted: false

# Neon Auth
env "NEON_AUTH_BASE_URL", type: "url", storage: "plaintext", redacted: false
env "NEON_AUTH_JWKS_URL", type: "url", storage: "plaintext", redacted: false

# Object Storage
env "AWS_ACCESS_KEY_ID"
env "AWS_SECRET_ACCESS_KEY"
env "AWS_ENDPOINT_URL_S3", type: "url", storage: "plaintext", redacted: false
env "AWS_REGION", storage: "plaintext", redacted: false

# AI Gateway
env "NEON_AI_GATEWAY_TOKEN"
env "NEON_AI_GATEWAY_BASE_URL", type: "url", storage: "plaintext", redacted: false
```
{: .design-codeblock--nowrap copy="false"}

Encrypt it.

```console
$ dotenvx encrypt -f .env.production
```
{: copy="dotenvx encrypt -f .env.production"}

The connection strings and keys are now encrypted, and you have a `.env.keys` file. The branch name and service URLs stay readable, so pull requests show which branch a file points to.

```dotenv
#/-------------------[DOTENV_PUBLIC_KEY]--------------------/
#/            public-key encryption for .env files          /
#/       [how it works](https://dotenvx.com/encryption)     /
#/----------------------------------------------------------/
DOTENV_PUBLIC_KEY_PRODUCTION="03a13c..."

# .env.production
DATABASE_URL="encrypted:BJWTQRqLZbLh..."
DATABASE_URL_UNPOOLED="encrypted:BKgN9Vn5IM1I..."
NEON_BRANCH=main
NEON_AUTH_BASE_URL=https://ep-floral-morning-b4ilaws5.neonauth.c-6.us-east-2.aws.neon.tech/neondb/auth
NEON_AUTH_JWKS_URL=https://ep-floral-morning-b4ilaws5.neonauth.c-6.us-east-2.aws.neon.tech/neondb/auth/.well-known/jwks.json
AWS_ACCESS_KEY_ID=encrypted:BNLOduQp2JJu...
AWS_SECRET_ACCESS_KEY=encrypted:BH6o+QcR5u8c...
AWS_ENDPOINT_URL_S3=https://br-bold-rain-b45zwi29.storage.c-6.us-east-2.aws.neon.tech
AWS_REGION=us-east-2
NEON_AI_GATEWAY_TOKEN=encrypted:BBmg6Ej5B7ud...
NEON_AI_GATEWAY_BASE_URL=https://br-bold-rain-b45zwi29-api.ai.c-6.us-east-2.aws.neon.tech
```
{: .design-codeblock--nowrap copy="false"}

## Encrypt a preview branch

Every Neon branch has its own connection strings, Auth URLs and storage keys. Create a preview branch and give it its own encrypted file. The same Dotenvxfile applies.

```console
$ neon branches create --name preview
$ neon env pull --branch preview --file .env.preview
$ dotenvx encrypt -f .env.preview
```
{: copy="neon branches create --name preview
neon env pull --branch preview --file .env.preview
dotenvx encrypt -f .env.preview"}

Each file gets its own key pair, so a preview key cannot decrypt production.

## Run

Install the Neon serverless driver.

```console
$ npm install @neondatabase/serverless
```
{: copy="npm install @neondatabase/serverless"}

Create `index.js`.

```javascript
// index.js
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL)
const [{ now }] = await sql`select now()`

console.log(`Hello ${process.env.NEON_BRANCH} at ${now.toISOString()}`)
```
{: copy="false"}

Run it against either branch.

```console
$ dotenvx run -f .env.preview -- node index.js
⟐ injected env (12) from .env.preview (028 28A) via .env.keys ⛉
Hello preview at 2026-10-26T20:48:09.360Z

$ dotenvx run -f .env.production -- node index.js
⟐ injected env (12) from .env.production (03A 13C) via .env.keys ⛉
Hello main at 2026-10-26T20:48:11.968Z
```
{: copy="dotenvx run -f .env.preview -- node index.js"}

## Commit

Commit both encrypted files and the Dotenvxfile. Keep `.env.keys` out of git. The `-f` flag adds the encrypted files even though `neon env pull` listed them in `.gitignore`.

```console
$ echo ".env.keys" >> .gitignore
$ git add .gitignore Dotenvxfile
$ git add -f .env.production .env.preview
$ git commit -m "encrypt neon branch env"
```
{: copy="echo \".env.keys\" >> .gitignore
git add .gitignore Dotenvxfile
git add -f .env.production .env.preview
git commit -m \"encrypt neon branch env\""}

Store `.env.keys` somewhere safe like [1Password](/docs/1password/) or [Armor](/docs/custody/armor/).

## Deploy

Set `DOTENV_PRIVATE_KEY_PRODUCTION` on your host and start your app with `--strict`, to stop the boot if a key is missing:

```console
$ dotenvx run -f .env.production --strict -- node index.js
```
{: copy="dotenvx run -f .env.production --strict -- node index.js"}

See the [platform guides](/docs/platforms/) for where each host keeps the private key.

## Refresh credentials

`neon env pull` writes plaintext values back into the file. Encrypt again right after every pull, for example after you reset a role password.

```json
{
  "scripts": {
    "env:production": "neon env pull --branch main --file .env.production && dotenvx encrypt -f .env.production",
    "env:preview": "neon env pull --branch preview --file .env.preview && dotenvx encrypt -f .env.preview"
  }
}
```
{: .design-codeblock--nowrap copy="false"}

`dotenvx encrypt` reuses the existing key in `.env.keys`, so your deployed private keys keep working.
