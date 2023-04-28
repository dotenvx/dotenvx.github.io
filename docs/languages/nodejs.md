---
layout: docs
section: "Language Guides"
title: "NodeJS"
description: Load environment variables from encrypted .env.vault files, with NodeJS 🚀.
---

## 🌱 Install

```ruby
# install locally (recommended)
npm install dotenv --save
```

## 🏗️ Usage (.env)

Create a `.env` file in the root of your project:

```shell
S3_BUCKET="YOURS3BUCKET"
SECRET_KEY="YOURSECRETKEYGOESHERE"
```

As early as possible in your application, import and configure dotenv:

```javascript
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working
```

.. or using ES6?

```javascript
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from 'express'
```

That's it. `process.env` now has the keys and values you defined in your `.env` file:

```javascript
require('dotenv').config()

...

s3.getBucketCors({Bucket: process.env.S3_BUCKET}, function(err, data) {})
```

## 🚀 Deploying (.env.vault)

Encrypt your environment variables by doing:

```shell
npx dotenv-vault local build
```

This will create an encrypted `.env.vault` file along with a `.env.keys` file containing the encryption keys. Set the `DOTENV_KEY` environment variable by copying and pasting the key value from the `.env.keys` file onto your server or cloud provider. For example in heroku:

```shell
heroku config:set DOTENV_KEY=<key string from .env.keys>
```

Commit your .env.vault file safely to code and deploy. Your .env.vault fill be decrypted on boot, it’s environment variables injected, and your app work as expected.

## 🌴 Manage Multiple Environments

You have two options for managing multiple environments - locally managed or vault managed - both use <a href="https://github.com/dotenv-org/dotenv-vault">dotenv-vault</a>.

Locally managed never makes a remote API call. It is completely managed on your machine. Vault managed adds conveniences like backing up your .env file, secure sharing across your team, access permissions, and version history. Choose what works best for you.

#### 💻 Locally Managed

Create a `.env.production` file in the root of your project and put your production values there.

```
# .env.production
S3_BUCKET="PRODUCTION_S3BUCKET"
SECRET_KEY="PRODUCTION_SECRETKEYGOESHERE"
```

Rebuild your `.env.vault` file.

```
$ npx dotenv-vault local build
```

Check your `.env.keys` file. There is a production `DOTENV_KEY` that coincides with the additional `DOTENV_VAULT_PRODUCTION` cipher in your `.env.vault` file.

Set the production `DOTENV_KEY` on your server, recommit your `.env.vault` file to code, and deploy. That's it!

#### 🔐 Vault Managed

Sync your .env file. Run the push command and follow the instructions. [learn more](/docs/sync/quickstart)

```
$ npx dotenv-vault push
```

Manage multiple environments with the included UI. [learn more](/docs/tutorials/environments)

```
$ npx dotenv-vault open
```

Build your `.env.vault` file with multiple environments.

```
$ npx dotenv-vault build
```

Access your `DOTENV_KEY`.

```
$ npx dotenv-vault keys
```

Set the production `DOTENV_KEY` on your server, recommit your `.env.vault` file to code, and deploy. That's it!

## ❓ FAQ

#### What happens if `DOTENV_KEY` is not set?

It gracefully falls back to loading from your `.env` file. This is the default for development so that you can focus on editing your `.env` file and save the `build` command until you are ready to deploy those environment variables changes.

#### Should I commit my `.env` file?

No. We **strongly** recommend against committing your `.env` file to version control. It should only include environment-specific values such as database passwords or API keys. Your production database should have a different password than your development database.

#### Should I commit my `.env.vault` file?

Yes. It is safe and recommended to do so. It contains your encrypted envs, and your vault identifier.

#### Can I share the `DOTENV_KEY`?

No. It is the key that unlocks your encrypted environment variables. Be very careful who you share this key with. Do not let it leak.