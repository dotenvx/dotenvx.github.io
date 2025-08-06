---
layout: blog
author: "Scott Motte – Mot"
title: "Dotenvx vs Docker Compose Secrets: Avoiding False Security"
image: "/assets/img/blog/blog-10.png"
excerpt: "Why secrets in plaintext files might be more dangerous than environment variables — and how dotenvx helps."
---

**Managing secrets in containers can be tricky.** Many developers have heard that environment variables might expose secrets, so using [Docker Compose Secrets](https://docs.docker.com/compose/how-tos/use-secrets/) sounds safer. But is it?

In practice, Docker Compose secrets are just plaintext files in disguise, which introduces its own risks. Meanwhile, [dotenvx](https://github.com/dotenvx/dotenvx) takes a different approach with just-in-time secret injection that avoids leaving sensitive data lying around.

## Good Idea, Unencrypted Reality

Docker Compose added a feature called *secrets* to keep passwords and API keys out of your Dockerfiles and environment variables. The idea sounds good. But here's the catch: those secrets are **just plaintext files**.

Compose bind-mounts a plaintext file into your container under `/run/secrets` <sup><a href="#footnote1">1</a></sup>. No encryption.

<a href="https://docs.docker.com/compose/how-tos/use-secrets/" target="_blank"><img src="https://github.com/user-attachments/assets/eedb7ab3-9c9a-49b2-9583-ec11ad411783" /></a>

As a result, in a running container, an attacker (or malicious process) can simply read the unencrypted file from `/run/secrets` and obtain your secret – these secret files are mounted world-readable (mode 0444) <sup><a href="#footnote1">1</a></sup>.

## Plaintext Secrets at Rest

Why is a plaintext file at rest such a big deal? Because anything stored on disk is one stray commit or backup away from exposure. If you check that secret file into source control by mistake, or if your server gets compromised, the secret is sitting there in plain text.

Docker Compose avoids putting secrets in images or environment variables, but leaving them on the filesystem means they persist longer than they might need to. **Long-lived plaintext secrets are an inviting target.**

For example, a common slip-up is a developer accidentally committing a .env or secret file to GitHub – now your passwords are public. Even on a server, a misconfigured web route could unintentionally serve that file, or an attacker could find it among backups.

A secret that lives as plaintext on disk is always at risk of being read by someone unauthorized.

## Environment Variables

On the other hand, **environment variables vanish once the process stops and aren't directly saved to disk**. But environment variables have their own pitfalls if misused. If you print them in logs or leave them in an .env file on disk, you're back to square one.

The takeaway here is that *how you handle the secret matters more than the mechanism. Simply moving a secret from an env var to a file doesn't automatically make it safe.*

## Dotenvx: Just-in-Time Secrets Injection

Dotenvx approaches secret management with a focus on minimal exposure. It injects your secrets at runtime only, via the command `dotenvx run`. How does this help?

First, it means **you don't leave secret values sitting around in a container’s environment or filesystem** for longer than necessary. The dotenvx CLI loads the secrets from an encrypted `.env` file and injects them as environment variables only while launching your app, then your app uses them in-memory.

There's no separate plaintext secret file hanging around permanently. In CI/CD, for example, dotenvx will decrypt your secrets and inject them "just in time" as the build or app starts.

## Dotenvx: Encryption

**Crucially, dotenvx lets you encrypt your .env files.** With one command `dotenvx encrypt`, you transform your `.env` into an encrypted format.

Even if someone finds that file, they can't read the secrets without the decryption key. It uses AES-256 encryption with ephemeral keys so that even if the encrypted .env file is exposed, its contents remain secure. <sup><a href="#footnote3">3</a></sup> You can commit the encrypted .env to your repo safely – it’s just gibberish to anyone without the key.

Come runtime, you provide the key (often via an environment variable or a secret manager) and dotenvx seamlessly decrypts and injects the real values into your app. The end result: *no plaintext secrets sitting at rest on your disk or in your container. They exist only in memory when needed.*

## How It Works

You run your app like this:

```
$ dotenvx run -- node app.js
```

Secrets are decrypted and loaded as environment variables *just for that process*. Nothing written to disk. No lingering files in containers.

Want to commit secrets to your repo? Encrypt them first:

```
$ dotenvx encrypt
```

Then you can safely version your encrypted `.env` file. It's useless without the decryption key.

It's that easy and no plaintext files sitting around! Great!

## Comparison

| Feature | Docker Compose Secrets | Dotenvx |
|--------|------------------------|---------|
| Secrets encrypted at rest? | ❌ No | ✅ Yes |
| Secrets exist on disk? | ✅ Yes (plaintext file) | ❌ No (only in memory) |
| Easy to leak by accident? | ✅ Yes (file is always there) | 🚫 Much harder (encrypted, ephemeral) |
| Can safely commit secrets? | ❌ No | ✅ Yes (if encrypted) |
| Works outside containers? | ❌ Not easily | ✅ Yes |

## Takeaway

Docker Compose secrets *look* safer than env vars — but they aren’t encrypted, and they persist longer. Meanwhile, dotenvx focuses on **short-lived, encrypted, just-in-time secrets**.

If you care about reducing blast radius and limiting exposure, [dotenvx](https://github.com/dotenvx/dotenvx) is a solid and modern option to consider.

To learn more, [read the whitepaper](https://dotenvx.com/dotenvx.pdf).

---

<small><sup id="footnote1">1</sup> <a href="https://docs.docker.com/reference/compose-file/configs/">docker.com</a></small>
<small><sup id="footnote2">2</sup> <a href="https://news.ycombinator.com/item?id=40798534">news.ycombinator.com</a></small>
<small><sup id="footnote3">3</sup> <a href="https://github.com/dotenvx/dotenvx">github.com/dotenvx/dotenvx</a></small>
