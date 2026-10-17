---
layout: docs-side-path
title: Build-time variables
description: Decrypt before building when your app needs values during the build.
permalink: /docs/sveltekit/build-time-variables/
markdown_url: /docs/sveltekit/build-time-variables.md
parent_url: /docs/sveltekit/#production
parent_title: SvelteKit
side_path_kind: Alternative
---

The main guide loads HELLO at server startup. For a value that should be fixed when you build, declare it static:

```js
// src/env.js
import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  HELLO: { static: true }
});
```

Keep the same $app/env/private import. Update the build script to decrypt .env.production before Vite starts:

```json
{
  "scripts": {
    "build": "dotenvx run -f .env.production --strict -- vite build"
  }
}
```
{: label="package.json"}

Make DOTENV_PRIVATE_KEY_PRODUCTION available in your build environment as well as any runtime that needs it. An Enclaved Key assigned only to your server does not automatically give a separate build job access.

Run npm run build or pnpm build. Static values become part of the server build; changing them requires rebuilding. Keep build artifacts private.

Prerendered pages also run during the build. If a prerendered page needs HELLO, use this static declaration and build wrapper. Anything returned into generated HTML is public. See [SvelteKit environment variables](https://svelte.dev/docs/kit/environment-variables) for static and public options.

