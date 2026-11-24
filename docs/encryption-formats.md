---
title: Encryption Formats
description: "Complete specifications for Dotenvx Classic and 3 private keys, public keys, and ciphertext."
permalink: /docs/encryption-formats/
---

Dotenvx has two supported encryption formats: [Classic](#classic) and [3](#3). Each defines a private key, a public key, and a ciphertext envelope. Both use secp256k1 ECIES with HKDF-SHA256 and AES-256-GCM. Format 3 adds explicit version and algorithm identifiers and a recipient key identifier; its binary encryption payload is the same as Classic.

This reference describes the formats implemented by Dotenvx 3. For file usage, see [.env (encrypted)](/docs/encrypted-env-file/) and [.env.keys](/docs/env-keys-file/).

## Classic
{: #classic}

Classic keys are hexadecimal strings without a version or algorithm prefix. Classic ciphertext begins with the case-sensitive prefix `encrypted:`.

### Private key
{: #classic-private-key}

```text
<private_key_hex>
```
{: copy="false"}

The private key is a 32-byte, big-endian secp256k1 scalar encoded as 64 hexadecimal characters, including leading zeroes. It must be in the range `1 <= d < n`, where the curve order `n` is `fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141`. Hexadecimal letters may be uppercase or lowercase; generated keys use lowercase.

### Public key
{: #classic-public-key}

```text
<public_key_hex>
```
{: copy="false"}

The public point is `Q = d × G`, where `G` is the secp256k1 generator. Dotenvx derives compressed SEC1 public keys: 33 bytes encoded as 66 hexadecimal characters, starting with `02` or `03` followed by the 32-byte x-coordinate. The prefix selects the even or odd y-coordinate, respectively.

Classic encryption also accepts uncompressed SEC1 keys: 65 bytes encoded as 130 hexadecimal characters, starting with `04` followed by the 32-byte x-coordinate and 32-byte y-coordinate. The underlying ECIES encryptor additionally accepts the legacy 64-byte `x || y` representation without `04`; the public-key validation helper accepts only the compressed and uncompressed SEC1 forms. Public points must be valid secp256k1 points.

### Ciphertext
{: #classic-ciphertext}

```text
encrypted:<base64_payload>
```
{: copy="false"}

The payload uses standard Base64 with the `A–Z`, `a–z`, `0–9`, `+`, and `/` alphabet and `=` padding when needed. It is not Base64url. Decode it to obtain the [binary payload](#binary-payload). The envelope contains no version, algorithm, or recipient key identifier.

### Test vector
{: #classic-test-vector}

These public test keys and ciphertext decrypt to the UTF-8 string `World`. Do not use these private keys for real secrets.

```dotenv
# .env.keys
DOTENV_PRIVATE_KEY="a4547dcd9d3429615a3649bb79e87edb62ee6a74b007075e9141ae44f5fb412c"
```
{: copy="false"}

```dotenv
# .env
DOTENV_PUBLIC_KEY="03da6adce70a0e5b1b518357e8b5ecc9d85e79284908b4a87ed0c9974bcae60fa4"
HELLO="encrypted:BE9Y7LKANx77X1pv1HnEoil93fPa5c9rpL/1ps48uaRT9zM8VR6mHx9yM+HktKdsPGIZELuZ7rr2mn1gScsmWitppAgE/1lVprNYBCqiYeaTcKXjDUXU5LfsEsflnAsDhT/kWG1l"
```
{: copy="false"}

## 3
{: #3}

Format 3 uses explicit, case-sensitive prefixes. The supported algorithm combination is `SECP256K1` with `AES256GCM`.

### Private key
{: #format-3-private-key}

```text
DOTENV-PRIVATE-KEY-3-SECP256K1-<private_key_hex>
```
{: copy="false"}

The suffix has the same 32-byte scalar encoding and validity requirements as a [Classic private key](#classic-private-key): exactly 64 hexadecimal characters. The prefix is part of the serialized key.

### Public key
{: #format-3-public-key}

```text
DOTENV-PUBLIC-KEY-3-SECP256K1-<compressed_public_key_hex>
```
{: copy="false"}

The suffix is a compressed SEC1 secp256k1 point: 33 bytes encoded as 66 hexadecimal characters beginning with `02` or `03`. Derivation from a format 3 private key produces this prefixed, compressed form. Format 3 encryption requires the compressed form, even though the public-key validation helper also recognizes prefixed uncompressed SEC1 keys.

A public key can carry an optional custody hint:

```text
DOTENV-PUBLIC-KEY-3-SECP256K1-<compressed_public_key_hex>?custody=<provider>
```
{: copy="false"}

For example, `?custody=.env.keys` identifies local file custody. The query begins at the first `?`; fields are separated by `&`. The current parser reads the first `custody=` field literally, without URL decoding. The entire query is removed before encryption or key identification. It describes key custody and does not change the cryptographic identity or the ciphertext. Private keys and ciphertext do not carry this query suffix.

### Ciphertext
{: #format-3-ciphertext}

```text
DOTENV-CIPHERTEXT-3-SECP256K1-AES256GCM-<kid>-<base64_payload>
```
{: copy="false"}

| Field | Encoding and meaning |
| --- | --- |
| `DOTENV-CIPHERTEXT` | Ciphertext marker. |
| `3` | Format version. |
| `SECP256K1` | Curve used by ECIES. |
| `AES256GCM` | Authenticated symmetric encryption algorithm. |
| `kid` | First 10 hexadecimal characters of the recipient's compressed public-key hex, excluding the public-key prefix and any query. |
| `base64_payload` | Standard, padded Base64 of the shared [binary payload](#binary-payload), using the same encoding as Classic. |

The key identifier is a public-key prefix, not a hash or a unique identifier. It includes the `02` or `03` point prefix. For the public key below, it is `03da6adce7`. Generated keys produce lowercase identifiers; decryption compares identifiers without regard to hex letter case.

Before decrypting, Dotenvx requires a format 3 private key, derives its compressed public key, and checks the key identifier. A matching identifier alone does not establish a matching key; AES-GCM authentication must also succeed.

### Test vector
{: #format-3-test-vector}

This vector uses the same scalar, public point, and binary payload as the Classic vector. It decrypts to `World`.

```dotenv
# .env.keys
DOTENV_PRIVATE_KEY="DOTENV-PRIVATE-KEY-3-SECP256K1-a4547dcd9d3429615a3649bb79e87edb62ee6a74b007075e9141ae44f5fb412c"
```
{: copy="false"}

```dotenv
# .env
DOTENV_PUBLIC_KEY="DOTENV-PUBLIC-KEY-3-SECP256K1-03da6adce70a0e5b1b518357e8b5ecc9d85e79284908b4a87ed0c9974bcae60fa4"
HELLO="DOTENV-CIPHERTEXT-3-SECP256K1-AES256GCM-03da6adce7-BE9Y7LKANx77X1pv1HnEoil93fPa5c9rpL/1ps48uaRT9zM8VR6mHx9yM+HktKdsPGIZELuZ7rr2mn1gScsmWitppAgE/1lVprNYBCqiYeaTcKXjDUXU5LfsEsflnAsDhT/kWG1l"
```
{: copy="false"}

## Binary payload
{: #binary-payload}

Both envelopes Base64-encode the following concatenation. Offsets are zero-based; ranges include the first byte and exclude the last.

```text
ephemeral_public_key || nonce || authentication_tag || ciphertext
```
{: copy="false"}

| Byte range | Length | Contents |
| --- | --- | --- |
| `[0, 65)` | 65 bytes | Uncompressed SEC1 ephemeral public key: `04 || x || y`. |
| `[65, 81)` | 16 bytes | AES-GCM nonce. |
| `[81, 97)` | 16 bytes | AES-GCM authentication tag. |
| `[97, end)` | Plaintext UTF-8 byte length | Encrypted bytes. |

The payload overhead is 97 bytes before Base64 encoding and the text envelope. An empty plaintext still has a 97-byte payload. The ephemeral public key is uncompressed even when the recipient's public key is compressed. The tag precedes the ciphertext; libraries that return `ciphertext || tag` need to rearrange those fields.

The test vectors above decode into these fields, shown as hex:

```text
ephemeral_public_key = 044f58ecb280371efb5f5a6fd479c4a2297dddf3dae5cf6ba4bff5a6ce3cb9a453f7333c551ea61f1f7233e1e4b4a76c3c621910bb99eebaf69a7d6049cb265a2b
nonce                = 69a40804ff5955a6b358042aa261e693
authentication_tag   = 70a5e30d45d4e4b7ec12c7e59c0b0385
ciphertext           = 3fe4586d65
```
{: copy="false"}

## Encryption and decryption
{: #encryption-and-decryption}

Both formats use the following ECIES construction. `||` means byte concatenation, and `SEC1_uncompressed` encodes a point as `04 || x || y`, with each coordinate occupying 32 big-endian bytes.

1. Encode the plaintext string as UTF-8.
2. Generate a fresh random valid secp256k1 ephemeral private scalar `r` and its public point `R = r × G`.
3. Compute the shared point `S = r × Q`, where `Q` is the recipient's public point.
4. Set the HKDF input key material to `SEC1_uncompressed(R) || SEC1_uncompressed(S)` (130 bytes). This uses the full shared point, including y, rather than only the ECDH x-coordinate.
5. Derive a 32-byte AES key using HKDF-SHA256 with no supplied salt and empty `info`. Under HKDF, the absent salt is equivalent to 32 zero bytes.
6. Generate a fresh random 16-byte nonce. Encrypt with AES-256-GCM using that nonce, a 16-byte tag, and empty additional authenticated data (AAD).
7. Concatenate the fields in the [binary payload](#binary-payload) order, encode with standard Base64, and add the appropriate text envelope.

To decrypt, parse the envelope, decode Base64, validate the ephemeral public point, and compute `S = d × R` using the recipient's private scalar. Derive the same AES key and authenticate/decrypt using the stored nonce and tag. Return the plaintext only after authentication succeeds and its bytes decode as UTF-8.

For both test vectors, the derived AES key is:

```text
95953aaa59bd634497ae9be44aa08ca727f5761d5c0bd2c5b19074f5f5f1c481
```
{: copy="false"}

Encryption is randomized: encrypting the same string for the same recipient produces different ciphertexts. The text envelope, key identifier, custody query, and .env variable name are not supplied as AAD. The AES-GCM tag authenticates the encrypted message; it does not authenticate those surrounding fields or identify a sender.

## Format selection and validation
{: #format-selection-and-validation}

Newly generated keypairs use format 3. Encryption selects its output envelope from the public key: a format 3 public key produces format 3 ciphertext, and a raw hexadecimal Classic public key produces Classic ciphertext.

Decryption expects the matching serialization: Classic ciphertext takes a raw hexadecimal private key, while format 3 ciphertext takes a `DOTENV-PRIVATE-KEY-3-SECP256K1-` private key. The current API does not automatically strip or add key prefixes to cross between formats. Both formats use the same cryptography, but changing a version label is not key rotation.

Dotenvx recognizes any value starting with `encrypted:` or `DOTENV-CIPHERTEXT-` as encrypted, even when malformed. Recognition alone does not validate the ciphertext. Unknown versions or algorithm labels under `DOTENV-CIPHERTEXT-` fail decryption; they are not treated as plaintext. Values without either prefix pass through the primitive decrypt function unchanged.

A missing private key, an invalid scalar or point, malformed Base64 or payload, a mismatched key identifier, failed authentication, or invalid plaintext UTF-8 causes decryption to fail.

## Storage in .env files
{: #storage-in-env-files}

The encryption format describes the serialized key and ciphertext values. The surrounding file remains the ordinary [.env format](/docs/env-file/). Store the public key in `DOTENV_PUBLIC_KEY`, ciphertext in each encrypted variable's value, and the private key separately as `DOTENV_PRIVATE_KEY`, for example in [.env.keys](/docs/env-keys-file/).

For environment-specific files, use the corresponding suffix on the key variable names: `.env.production` uses `DOTENV_PUBLIC_KEY_PRODUCTION` and `DOTENV_PRIVATE_KEY_PRODUCTION`. These variable names and file conventions do not change the serialized encryption format.
