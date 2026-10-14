---
layout: docs-markdown
title: "uv"
social_title: "Encrypt a .env file in uv"
description: "Encrypt a .env file in a Python uv project with the Dotenvx SDK, commit it safely, and load its secrets at runtime."
icon: uv
permalink: /docs/uv/
redirect_from:
  - /docs/secrets-in-uv/
  - /docs/secrets-in-uv
quickstart_pager: true
---

## Prerequisites

To get the most out of this guide, you'll need to:

- [Install uv](https://github.com/astral-sh/uv#installation)

## Setup

Create a uv project.

```console
$ uv init hello-world
$ cd hello-world
```
{: copy="uv init hello-world
cd hello-world"}

## Install

Get the Dotenvx Python SDK.

```console
$ uv add python-dotenvx
```
{: copy="uv add python-dotenvx"}

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

Run it with uv.

```console
$ uv run main.py
```
{: copy="uv run main.py"}
