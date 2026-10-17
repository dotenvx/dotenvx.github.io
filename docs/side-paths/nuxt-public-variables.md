---
layout: docs-side-path
title: Public browser variables
description: Expose configuration intended for the browser.
permalink: /docs/nuxt/public-variables/
markdown_url: /docs/nuxt/public-variables.md
parent_url: /docs/nuxt/#ship
parent_title: Nuxt
side_path_kind: Alternative
---

Declare browser-visible values under runtimeConfig.public, keeping hello private:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    hello: '',
    public: {
      siteName: ''
    }
  }
})
```

Add the matching NUXT_PUBLIC_SITE_NAME variable to your encrypted .env file:

```console
$ npx dotenvx set NUXT_PUBLIC_SITE_NAME "My app"
```
{: copy='npx dotenvx set NUXT_PUBLIC_SITE_NAME "My app"' package-manager="npm"}

```console
$ pnpm exec dotenvx set NUXT_PUBLIC_SITE_NAME "My app"
```
{: copy='pnpm exec dotenvx set NUXT_PUBLIC_SITE_NAME "My app"' package-manager="pnpm"}

Read it in a component:

{% raw %}
```vue
<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <h1>{{ config.public.siteName }}</h1>
</template>
```
{% endraw %}

Restart npm run dev or pnpm dev. For production, set NUXT_PUBLIC_SITE_NAME in .env.production too, using the same command with -f .env.production.

Encryption protects the committed file. Nuxt sends public runtime configuration to browsers, so only use this for public values. See [Nuxt runtime config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config).

