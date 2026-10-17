---
layout: docs-side-path
title: Build-time configuration
description: Decrypt before building public variables or prerendered pages.
permalink: /docs/tanstack-start/build-time/
markdown_url: /docs/tanstack-start/build-time.md
parent_url: /docs/tanstack-start/#production
parent_title: TanStack Start
side_path_kind: Alternative
---

The main guide reads HELLO at request time. If your app needs values during the build—for public VITE_ variables, prerendering, or build plugins—wrap the build command too:

```json
{
  "scripts": {
    "build": "dotenvx run -f .env.production --strict -- vite build",
    "start": "dotenvx run -f .env.production --strict -- node .output/server/index.mjs"
  }
}
```
{: label="package.json"}

Make DOTENV_PRIVATE_KEY_PRODUCTION available to both the build job and the server. An Enclaved Key assigned to one resource does not automatically grant access to another.

Run npm run build or pnpm build. Public variables and prerendered data are fixed in the output; changing them requires rebuilding.

Keep real secrets inside server functions or build tooling. Anything returned into generated HTML or browser payloads is public. Do not put secrets in Vite's define option or give them a VITE_ prefix.

Prerendering is a separate TanStack Start option; wrapping the build only supplies the environment. See [prerendering](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering) for configuration.

