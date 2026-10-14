---
layout: docs-markdown
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

Then inject your encrypted secrets at runtime.

```javascript
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
```
