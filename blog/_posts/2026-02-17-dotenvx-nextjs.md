---
layout: blog
author: "Tony Vantur"
title: "Setting Up dotenvx with Next.js"
image: "/assets/img/blog/blog-12.png"
excerpt: "Use the canonical @dotenvx/next-env setup for Next.js, locally and on Vercel."
---

<aside aria-labelledby="nextjs-update-warning">
  <h2 id="nextjs-update-warning">⚠️ Use the new Next.js approach</h2>
  <p><strong>This article's original setup has been superseded.</strong> Use <code>@dotenvx/next-env</code> for Next.js, including apps deployed on Vercel. It replaces the earlier CLI wrapper and instrumentation approach.</p>
  <p><a href="/docs/nextjs/">Follow the current Next.js setup →</a></p>
</aside>

*By [Tony Vantur](https://tonyvantur.com)*

Dotenvx encrypts your `.env` files so you can commit them to git. Your app reads decrypted values through `process.env`, while the private decryption keys stay outside your repository.

## Set up Next.js

Follow the [canonical Next.js guide](/docs/nextjs/) to install `@dotenvx/dotenvx` and `@dotenvx/next-env`, add the `@next/env` override, and encrypt your `.env` file. The guide includes the current configuration and troubleshooting steps.

Use your normal Next.js scripts (`next dev`, `next build`, and `next start`) and continue reading variables with `process.env`.

## Deploy on Vercel

Use the same [canonical Next.js integration](/docs/nextjs/) on Vercel. Commit encrypted environment files, keep `.env.keys` out of deployment uploads, and configure the matching private keys in Vercel.

Configure keys for each Vercel environment you deploy to. Preview builds also use `NODE_ENV=production`, so Vercel's Preview scope does not automatically select a different Next.js env file.

## Migrating from the earlier instructions

After applying the canonical setup:

- Remove `dotenvx run --` wrappers from your Next.js scripts.
- Remove instrumentation code added solely to call `dotenvx.config()`. Keep instrumentation used for other purposes.
- Replace any `dotenvx.get` calls introduced by the old Vercel guide with `process.env` reads.
- Keep your encrypted env files and configure their matching decryption keys on Vercel, then redeploy.

## Resources

- [Next.js guide](/docs/nextjs/) — Canonical integration with `@dotenvx/next-env`
- [Dotenvx documentation](/docs) — CLI and SDK reference
