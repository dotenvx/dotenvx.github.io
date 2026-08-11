---
layout: docs-quickstart
title: "Express"
social_title: "Encrypt a .env file in Express"
description: "Encrypt a .env file in Express with the Dotenvx Node.js SDK, commit it safely, and load its secrets at runtime."
icon: express
permalink: /docs/express/
redirect_from:
  - /docs/secrets-in-express/
  - /docs/secrets-in-express
  - /docs/frameworks/express
  - /docs/frameworks/express/
install_lede: "Get the Dotenvx Node.js SDK."
install_copy: "npm install @dotenvx/dotenvx"
install: |
  $ npm install @dotenvx/dotenvx
encrypt_copy: "npx dotenvx encrypt"
encrypt: |
  $ npx dotenvx encrypt
inject_lede: "Then inject your encrypted secrets at runtime."
inject_copy: |
  require('@dotenvx/dotenvx').config()
  const express = require('express')

  const app = express()
  app.use(express.json())

  app.get('/', (req, res) => {
    res.json({
      HELLO: process.env.HELLO
    })
  })

  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
inject: |
  require('@dotenvx/dotenvx').config()
  const express = require('express')

  const app = express()
  app.use(express.json())

  app.get('/', (req, res) => {
    res.json({
      HELLO: process.env.HELLO
    })
  })

  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
---
