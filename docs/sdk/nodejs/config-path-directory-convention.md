---
layout: docs-cli
eyebrow: Node
eyebrow_href: /docs/sdk/nodejs/
title: "config(path: directory, convention: 'nextjs')"
description: Use a directory as the base for convention files.
permalink: /docs/sdk/nodejs/config-path-directory-convention/
redirect_from:
  - /docs/sdk/config-path-directory-convention
  - /docs/sdk/config-path-directory-convention/
  - /docs/advanced/config-path-directory-convention
  - /docs/advanced/config-path-directory-convention/
  - /docs/ref/sdk/config-path-directory-convention
  - /docs/ref/sdk/config-path-directory-convention/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: SDKs
    href: /docs/sdk
  - label: Node
    href: /docs/sdk/nodejs
  - label: config
    href: /docs/sdk/nodejs/config/
---


This is useful when loading a workspace's env files from a monorepo root.

```javascript
// index.js
require('@dotenvx/dotenvx').config({
  path: 'apps/web',
  convention: 'nextjs'
})
```

The directory becomes the base for every file in the convention:

```text
apps/web/.env.development.local
apps/web/.env.local
apps/web/.env.development
apps/web/.env
```

Without a convention, a directory path loads the `.env` inside it:

```javascript
require('@dotenvx/dotenvx').config({
  path: 'apps/web'
})
```
