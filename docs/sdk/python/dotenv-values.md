---
title: dotenv_values
description: Return resolved values without modifying os.environ.
permalink: "/docs/sdk/python/dotenv-values/"
doc_type: sdk
command: dotenv_values()
command_language: python
eyebrow: Python
eyebrow_href: "/docs/sdk/python/"
---

Accepts a path, a sequence of paths, or stream=. Loaded values use overwrite precedence for resolution. Returns dict[str, str].

```python
from io import StringIO
from dotenvx import dotenv_values
values = dotenv_values(stream=StringIO("HELLO=World"))
```

Optional keyword arguments are strict, ignore (diagnostic codes), convention, key_files, and resolve_references. Reference resolution defaults to false.
