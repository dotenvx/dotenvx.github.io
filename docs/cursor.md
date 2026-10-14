---
og_image:
  template: logo
  logo: _includes/icons/docs/cursor.html
  alt: Cursor
layout: docs-markdown
title: "Cursor"
social_title: "Runtime leak protection for Cursor agents"
description: "Runtime leak protection and log redaction for Cursor agents. Give Cursor real secrets while redacting them from output, terminals, and agent transcripts."
icon: cursor
show_icon: true
permalink: /docs/cursor/
redirect_from:
  - /docs/secrets-in-cursor/
  - /docs/secrets-in-cursor
video: ai-redaction
quickstart_pager: true
---

## Prerequisites

Install the [Cursor CLI](https://cursor.com/cli). The Cursor desktop app does not necessarily install the separate `agent` command.

```console
$ curl https://cursor.com/install -fsS | bash
$ agent --version
```
{: copy="curl https://cursor.com/install -fsS | bash
agent --version"}

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

## Run Cursor with redaction

Runtime leak protection: Cursor gets real secrets, while log redaction strips them from its output.

```console
$ dotenvx run --redact -- agent -p --force 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --output-format text
Hello [REDACTED]
```
{: copy="dotenvx run --redact -- agent -p --force 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --output-format text"}
