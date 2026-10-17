---
layout: docs-side-path
title: Public browser variables
description: Expose public configuration to browser code with Astro.
permalink: /docs/astro/public-variables/
markdown_url: /docs/astro/public-variables.md
parent_url: /docs/astro/#ship
parent_title: Astro
side_path_kind: Alternative
---

Astro exposes variables prefixed with PUBLIC_ to browser code. Only use this prefix for values anyone can see, such as a site name or public API URL. Encryption protects the file in git; it does not make a browser variable private.

## Add a public value

Add an encrypted value to .env:

```console
$ npx dotenvx set PUBLIC_SITE_NAME "My site"
```
{: copy="npx dotenvx set PUBLIC_SITE_NAME \"My site\"" package-manager="npm"}

```console
$ pnpm exec dotenvx set PUBLIC_SITE_NAME "My site"
```
{: copy="pnpm exec dotenvx set PUBLIC_SITE_NAME \"My site\"" package-manager="pnpm"}

Read it in an Astro page's browser script:

```html
<script>
  document.title = import.meta.env.PUBLIC_SITE_NAME;
</script>
```

Restart npm run dev or pnpm dev after changing your environment file.

## Build for production

Add PUBLIC_SITE_NAME to .env.production with the same set command and the -f .env.production flag. Commit the encrypted file.

Public variables are included at build time. Update your build script:

```json
{
  "scripts": {
    "build": "dotenvx run -f .env.production --strict -- astro build"
  }
}
```
{: label="package.json"}

Give your build environment access to the production key. With an Enclaved Key, select the resource that runs the build when encrypting. Then run npm run build or pnpm build there.

Changing a public value requires a new build. The main guide's start script continues to load server secrets at runtime.

See [Astro's environment variable documentation](https://docs.astro.build/en/guides/environment-variables/) for more.
