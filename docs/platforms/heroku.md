---
title: Heroku
description: Use dotenvx with Heroku.
permalink: /docs/platforms/heroku/
layout: docs-markdown
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

Install dotenvx via the [dotenvx buildpack](https://github.com/dotenvx/heroku-buildpack-dotenvx).

```bash
heroku buildpacks:add https://github.com/dotenvx/heroku-buildpack-dotenvx
```

Update your `Procfile` to use `dotenvx`.

```yaml
# Procfile
web: dotenvx run -- node index.js
```
{: copy="false"}

## Add production environment

```dotenv
# .env.production
HELLO="production"
```
{: copy="false"}

## Encrypt production

```console
$ dotenvx encrypt -f .env.production
```
{: copy="dotenvx encrypt -f .env.production"}

Commit `.env.production`. Do not commit `.env.keys`. Keep private keys somewhere safe like 1Password or [Armor ⛨](https://dotenvx.com/armor).

## Set decryption key

Set `DOTENV_PRIVATE_KEY` on Heroku to the production key from `.env.keys`, and set `DOTENV_FILE` to `.env.production`.

```bash
heroku config:set DOTENV_PRIVATE_KEY='your-private-key' DOTENV_FILE='.env.production'
git push heroku
```
{: copy="false"}

Your app restarts and env is injected from the encrypted `.env.production` file.
