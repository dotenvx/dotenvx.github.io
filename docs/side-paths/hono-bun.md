---
layout: docs-side-path
title: Bun
description: Run Hono with Bun and encrypted environment files.
permalink: /docs/hono/bun/
markdown_url: /docs/hono/bun.md
parent_url: /docs/hono/#ship
parent_title: Hono
side_path_kind: Alternative
---

Start with a [Hono Bun app](https://hono.dev/docs/getting-started/bun). Install Dotenvx:

```console
$ bun add @dotenvx/dotenvx
```
{: copy="bun add @dotenvx/dotenvx"}

Disable Bun's automatic .env loading so Dotenvx controls which file is decrypted:

```toml
# bunfig.toml
env = false
```

Use Bun's server instead of the Node adapter:

```ts
// src/index.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text(`Hello ${process.env.HELLO}`))

export default {
  fetch: app.fetch,
  port: Number(process.env.PORT || 3000),
  hostname: process.env.HOST || '127.0.0.1'
}
```

Update your package scripts:

```json
{
  "scripts": {
    "dev": "bunx --bun dotenvx run --strict -- bun src/index.ts",
    "start": "bunx --bun dotenvx run -f .env.production --strict -- bun src/index.ts"
  }
}
```
{: label="package.json"}

Follow [Encrypt](/docs/hono/#encrypt) and [Commit](/docs/hono/#commit), using bunx --bun dotenvx in place of npx dotenvx.

```console
$ bun run dev
```
{: copy="bun run dev"}

Visit [http://localhost:3000](http://localhost:3000) to see Hello Secret.

Follow [Share](/docs/hono/#share) for team access. For [Production](/docs/hono/#production), install Bun on your host, deploy bunfig.toml with your app and encrypted file, and use bun install and bun run start. Set HOST to 0.0.0.0 and provision the production key as described there.

