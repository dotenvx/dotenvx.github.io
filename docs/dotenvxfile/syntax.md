---
layout: docs-cli
title: Syntax
description: Understand valid declarations and syntax errors.
permalink: "/docs/dotenvxfile/syntax/"
redirect_from:
  - /docs/envfile/syntax
  - /docs/envfile/syntax/
eyebrow: Dotenvxfile
eyebrow_href: "/docs/dotenvxfile/"
command: env "KEY"
command_prompt: false
related:
- title: Dotenvxfile Quickstart
  href: "/docs/quickstart/dotenvxfile/"
- title: Full Dotenvxfile Spec
  href: "/docs/dotenvxfile-spec/"
---
Duplicate declarations in one scope, duplicate options (including both spellings of an alias), and duplicate normalized file paths are errors. Unknown options are errors too. The current language has no value assignments, default values, imports, interpolation, loops, executable Ruby, or TOML syntax. Put actual values in your environment sources.

An invalid Dotenvxfile reports `MALFORMED_DOTENVXFILE`. A failed validation reports `INVALID_ENV`. Validation rules come from Dotenvxfile; `.env.example` is not a substitute.
