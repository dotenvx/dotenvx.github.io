---
layout: docs-quickstart
title: "Expo"
social_title: "Encrypt a .env file in Expo"
description: "Encrypt a .env file in Expo with the Dotenvx Node.js SDK, commit it safely, and load its secrets at runtime."
icon: expo
permalink: /docs/expo/
redirect_from:
  - /docs/secrets-in-expo/
  - /docs/secrets-in-expo
install_lede: "Get the Dotenvx Node.js SDK."
install_copy: "npm install @dotenvx/dotenvx"
install: |
  $ npm install @dotenvx/dotenvx
encrypt_copy: "npx dotenvx encrypt"
encrypt: |
  $ npx dotenvx encrypt
inject_lede: "Preface Expo scripts with `dotenvx run --`."
inject_copy: |
  {
    "scripts": {
      "start": "dotenvx run -- expo start",
      "android": "dotenvx run -- expo start --android",
      "ios": "dotenvx run -- expo start --ios",
      "web": "dotenvx run -- expo start --web"
    }
  }
inject: |
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
---
