---
layout: docs-side-path
title: Cloudflare Workers
description: Read decrypted configuration through Worker bindings.
permalink: /docs/hono/cloudflare-workers/
markdown_url: /docs/hono/cloudflare-workers.md
parent_url: /docs/hono/#ship
parent_title: Hono
side_path_kind: Alternative
---

Start with a [Hono Cloudflare Workers app](https://hono.dev/docs/getting-started/cloudflare-workers), with Wrangler installed. Follow [Install](/docs/hono/#install), [Encrypt](/docs/hono/#encrypt), and [Commit](/docs/hono/#commit).

Workers receive secrets through bindings. Replace the Node entry point with:

```ts
// src/index.ts
import { Hono } from 'hono'

type Bindings = {
  HELLO: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => c.text(`Hello ${c.env.HELLO}`))

export default app
```

In your existing wrangler.jsonc, keep main pointing to src/index.ts and add:

```json
{
  "secrets": {
    "required": ["HELLO"]
  }
}
```
{: label="wrangler.jsonc"}

Use .env for this setup and do not create .dev.vars; Wrangler gives .dev.vars precedence over its .env and process-environment loader.

Update your dev script:

```json
{
  "scripts": {
    "dev": "dotenvx run --strict -- wrangler dev"
  }
}
```
{: label="package.json"}

```console
$ npm run dev
```
{: copy="npm run dev" package-manager="npm"}

```console
$ pnpm dev
```
{: copy="pnpm dev" package-manager="pnpm"}

Dotenvx decrypts .env before Wrangler starts. Wrangler loads HELLO from the process environment and exposes it as c.env.HELLO. Visit [http://localhost:8787](http://localhost:8787) to see Hello Secret.

Use [Share](/docs/hono/#share) for team access. For deployment, follow the [Cloudflare Production flow](/docs/cloudflare/#production), including its production key setup and deploy script. That script decrypts .env.production on the deployment machine and sends the values to Cloudflare as Worker secrets.

The Worker reads those bindings at runtime. It does not run the Node start script or need a Dotenvx private key in the Worker.

