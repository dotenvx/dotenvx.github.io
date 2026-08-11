---
layout: docs-cli
title: "run - Interpolation Syntax Summary (Variable Expansion, Default/Alternate Values)"
description: Complete reference for variable interpolation patterns supported by dotenvx.
permalink: /docs/cli/run-interpolation-syntax-summary/
redirect_from:
  - /docs/ref/cli/run-interpolation-syntax-summary/
  - /docs/ref/cli/run-interpolation-syntax-summary
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
# .env
DEFINED_VAR=hello
EMPTY_VAR=
# UNDEFINED_VAR is not set

# Default value syntax - use variable if set/non-empty, otherwise use default
TEST1=${DEFINED_VAR:-fallback}     # Result: "hello"
TEST2=${EMPTY_VAR:-fallback}       # Result: "fallback"
TEST3=${UNDEFINED_VAR:-fallback}   # Result: "fallback"

# Default value syntax (no colon) - use variable if set, otherwise use default
TEST4=${DEFINED_VAR-fallback}      # Result: "hello"
TEST5=${EMPTY_VAR-fallback}        # Result: "" (empty, but set)
TEST6=${UNDEFINED_VAR-fallback}    # Result: "fallback"

# Alternate value syntax - use alternate if variable is set/non-empty, otherwise empty
TEST7=${DEFINED_VAR:+alternate}    # Result: "alternate"
TEST8=${EMPTY_VAR:+alternate}      # Result: "" (empty)
TEST9=${UNDEFINED_VAR:+alternate}  # Result: "" (empty)

# Alternate value syntax (no colon) - use alternate if variable is set, otherwise empty
TEST10=${DEFINED_VAR+alternate}    # Result: "alternate"
TEST11=${EMPTY_VAR+alternate}      # Result: "alternate" (empty but set)
TEST12=${UNDEFINED_VAR+alternate}  # Result: "" (empty)
{% endcapture %}
{% capture cli_code_0_copy %}# .env{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

**Key differences:**
- `:-` vs `-`: The colon makes empty values trigger the fallback
- `:+` vs `+`: The colon makes empty values not trigger the alternate
- Default syntax (`-`): Use variable value or fallback
- Alternate syntax (`+`): Use alternate value or empty string

**Disabling Variable Expansion:**

To disable variable expansion use single quotes like `PASSWORD='pa$$word@'` to get the result 'pa$$word@'.
