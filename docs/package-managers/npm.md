---
title: npm
description: Use dotenvx with npm.
permalink: /docs/package-managers/npm/
layout: radar
---

{% include components/docs-hero.html
  eyebrow="Docs"
  title="npm"
  description="Use dotenvx with npm."
  mark="npm"
%}

<div class="armor-shell">
<div class="design-content-width">
<section class="docs-quickstart-body" markdown="block">
{% capture step_content %}

Find [code examples on GitHub](https://github.com/dotenvx/examples/tree/main/package-managers/npm) for these framework guides.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Astro

Use dotenvx (as an npm module) with [astro.js](https://github.com/withastro/astro).

Create an Astro application.

```bash
npm create astro@latest
```

Install `dotenvx` as an npm module.

```bash
npm install @dotenvx/dotenvx --save
```

Edit `src/pages/index.astro` to include `process.env.HELLO`.

```html
---
---

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        <meta name="generator" content={Astro.generator} />
        <title>Astro</title>
    </head>
    <body>
        <h1>Hello {import.meta.env.HELLO}</h1>
    </body>
</html>
```
{: copy="false"}

Preload Astro scripts with dotenvx. This injects environment variables ahead of Astro.

```json
...
"scripts": {
  "dev": "dotenvx run -- astro dev",
  "start": "dotenvx run -- astro dev",
  "build": "astro check && dotenvx run -- astro build",
  "preview": "dotenvx run -- astro preview",
  "astro": "astro"
},
```
{: copy="false"}

Run it.

```console
$ npm run dev

> dev
> dotenvx run -- astro dev

⟐ injected env (1) from .env
┃ Local    http://localhost:4321/
```
{: copy="npm run dev"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Express

Use dotenvx (as an npm module) with [express.js](https://github.com/expressjs/express).

```bash
npm install express @dotenvx/dotenvx --save
```

Create a simple Hello World application.

```javascript
// index.js
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`Hello ${process.env.HELLO || ''}`)
})

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`)
})
```
{: copy="false"}

Add `dotenvx run --` to your start script.

```json
{
  "dependencies": {
    "@dotenvx/dotenvx": "^1.48.4",
    "express": "^4.18.2"
  },
  "scripts": {
    "start": "dotenvx run -- node index.js"
  }
}
```
{: copy="false"}

Run it.

```console
$ npm start

> start
> dotenvx run -- node index.js

⟐ injected env (1) from .env
Server running on port:3000
```
{: copy="npm start"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Next.js

Follow the [canonical Next.js guide](/docs/nextjs/) to use `@dotenvx/next-env` with an npm override for `@next/env`. This setup works locally and for Next.js apps on Vercel.

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}

{% capture step_content %}

## Remix

Use dotenvx (as an npm module) with [remix.js](https://github.com/remix-run/remix).

```bash
npx create-remix@latest
```

```bash
npm install @dotenvx/dotenvx --save
```

Edit `app/routes/_index.tsx` to include `process.env.HELLO` using a Remix loader.

```tsx
import type { V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  return json({
    ENV: {
      HELLO: process.env.HELLO,
    },
  });
}

export default function Index() {
  const data = useLoaderData()

  return (
    <div>
      Hello {data.ENV.HELLO}.
    </div>
  );
}
```
{: copy="false"}

Preload Remix scripts with dotenvx.

```json
...
"scripts": {
  "build": "dotenvx run -- remix build",
  "dev": "dotenvx run -- remix dev --manual",
  "lint": "eslint --ignore-path .gitignore --cache --cache-location ./node_modules/.cache/eslint .",
  "start": "dotenvx run -- remix-serve ./build/index.js",
  "typecheck": "tsc"
},
```
{: copy="false"}

Run it.

```console
$ npm run dev

> dev
> dotenvx run -- remix dev --manual

⟐ injected env (1) from .env
[remix-serve] http://localhost:3000
```
{: copy="npm run dev"}

{% endcapture %}
{% include components/design-step.html content=step_content markdown=true %}
</section>
</div>
</div>
