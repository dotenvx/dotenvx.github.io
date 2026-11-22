---
title: Node.js
description: Load encrypted environment values with the Node.js SDK.
permalink: "/docs/sdk/nodejs/"
icon: nodejs
---

## Install

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx"}

## Usage

```javascript
const dotenvx = require('@dotenvx/dotenvx')
const result = dotenvx.config()
console.log(process.env.HELLO)
```

ES modules support named and default imports:

```javascript
import dotenvx, { config, parse, get, getSync } from '@dotenvx/dotenvx'
config()
```

## Methods

- [config](/docs/sdk/nodejs/config/)
- [parse](/docs/sdk/nodejs/parse/)
- [get](/docs/sdk/nodejs/get/)
- [getSync](/docs/sdk/nodejs/get-sync/)

[Preload](/docs/sdk/nodejs/preload/) loads before application modules execute.

The package includes the native SDK and a matching default Rust CLI through platform dependencies. Keep optional dependencies enabled. The CLI launcher prefers an installed native Dotenvx binary on PATH, then uses the packaged CLI. DOTENVX_CLI can select an explicit executable.

Local key files and matching environment private keys work directly. Stored-key custody delegates to a compatible CLI with sdk and the required provider feature. SDK loading does not automatically send Armor activity events.

Use [dotenvx set](/docs/cli/set/) to update env files. See the [Node.js quickstart](/docs/nodejs/) for a full walkthrough.
