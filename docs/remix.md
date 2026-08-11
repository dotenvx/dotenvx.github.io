---
layout: docs-quickstart
title: "Remix"
social_title: "Encrypt a .env file in Remix"
description: "Encrypt a .env file in Remix with the Dotenvx Node.js SDK, commit it safely, and load its secrets at runtime."
icon: remix
permalink: /docs/remix/
redirect_from:
  - /docs/frameworks/remix
  - /docs/frameworks/remix/
install_lede: "Get the Dotenvx Node.js SDK."
install_copy: "npm install @dotenvx/dotenvx"
install: |
  $ npm install @dotenvx/dotenvx
encrypt_copy: "npx dotenvx encrypt"
encrypt: |
  $ npx dotenvx encrypt
inject_lede: "Preface Remix scripts with `dotenvx run --` and read your env values in a Remix loader."
inject_copy: |
  {
    "scripts": {
      "build": "dotenvx run -- remix build",
      "dev": "dotenvx run -- remix dev --manual",
      "start": "dotenvx run -- remix-serve ./build/index.js"
    }
  }
inject: |
  {
    "scripts": {
      "build": "dotenvx run -- remix build",
      "dev": "dotenvx run -- remix dev --manual",
      "start": "dotenvx run -- remix-serve ./build/index.js"
    }
  }
inject_after_copy: |
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
inject_after: |
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
---
