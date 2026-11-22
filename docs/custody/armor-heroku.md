---
title: Deploy Armor on Heroku
description: Deploy encrypted production configuration with Docker, authenticate a Heroku workload to Armor, and verify its key-access audit event.
permalink: /docs/custody/armor/heroku/
main_layout: single
eyebrow: Armor custody
eyebrow_href: /docs/custody/armor/
---

Deploy a Node.js service to Heroku with an encrypted .env.production in its image and its private key in Armor. CI builds and releases the image; the running dyno authenticates to Armor before starting the app.

This guide uses an **Armored Key** first, then explains the **Enclaved Key** alternative on the same platform. The availability and audit behavior differs. See [Verification before production](#verification-before-production) for the checks that still need a live deployment.

## What runs where

| Component | What it holds and does |
| --- | --- |
| Git and container registry | App code, encrypted .env.production, and its public key. No private key or Armor token. |
| CI runner | Heroku deployment credentials. Builds and publishes the image without decrypting production secrets. |
| Armor | The Armored private key, access settings, and key-access audit records. |
| Heroku config vars | An Armor automation token for the running service. No production private key for this Armored path. |
| Running dyno | Uses the token to request the private key, decrypts configuration, and starts the app with the resulting environment variables. |

The workload authenticates with an **Armor automation token**, not a Heroku OIDC identity. The token belongs to an Armor team, not a human user, and the current implementation looks up keys in that team. Treat it as a team credential; do not assume it is restricted to one key or bound to one dyno. Use a dedicated production team and keep its token out of other workloads.

Automation tokens require [Business](/pricing/). An operator who verifies audit records also needs permission to read that team's logs.

## 1. Install and prepare the production key

On your workstation, install Dotenvx and add Armor:

```shell
curl -sfS https://dotenvx.sh | sh
dotenvx install --add armor
dotenvx armor login
```

Create a separate .env.production. This demonstration value is a startup check, not a real credential:

```dotenv
DEPLOYMENT_CHECK="armor-production-ready"
```

Encrypt the file, choosing **Local** and **File .env.keys** when prompted. Then move that production key into your dedicated Armor team. Replace YOUR_PRODUCTION_TEAM with its slug:

```shell
dotenvx encrypt -f .env.production
dotenvx armor up -f .env.production --team YOUR_PRODUCTION_TEAM
```

Armor up removes the local key after the upload succeeds. Keep any remaining .env.keys files out of Git. Moving custody does not invalidate copies of the private key made earlier.

In Armor, create an automation token for this team. Store it in your secret manager until you configure Heroku. If the key requires human approval, every new startup can wait for that approval; include this in your operating procedure. Do not expect an unattended service to approve itself.

## 2. Build an image that decrypts at startup

Create server.cjs:

```javascript
const http = require('node:http')

if (process.env.DEPLOYMENT_CHECK !== 'armor-production-ready') {
  throw new Error('Production configuration was not loaded')
}

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('ok\n')
}).listen(Number(process.env.PORT || 3000), '0.0.0.0', () => {
  console.log('Production configuration loaded; server listening')
})
```

Create start.sh. Pass the automation token explicitly to Dotenvx; do not rely on a developer's saved login session:

```shell
#!/bin/sh
set -eu
: "${DOTENVX_TOKEN:?Set the production Armor automation token}"
export DOTENVX_CONFIG=/tmp/dotenvx
mkdir -p "$DOTENVX_CONFIG"
exec dotenvx run --strict -f .env.production \
  --token "$DOTENVX_TOKEN" -- node server.cjs
```

The configuration directory is writable under Heroku's runtime user. It is separate from the image builder's configuration. Never enable shell tracing in this script: the token is expanded into a command argument.

Create Dockerfile:

```dockerfile
FROM node:22-bookworm-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends curl ca-certificates \
  && rm -rf /var/lib/apt/lists/* \
  && curl -sfS https://dotenvx.sh | sh \
  && dotenvx install --add armor

WORKDIR /app
COPY server.cjs start.sh .env.production ./
RUN chmod 755 /app/start.sh

ENTRYPOINT ["/app/start.sh"]
```

Create both .gitignore and .dockerignore with these exclusions:

```text
.env.keys*
**/.env.keys*
```

Also exclude .git and node_modules from .dockerignore. If an existing ignore rule excludes .env.production, add !.env.production after it. Keep plaintext configuration, tokens, and developer login files outside the build context. The explicit COPY instructions include only the files this app needs.

```shell
git add -f .env.production
git add server.cjs start.sh Dockerfile .gitignore .dockerignore
git commit -m "deploy encrypted production configuration"
```

For repeatable production builds, pin the base image digest and use your approved Dotenvx installer artifact rather than a moving installer URL. Confirm that the Armor add-on installed in the image can be loaded by Heroku's non-root runtime user.

## 3. Configure Heroku and deploy from CI

Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), start Docker, and create a container-stack app:

```shell
heroku login
heroku create YOUR_HEROKU_APP --stack container
```

In that app's **Settings → Config Vars**, set DOTENVX_TOKEN to the production team's automation token. Do not set DOTENV_PRIVATE_KEY_PRODUCTION or copy .env.keys into the app for this path. Leave DEPLOYMENT_CHECK out of config vars so the startup check proves the encrypted file was loaded.

In your CI secret settings, provide HEROKU_API_KEY for a deployment account authorized for this app. Set HEROKU_APP to the app name. With the Heroku CLI and Docker available, run from the checked-out project:

```shell
heroku container:login
heroku container:push web --app "$HEROKU_APP"
heroku container:release web --app "$HEROKU_APP"
```

