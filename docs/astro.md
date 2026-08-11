---
layout: docs-quickstart
title: "Astro"
social_title: "Encrypt a .env file in Astro"
description: "Encrypt a .env file in Astro with the Dotenvx Node.js SDK, commit it safely, and load its secrets at runtime."
icon: astro
permalink: /docs/astro/
redirect_from:
  - /docs/secrets-in-astro/
  - /docs/secrets-in-astro
install_lede: "Get the Dotenvx Node.js SDK."
install_copy: "npm install @dotenvx/dotenvx"
install: |
  $ npm install @dotenvx/dotenvx
encrypt_copy: "npx dotenvx encrypt"
encrypt: |
  $ npx dotenvx encrypt
inject_lede: "Preface Astro scripts with `dotenvx run --` and read your env values in Astro."
inject_copy: |
  {
    "scripts": {
      "dev": "dotenvx run -- astro dev",
      "build": "dotenvx run -- astro build",
      "preview": "dotenvx run -- astro preview"
    }
  }
inject: |
  {
    "scripts": {
      "dev": "dotenvx run -- astro dev",
      "build": "dotenvx run -- astro build",
      "preview": "dotenvx run -- astro preview"
    }
  }
inject_after_copy: |
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
inject_after: |
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
---
