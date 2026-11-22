---
title: Python
description: Load encrypted environment values with the Python SDK.
permalink: "/docs/sdk/python/"
icon: python
---

## Packages

<div class="design-list">
<ul class="design-list-items">
<li>
<a class="design-link" href="https://pypi.org/project/python-dotenvx/" target="_blank" rel="noopener noreferrer">python-dotenvx</a>
<span class="design-list-meta">PyPI</span>
</li>
</ul>
</div>

## Install

```console
$ pip install python-dotenvx
```
{: copy="pip install python-dotenvx"}

## Usage

```python
from dotenvx import load_dotenv

load_dotenv()
```
{: copy="false"}

See the [Python](/docs/python/), [Flask](/docs/flask/), or [uv](/docs/uv/) quickstart for a full walkthrough.
## Reference

- [load_dotenv](/docs/sdk/python/load-dotenv/)
- [load_dotenvx](/docs/sdk/python/load-dotenvx/)
- [dotenv_values](/docs/sdk/python/dotenv-values/)
- [find_dotenv](/docs/sdk/python/find-dotenv/)

Stored-key custody uses a compatible Dotenvx CLI with sdk and the required provider feature on PATH. Matching environment keys and local .env.keys do not require remote custody.
