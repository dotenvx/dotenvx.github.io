---
author: "Scott Motte"
title: "Making .env: Dotenvx 3.0.0 RC0 – 91x faster"
excerpt: "Dotenvx 3.0.0-rc0 is here. The run command is 91x faster, the binary is 1/7th the size, and you can forge it for the work you do."
image: "https://github.com/user-attachments/assets/475c6ceb-5759-4d20-91c3-83349c992783"
---

<a href="https://github.com/user-attachments/assets/475c6ceb-5759-4d20-91c3-83349c992783"><img src="https://github.com/user-attachments/assets/475c6ceb-5759-4d20-91c3-83349c992783" alt="Cover image for Dotenvx 3.0.0 Release Candidate"></a>

Still wrenching on it, but Dotenvx 3.0.0-rc0 is here and it's feeling good.

Install it with:

```console
$ curl -sfS "https://dotenvx.sh?version=3.0.0-rc0" | sh
```
{: copy="curl -sfS \"https://dotenvx.sh?version=3.0.0-rc0\" | sh"}

or

```console
$ npm install @dotenvx/dotenvx@3.0.0-rc0
```
{: copy="npm install @dotenvx/dotenvx@3.0.0-rc0"}

**It feels like a blade again.**

It's fast. The run command is 91x faster than Dotenvx 2.38.2. [1]

It's light. The binary is 1/7th the size of Dotenvx 2.38.2. [1]

It's forgeable. I have a great Japanese knife I use for everything in the kitchen. It's light, sharp, and balanced. It's forged well. Dotenvx needs to feel like that at its core while allowing you to reforge it for what you use it for.

So, going forward, Dotenvx ships with default commands: run, get, set, del, encrypt, decrypt, and keypair. For everything else, use the new *dotenvx install* command. Add Armor or 1Password or Native. Remove commands you don't need in production. Forge the tool for the work you do.

```console
$ dotenvx install
$ dotenvx install --add armor
$ dotenvx install --add native --remove get
```
{: copy="dotenvx install
dotenvx install --add armor
dotenvx install --add native --remove get"}

Finally, we have a Dotenvx that:

- decrypts and injects in under 10ms
- travels light under 10mb
- and can be customized

Full feature catalog: [https://armor.dotenvx.com/catalog.json](https://armor.dotenvx.com/catalog.json)

Next: We're updating the docs for Dotenvx 3 and putting it through its paces on our own infrastructure. Once that's done, we'll officially release 3.0.0. We don't have a firm date yet, but it'll be soon.

---

[1] RC0 benchmark — Linux x64, 30 encrypted variables, 50 runs: [https://github.com/dotenvx/dotenvx/actions/runs/45296263219#summary-138118952957](https://github.com/dotenvx/dotenvx/actions/runs/45296263219#summary-138118952957)
