---
layout: docs-quickstart
title: "Cloudflare Workers"
social_title: "Encrypt a .env file in Cloudflare Workers"
description: "Encrypt a .env file in Cloudflare Workers with the Dotenvx Node.js SDK and load its secrets at runtime."
icon: cloudflare-workers
permalink: /docs/cloudflare-workers/
redirect_from:
  - /docs/secrets-in-cloudflare-workers/
  - /docs/secrets-in-cloudflare-workers
install_lede: "Get the Dotenvx Node.js SDK."
install_copy: "npm install @dotenvx/dotenvx"
install: |
  $ npm install @dotenvx/dotenvx
encrypt_lede: "Encrypt your `.env.txt` file. Use `.env.txt` so it can be included in the worker artifact deploy."
encrypt_copy: "npx dotenvx encrypt -f .env.txt"
encrypt: |
  $ npx dotenvx encrypt -f .env.txt
inject_lede: "Then inject your encrypted secrets at runtime."
inject_copy: |
  import envSrc from '../.env.txt'
  import dotenvx from '@dotenvx/dotenvx'

  const config = dotenvx.config({ envs: [{ type: 'env', value: envSrc, privateKeyName: 'DOTENV_PRIVATE_KEY' }] })
  const envx = config.parsed

  export default {
    async fetch(request, env, ctx) {
      return new Response(`Hello ${envx.HELLO}`)
    }
  }
inject: |
  import envSrc from '../.env.txt'
  import dotenvx from '@dotenvx/dotenvx'

  const config = dotenvx.config({ envs: [{ type: 'env', value: envSrc, privateKeyName: 'DOTENV_PRIVATE_KEY' }] })
  const envx = config.parsed

  export default {
    async fetch(request, env, ctx) {
      return new Response(`Hello ${envx.HELLO}`)
    }
  }
inject_after_copy: |
  "scripts": {
    "deploy": "wrangler deploy",
    "dev": "wrangler dev --var $(dotenvx keypair -f .env.txt --format=colon)",
    "start": "wrangler dev --var $(dotenvx keypair -f .env.txt --format=colon)",
    "test": "vitest"
  }
inject_after: |
  "scripts": {
    "deploy": "wrangler deploy",
    "dev": "wrangler dev --var $(dotenvx keypair -f .env.txt --format=colon)",
    "start": "wrangler dev --var $(dotenvx keypair -f .env.txt --format=colon)",
    "test": "vitest"
  }
---
