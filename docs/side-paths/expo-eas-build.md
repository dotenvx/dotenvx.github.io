---
layout: docs-side-path
title: EAS Build
description: Decrypt your production configuration on an EAS Build worker.
permalink: /docs/expo/eas-build/
markdown_url: /docs/expo/eas-build.md
parent_url: /docs/expo/#production
parent_title: Expo
side_path_kind: Alternative
---

Complete [EAS Build setup](https://docs.expo.dev/build/setup/) for your project. Keep the encrypted .env.production from the main guide.

Wrapping eas build in Dotenvx only affects the local command. The remote worker needs its own key and decryption step.

## Provide the key

Retrieve your production private key locally:

```console
$ npx dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production
```
{: copy="npx dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production" package-manager="npm"}

```console
$ pnpm exec dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production
```
{: copy="pnpm exec dotenvx keypair DOTENV_PRIVATE_KEY_PRODUCTION -f .env.production" package-manager="pnpm"}

In your Expo project's Environment Variables settings, create DOTENV_PRIVATE_KEY_PRODUCTION in the production environment with **Secret** visibility. Set its value to your key. Keep it out of eas.json and your app config.

## Configure the worker

Merge these settings into your production build profile in eas.json:

```json
{
  "build": {
    "production": {
      "environment": "production",
      "env": {
        "EXPO_NO_DOTENV": "1"
      }
    }
  }
}
```
{: label="eas.json"}

Load Dotenvx in metro.config.js on the EAS worker, before creating the Metro config. Preserve your existing Metro customizations:

```javascript
// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

if (process.env.EAS_BUILD === 'true') {
  require('@dotenvx/dotenvx').config({
    path: '.env.production',
    strict: true,
  });
}

module.exports = getDefaultConfig(__dirname);
```

This loads the public values for bundling. Values needed earlier by app.config.js, config plugins, or native prebuild must be supplied separately through EAS configuration; Metro runs later.

Ensure the build archive includes encrypted .env.production and excludes .env.keys. If you use .easignore, keep its existing rules and add:

```gitignore
!.env.production
.env.keys*
```
{: label=".easignore"}

If creating .easignore, start with your .gitignore rules. Avoid defining the same public variables in EAS and .env.production, since existing environment values take precedence.

## Build

```console
$ npx eas-cli@latest build --profile production
```
{: copy="npx eas-cli@latest build --profile production" package-manager="npm"}

```console
$ pnpm dlx eas-cli@latest build --profile production
```
{: copy="pnpm dlx eas-cli@latest build --profile production" package-manager="pnpm"}

The worker decrypts the file before Metro bundles the app. EXPO_PUBLIC_HELLO becomes a public app value; the private key stays in the build environment.

Follow the build's installation or submission instructions. See [EAS environment variables](https://docs.expo.dev/eas/environment-variables/usage/) for worker configuration details.
