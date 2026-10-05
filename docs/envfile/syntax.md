---
layout: docs-cli
title: Syntax
description: Understand valid declarations and syntax errors.
permalink: "/docs/envfile/syntax/"
eyebrow: Envfile
eyebrow_href: "/docs/envfile/"
command: env "KEY"
command_prompt: false
related:
- title: Envfile Quickstart
  href: "/docs/quickstart/envfile/"
- title: Full Envfile Spec
  href: "/docs/envfile-spec/"
---
Duplicate declarations in one scope, duplicate options (including both spellings of an alias), and duplicate normalized file paths are errors. Unknown options are errors too. The current language has no value assignments, default values, imports, interpolation, loops, executable Ruby, or TOML syntax. Put actual values in your environment sources.

An invalid Envfile reports `MALFORMED_ENVFILE`. A failed validation reports `INVALID_ENV`. `dotenvx check` requires an Envfile; `.env.example` is not a substitute.
