---
title: 'config({ path: ... })'
description: Choose files, file URLs, arrays, or a directory.
permalink: "/docs/sdk/nodejs/config-path/"
redirect_from:
- "/docs/sdk/config-path"
- "/docs/sdk/config-path/"
- "/docs/advanced/config-path"
- "/docs/advanced/config-path/"
- "/docs/ref/sdk/config-path"
- "/docs/ref/sdk/config-path/"
doc_type: sdk
command: 'dotenvx.config({ path: [''.env.local'', ''.env''] })'
command_language: javascript
eyebrow: Node.js config
eyebrow_href: "/docs/sdk/nodejs/config/"
---

Earlier files take precedence unless overload is enabled. A directory selects its .env file, or the files for the selected convention.

```javascript
const dotenvx = require('@dotenvx/dotenvx')
dotenvx.config({ path: ['.env.local', '.env'] })
```
