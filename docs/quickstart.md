---
layout: docs
section: Overview
title: "Quickstart ⚡️"
description: The complete quickstart guide to manage your secrets with dotenv-vault. Learn and understand how to use dotenv-vault with your application – in about 5 minutes.
---

In this guide, we'll deploy an application with secrets to Heroku. We'll create the app, load and sync its secrets, and deploy it using the .env.vault file. A quick skim over this tutorial, and you'll understand all the foundational concepts of using dotenv-vault.

We're using Heroku for this quickstart because it is the easiest to demo (in the least amount of your time), but any hosting platform will work.

## 🌱 Create our app

We'll create a Node application for this guide, but you can follow along with your own application in any language or framework.

Set up the app's containing folder.

```
$ mkdir hello-world
$ cd hello-world
```

Create the file that will house the code.

```
$ touch index.js
$ nano index.js
```

Write the code to build our hello-world web server. [source](https://nodejs.org/en/docs/guides/getting-started-guide)

```javascript
// index.js
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```

Run our web server.

```
$ node index.js
```

Visit [localhost:3000](http://localhost:3000) and you will see "Hello World".

{% include helpers/screenshot.html url="https://res.cloudinary.com/dotenv-org/image/upload/c_scale,w_1200/v1680360955/Screenshot_2023-04-01_at_7.55.10_AM_wyu6en.png" %}

Next, let's use [dotenv](https://github.com/motdotla/dotenv) to customize the port and greeting.

## 🟨 Require dotenv

We'll add dotenv to our app next, but if your app already has dotenv you can skip ahead to [Sync .env file](#sync-env-file).

Install dotenv. [source](https://github.com/motdotla/dotenv#install)

```
# install locally (recommended)
$ npm install dotenv --save
```

Create a `.env` file in the root of our project:

```
PORT="3000"
GREETING="Bonjour World"
```

Modify index.js to use `require('dotenv').config()` and `process.env` environment variables.

```javascript
// index.js
require('dotenv').config()

const http = require('http')

const hostname = '127.0.0.1'
const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(process.env.GREETING)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```

Restart our web server.

```
$ node index.js
```

{% include helpers/screenshot.html url="https://res.cloudinary.com/dotenv-org/image/upload/c_scale,w_1200/v1680362148/Screenshot_2023-04-01_at_8.15.30_AM_tjdju0.png" %}

Now it says 'Bonjour World'. Cool! We're ready to backup and sync our `.env` file.

## 🏆 Sync .env file

Once we have a .env file, we are ready to start syncing it with [dotenv-vault](https://github.com/dotenv-org/dotenv-vault#usage). For this quickstart we'll jus demonstrate doing this for ourselves but you can also sync across your team and your other machines.

Usage is similar to git. Run the command:

```
$ npx dotenv-vault new
```

Follow those instructions and then run:

```
$ npx dotenv-vault login
```

Then run push and pull:

```
$ npx dotenv-vault push
$ npx dotenv-vault pull
```

That's it! We synced our .env file.

{% include helpers/videoplayer.html mp4="https://res.cloudinary.com/dotenv-org/video/upload/v1680364471/dotenv-vault-sync-video_yutprj.mp4" webm="https://res.cloudinary.com/dotenv-org/video/upload/v1680364471/dotenv-vault-sync-video_yutprj.webm" poster="https://res.cloudinary.com/dotenv-org/video/upload/c_scale,dl_2000,vs_2s,w_500,e_loop/v1680364471/dotenv-vault-sync-video_yutprj.gif" %}

## 🌴 Manage environments

After we pushed our .env file, we can manage our secrets across multiple environments. Let's open the production environment to view and edit its environment variables. There is a fully built-in UI with dotenv-vault.

```
$ npx dotenv-vault open production
```

In the UI, we are going to delete the `PORT` environment variable. We will rely on Heroku to fill that on deploy. We'll edit the `GREETING` environment variable to "Hello Production" so that we can recognize it on deploy.

{% include helpers/videoplayer.html mp4="https://res.cloudinary.com/dotenv-org/video/upload/v1680366837/npx-dotenv-vault-open_h70feb.mp4" webm="https://res.cloudinary.com/dotenv-org/video/upload/v1680366837/npx-dotenv-vault-open_h70feb.webm" poster="https://res.cloudinary.com/dotenv-org/video/upload/c_scale,dl_2000,vs_2s,w_800,e_loop/v1680366837/npx-dotenv-vault-open_h70feb.gif" %}

## 🚀 Deploy .env.vault

Build our project's encrypted .env.vault file. It securely encrypts our secrets in a cloud-agnostic payload.

#### 🔒 Build encrypted .env.vault

```
$ npx dotenv-vault build
remote:   Securely building .env.vault... done
```

We then commit that safely to code.

```
$ git add .env.vault
$ git commit -am "Build encrypted .env.vault file for deploy"
```

#### 🔑 Set DOTENV_KEY

Let's fetch the production decryption key - the `DOTENV_KEY`.

```
$ npx dotenv-vault keys production
remote:   Listing .env.vault decryption keys... done
dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=production
```

Then let's set the `DOTENV_KEY` enviroment variable on Heroku.

```
$ heroku create
$ heroku config:set DOTENV_KEY='dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=production'
```

#### 🔐 Import dotenv-vault-core

We need to swap out `dotenv` for `dotenv-vault-core` so that we can decrypt the .env.vault payload on deploy. Install [dotenv-vault-core](https://github.com/dotenv-org/dotenv-vault-core).

```
$ npm install dotenv-vault-core --save
```

And replace `require('dotenv')` with `require('dotenv-vault-core')`

```
// index.js
require('dotenv-vault-core').config()
...
```

Also let's edit our `package.json` to have a start script so that Heroku can boot our application at runtime.

```json
{
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "dotenv": "^16.0.3",
    "dotenv-vault-core": "^0.7.0"
  }
}
```

#### 🟣 Deploy to Heroku

We're ready to deploy to heroku. Let's do it.

```
$ git push heroku
```

When the deploy completes, we'll see this line in the logs.

```
[dotenv-vault-core@0.7.0][INFO] Loading env from encrypted .env.vault
```

That's it! The `DOTENV_KEY` securely decrypts our .env.vault file at runtime and injects our secret environment variables – just in time.

This is safer than syncing our secrets to third-parties where they could leak. Plus we get a single source of truth. Make a change in the UI, run the build command, and redeploy. It's that simple to manage your secrets with dotenv-vault.

{% include helpers/videoplayer.html mp4="https://res.cloudinary.com/dotenv-org/video/upload/v1680372369/deploy-encrypted-vault_shdiav.mp4" webm="https://res.cloudinary.com/dotenv-org/video/upload/v1680372369/deploy-encrypted-vault_shdiav.webm" poster="https://res.cloudinary.com/dotenv-org/video/upload/c_scale,dl_2000,vs_2s,w_500,e_loop/v1680372369/deploy-encrypted-vault_shdiav.gif" %}