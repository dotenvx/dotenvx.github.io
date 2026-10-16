---
layout: docs-side-path
title: Seeing encrypted:ciphertext only?
description: Check that Next.js is using the encrypted environment loader.
permalink: /docs/nextjs/encrypted-text/
parent_url: /docs/nextjs/#ship
parent_title: Next.js
side_path_kind: Troubleshooting
---

Next.js may still be using the original @next/env package, even after adding the override. Check which package is installed:

```console
$ npm ls @next/env
```
{: copy="npm ls @next/env" package-manager="npm"}

```console
$ pnpm why @next/env
```
{: copy="pnpm why @next/env" package-manager="pnpm"}

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

```console
$ rm -rf node_modules pnpm-lock.yaml
$ pnpm install
$ pnpm why @next/env
```
{: copy="rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm why @next/env" package-manager="pnpm"}

Confirm the alias now points to @dotenvx/next-env, then restart:

```console
$ npm run dev
```
{: copy="npm run dev" package-manager="npm"}

```console
$ pnpm dev
```
{: copy="pnpm dev" package-manager="pnpm"}

Refresh [/api/hello](http://localhost:3000/api/hello). Review the regenerated lockfile before committing, since reinstalling can update dependency versions.
