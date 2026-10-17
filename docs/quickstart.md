---
title: Quickstart
description: Encrypt your first .env file.
permalink: /docs/quickstart/
markdown_url: /docs/quickstart.md
agent_prompt: Set up Dotenvx in my project for me.
layout: docs-markdown
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

## Install

Install the Dotenvx CLI:

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

[**More installation options** Alternative →](/docs/quickstart/install-alternatives/){: .side-path}

## Encrypt

Start with a secret value in the .env file at your project root, like:

```dotenv
# .env
HELLO="Secret"
```
{: copy="HELLO=\"Secret\""}

Encrypt it with a single command.

```console
$ dotenvx encrypt
◈ encrypted .env (022 0D8) via .env.keys ⛉
```
{: copy="dotenvx encrypt"}

The values become ciphertext and only your private key can unlock them.

```dotenv
# .env
DOTENV_PUBLIC_KEY="0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

HELLO="encrypted:BHLTACNJMr00nTG6yXpkCyWFKF/MY0ajN855tg3uVtKopTe2AGzSkQlcPd21pTOT3Ci8IKrdIg2TMZFoq1mDR6yb06QCRvqHXtpkZkAHYCEHfeWqqC8tMFovcYq5JS2uZSrC/qUGDA=="
```
{: class="design-codeblock--nowrap"}

[**CI & Production** Alternative →](/docs/quickstart/env-files/){: .side-path}

## Commit

Commit your encrypted .env files with your code. It's safe. Now you can securely share secrets through git.

```console
$ git add .env
$ git commit -m "encrypt .env"
```
{: copy="git add .env
git commit -m \"encrypt .env\""}

[**Protect your commits** Extra protection →](/docs/quickstart/protect/){: .side-path}

## Ship

Use your secret in an app. Here's a Node.js example, but dotenvx works with any language.

```javascript
// index.js
console.log(`Hello ${process.env.HELLO}`)
```

Run it with dotenvx:

```console
$ dotenvx run -- node index.js
⟐ injected env (2) from .env (022 0D8) via .env.keys
Hello Secret
```
{: copy="dotenvx run -- node index.js"}

Dotenvx uses your private key to decrypt and inject your secrets just-in-time to your code.

[**Without Node.js** Alternative →](/docs/quickstart/without-nodejs/){: .side-path}

## Next steps

Your secrets now travel with your code. Follow a [guide for your stack](/docs/guides/), or continue below.

[**Deploy with a private key** Deploy →](/docs/quickstart/deploy/){: .side-path}
