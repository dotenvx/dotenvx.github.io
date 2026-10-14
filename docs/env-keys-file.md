---
title: ".env.keys"
description: ".env.keys holds your private decryption keys."
permalink: /docs/env-keys-file/
layout: docs-markdown
mark: ".env.keys"
---

## Format

```dotenv
#/------------------!DOTENV_PRIVATE_KEYS!-------------------/
#/ private decryption keys. DO NOT commit to source control /
#/     [how it works](https://dotenvx.com/encryption)       /
#/----------------------------------------------------------/

# .env
DOTENV_PRIVATE_KEY="ccc387ba193a315cbcd1ad7d8d007e6124763894554418e7c90b7dbcd7edca23"

# .env.production
DOTENV_PRIVATE_KEY_PRODUCTION="d4d2e22102c58f741cdddacaf69a1a64751fc014aafb90de0f1e7e6cb4d08330"
```
{: copy="false"}

Some quick takeaways:

<ul class="design-bullets">
<li>It uses the <a class="design-link" href="/docs/env-file">.env</a> format</li>
<li><code class="design-code">DOTENV_PRIVATE_KEY</code> contains the decryption key for <code class="design-code">.env</code></li>
<li><code class="design-code">DOTENV_PRIVATE_KEY_PRODUCTION</code> contains the decryption key for <code class="design-code">.env.production</code></li>
</ul>

## Encryption

[secp256k1](https://en.bitcoin.it/wiki/Secp256k1) is the public-key encryption algorithm used to generate the public/private key pair.

## Generating

It's auto-generated when running [`dotenvx set KEY value`](/docs/cli/set).

```console
$ dotenvx set HELLO World
```
{: copy="dotenvx set HELLO World"}

Do not commit `.env.keys` to source code. Keep them somewhere safe like 1Password or [Armor ⛨](/armor).

## History

The `.env.keys` file originally came out of development work on [dotenv-vault](https://github.com/dotenv-org/dotenv-vault) in early 2023. Its current format came out during [an effort in May 2024](https://github.com/dotenvx/dotenvx/issues/189) to support encryption without the ability to decrypt.
