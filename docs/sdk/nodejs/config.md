---
title: config
description: Load resolved values into an environment object.
permalink: "/docs/sdk/nodejs/config/"
redirect_from:
- "/docs/sdk/config"
- "/docs/sdk/config/"
- "/docs/advanced/config"
- "/docs/advanced/config/"
- "/docs/ref/sdk/config"
- "/docs/ref/sdk/config/"
doc_type: sdk
command: dotenvx.config(options)
command_language: javascript
eyebrow: Node.js
eyebrow_href: "/docs/sdk/nodejs/"
---

Synchronously resolve files and populate process.env, or a supplied processEnv object. Returns { parsed, error? }. Existing values win unless overload or override is true. Fatal or strict errors throw before any resolved values are injected.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
const result = dotenvx.config()
console.log(result.parsed.HELLO)
```

## Options

| Option | Purpose |
| --- | --- |
| [path](/docs/sdk/nodejs/config-path/) | Choose files, file URLs, arrays, or a directory. |
| [envs](/docs/sdk/nodejs/config-envs/) | Resolve ordered file and inline sources. |
| [cwd](/docs/sdk/nodejs/config-cwd/) | Choose the base directory for relative paths. |
| [processEnv](/docs/sdk/nodejs/config-process-env/) | Choose the environment object to read and populate. |
| [overload](/docs/sdk/nodejs/config-overload/) | Allow loaded values to replace existing environment values. |
| [override](/docs/sdk/nodejs/config-override/) | Use the override alias for overload. |
| [strict](/docs/sdk/nodejs/config-strict/) | Throw on strict loading or parsing errors. |
| [ignore](/docs/sdk/nodejs/config-ignore/) | Ignore diagnostic codes, rather than filenames. |
| [envKeysFile](/docs/sdk/nodejs/config-env-keys-file/) | Choose files containing private keys. |
| [keyFiles](/docs/sdk/nodejs/config-key-files/) | Use the keyFiles alias for envKeysFile. |
| [convention](/docs/sdk/nodejs/config-convention/) | Load files using a naming convention. |
| [environment](/docs/sdk/nodejs/config-environment/) | Choose the environment for a naming convention. |
| [encoding](/docs/sdk/nodejs/config-encoding/) | Read UTF-8 environment files. |
| [quiet](/docs/sdk/nodejs/config-quiet/) | Suppress the injection summary. |
| [logLevel](/docs/sdk/nodejs/config-log-level/) | Control SDK diagnostic output. |
| [resolveReferences](/docs/sdk/nodejs/config-resolve-references/) | Opt in to resolving secret references. |
| [no1Password](/docs/sdk/nodejs/config-no-1password/) | Disable 1Password resolution for this call. |
| [noBitwarden](/docs/sdk/nodejs/config-no-bitwarden/) | Disable Bitwarden resolution for this call. |
| [noArmor](/docs/sdk/nodejs/config-no-armor/) | Disable Armor lookups for this call. |
| [noNative](/docs/sdk/nodejs/config-no-native/) | Disable OS secret-store custody for this call. |
| [token](/docs/sdk/nodejs/config-token/) | Supply an Armor token for delegated custody. |

Unknown option names and invalid option types throw TypeError.
