---
layout: docs-side-path
title: Deploy with a private key
description: Run your encrypted .env file on a server.
permalink: /docs/quickstart/deploy/
markdown_url: /docs/quickstart/deploy.md
parent_url: /docs/quickstart/#next-steps
parent_title: Quickstart
side_path_kind: Next step
secrets_artifact: true
---

Deploy your code and encrypted .env file to your server, and install the Dotenvx CLI there. Keep .env.keys on your local machine.

Find your private key with the keypair command.

```console
$ dotenvx keypair
{"DOTENV_PUBLIC_KEY":"0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990","DOTENV_PRIVATE_KEY":"b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf"}
```
{: copy="dotenvx keypair" class="design-codeblock--nowrap"}

Set it as DOTENV_PRIVATE_KEY on your production environment.

{% include components/design-secrets-artifact.html key="DOTENV_PRIVATE_KEY" value="b37dbad0e00206f31486c4f44f8cc7abf2f1be96d5ba352eb791122b5e131bbf" %}

Run the same command on your server:

```console
$ dotenvx run -- node index.js
⟐ injected env (2) from .env
Hello Secret
```
{: copy="dotenvx run -- node index.js"}

Dotenvx uses your private key to decrypt and inject your secrets just-in-time, but this time with the private key stored on your server.
