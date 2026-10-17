---
layout: docs-side-path
title: Build-time configuration
description: Decrypt before building public variables or prerendered pages.
permalink: /docs/react-router/build-time/
markdown_url: /docs/react-router/build-time.md
parent_url: /docs/react-router/#production
parent_title: React Router
side_path_kind: Alternative
---

The main guide reads HELLO at request time. If your app needs values during the build—for public VITE_ variables, prerendering, or build plugins—wrap the build command too:

```json
{
  "scripts": {
    "build": "dotenvx run -f .env.production --strict -- react-router build",
    "start": "dotenvx run -f .env.production --strict -- react-router-serve ./build/server/index.js"
  }
}
```
{: label="package.json"}

Make DOTENV_PRIVATE_KEY_PRODUCTION available to both the build job and the server. An Enclaved Key assigned to one resource does not automatically grant access to another.

Run npm run build or pnpm build. Public variables and prerendered data are fixed in the output; changing them requires rebuilding.

Keep real secrets inside server loaders or actions or build tooling. Anything returned into generated HTML or browser payloads is public. Do not put secrets in Vite's define option or give them a VITE_ prefix.

Prerendering is a separate React Router option; wrapping the build only supplies the environment. See [prerendering](https://reactrouter.com/how-to/pre-rendering) for configuration.

