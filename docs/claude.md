---
og_image:
  template: logo
  logo: _includes/icons/docs/claude-code.html
  alt: Claude Code
layout: docs-markdown
title: "Claude Code"
social_title: "Runtime leak protection for Claude coding agents"
description: "Runtime leak protection and log redaction for Claude Code. Give Claude real secrets while redacting them from output, terminals, and agent transcripts."
icon: claude
show_icon: true
permalink: /docs/claude/
redirect_from:
  - /docs/secrets-in-claude/
  - /docs/secrets-in-claude
video: ai-redaction
quickstart_pager: true
---

## Prerequisites

Install [Claude Code](https://code.claude.com/docs/en/setup) to get the `claude` command.

```console
$ curl -fsSL https://claude.ai/install.sh | bash
$ claude --version
```
{: copy="curl -fsSL https://claude.ai/install.sh | bash
claude --version"}

## Install

Get the Dotenvx CLI.

```console
$ curl -sfS https://dotenvx.sh | sh
```
{: copy="curl -sfS https://dotenvx.sh | sh"}

## Add your secrets

Add a secret to your `.env` file.

```console
$ echo "HELLO=World" > .env
```
{: copy="echo \"HELLO=World\" > .env"}

## Run Claude with redaction

Runtime leak protection: Claude gets real secrets, while log redaction strips them from its output.

```console
$ dotenvx run --redact -- claude -p 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --dangerously-skip-permissions
Hello [REDACTED]
```
{: copy="dotenvx run --redact -- claude -p 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --dangerously-skip-permissions"}
