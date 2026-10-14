---
layout: docs-markdown
title: "Flask"
social_title: "Encrypt a .env file in Flask"
description: "Encrypt a .env file in Flask with the Dotenvx SDK, commit it safely, and load its secrets at runtime."
icon: flask
permalink: /docs/flask/
redirect_from:
  - /docs/frameworks/flask
  - /docs/frameworks/flask/
  - /docs/secrets-in-flask/
  - /docs/secrets-in-flask
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
from flask import Flask
from dotenvx import load_dotenv

load_dotenv()

app = Flask(__name__)

@app.get("/")
def index():
    return f"HELLO: {os.getenv('HELLO')}"
```
