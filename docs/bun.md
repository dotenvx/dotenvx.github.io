---
layout: docs-markdown
title: "Bun"
social_title: "Encrypt a .env file in Bun"
description: "Encrypt a .env file in Bun with the Dotenvx Node.js SDK, commit it safely, and load its secrets at runtime."
icon: bun
permalink: /docs/bun/
redirect_from:
  - /docs/secrets-in-bun/
  - /docs/secrets-in-bun
quickstart_pager: true
---

## Install

Install the Dotenvx Node.js SDK with Bun.

```console
$ bun add @dotenvx/dotenvx
```
{: copy="bun add @dotenvx/dotenvx"}

## Encrypt

Encrypt your .env file.

```console
$ bunx dotenvx encrypt
```
{: copy="bunx dotenvx encrypt"}

## Inject

Then inject your encrypted secrets at runtime.

```javascript
require('@dotenvx/dotenvx').config()

console.log(`HELLO: ${process.env.HELLO}`)
```
