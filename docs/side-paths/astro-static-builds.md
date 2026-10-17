---
layout: docs-side-path
title: Static builds
description: Load secrets while building a static Astro site.
permalink: /docs/astro/static-builds/
markdown_url: /docs/astro/static-builds.md
parent_url: /docs/astro/#ship
parent_title: Astro
side_path_kind: Alternative
---

A static site uses secrets during the build, such as a token for fetching content from a CMS. The deployed site serves generated files and has no server process to decrypt secrets.

## Use static output

Set output to static and remove the Node adapter from astro.config.mjs. Keep your other settings and integrations:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
});
```

The main guide's index.astro example also works here. Its frontmatter runs at build time, so Hello Production becomes part of the generated HTML. Use real secrets only to perform server-side work; do not render them into the output.

## Load secrets for the build

Follow [Production](/docs/astro/#production) to create and encrypt .env.production. For an Enclaved Key, select the service and resource that runs your build.

Use these scripts, keeping your other scripts and removing the Node server start script:

```json
{
  "scripts": {
    "dev": "dotenvx run -- astro dev",
    "build": "dotenvx run -f .env.production --strict -- astro build",
    "preview": "astro preview"
  }
}
```
{: label="package.json"}

Run the build in the environment with access to the production key:

```console
$ npm run build
```
{: copy="npm run build" package-manager="npm"}

```console
$ pnpm build
```
{: copy="pnpm build" package-manager="pnpm"}

For a local build, use the [private key alternative](/docs/astro/deploy-private-key/) and provide DOTENV_PRIVATE_KEY_PRODUCTION to your local build environment.

## Deploy

Publish the dist directory to your static host. Only the build needs the key; do not include .env.production or .env.keys in the published files.

Rebuild when secrets or fetched content change. See [Astro's deployment guide](https://docs.astro.build/en/guides/deploy/) for hosting options.
