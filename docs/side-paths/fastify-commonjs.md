---
layout: docs-side-path
title: CommonJS
description: Use require in your Fastify server.
permalink: /docs/fastify/commonjs/
markdown_url: /docs/fastify/commonjs.md
parent_url: /docs/fastify/#ship
parent_title: Fastify
side_path_kind: Alternative
---

For a CommonJS app, use server.cjs:

```js
// server.cjs
const app = require('fastify')({ logger: true })

app.get('/', async () => {
  return `Hello ${process.env.HELLO}`
})

app.listen({
  port: Number(process.env.PORT || 3000),
  host: process.env.HOST || '127.0.0.1'
}).catch((error) => {
  app.log.error(error)
  process.exit(1)
})
```

Update the filenames in your scripts:

```json
{
  "scripts": {
    "dev": "dotenvx run --strict -- node server.cjs",
    "start": "dotenvx run -f .env.production --strict -- node server.cjs"
  }
}
```
{: label="package.json"}

Run npm run dev or pnpm dev. Dotenvx decrypts .env before Node loads your server. The sharing and production steps stay the same.
