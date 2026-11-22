---
title: load_dotenvx
description: Load into os.environ and return the resolved values.
permalink: "/docs/sdk/python/load-dotenvx/"
doc_type: sdk
command: load_dotenvx()
command_language: python
eyebrow: Python
eyebrow_href: "/docs/sdk/python/"
---

Accepts paths and override, plus the shared keyword arguments. Unlike load_dotenv, this function returns a dictionary and does not accept stream=. PYTHON_DOTENV_DISABLED returns an empty dictionary.

```python
from dotenvx import load_dotenvx
values = load_dotenvx(".env.production", strict=True)
```

Optional keyword arguments are strict, ignore (diagnostic codes), convention, key_files, and resolve_references. Reference resolution defaults to false.
