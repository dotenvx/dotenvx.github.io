---
layout: docs-markdown
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

Your encrypted .env stays in your project. **Custody is where you keep the private key that unlocks it.**

When you first encrypt a file in an interactive terminal, choose from three custody options:

```console
$ dotenvx encrypt
? Choose private key custody
❯ ⛉ Local
  ⛨ Dotenvx Armor
  ⛊ Password Managers
```
{: copy="dotenvx encrypt"}

The menus below show the choices after setup. The CLI marks options that need a sign-in or CLI installation.

## Local

Keep the key in .env.keys or your operating system's secret store:

```text
⛉ Choose local custody
❯ File .env.keys
  macOS Keychain
  ← back
```

On Windows, the second option is Windows Credential Manager; on Linux, it is Linux Secret Service. Keep .env.keys out of git.

[Local custody →](/docs/custody/local/)

## Dotenvx Armor

Let Armor manage access to the key. Sign in with dotenvx login, then choose:

```text
⛨ Choose key type
❯ ⛨ Armored
  ◊ Enclaved
  ← back
```

**Armored** keys are available to authorized team members. **Enclaved** keys are provisioned to a supported deployment resource; the CLI walks you through team, service, connection, and resource selection.

[Armor custody →](/docs/custody/armor/)

## Password Managers

Keep the decryption key in your existing vault:

```text
⛊ Choose password manager
❯ 1Password
  Bitwarden
  ← back
```

Dotenvx retrieves the key through the password manager's CLI when you run your app. Your app's values stay encrypted in .env.

[1Password key custody →](/docs/custody/1password/) · [Bitwarden key custody →](/docs/custody/bitwarden/)

## Secret references

**Key custody stores the decryption key. Secret references store individual app secrets in the vault.** References such as op:// or bw:// in .env tell Dotenvx where to fetch those values.

[1Password references →](/docs/1password/) · [Bitwarden references →](/docs/bitwarden/)
