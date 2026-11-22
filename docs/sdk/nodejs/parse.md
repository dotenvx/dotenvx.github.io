---
title: parse
description: Parse source text without files, policy, custody, or environment mutation.
permalink: "/docs/sdk/nodejs/parse/"
redirect_from:
- "/docs/sdk/parse"
- "/docs/sdk/parse/"
- "/docs/advanced/parse"
- "/docs/advanced/parse/"
- "/docs/ref/sdk/parse"
- "/docs/ref/sdk/parse/"
doc_type: sdk
command: dotenvx.parse(source, options)
command_language: javascript
eyebrow: Node.js
eyebrow_href: "/docs/sdk/nodejs/"
---

Parse, expand, and decrypt a string or Buffer without reading files, applying Dotenv.toml, or looking up custody. Returns a values object. The supplied processEnv is used for resolution but is not mutated.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
const parsed = dotenvx.parse(Buffer.from('HELLO=World'))
console.log(parsed.HELLO)
```

## Options

| Option | Purpose |
| --- | --- |
| [processEnv](/docs/sdk/nodejs/parse-process-env/) | Environment for expansion and key lookup; defaults to process.env. |
| [privateKey](/docs/sdk/nodejs/parse-private-key/) | Explicit decryption key. |
| [overload](/docs/sdk/nodejs/config-overload/) | Allow loaded values to replace existing environment values. |
| [override](/docs/sdk/nodejs/config-override/) | Use the override alias for overload. |
| [strict](/docs/sdk/nodejs/config-strict/) | Throw on strict loading or parsing errors. |
| [ignore](/docs/sdk/nodejs/config-ignore/) | Ignore diagnostic codes, rather than filenames. |
| [logLevel](/docs/sdk/nodejs/config-log-level/) | Control SDK diagnostic output. |
