---
layout: blog
author: "Tony Vantur"
title: "Setting Up dotenvx with Next.js"
image: "/assets/img/blog/blog-12.png"
excerpt: "Stop Slacking secrets to your team. A step-by-step guide through the gotchas."
---

*By [Tony Vantur](https://tonyvantur.com)*

**If your team is still sharing `.env` values over Slack, this guide is for you.** **dotenvx** encrypts your `.env` files so you can commit them directly to git. Secrets travel with your code, versioned and reviewable, but unreadable without the private key.

The tool itself is great. Getting it running on Vercel serverless is not as straightforward as the docs suggest. This tutorial walks through the full setup, including the runtime gotcha that is not well-documented and will cost you time if you hit it unprepared.

By the end you will have: encrypted `.env` files committed to git, automatic decryption in both local dev and Vercel deployments, and separate keys for preview vs production environments.

## Why dotenvx

dotenvx is free, open source, and built by the creator of the original `dotenv` library. It replaces **dotenv-vault** (deprecated May 2024) with a simpler approach: instead of syncing secrets to a hosted service, it encrypts them in place using ECIES. The encrypted files live in your repo. You manage one private key per environment.

The benefits over the Slack-and-gitignore workflow:

- **Version-controlled secrets.** Changing a database URL shows up in your git diff. Rollbacks roll back secrets too.
- **Instant onboarding.** New teammates clone the repo and get all encrypted env files. Hand them the dev key and they are running.
- **Multi-environment by default.** Separate `.env`, `.env.production`, and `.env.staging` files, each with their own key pair.

Within a year of release, dotenvx crossed a million weekly npm installs, adopted by PayPal, NASA, Supabase, and AWS. It works. The setup on Vercel just needs a few extra steps.

## Step 1: Install dotenvx

Install it as a **dependency**, not a devDependency. This is important because it needs to be available at runtime in Vercel's serverless bundle.

```
npm install @dotenvx/dotenvx
```

## Step 2: Encrypt Your .env Files

Run `dotenvx encrypt` in your project root. This encrypts each value in your `.env` file individually and generates a key pair. The public key gets added as `DOTENV_PUBLIC_KEY` inside the `.env` file. The private key goes into a new file called `.env.keys` — hold onto this, you will need these keys in Step 5.

```
dotenvx encrypt
```

For a production env file:

```
dotenvx encrypt -f .env.production
```

Add `.env.keys` to your `.gitignore`. The encrypted `.env` and `.env.production` files should be committed — that is the whole point. But `.env.keys` holds the private decryption keys and must stay local.

## Step 3: Update Your Scripts

Wrap your dev and build commands with the dotenvx CLI so it decrypts before Next.js runs:

```json
{
  "scripts": {
    "dev": "dotenvx run -- next dev",
    "build": "dotenvx run -- next build"
  }
}
```

At this point, local dev and builds work. Client-side `NEXT_PUBLIC_*` variables get inlined at build time. If that is all you need, you could stop here.

But if you have server-side variables like `DATABASE_URL`, keep going. This is where it gets tricky.

## Step 4: Add the Instrumentation File

Here is the problem: Vercel serverless functions do not use `next start`. They invoke your route handlers directly, so the `dotenvx run` CLI wrapper is not present at runtime. Server-side `process.env` reads get nothing, and you see `ECONNREFUSED 127.0.0.1:5432` errors. The same issue applies to any serverless deployment target — Cloudflare Workers, AWS Lambda, etc. — anywhere the CLI wrapper is not invoked at runtime.

The fix is a Next.js instrumentation file. Since the encrypted `.env` files are committed to git, they are part of the deployment. You just need to decrypt them when the serverless function starts:

```typescript
// instrumentation.ts
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { config } = await import('@dotenvx/dotenvx');

    const vercelEnv = process.env.VERCEL_ENV;

    if (vercelEnv === 'production') {
      config({ path: ['.env.production', '.env'], overload: true });
    } else {
      config({ path: ['.env'], overload: true });
    }
  }
}
```

Notice this uses `VERCEL_ENV`, not `NODE_ENV`. `next build` always sets `NODE_ENV=production` even for preview deploys. `VERCEL_ENV` correctly distinguishes `production`, `preview`, and `development`.

## Step 5: Add Private Keys to Vercel

This is the step that connects everything. The instrumentation file from Step 4 calls `dotenvx.config()` to decrypt your `.env` files at runtime. But it needs the private keys to do that. Since the keys are not in git (they are in `.env.keys` which is gitignored), you need to add them to Vercel's environment variables manually.

Open your local `.env.keys` file and copy the values. Then in your Vercel project dashboard, go to **Settings > Environment Variables** and add:

- `DOTENV_PRIVATE_KEY` — the key that decrypts `.env`. Scope it to **Preview** and **Development**.
- `DOTENV_PRIVATE_KEY_PRODUCTION` — the key that decrypts `.env.production`. Scope it to **Production**.

Or if you prefer the CLI, you can set them with the Vercel CLI directly:

```
# Preview and Development
vercel env add DOTENV_PRIVATE_KEY preview development

# Production
vercel env add DOTENV_PRIVATE_KEY_PRODUCTION production
```

Without these, the instrumentation file will silently fail to decrypt and your server-side `process.env` reads will be empty.

## Step 6: Deploy and Verify

Commit your encrypted `.env` files and push. In the Vercel build logs, you should see dotenvx injecting from your env files. Test a server-side route that reads `process.env` to confirm runtime decryption is working.

If you see `ECONNREFUSED` errors, double check: is `@dotenvx/dotenvx` in `dependencies` (not `devDependencies`)? Is `instrumentation.ts` at the root of your app? Are the private keys set in Vercel's dashboard?

## The Day-to-Day Workflow

After setup, managing secrets is just:

```
# Add or update a dev secret
dotenvx set KEY value

# Add or update a production secret
dotenvx set KEY value -f .env.production

# Commit and push — picked up automatically on next deploy
git add .env .env.production && git commit -m "update secrets"
```

No dashboard. No Slack. No sync step.

## Let AI Set It Up

Copy this prompt into your AI coding assistant to have it do the setup for you:

> Set up dotenvx for encrypted environment variables in my Next.js project deployed on Vercel. Follow these steps exactly.
>
> **1. Install** — Install @dotenvx/dotenvx as a DEPENDENCY (not devDependency). It must be in the production bundle because Vercel serverless functions need it at runtime.
>
> **2. Encrypt .env files** — Run `dotenvx encrypt` to encrypt the .env file in place. For a separate production env file, also run `dotenvx encrypt -f .env.production`.
>
> **3. Update .gitignore** — Add `.env.keys` to .gitignore. The encrypted .env and .env.production files SHOULD be committed to git. The .env.keys file with private keys should NOT be committed.
>
> **4. Update package.json scripts** — Wrap dev and build commands with `dotenvx run --`.
>
> **5. Create instrumentation.ts** — This is the critical step. Vercel serverless functions do NOT use `next start`. Without this file, server-side process.env reads will be empty. Use `VERCEL_ENV` (not `NODE_ENV`) to distinguish environments.
>
> **6. Configure Vercel environment variables** — Add `DOTENV_PRIVATE_KEY` (Preview/Development) and `DOTENV_PRIVATE_KEY_PRODUCTION` (Production) from your `.env.keys` file.
>
> **7. Deploy and verify.**
>
> Reference: https://tonyvantur.com/writing/dotenvx-vercel

## Resources

- [dotenvx Vercel Platform Guide](https://dotenvx.com/docs/platforms/vercel) — Official docs for using dotenvx with Vercel
- [dotenvx Documentation](https://dotenvx.com/docs) — Full reference for the dotenvx CLI and API
- [dotenvx on GitHub](https://github.com/dotenvx/dotenvx) — Source code and issue tracker
- [Next.js Instrumentation](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation) — How the `register()` hook works
