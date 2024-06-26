---
layout: blog
author: mot
title: "From dotenv to dotenvx: Next Generation Config Management"
image: "/assets/img/blog/blog-1.png"
excerpt: "A leap forward in configuration management for dotenv"
---

The day after July 4th 🇺🇸, I wrote [dotenv's first commit](https://github.com/motdotla/dotenv/commit/71dabbf27b699fcb7a04714709cecfc6e78892b9) and released [version 0.0.1 on npm](https://www.npmjs.com/package/dotenv/v/0.0.1). It looked like this.

<img src="https://github.com/dotenvx/dotenvx/assets/3848/632a3bf4-50f4-4614-a0c2-12b2f6e64ccc"/>

In the 11 years since, it's become one of the [most depended-upon packages](https://gist.github.com/anvaka/8e8fa57c7ee1350e3491#top-1000-most-depended-upon-packages) worldwide 🌎 – adjacent ubiquitous software like TypeScript and ESLint.

<img src="https://github.com/dotenvx/dotenvx/assets/3848/3b93fa70-8204-4563-b5b5-a3a2dcfb3de3"/>

It's an example of "big things have small beginnings". The [README](https://github.com/motdotla/dotenv/commit/71dabbf27b699fcb7a04714709cecfc6e78892b9#diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5) was short and the [code was humble](https://github.com/motdotla/dotenv/commit/71dabbf27b699fcb7a04714709cecfc6e78892b9#diff-7934bf411fea192ad8cd69e0a12911648a2842cb0f2409a8fb67b41b7069d757), but today it's beloved by millions of developers.

It's one of the few security tools that improve your security posture with minimal fuss.

* a single line of code - `require('dotenv').config()`
* a single file - `.env`
* a single gitignore append - `echo '.env' >> .gitignore`

It's aesthetic, it's effective, it's elegant.

**But it's not without its problems!** And that's what I want to talk about.

## The problems with `dotenv`

In order of importance, there are three big problems with `dotenv`:

1. *leaking your .env file*
2. *juggling multiple environments*
3. *inconsistency across platforms*

All three pose risks to security, and the first does SIGNIFICANTLY.

**But I think we have a solution to all three today - with [dotenvx](https://github.com/dotenvx/dotenvx)**. In reverse problem order:

* [Run Anywhere](https://github.com/dotenvx/dotenvx?tab=readme-ov-file#run-anywhere) -> *inconsistency across platforms*
* [Multiple Environments](https://github.com/dotenvx/dotenvx?tab=readme-ov-file#multiple-environments) -> *juggling multiple environments*
* [Encryption](https://github.com/dotenvx/dotenvx?tab=readme-ov-file#encryption) -> *leaking your .env file*

Let's dig into each. I'll do my best to show rather than tell.

## Run Anywhere

[dotenvx](https://github.com/dotenvx/dotenvx) works the same across every language, framework, and platform – inject your env at runtime with `dotenvx run -- your-cmd`.

```
$ echo "HELLO=World" > .env
$ echo "console.log('Hello ' + process.env.HELLO)" > index.js

$ node index.js
Hello undefined # without dotenvx

$ dotenvx run -- node index.js
Hello World # with dotenvx
> :-D
```

The [.env parsing engine](https://github.com/dotenvx/dotenvx/blob/6f5a91370437716c93ead3e4400d1ee46e2b77ef/src/lib/helpers/parseDecryptEvalExpand.js#L6), [variable expansion](https://github.com/dotenvx/dotenvx?tab=readme-ov-file#run-anywhere), [command substitution](https://github.com/dotenvx/dotenvx?tab=readme-ov-file#run-anywhere), and more work exactly the same. Install dotenvx via [npm](https://dotenvx.com/docs/install#npm), [brew](https://dotenvx.com/docs/install#brew), [curl](https://dotenvx.com/docs/install#shell), [docker](https://dotenvx.com/docs/install#docker), [windows](https://docs/install#windows), and [more](https://dotenvx.com/docs/install).

This solves the problem of *inconsistency across platforms*. ✅ You'll get the exact same behavior for your [python apps](https://dotenvx.com/docs/guides#python) as your [node apps](https://dotenvx.com/docs/guides#node-js) as your [rust apps](https://dotenvx.com/docs/guides#go).

<a href="https://github.com/dotenvx/dotenvx?tab=readme-ov-file#run-anywhere"><img src="https://github.com/dotenvx/dotenvx/assets/3848/6a43eb52-4b1d-48c2-8c7a-b62cb35b526b"/></a>

## Multiple Environments

Create a `.env.production` file and use `-f` to load it. It's straightforward, yet flexible.

```sh
$ echo "HELLO=production" > .env.production
$ echo "console.log('Hello ' + process.env.HELLO)" > index.js

$ dotenvx run -f .env.production -- node index.js
[dotenvx][info] loading env (1) from .env.production
Hello production
> ^^
```

While everything in [dotenvx](https://github.com/dotenvx/dotenvx) is inspired by community suggestions, this multi-environment feature particularly is. There were suggestions many times for something similar before I came to understand its usefulness. I'm convinvced now it cleanly solves the problem of *juggling multiple environments* when built into the command line. ✅

You can even compose multiple environments together with multiple `-f` flags.

```sh
$ echo "HELLO=local" > .env.local
$ echo "HELLO=World" > .env
$ echo "console.log('Hello ' + process.env.HELLO)" > index.js

$ dotenvx run -f .env.local -f .env -- node index.js
[dotenvx] injecting env (1) from .env.local, .env
Hello local
```

<a href="https://github.com/dotenvx/dotenvx?tab=readme-ov-file#multiple-environments"><img src="https://github.com/dotenvx/dotenvx/assets/3848/8983a359-32f9-459a-861c-66bfdf4e87a1" /></a>

Handy! But it's the next feature, **encryption**, that is the real game changer (and I think merits dotenvx as the *next generation of configuration management*).

## Encryption

Add encryption to your .env files with a single command. Run `dotenvx encrypt`.

```sh
$ dotenvx encrypt
✔ encrypted (.env)
```

```
#/-------------------[DOTENV_PUBLIC_KEY]--------------------/
#/            public-key encryption for .env files          /
#/       [how it works](https://dotenvx.com/encryption)     /
#/----------------------------------------------------------/
DOTENV_PUBLIC_KEY="03f8b376234c4f2f0445f392a12e80f3a84b4b0d1e0c3df85c494e45812653c22a"

# Database configuration
DB_HOST="encrypted:BNr24F4vW9CQ37LOXeRgOL6QlwtJfAoAVXtSdSfpicPDHtqo/Q2HekeCjAWrhxHy+VHAB3QTg4fk9VdIoncLIlu1NssFO6XQXN5fnIjXRmp5pAuw7xwqVXe/1lVukATjG0kXR4SHe45s4Tb6fEjs"
DB_PORT="encrypted:BOCHQLIOzrq42WE5zf431xIlLk4iRDn1/hjYBg5kkYLQnL9wV2zEsSyHKBfH3mQdv8w4+EhXiF4unXZi1nYqdjVp4/BbAr777ORjMzyE+3QN1ik1F2+W5DZHBF9Uwj69F4D7f8A="
DB_USER="encrypted:BP6jIRlnYo5LM6/n8GnOAeg4RJlPD6ZN/HkdMdWfgfbQBuZlo44idYzKApdy0znU3TSoF5rcppXIMkxFFuB6pS0U4HMG/jl46lPCswl3vLTQ7Gx5EMT6YwE6pfA88AM77/ebQZ6y0L5t"
DB_PASSWORD="encrypted:BMycwcycXFFJQHjbt1i1IBS7C31Fo73wFzPolFWwkla09SWGy3QU1rBvK0YwdQmbuJuztp9JhcNLuc0wUdlLZVHC4/E6q/K7oPULNPxC5K1LwW4YuX80Ngl6Oy13Twero864f2DXXTNb"
DB_NAME="encrypted:BGtVHZBbvHmX6J+J+xm+73SnUFpqd2AWOL6/mHe1SCqPgMAXqk8dbLgqmHiZSbw4D6VquaYtF9safGyucClAvGGMzgD7gdnXGB1YGGaPN7nTpJ4vE1nx8hi1bNtNCr5gEm7z+pdLq1IsH4vPSH4O7XBx"

# API Keys
API_KEY="encrypted:BD9paBaun2284WcqdFQZUlDKapPiuE/ruoLY7rINtQPXKWcfqI08vFAlCCmwBoJIvd2Nv3ACiSCA672wsKeJlFJTcRB6IRRJ+fPBuz2kvYlOiec7EzHTT8EVzSDydFun5R5ODfmN"
STRIPE_API_KEY="encrypted:BM6udWmFsPaBzlND0dFBv7R55JiaA+cZnbun8DaVNrEvO+8/k+lsXbZQ0bCPks8kUsdD2qrSp/tii0P8gVJ/gp+pdDuhdcJj91hxJ7nzSFf6h0ofRb38/2WHFhxg77XExxzui1s3w42Z"

# Logging
LOG_LEVEL="encrypted:BKmgv5E7/l1FnSaGWYWBPxxagdgN+KSEaB+va3PePjwEp7CqW6PlysrweZq49YTB5Fbc3UN/akLVn1RZ2AO4PyTVqgYYGBwerjpJiou9R2KluNV3T4j0bhsAkBochg3YpHcw3RX/"
```

A `DOTENV_PUBLIC_KEY` (encryption key) and a `DOTENV_PRIVATE_KEY` (decryption key) are generated using the same public-key cryptography as [Bitcoin](https://en.bitcoin.it/wiki/Secp256k1).

Now, even if you leak your .env file, it's ok. An attacker needs the `DOTENV_PRIVATE_KEY` to make sense of things. This effectively solves the problem of *leaking your .env file* ✅.

<a href="https://github.com/dotenvx/dotenvx?tab=readme-ov-file#encryption"><img src="https://github.com/dotenvx/dotenvx/assets/3848/42aef834-50d9-4187-93e4-b5230ae1253a" /></a>

**Bonus:** This approach additionally makes it possible for contributors to add config while simultaneously being unable to decrypt config. I anticipate this will be useful for open source projects where you want to allow for contribution of secrets without decryption of prior secrets.

## 1.0.0 Release

With that, we're pleased to announce the release of [dotenvx version 1.0.0](https://www.npmjs.com/package/@dotenvx/dotenvx) 🎉.

It is the *next generation of configuration management*, and I'm looking forward to what you do with it. The next decade (like the last) is bright for dotenv! 🌟

---

If you enjoyed this post, please [share dotenvx with friends](https://github.com/dotenvx/dotenvx) or [star it on GitHub](https://github.com/dotenvx/dotenvx) to help spread the word.
