---
title: "Dotenvx Armor for Security Professionals"
social_title: "Dotenvx Armor for Security Professionals"
description: "Hardened Dotenvx for security professionals with full access control of your secrets. Govern every unlock and see every access–human or agent."
image: "/assets/img/og-image-armor.png"
main_title: Armor
main_layout: columns
---


> Control who can decrypt your .env files

Keep encrypted `.env` files with your code. Armor manages who can use the private keys to decrypt them.

Kortix, [Supermemory]({{ '/members/supermemory/' | relative_url }}), and Comp AI use Armor.

## Controls

- **Custody.** Move private keys off developer devices. Use Enclaved Keys to keep them on your infrastructure.
- **Access.** Grant and revoke access to individual keys for teammates and agents.
- **Approvals.** Require human approval for key access with Guard.
- **Audit.** See who accessed each key and when. Read audit logs through the [Armor API]({{ '/docs/api/' | relative_url }}).
{: .main-docs-list}

## Usage

Start with an [encrypted .env file]({{ '/docs/quickstart/' | relative_url }}#encrypt). Sign in from your project directory and move the private key into Armor.

```console
$ dotenvx armor login
$ dotenvx armor up
```

Dotenvx requests the key from Armor when you run your app. The [Armor custody guide]({{ '/docs/custody/armor/' | relative_url }}) covers approvals and moving keys back to `.env.keys`.
