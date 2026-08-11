---
layout: docs-quickstart
title: "Bun"
social_title: "Encrypt a .env file in Bun"
description: "Encrypt a .env file in Bun with the Dotenvx Node.js SDK, commit it safely, and load its secrets at runtime."
icon: bun
permalink: /docs/bun/
redirect_from:
  - /docs/secrets-in-bun/
  - /docs/secrets-in-bun
install_lede: "Install the Dotenvx Node.js SDK with Bun."
inject_lede: "Then inject your encrypted secrets at runtime."
install_copy: "bun add @dotenvx/dotenvx"
inject_copy: |
  require('@dotenvx/dotenvx').config()

  console.log(`HELLO: ${process.env.HELLO}`)
install: |
  $ bun add @dotenvx/dotenvx
encrypt_copy: "bunx dotenvx encrypt"
encrypt: |
  $ bunx dotenvx encrypt
inject: |
  require('@dotenvx/dotenvx').config()

  console.log(`HELLO: ${process.env.HELLO}`)
---

