---
layout: blog
author: mot
title: "Choosing an Architecture for Pro"
image: "/assets/img/blog/blog-3.png"
excerpt: "Which architecture do we go with for pro - zero-knowledge or managed-encryption."
---

As coder radio mentioned toward [the end of their podcast](https://coder.show/576?t=3080) we're still a bit in the research stage.

The first question is which architecture do we go with?

1. Zero-knowledge architecture
2. Managed-encryption architecture

## Comparing

Zero-knowledge is the architecture that organizations like 1Password practice.

If an attacker gains access to their servers, **your passwords are still safe**. They never hold your private keys - only your public keys. Feels warm and fuzzy. 🧸

Managed-encryption is the architecture that software like [AWS KMS](https://aws.amazon.com/kms/) use.

If an attacker gains access to AWS KMS, **you're pwned, bro** - along with a lot of other people! This is because Amazon ultimately holds plaintext<sup>[1](#footnote1)</sup> copies of your keys. Somehow this doesn't feel awful though because we trust Amazon.

Other ways of looking at it:

* zero-knowledge is decentralized
* managed-encryption is centralized
* zero-knowledge is trustless
* managed-encryption is trustbased

Centralized has its advantages/disadvantages and decentralized its own.

## Why Managed-Encryption

Why would an organization choose managed-encryption over zero-knowledge? It boils down to placement of trust.

They don't trust you with private decryption keys living on your machine. You might lose your laptop. They trust Amazon more. That buddy of yours in devops that you grab beers with - yeah, he doesn't really trust you.

I can hear my [friend Yamil (devops)](https://github.com/elbuo8) saying it to me now:

> Yeah, I don't trust you, bro.

So by centralizing the keys on Amazon, they eliminate the risk - you.

I want to add, this placement of trust in my experience adds friction for developers. Have you ever worked with a big corporate and requested a new production `HELLO` key for your next feature deploy? It can be a long wait, only to be fat-fingered as `HRLLO` – causing your deploy to fail. Compliance departments loves this for some reason.

## Why Zero-Knowledge

Zero-knowledge architecture makes the opposite assumption - third-party risk is greater. I tend to agree with this on not just an empirical level, but also a philosophical one.

I'm a developer-first kind of guy. I want to empower developers, and I think when you do you actually end up with safer and more elegant solutions.

For example, I want this scenario:

1. I set `HELLO=development` in `.env` of my PR
2. Yamil sees it and runs `dotenvx set HELLO "production" -f .env.production`
3. Yamil pushes his `.env.production` changes to my PR

Boom, now the feature is ready in development AND production. I safely don't know the production secret (because its encrypted and only Yamil has access to its decryption key), but we're both coordinating on the same platform - git<sup>[2](#footnote2)</sup>. He can't gatekeep. And bonus, now when Yamil fat-fingers the key name to `HRLLO`, I know.

For weird reasons, compliance departments don't like this. They're wrong of course. You get a complete audit log in git - who, what, when. They'll come around eventually.

But I'm getting off topic again.

Everything I described above you can do already, for free, with [dotenvx](https://github.com/dotenvx/dotenvx).

But as your team grows and Yamil needs to share production decryption keys with his new devops hires, [dotenvx pro](https://github.com/dotenvx/dotenvx/issues/259) should make that easy and safe. Zero-knowledge architecture is a good choice here - it would allow passing of these private decryption keys without dotenvx reading them. If a breach on our servers happened, your secrets would still be safe. All the attacker would gain are public keys and encrypted data.

One final note, I think zero-knowledge is in the spirit of [dotenv](https://github.com/motdotla/dotenv). It's never been a tool that could read your secrets.

We're going with zero-knowledge.

---

<small><sup id="footnote1">1</sup> They're not technically plaintext, they are encrypted at rest, but AWS KMS also holds the decryption key somewhere that allows them to be decrypted just-in-time. It's called a managed-encryption solution because they go to great lengths to *manage* the risk - additional layers of security, machinations, etc.</small>

<small><sup id="footnote2">2</sup> Not all ops teams know and use git. A UI will be needed, but to start, we'll focus on savvy tightnit teams that know git.</small>
