---
title: load_dotenv
description: Load values into os.environ and return whether values were resolved.
permalink: "/docs/sdk/python/load-dotenv/"
doc_type: sdk
command: load_dotenv()
command_language: python
eyebrow: Python
eyebrow_href: "/docs/sdk/python/"
---

Accepts a path, a sequence of paths, or stream=. Existing values win unless override=True. Returns bool(result values), not a count of changed variables. PYTHON_DOTENV_DISABLED disables loading.

```python
from dotenvx import load_dotenv
loaded = load_dotenv(".env.production", override=True, strict=True)
```

Optional keyword arguments are strict, ignore (diagnostic codes), convention, key_files, and resolve_references. Reference resolution defaults to false.
