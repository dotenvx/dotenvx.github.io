---
doc_type: side-path
title: Seeing ciphertext only?
description: Check that Next.js is using the encrypted environment loader.
permalink: /docs/nextjs/encrypted-text/
markdown_url: /docs/nextjs/encrypted-text.md
parent_url: /docs/nextjs/#ship
parent_title: Next.js
side_path_kind: Troubleshooting
---

Next.js may still be using the original @next/env package, even after adding the override. Check which package is installed:

```console
$ npm ls @next/env
```
{: copy="npm ls @next/env" package-manager="npm"}

The output should show @next/env as an alias of @dotenvx/next-env. An original Next.js version followed by “overridden” does not mean the replacement was installed.

If the original package is still installed, stop the dev server with Ctrl+C. From your project directory, rebuild the dependency installation:

```console
$ rm -rf node_modules package-lock.json
$ npm install
$ npm ls @next/env
```
{: copy="rm -rf node_modules package-lock.json
npm install
npm ls @next/env" package-manager="npm"}

Confirm the alias now points to @dotenvx/next-env, then restart:

```console
$ npm run dev
```
{: copy="npm run dev" package-manager="npm"}

Refresh [/api/hello](http://localhost:3000/api/hello). Review the regenerated lockfile before committing, since reinstalling can update dependency versions.
