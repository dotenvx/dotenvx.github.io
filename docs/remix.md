---
layout: docs-markdown
title: "Remix"
social_title: "Encrypt a .env file in Remix"
description: "Encrypt a .env file in Remix with the Dotenvx Node.js SDK, commit it safely, and load its secrets at runtime."
icon: remix
permalink: /docs/remix/
redirect_from:
  - /docs/frameworks/remix
  - /docs/frameworks/remix/
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

Preface Remix scripts with `dotenvx run --` and read your env values in a Remix loader.

```json
{
  "scripts": {
    "build": "dotenvx run -- remix build",
    "dev": "dotenvx run -- remix dev --manual",
    "start": "dotenvx run -- remix-serve ./build/index.js"
  }
}
```

```tsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

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
