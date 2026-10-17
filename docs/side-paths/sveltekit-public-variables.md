---
layout: docs-side-path
title: Public browser variables
description: Expose values intended for the browser.
permalink: /docs/sveltekit/public-variables/
markdown_url: /docs/sveltekit/public-variables.md
parent_url: /docs/sveltekit/#ship
parent_title: SvelteKit
side_path_kind: Alternative
---

Mark browser-visible values with public: true in your [environment declarations](https://svelte.dev/docs/kit/environment-variables). Keep HELLO private:

```js
// src/env.js
import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  HELLO: {},
  SITE_NAME: { public: true }
});
```

Add the value to your encrypted .env file:

```console
$ npx dotenvx set SITE_NAME "My app"
```
{: copy="npx dotenvx set SITE_NAME \"My app\"" package-manager="npm"}

```console
$ pnpm exec dotenvx set SITE_NAME "My app"
```
{: copy="pnpm exec dotenvx set SITE_NAME \"My app\"" package-manager="pnpm"}

Read it in a component:

```svelte
<script>
  import { SITE_NAME } from '$app/env/public';
</script>

<h1>{SITE_NAME}</h1>
```

Restart npm run dev or pnpm dev. For production, set SITE_NAME in .env.production too, using the same command with -f .env.production.

Encryption protects the committed file. Values declared public are sent to browsers, so only use this for public configuration.

