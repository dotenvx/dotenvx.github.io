---
layout: docs-markdown
title: "Expo"
social_title: "Encrypt a .env file in Expo"
description: "Encrypt a .env file in Expo with the Dotenvx Node.js SDK, commit it safely, and load its secrets at runtime."
icon: expo
permalink: /docs/expo/
redirect_from:
  - /docs/secrets-in-expo/
  - /docs/secrets-in-expo
quickstart_pager: true
---

## Install

Get the Dotenvx Node.js SDK.

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx"}

## Encrypt

Encrypt your .env file.

```console
$ npx dotenvx encrypt
```
{: copy="npx dotenvx encrypt"}

## Inject

Preface Expo scripts with `dotenvx run --`.

```json
{
  "scripts": {
    "start": "dotenvx run -- expo start",
    "reset-project": "node ./scripts/reset-project.js",
    "android": "dotenvx run -- expo start --android",
    "ios": "dotenvx run -- expo start --ios",
    "web": "dotenvx run -- expo start --web",
    "lint": "expo lint"
  }
}
```
{: copy="{
  \"scripts\": {
    \"start\": \"dotenvx run -- expo start\",
    \"android\": \"dotenvx run -- expo start --android\",
    \"ios\": \"dotenvx run -- expo start --ios\",
    \"web\": \"dotenvx run -- expo start --web\"
  \}
\}"}
