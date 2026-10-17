---
layout: docs-side-path
title: Public browser variables
description: Expose configuration intended for the browser.
permalink: /docs/tanstack-start/public-variables/
markdown_url: /docs/tanstack-start/public-variables.md
parent_url: /docs/tanstack-start/#ship
parent_title: TanStack Start
side_path_kind: Alternative
---

Use Vite's VITE_ prefix for public configuration. Add a value to your encrypted .env file:

```console
$ npx dotenvx set VITE_SITE_NAME "My app"
```
{: copy='npx dotenvx set VITE_SITE_NAME "My app"' package-manager="npm"}

```console
$ pnpm exec dotenvx set VITE_SITE_NAME "My app"
```
{: copy='pnpm exec dotenvx set VITE_SITE_NAME "My app"' package-manager="pnpm"}

Read it in a component:

```tsx
export function SiteName() {
  return <span>{import.meta.env.VITE_SITE_NAME}</span>
}
```

Restart npm run dev or pnpm dev after changing .env.

For production, add VITE_SITE_NAME to .env.production using the same command with -f .env.production. Follow [Build-time configuration](/docs/tanstack-start/build-time/) to decrypt it before Vite builds.

VITE_ values are embedded in browser code. Encryption protects the committed file, but visitors can read the built values. Keep credentials unprefixed and inside server functions. See [TanStack Start environment variables](https://tanstack.com/start/latest/docs/framework/react/guide/environment-variables).

