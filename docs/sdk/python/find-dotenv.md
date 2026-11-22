---
title: find_dotenv
description: Find an env file by walking upward from the current directory.
permalink: "/docs/sdk/python/find-dotenv/"
doc_type: sdk
command: find_dotenv(filename=".env", raise_error_if_not_found=False)
command_language: python
eyebrow: Python
eyebrow_href: "/docs/sdk/python/"
---

Returns the path, or an empty string when no file is found. Set raise_error_if_not_found=True to raise IOError instead.

```python
from dotenvx import find_dotenv
path = find_dotenv(".env", raise_error_if_not_found=True)
```
