---
title: Heroku
description: Use dotenvx with Heroku.
permalink: /docs/platforms/heroku/
icon: "heroku"
---

Find [code examples for this guide](https://github.com/dotenvx/examples/tree/main/platforms/heroku) on GitHub.

## Initial setup

Add a `Procfile` and a simple Hello World app, then push to Heroku.

```yaml
# Procfile
web: node index.js
```
{: copy="false"}

```javascript
// index.js
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`Hello ${process.env.HELLO || ''}`)
})

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`)
})
```
{: copy="false"}

## Run dotenvx

Install Dotenvx as an application dependency so Heroku's Node.js build installs the native CLI for its platform:

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx"}

Add the start script to package.json, keeping your other scripts:

```json
{
  "scripts": {
    "start": "dotenvx run -f .env.production --strict -- node index.js"
  }
}
```
{: label="package.json"}

Update your Procfile:

```text
web: npm start
```
{: label="Procfile"}

## Add production environment

```dotenv
# .env.production
HELLO="production"
```
{: copy="false"}

## Encrypt production

```console
$ npx dotenvx encrypt -f .env.production
```
{: copy="npx dotenvx encrypt -f .env.production"}

Commit `.env.production`. Do not commit `.env.keys`. Keep private keys somewhere safe like 1Password or [Armor ⛨](/armor).

## Set decryption key

Set `DOTENV_PRIVATE_KEY_PRODUCTION` on Heroku to the production key from `.env.keys`, and set `DOTENV_FILE` to `.env.production`.

```console
$ heroku config:set DOTENV_PRIVATE_KEY_PRODUCTION='your-private-key' DOTENV_FILE='.env.production'
$ git push heroku
```
{: copy="false"}

Your app restarts and env is injected from the encrypted `.env.production` file.
