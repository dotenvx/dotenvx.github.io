---
layout: docs-quickstart
title: "Next.js"
social_title: "Encrypt a .env file in Next.js"
description: "Encrypt a .env file in Next.js with Dotenvx, commit it safely, and load its secrets at runtime."
icon: nextjs
permalink: /docs/nextjs/
redirect_from:
  - /docs/platforms/vercel
  - /docs/platforms/vercel/
  - /docs/frameworks/next
  - /docs/frameworks/next/
  - /docs/secrets-in-nextjs
  - /docs/secrets-in-nextjs/
install_lede: "Get the Dotenvx Node.js SDK and [`@dotenvx/next-env`](https://www.npmjs.com/package/@dotenvx/next-env)."
install_copy: |
  npm install @dotenvx/dotenvx
  npm install @dotenvx/next-env
install: |
  $ npm install @dotenvx/dotenvx
  $ npm install @dotenvx/next-env
install_after_lede: "Override `@next/env` in your `package.json`, then run `npm install` again to apply the override."
install_after_copy: |
  {
    "overrides": {
      "@next/env": "npm:@dotenvx/next-env"
    }
  }
install_after: |
  {
    ...
    "overrides": {
      "@next/env": "npm:@dotenvx/next-env"
    }
  }
encrypt_after_lede: "Commit the encrypted `.env` file. Keep `.env.keys` out of git and deployment uploads; it contains your private decryption key."
encrypt_copy: "npx dotenvx encrypt"
encrypt: |
  $ npx dotenvx encrypt
inject_lede: "Your encrypted secrets are automatically injected and readable through `process.env` in Next.js. Use your normal `next dev`, `next build`, and `next start` commands."
inject_after_lede: "This is the canonical Next.js setup, including apps hosted on Vercel."
inject_copy: |
  import { NextResponse } from 'next/server'

  export async function GET() {
    return NextResponse.json({
      HELLO: process.env.HELLO,
    })
  }
inject: |
  import { NextResponse } from 'next/server'

  export async function GET() {
    return NextResponse.json({
      HELLO: process.env.HELLO,
    })
  }
---

<div class="design-list">
  <p class="design-list-title">Troubleshooting</p>
  <p class="design-paragraph">Not taking effect? NPM can be inconsistent with overrides. Delete <code class="design-code">package-lock.json</code>, <code class="design-code">node_modules</code>, and reinstall.</p>
  {% capture nextjs_reinstall %}
rm -rf node_modules package-lock.json
npm install
  {% endcapture %}
  {% include components/design-codeblock.html value=nextjs_reinstall copy_text="rm -rf node_modules package-lock.json
npm install" %}
</div>
