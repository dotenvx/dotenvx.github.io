---
layout: docs-quickstart
title: "Node.js"
social_title: "Encrypt a .env file in Node.js"
description: "Encrypt a .env file in Node.js with the Dotenvx SDK, commit it safely, and load its secrets at runtime."
icon: nodejs
permalink: /docs/nodejs/
redirect_from:
  - /docs/secrets-in-nodejs/
  - /docs/secrets-in-nodejs
install_lede: "Get the Dotenvx Node.js SDK."
inject_lede: "Then inject your encrypted secrets at runtime."
install_copy: "npm install @dotenvx/dotenvx"
encrypt_copy: "npx dotenvx encrypt"
inject_copy: |
  require('@dotenvx/dotenvx').config()

  console.log(`HELLO: ${process.env.HELLO}`)
install: |
  $ npm install @dotenvx/dotenvx
encrypt: |
  $ npx dotenvx encrypt
inject: |
  require('@dotenvx/dotenvx').config()

  console.log(`HELLO: ${process.env.HELLO}`)
---

