---
og_image:
  template: logo
  logo: _includes/icons/docs/nodejs.html
  alt: Node.js
title: Node.js
social_title: Encrypt a .env file in Node.js
description: "Load and decrypt .env files in Node.js with Dotenvx. Get started with the Node.js SDK or inject environment variables using the CLI."
permalink: /docs/nodejs/
markdown_url: /docs/nodejs.md
agent_prompt: Set up Dotenvx with Node.js for me.
redirect_from:
  - /docs/languages/nodejs
  - /docs/languages/nodejs/
  - /docs/secrets-in-nodejs/
  - /docs/secrets-in-nodejs
hero_description: "Use Dotenvx with Node.js."
hero_include: "icons/docs/nodejs.html"
hero_class: "docs-nodejs-logo"
secrets_artifact: true
---

## Install

In your Node.js project, install Dotenvx.

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx" package-manager="npm"}

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
```
{: copy="npx dotenvx encrypt" package-manager="npm"}

The values become ciphertext and only your private key can unlock them.

```dotenv
# .env
DOTENV_PUBLIC_KEY="DOTENV-PUBLIC-KEY-3-SECP256K1-0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

HELLO="DOTENV-CIPHERTEXT-3-SECP256K1-AES256GCM-0220d83035-BP8FZxI4vhmRmfTAmvZGnzBd6AoJG0ZSjKDLRbE4XpxaWBDD7PpxLMkB/2I0glwVkHXeIcpJwY13qtdhjySs+a9NT9myy5uzErUYb2Uc/1LDY886yF8SxslAxfiJzhZ5NV3qQDQ6Tg=="
```
{: class="design-codeblock--nowrap"}

## Commit

Commit your encrypted .env files with your code. It's safe. Now you can securely share secrets through git. Keep .env.keys out of git. The -f flag adds the encrypted file even if your project ignores .env files.

```console
$ git add -f .env
$ git commit -m "encrypt .env"
```
{: copy="git add -f .env
git commit -m \"encrypt .env\""}

## Ship

Load your secrets and read them through process.env. Create index.js:

```javascript
// index.js
require('@dotenvx/dotenvx').config()

console.log(`Hello ${process.env.HELLO}`)
```

Run your app:

```console
$ node index.js
Hello Secret
```
{: copy="node index.js"}

Dotenvx loads and decrypts .env before your code reads process.env.

## Share

Have teammates? Share access with Dotenvx Armor ⛨

Install the [Armor feature](/docs/cli/install-add/) before using Armor commands:

```console
$ npx dotenvx install --add armor
```
{: copy="npx dotenvx install --add armor"}

Log in to Dotenvx.

```console
$ npx dotenvx login
◉ logged in (username)
```
{: copy="npx dotenvx login" class="design-codeblock--nowrap" package-manager="npm"}

Create the Armored Key ⛨

```console
$ npx dotenvx armor up
```
{: copy="npx dotenvx armor up" class="design-codeblock--nowrap" package-manager="npm"}

Invite your teammate.

```console
$ npx dotenvx armor invite
⛨ invited person@example.com to team
```
{: copy="npx dotenvx armor invite" class="design-codeblock--nowrap" package-manager="npm"}

Your teammate accepts the invitation, pulls the repository, installs dependencies, and logs in with dotenvx login. They can then run the app:

```console
$ node index.js
Hello Secret
```
{: copy="node index.js"}

[**Not using Armor?** Alternative →](/docs/nodejs/share-private-key/){: .side-path}

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
```
{: copy="npx dotenvx encrypt -f .env.production" package-manager="npm"}

When prompted, choose **Armor**, then **Enclaved**, select your deployment service, connection, and resource, and use DOTENV_PRIVATE_KEY_PRODUCTION as the private key name.

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

Set DOTENV_FILE to .env.production in your deployment environment so Dotenvx knows which file to load. Keep .env.keys on your local machine.

Run your app:

```console
$ node index.js
Hello Production
```
{: copy="node index.js"}

Dotenvx loads and decrypts .env.production with your Enclaved Key ◊

[**Not using Armor Enclaves?** Alternative →](/docs/nodejs/deploy-private-key/){: .side-path}

## Conclusion

You've encrypted your secrets, shared access with Armor, and loaded production secrets with Armor Enclaves.
