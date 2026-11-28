---
title: Custody
main_layout: single
code_highlighting: true
description: Choose how to safeguard your private keys
keep_description_period: true
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

## <span id="local-development"><span id="local">Classic</span></span>
{: #classic}

When you run dotenvx encrypt and choose Classic, Dotenvx stores your private key in `.env.keys`.

```console
$ dotenvx encrypt
? Choose private key custody
❯ ⛉ Classic (.env.keys)
  ⛨ Armor (Off-device keys)
  … more
```
{: .custody-prompt copy="dotenvx encrypt"}

Keep `.env.keys` out of Git. Commit the encrypted `.env` with your code.

```gitignore
# .gitignore
.env.keys
!.env
```
{: .filename-comment copy=".env.keys
!.env"}

Share the `.env.keys` file with your team over Slack. It’s more secure than sharing secrets directly, but it still means passing around a private key. Use Armor to keep keys off your team’s devices and control who can access them.

## Armor ⛨
{: #armor}

Choose Armor to keep your and your team’s private keys off device.

```console
$ dotenvx encrypt
? Choose private key custody
  ⛉ Classic (.env.keys)
❯ ⛨ Armor (Off-device keys)
  … more
```
{: .custody-prompt copy="dotenvx encrypt"}

Or if you started with Classic, convert to an armored private key with the command dotenvx armor up.

```console
$ dotenvx armor up
```
{: copy="dotenvx armor up"}

When you run your app with Dotenvx, it requests key access from Armor. See the [Armor setup guide](/docs/custody/armor/) to configure access.

## <span id="production"><span id="change-custody"><span id="more">Custodians</span></span></span>
{: #custodians}

Choose a custodian that fits how you work. Each guide explains where your private keys are stored and how to set it up.

- [Classic](/docs/custody/classic/)
- [Armor](/docs/custody/armor/)
- [Native](/docs/custody/native/)
- <span id="password-managers"></span>[1Password](/docs/custody/1password/)
- [Bitwarden](/docs/custody/bitwarden/)