CI builds the Dockerfile, pushes its image to Heroku's registry, then releases it. It does not need the Armor token or production private key. The image installer needs network access, but it does not fetch production secrets. Follow Heroku's [container deployment documentation](https://devcenter.heroku.com/articles/container-registry-and-runtime) for runner setup and registry authentication.

At runtime, Heroku supplies PORT and the app's config vars. Dotenvx requests the key before Node starts. --strict stops startup on a decryption error. Only after successful decryption does the app begin listening. Do not pass the Armor token as a Docker build argument or image ENV instruction.

Deployment credentials can change the running code and app configuration. Keep their permissions and distribution separate from ordinary repository read access.

## 4. Verify the app and its audit event

Open the app and inspect its logs:

```shell
heroku open --app YOUR_HEROKU_APP
heroku logs --tail --app YOUR_HEROKU_APP
```

The response should be ok, and the startup log should say Production configuration loaded. Neither should contain a secret or private key.

Record the deployment time in UTC and the production public key from .env.production. On your workstation, signed in as an operator with log-read access, replace the team slug and public key in this request:

```shell
dotenvx curl 'https://armor.dotenvx.com/api/logs?team=YOUR_PRODUCTION_TEAM&action=keypair%2Faccess&resource=keypair%2FYOUR_PRODUCTION_PUBLIC_KEY&result=success'
```

For the successful startup, find a log entry with:

- name: keypair/access and outcome: success
- metadata.endpoint: /api/armor/keyring
- metadata.public_key: your production public key
- metadata.access_token_short: the prefix of this service's automation token
- occurred_at or created_at matching the deployment window

An automation token has no human username. Match the key, token prefix, and time rather than expecting the deploying engineer's identity. These fields identify the credential used; they do not attest a particular Heroku dyno or image digest.

Audit writes are asynchronous, so retry the read if the event has not appeared yet. Check the token's activity in Armor if the shortened prefix is ambiguous. A healthy app alone does not verify its audit trail; investigate missing events before accepting the deployment.

Restart the dyno and verify a fresh access event:

```shell
heroku ps:restart web --app YOUR_HEROKU_APP
```

## 5. Plan for cold starts and outages

With this Armored setup, every new container or app restart starts a new Dotenvx process and requests the key from Armor. The reviewed client does not persist a retrieved private key for offline startup. If Armor is unreachable and no other key source is present, --strict exits before Node starts. The reviewed request path has a 30-second timeout; approval waiting has a separate deadline. Do not treat those as a platform startup-time guarantee.

An already-running app keeps the environment loaded at startup. An Armor outage does not remove those values or stop that process. A later restart, scale-out, or deployment must retrieve the key again. Likewise, revoking a token does not erase secrets already loaded into a running app.

Test a blocked connection to Armor in a separate staging app: an existing instance should keep serving, while a newly started instance should fail to become ready. Restore connectivity and confirm a fresh instance starts and produces an access event. A request that never reaches Armor cannot produce an Armor-side access event.

Do not use --no-armor as an outage workaround for an Armored-only deployment: it cannot supply the missing private key. If you intentionally add a local or platform key as a fallback, document that it changes both the availability dependency and which starts Armor can audit.

## Alternative: Enclaved Keys on Heroku

An Enclaved Key provisioned into Heroku config vars changes where the private key is retained. Armor orchestrates provisioning and keeps the public key; Heroku holds the private key and injects it into the app. This is not the same as Armor's server-side decryption feature.

Use a separate staging app to try it. In Armor, connect Heroku with permission to update that app's config vars. Create a fresh plaintext .env.production for that app and run:

```shell
dotenvx encrypt -f .env.production
```

Choose **Enclaved**, select the Heroku connection and the exact app, and use DOTENV_PRIVATE_KEY_PRODUCTION as the key name. The provisioner generates a new keypair, writes the private key into that app's config vars, and returns the public key used to encrypt the file. Do not reuse an Armored ciphertext file with a different new key. Commit the resulting encrypted file and rebuild the image.

Replace start.sh with this entrypoint for the Enclaved app:

```shell
#!/bin/sh
set -eu
: "${DOTENV_PRIVATE_KEY_PRODUCTION:?Provision the Heroku Enclaved Key}"
exec dotenvx run --strict --no-armor -f .env.production -- node server.cjs
```

The startup explicitly uses the provisioned local key. It needs no Armor token or network request to Armor. With Heroku and its config vars available, a new dyno can start during an Armor outage. Provisioning or changing custody still needs Armor and the Heroku connection.

| Behavior | Armored Key | Heroku Enclaved Key |
| --- | --- | --- |
| Retained private key | Armor | Heroku app config vars |
| Startup credential | Team automation token | Platform-injected private key |
| Armor needed for each new startup | Yes | No, with the entrypoint above |
| Per-startup Armor audit event | keypair/access | None; decryption happens locally |
| Per-startup Armor approval | Applies if configured | Not on this local decryption path |

Heroku app/config permissions govern who can obtain the Enclaved private key. This is a platform secret, not a claim of hardware isolation or a non-exportable key. Use Heroku's audit capabilities for platform configuration access; they are not a record of every local decryption. Revoking an Armor token does not revoke a key already provisioned into Heroku.

## Verification before production

Key lookup, --strict error handling, team-token authorization, audit fields, and Heroku Enclaved provisioning were checked against the current client and server implementation. Heroku's container build, release, and runtime environment behavior was checked against its [container docs](https://devcenter.heroku.com/articles/container-registry-and-runtime) and [config-var docs](https://devcenter.heroku.com/articles/config-vars).

**Still needs a live deployment check:** the complete installer/add-on flow under Heroku's runtime user, successful startup and matching audit delivery, startup timing with your Guard policy, token revocation, a blocked-Armor restart, and an Enclaved restart with Armor blocked. Run these in staging before relying on the behavior in production. No live Heroku deployment was used to validate this guide.
