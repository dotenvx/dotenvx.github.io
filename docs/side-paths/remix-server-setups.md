---
layout: docs-side-path
title: Other server setups
description: Use Dotenvx with a custom Node server or a Cloudflare deployment.
permalink: /docs/remix/server-setups/
markdown_url: /docs/remix/server-setups.md
parent_url: /docs/remix/#production
parent_title: Remix
side_path_kind: Alternative
---

## Custom Node server

Already running Remix through an Express server? Keep your existing server and build setup. Prefix its startup command with Dotenvx:

```json
{
  "scripts": {
    "start": "dotenvx run -f .env.production --strict -- node server.js"
  }
}
```
{: label="package.json"}

Replace server.js with your server's actual entry point. Follow the main guide's Production steps to provide the encrypted file and production key. Dotenvx decrypts the environment before your server imports the Remix build.

For local development, prefix your existing development command with dotenvx run -- so it loads .env.

## Cloudflare

Cloudflare runs your app in Workers rather than a Node server. Use the [Remix Cloudflare setup](https://v2.remix.run/docs/guides/vite/#cloudflare) and the [Dotenvx Cloudflare guide](/docs/cloudflare/) for supplying secrets through Wrangler.

With the Remix Cloudflare Vite setup, loaders and actions read bindings through context.cloudflare.env. The Node process.env and remix-serve examples in the main guide do not apply to that runtime.

## Classic Remix compiler

If your app still uses remix.config.js, keep its existing build and server paths when adding Dotenvx. The main guide's vite:dev, vite:build, and build/server/index.js examples assume [Remix Vite](https://v2.remix.run/docs/guides/vite/).
