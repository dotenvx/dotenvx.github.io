---
layout: docs-markdown
title: "Python"
social_title: "Encrypt a .env file in Python"
description: "Encrypt a .env file in Python with the Dotenvx SDK, commit it safely, and load its secrets at runtime."
icon: python
permalink: /docs/python/
redirect_from:
  - /docs/languages/python
  - /docs/languages/python/
  - /docs/secrets-in-python/
  - /docs/secrets-in-python
quickstart_pager: true
---

## Install

Get the Dotenvx Python SDK.

```console
$ pip install python-dotenvx
```
{: copy="pip install python-dotenvx"}

And the CLI to encrypt files.

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

## Encrypt

Encrypt your .env file.

```console
$ dotenvx encrypt
```
{: copy="dotenvx encrypt"}

## Inject

Then inject your encrypted secrets at runtime.

```python
import os
from dotenvx import load_dotenv

load_dotenv()

print(f"HELLO: {os.getenv('HELLO')}")
```
