---
title: "Dotenvx Armor for Security Professionals"
social_title: "Dotenvx Armor for Security Professionals"
description: "You've encrypted your .env files. Armor controls who gets the key, requires approval, and records access."
image: "/assets/img/og-image-armor.png"
main_title: Armor
main_layout: single
---


> You've encrypted your secrets. Who gets the key?

Dotenvx lets you safely commit encrypted `.env` files. Anyone with the private key can decrypt them. As teammates and agents start using those secrets, you need a way to decide who gets access and see when they use it.

Armor manages access to those private keys. Keep your encrypted files in Git, move keys off developer devices, and control their use from one place.

[Try Armor](https://armor.dotenvx.com/signup){: data-umami-event="Armor Overview Signup link"} · [See plans]({{ '/pricing/' | relative_url }})

Kortix, [Supermemory]({{ '/members/supermemory/' | relative_url }}), and Comp AI use Armor.

[**Deploy Armor on Heroku →**]({{ '/docs/custody/armor/heroku/' | relative_url }}) Follow the production path from CI to runtime access and its audit event, including what happens during an Armor outage.

## When you need more control

**A teammate needs access.** Give them access through Armor instead of sending them a private key. Revoke their Armor access when they leave.

**An agent needs a secret.** Require human approval with Guard before a protected key can be used.

**You need to know who used a key.** Audit logs record who accessed it and when. Query those records through the [Armor API]({{ '/docs/api/' | relative_url }}).

Business adds access rules for individual keys and secrets, automation tokens, and longer audit retention. [Compare plans]({{ '/pricing/' | relative_url }}).

## Keep your workflow

Start with an [encrypted .env file]({{ '/docs/quickstart/' | relative_url }}#encrypt). Sign in from your project directory and move its private key into Armor.

```console
$ dotenvx install --add armor
$ dotenvx armor login
$ dotenvx armor up
```
{: copy="dotenvx install --add armor
dotenvx armor login
dotenvx armor up"}

Run your app as usual:

```console
$ dotenvx run -- npm start
```
{: copy="dotenvx run -- npm start"}

Dotenvx requests the key from Armor at runtime. Armor checks access and any required approval, and records the request.

## Choose where keys live

Use Armored Keys to store private keys in Armor, or Enclaved Keys to keep them on your own infrastructure. Your encrypted `.env` files stay with your code.

The [Armor custody guide]({{ '/docs/custody/armor/' | relative_url }}) covers setup, approvals, and moving keys back to `.env.keys`.

[Try Armor](https://armor.dotenvx.com/signup){: data-umami-event="Armor Footer Signup link"} · [See plans]({{ '/pricing/' | relative_url }})
