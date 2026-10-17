---
layout: docs-side-path
title: Static generation
description: Decrypt during generation and deploy static files.
permalink: /docs/nuxt/static-generation/
markdown_url: /docs/nuxt/static-generation.md
parent_url: /docs/nuxt/#production
parent_title: Nuxt
side_path_kind: Alternative
---

For a static site, decrypt your production file while generating pages:

```json
{
  "scripts": {
    "generate": "dotenvx run -f .env.production --strict -- nuxt generate"
  }
}
```
{: label="package.json"}

Make DOTENV_PRIVATE_KEY_PRODUCTION available to the build job. An Enclaved Key assigned only to your server does not automatically give that job access.

```console
$ npm run generate
```
{: copy="npm run generate" package-manager="npm"}

```console
$ pnpm generate
```
{: copy="pnpm generate" package-manager="pnpm"}

Deploy .output/public to your static host. There is no Node server or npm start step, and the static host does not need your private key.

The example's Hello Production response is captured during generation. Server routes are unavailable on the deployed static site, so later API calls need a separate backend.

Values returned into generated HTML or payloads are public. Keep real secrets in build-side code and return only data intended for visitors. Updating captured values requires generating and deploying again.

See [Nuxt static hosting](https://nuxt.com/docs/4.x/getting-started/deployment#static-hosting).

