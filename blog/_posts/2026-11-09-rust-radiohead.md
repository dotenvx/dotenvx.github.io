---
layout: blog
author: "Scott Motte"
title: "Making .env: Rust & Radiohead"
excerpt: "I spent the weekend rewriting Dotenvx in Rust while listening to Radiohead in album order. Here's what custom builds could make possible for Dotenvx 3.0."
image: "https://github.com/user-attachments/assets/5d7e5987-2882-45ae-ba13-06f435397360"
---

<a href="https://github.com/user-attachments/assets/5d7e5987-2882-45ae-ba13-06f435397360"><img src="https://github.com/user-attachments/assets/5d7e5987-2882-45ae-ba13-06f435397360" alt="Cover illustration for Rust &amp; Radiohead"></a>

I spent the weekend, and much of Friday, rewriting Dotenvx in Rust while listening to Radiohead in album order.

Why?

When you string Radiohead together it feels like one long piece of music, and you really get to hear how the band changed their minds over time, how they evolved.

Dotenvx is a lot like that right now.

We're working toward a 3.0 release, and I keep changing the shape of it, what we'll add, what we'll keep, what we'll take away, but I think we're close now.

Dotenvx 1.0 defined the standard. An encrypted .env file. It was tight. It was sharp. It felt good in your hands.

Dotenvx 2.0 expanded into teams. Armor and other custody options. It's more robust and more secure. I'd describe it as feeling heavier in the hands, more the weight and balance of a hammer than of a knife.

I want Dotenvx 3.0 to feel like a blade again. I also want to keep the features we've added and give teams room to build more of their own. I've heard from teams that moved from HashiCorp Vault, Infisical, and Doppler to Dotenvx so they could build the secrets setup they needed. I want to make more of that possible, especially for teams wiring Dotenvx into infrastructure like AWS.

So how do we do that? **Custom builds.**

We can ship the core Dotenvx binary with the defaults (`run`, `get`, `encrypt`, and `decrypt`) plus a new `dotenvx install` command. Ask it for Armor, 1Password, audit logs, proxy support, or whatever else your project needs, and it installs a Dotenvx built with those pieces.

Rust enables this through Cargo feature flags. They let us decide what gets compiled into the binary. For instance, leave Armor or 1Password out and their code and optional dependencies stay out of the build. Tight. I think that's how we get the blade back.

<a href="https://doc.rust-lang.org/cargo/reference/features.html"><img src="https://github.com/user-attachments/assets/c6be0c49-057a-4315-9d1b-ca41314d3f65" alt="The Features chapter of The Cargo Book" width="440" loading="lazy"></a>

And I love what this unlocks.

- *Give your production servers a Dotenvx that decrypts only* – with key custody locked down to env delivery.
- *Give your agents a Dotenvx with decryption removed* – with secrets swapped for placeholders.
- *Give your team a Dotenvx that audits every Dotenvx command they run* – with Armor enabled.

There are still some unknowns around delivering this over our distribution infra at [dotenvx.sh](https://dotenvx.sh), but they look doable. It's really important, for example, that if you already have Dotenvx with Armor enabled, then updating Dotenvx should smartly update to a build containing Armor again.

Doesn't this feel good? We could smash every feature into the binary and leave you to figure out which switches to flip. So much security software takes this approach. But it ends up feeling like a sledgehammer, brutish and out of balance. That's the wrong feel for Dotenvx. Dotenvx should feel like a blade you reforge over time.

---

P.S. There's more taking shape. In the next letters, I'll get into what Dotenvx looks like inside a Ruby or Python app, and where a new Dotenvxfile makes itself useful.
