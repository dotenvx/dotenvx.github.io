---
layout: docs-side-path
title: Decrypt secrets at runtime
description: Bundle an encrypted environment file and decrypt it inside your Worker.
permalink: /docs/cloudflare/runtime-decryption/
markdown_url: /docs/cloudflare/runtime-decryption.md
parent_url: /docs/cloudflare/#production
parent_title: Cloudflare
side_path_kind: Advanced
---

To decrypt secrets inside your Worker, bundle an encrypted .env.txt file with your code and provide its private key to the Worker.

Install dotenvx.

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx"}

Encrypt a .env.production.txt file. The .txt extension allows it to be included in the worker as an artifact.

```console
$ npx dotenvx encrypt -f .env.production.txt
```
{: copy="npx dotenvx encrypt -f .env.production.txt"}

Commit to code.

```console
$ git add .env.production.txt
$ git commit -m "encrypt .env.production.txt"
```
{: copy="git add .env.production.txt
git commit -m \"encrypt .env.production.txt\""}

Then inject your encrypted secrets at runtime.

```javascript
import envSrc from '../.env.production.txt'
import dotenvx from '@dotenvx/dotenvx'

const config = dotenvx.config({ envs: [{ type: 'env', value: envSrc, privateKeyName: 'DOTENV_PRIVATE_KEY_PRODUCTION' }] })
const envx = config.parsed

export default {
  async fetch(request, env, ctx) {
    return new Response(`Hello ${envx.HELLO}`)
  }
}
```

Adjust your deploy script to set your production keypair on Cloudflare.

```json
{
  "scripts": {
    "deploy": "bash -c 'wrangler deploy --secrets-file <(dotenvx keypair -f .env.production.txt)'"
  }
}
```
{: class="design-codeblock--nowrap"}

The Worker decrypts the bundled environment file at runtime using its production private key.
