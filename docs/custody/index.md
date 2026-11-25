---
title: Custody
main_layout: single
description: Custody is where your private keys live.
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

When you run `dotenvx encrypt` and choose Classic, Dotenvx stores your private key in `.env.keys`.

```console
$ dotenvx encrypt
? Choose private key custody
❯ ⛉ Classic (.env.keys)
  ⛨ Armor (Off-device keys)
  … more
```
{: .custody-prompt copy="dotenvx encrypt"}

Keep `.env.keys` out of Git. Commit the encrypted `.env` with your code.

## Armor

Choose Armor to keep your private keys off-device. If you started with Classic, `dotenvx armor up` converts your Classic private keys to Armored keys.

```console
$ dotenvx armor up
```
{: copy="dotenvx armor up"}

When you run your app with Dotenvx, it requests key access from Armor. See the [Armor setup guide](/docs/custody/armor/) to configure access.

## <span id="production"><span id="change-custody">More</span></span>
{: #more}

- [Native](/docs/custody/native/)
- <span id="password-managers"></span>[1Password](/docs/custody/1password/)
- [Bitwarden](/docs/custody/bitwarden/)
