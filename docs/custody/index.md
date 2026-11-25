---
title: Custody
description: Choose where your private keys live.
permalink: "/docs/custody/"
eyebrow: Docs
eyebrow_href: "/docs/introduction/"
mark: Custody
options:
- title: Local
  href: "/docs/custody/local/"
- title: Armor ⛨
  href: "/docs/custody/armor/"
- title: Password Managers
  href: "/docs/custody/password-managers/"
---

Your encrypted .env stays with your code. Custody is where you keep the private key that unlocks it.

Choose who holds the key and how your app gets access to it.

## <span id="local">Local development</span>
{: #local-development}

Keep the private key in `.env.keys` on your development machine, or use your operating system’s secret store. Dotenvx reads it locally when your app starts.

You manage access, backups, and distribution to other machines. Keep `.env.keys` out of Git.

[Local setup](/docs/custody/local/)

## Production

Commit the encrypted `.env.production` with your code. In your host’s environment settings, set `DOTENV_PRIVATE_KEY_PRODUCTION` to the matching value from your local `.env.keys`. Keep the key server-side.

For example, on Vercel, open your project’s **Settings → Environment Variables**, add the key under that exact name, and select **Production**. If your build needs the encrypted values and the project has the Dotenvx CLI installed, set the Build Command to `npx dotenvx run -f .env.production -- npm run build` and redeploy. The `-f` flag selects the production file for that build.

## Armor

Let Armor manage access to the key. Dotenvx contacts Armor before starting your app, and access can require approval.

Choose this when you need shared access, approvals, and auditing. Plan for authentication and Armor availability wherever your app runs.

[Armor setup](/docs/custody/armor/)

## Password Managers

Keep the key in your existing 1Password or Bitwarden vault. Dotenvx retrieves it through the password manager’s CLI when your app starts.

Access follows your vault permissions. Each machine needs the CLI installed and authenticated.

[1Password setup](/docs/custody/1password/) · [Bitwarden setup](/docs/custody/bitwarden/)

## Change custody

You can move an existing key between custody options. Your encrypted .env and app command stay the same.

Moving a key doesn’t invalidate copies already held elsewhere. If a key has been exposed, changing where you store it is only part of the response.
