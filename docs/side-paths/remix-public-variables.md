---
layout: docs-side-path
title: Public browser variables
description: Return selected public values from a Remix loader.
permalink: /docs/remix/public-variables/
markdown_url: /docs/remix/public-variables.md
parent_url: /docs/remix/#ship
parent_title: Remix
side_path_kind: Alternative
---

Keep configuration on the server and return only the values the browser needs. Anything returned from a loader is public, regardless of its variable name or whether its .env file is encrypted.

## Add a public value

Add a site name to your encrypted .env file:

```console
$ npx dotenvx set SITE_NAME "My site"
```
{: copy="npx dotenvx set SITE_NAME \"My site\"" package-manager="npm"}

```console
$ pnpm exec dotenvx set SITE_NAME "My site"
```
{: copy="pnpm exec dotenvx set SITE_NAME \"My site\"" package-manager="pnpm"}

## Return it from a loader

Replace the demonstration route with an explicit selection of public values:

```tsx
// app/routes/_index.tsx
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader() {
  return json({ siteName: process.env.SITE_NAME });
}

export default function Index() {
  const { siteName } = useLoaderData<typeof loader>();
  return <h1>{siteName}</h1>;
}
```

Restart npm run dev or pnpm dev to load the updated .env file. The page displays My site.

For production, add SITE_NAME with the same set command and -f .env.production, then commit and deploy the encrypted file. Restart the server to load changes; this loader reads the value at runtime.

Never return all of process.env. Use real secrets to authenticate server-side requests and return only the data intended for the user. See [Remix's environment variable guide](https://v2.remix.run/docs/guides/envvars/) for sharing public configuration across routes.
