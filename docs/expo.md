---
layout: docs-markdown
title: "Expo"
social_title: "Encrypt a .env file in Expo"
description: "Encrypt a .env file in Expo with Dotenvx, share access with your team, and load configuration before bundling."
icon: expo
permalink: /docs/expo/
markdown_url: /docs/expo.md
agent_prompt: Set up Dotenvx with Expo for me.
redirect_from:
  - /docs/secrets-in-expo/
  - /docs/secrets-in-expo
quickstart_pager: true
---

## Prerequisites

Create an [Expo app](https://docs.expo.dev/get-started/create-a-project/).

Expo bundles EXPO_PUBLIC_ values into your app. Encryption protects your .env files in git; it does not make shipped app values private. Keep real secrets on your backend or in build tooling.

## Install

Install Dotenvx in your Expo project:

```console
$ npm install @dotenvx/dotenvx
```
{: copy="npm install @dotenvx/dotenvx" package-manager="npm"}

```console
$ pnpm add @dotenvx/dotenvx
```
{: copy="pnpm add @dotenvx/dotenvx" package-manager="pnpm"}

## Encrypt

Start with a demonstration value in the .env file at your project root:

```dotenv
# .env
EXPO_PUBLIC_HELLO="Secret"
```
{: copy="EXPO_PUBLIC_HELLO=\"Secret\""}

Encrypt it with a single command.

```console
$ npx dotenvx encrypt
◈ encrypted .env (022 0D8) via .env.keys ⛉
```
{: copy="npx dotenvx encrypt" package-manager="npm"}

```console
$ pnpm exec dotenvx encrypt
◈ encrypted .env (022 0D8) via .env.keys ⛉
```
{: copy="pnpm exec dotenvx encrypt" package-manager="pnpm"}

The values become ciphertext and only your private key can unlock them.

```dotenv
# .env
DOTENV_PUBLIC_KEY="0220d830351410598be484f43a7b07097e09851f50426832876e8b5815a1752990"

EXPO_PUBLIC_HELLO="encrypted:BHLTACNJMr00nTG6yXpkCyWFKF/MY0ajN855tg3uVtKopTe2AGzSkQlcPd21pTOT3Ci8IKrdIg2TMZFoq1mDR6yb06QCRvqHXtpkZkAHYCEHfeWqqC8tMFovcYq5JS2uZSrC/qUGDA=="
```
{: class="design-codeblock--nowrap"}

## Commit

Commit your encrypted .env files with your code. It's safe. Now you can securely share secrets through git.

```console
$ git add .env
$ git commit -m "encrypt .env"
```
{: copy="git add .env
git commit -m \"encrypt .env\""}

## Ship

Read the value in a screen. For example, replace your Expo Router home screen with:

{% raw %}
```tsx
// app/index.tsx (or your existing home route)
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello {process.env.EXPO_PUBLIC_HELLO}</Text>
    </View>
  );
}
```
{% endraw %}

Use the full process.env.EXPO_PUBLIC_HELLO reference so Expo can inline it. Do not destructure process.env or use bracket notation.

Update these scripts in package.json, keeping your other scripts:

```json
{
  "scripts": {
    "start": "dotenvx run -e EXPO_NO_DOTENV=1 -f .env --strict -- expo start",
    "android": "dotenvx run -e EXPO_NO_DOTENV=1 -f .env --strict -- expo start --android",
    "ios": "dotenvx run -e EXPO_NO_DOTENV=1 -f .env --strict -- expo start --ios",
    "web": "dotenvx run -e EXPO_NO_DOTENV=1 -f .env --strict -- expo start --web",
    "export": "dotenvx run -e EXPO_NO_DOTENV=1 -f .env.production --strict -- expo export"
  }
}
```
{: label="package.json"}

The -e flag sets EXPO_NO_DOTENV to disable Expo's own .env loader. Dotenvx loads and decrypts the selected file before Expo starts.

Run your app:

```console
$ npm start
⟐ injected env (3) from .env (022 0D8) via .env.keys
```
{: copy="npm start" package-manager="npm"}

```console
$ pnpm start
⟐ injected env (3) from .env (022 0D8) via .env.keys
```
{: copy="pnpm start" package-manager="pnpm"}

Open the app in Expo Go or your development build to see Hello Secret. Restart the command and reload the app after changing .env.

[**Build-only secrets** Alternative →](/docs/expo/build-secrets/){: .side-path}

## Share

Have teammates? Share access with Dotenvx Armor ⛨

Log in to Dotenvx.

```console
$ npx dotenvx login
◉ logged in (username)
```
{: copy="npx dotenvx login" class="design-codeblock--nowrap" package-manager="npm"}

```console
$ pnpm exec dotenvx login
◉ logged in (username)
```
{: copy="pnpm exec dotenvx login" class="design-codeblock--nowrap" package-manager="pnpm"}

Create the Armored Key ⛨

```console
$ npx dotenvx armor up
⛨ armored .env (022 0D8)
```
{: copy="npx dotenvx armor up" class="design-codeblock--nowrap" package-manager="npm"}

```console
$ pnpm exec dotenvx armor up
⛨ armored .env (022 0D8)
```
{: copy="pnpm exec dotenvx armor up" class="design-codeblock--nowrap" package-manager="pnpm"}

Invite your teammate.

```console
$ npx dotenvx armor invite
⛨ invited person@example.com to team
```
{: copy="npx dotenvx armor invite" class="design-codeblock--nowrap" package-manager="npm"}

```console
$ pnpm exec dotenvx armor invite
⛨ invited person@example.com to team
```
{: copy="pnpm exec dotenvx armor invite" class="design-codeblock--nowrap" package-manager="pnpm"}

Your teammate accepts the invitation, pulls the repository, installs dependencies, and logs in with dotenvx login. They can then run the app:

```console
$ npm start
⟐ injected env (3) from .env (022 0D8) via Armor ⛨
```
{: copy="npm start" package-manager="npm"}

```console
$ pnpm start
⟐ injected env (3) from .env (022 0D8) via Armor ⛨
```
{: copy="pnpm start" package-manager="pnpm"}

Open the app to see Hello Secret.

[**Share a private key** Alternative →](/docs/expo/share-private-key/){: .side-path}

## Production

Create a .env.production file:

```dotenv
# .env.production
EXPO_PUBLIC_HELLO="Production"
```
{: copy="EXPO_PUBLIC_HELLO=\"Production\""}

Encrypt it:

```console
$ npx dotenvx encrypt -f .env.production
```
{: copy="npx dotenvx encrypt -f .env.production" package-manager="npm"}

```console
$ pnpm exec dotenvx encrypt -f .env.production
```
{: copy="pnpm exec dotenvx encrypt -f .env.production" package-manager="pnpm"}

For a local export, choose **Local** when prompted and store the key in .env.keys. Keep .env.keys out of git.

Commit the encrypted file:

```console
$ git add -f .env.production
$ git commit -m "encrypt .env.production"
```
{: copy="git add -f .env.production
git commit -m \"encrypt .env.production\""}

Export the production bundle:

```console
$ npm run export
```
{: copy="npm run export" package-manager="npm"}

```console
$ pnpm export
```
{: copy="pnpm export" package-manager="pnpm"}

Dotenvx decrypts .env.production on the build machine. Expo embeds the public value in the output under dist. The app does not need Dotenvx or a private key on the device.

This creates bundles, not an installable native app. Continue with EAS Build for a native build or EAS Update for an update to a compatible installed app.

[**EAS Build** Alternative →](/docs/expo/eas-build/){: .side-path}

[**EAS Update** Alternative →](/docs/expo/eas-update/){: .side-path}

## Conclusion

You've encrypted your configuration, shared access with Armor, and loaded production values before Expo bundles your app. Your encrypted files travel with your code; private keys stay on development and build machines.
