---
layout: docs-side-path
title: EAS Update
description: Publish a bundle exported with your encrypted production configuration.
permalink: /docs/expo/eas-update/
markdown_url: /docs/expo/eas-update.md
parent_url: /docs/expo/#production
parent_title: Expo
side_path_kind: Alternative
---

Complete [EAS Update setup](https://docs.expo.dev/eas-update/getting-started/) and install a build configured for the production channel and a compatible runtime version.

## Export with Dotenvx

On a machine with access to the production private key, create a fresh export using the script from the main guide:

```console
$ npm run export
```
{: copy="npm run export" package-manager="npm"}

```console
$ pnpm export
```
{: copy="pnpm export" package-manager="pnpm"}

This decrypts .env.production before Expo bundles the public variables into dist. EAS variables with Secret visibility cannot be downloaded to your local machine; use your local .env.keys or provision DOTENV_PRIVATE_KEY_PRODUCTION in your CI secret store.

## Publish the exported bundle

Use --skip-bundler to publish the export you just created:

```console
$ npx eas-cli@latest update --channel production --environment production --skip-bundler --input-dir dist --message "Update production"
```
{: copy="npx eas-cli@latest update --channel production --environment production --skip-bundler --input-dir dist --message \"Update production\"" package-manager="npm"}

```console
$ pnpm dlx eas-cli@latest update --channel production --environment production --skip-bundler --input-dir dist --message "Update production"
```
{: copy="pnpm dlx eas-cli@latest update --channel production --environment production --skip-bundler --input-dir dist --message \"Update production\"" package-manager="pnpm"}

The environment flag selects the EAS environment; it does not replace values already embedded in this exported bundle. Keep the export's app configuration consistent with the installed build.

Re-export before every update after changing configuration. Never publish .env.keys or encrypted .env files as app assets. See the [EAS CLI reference](https://docs.expo.dev/eas/cli/#eas-update) for publishing options.
