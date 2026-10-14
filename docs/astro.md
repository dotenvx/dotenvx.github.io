---
layout: docs-markdown
title: "Astro"
social_title: "Encrypt a .env file in Astro"
description: "Encrypt a .env file in Astro with the Dotenvx Node.js SDK, commit it safely, and load its secrets at runtime."
icon: astro
permalink: /docs/astro/
redirect_from:
  - /docs/secrets-in-astro/
  - /docs/secrets-in-astro
  - /docs/frameworks/astro
  - /docs/frameworks/astro/
quickstart_pager: true
---

## Install

Get the Dotenvx Node.js SDK.

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx"}

## Encrypt

Encrypt your .env file.

```console
$ npx dotenvx encrypt
```
{: copy="npx dotenvx encrypt"}

## Inject

Preface Astro scripts with `dotenvx run --` and read your env values in Astro.

```json
{
  "scripts": {
    "dev": "dotenvx run -- astro dev",
    "build": "dotenvx run -- astro build",
    "preview": "dotenvx run -- astro preview"
  }
}
```

```javascript
export async function GET() {
  return new Response(
    JSON.stringify({
      HELLO: process.env.HELLO,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
```
