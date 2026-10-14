---
og_image:
  template: logo
  logo: _includes/icons/docs/openai.html
  alt: Codex
layout: docs-markdown
title: "Codex"
social_title: "Runtime leak protection for Codex agents"
description: "Runtime leak protection and log redaction for Codex. Give Codex real secrets while redacting them from output, terminals, and agent transcripts."
icon: codex
show_icon: true
permalink: /docs/codex/
redirect_from:
  - /docs/secrets-in-codex/
  - /docs/secrets-in-codex
video: ai-redaction
quickstart_pager: true
---

## Prerequisites

Install the [Codex CLI](https://developers.openai.com/codex/cli/) to get the `codex` command.

```console
$ npm install -g @openai/codex
$ codex --version
```
{: copy="npm install -g @openai/codex
codex --version"}

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

## Run Codex with redaction

Runtime leak protection: Codex gets real secrets, while log redaction strips them from its output.

```console
$ dotenvx run --redact -- codex exec 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --skip-git-repo-check
Hello [REDACTED]
```
{: copy="dotenvx run --redact -- codex exec 'Run `dotenvx get HELLO` and echo back just Hello VALUE' --skip-git-repo-check"}
