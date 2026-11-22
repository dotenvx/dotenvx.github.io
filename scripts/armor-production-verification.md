# Armor production guide verification

Guide: `docs/custody/armor-heroku.md`. Reviewed 2026-11-22. This file is excluded from the public site by the `scripts` exclusion.

## Evidence inspected

| Checkout and commit | Files | Claims checked |
| --- | --- | --- |
| dotenvx, `76c60dc31812d6b2c5d10158e8d6b5ee723f99bc` | `src/cli/dotenvx.js`, `src/cli/actions/run.js`, `src/lib/services/armorUp.js` | Explicit runtime token, strict startup failure before command execution, environment-specific key upload and local-key removal after success. |
| providers, `e6ab6d61810c504ba5b57cf74b0893654a252ba4` | `src/index.js`, `src/armor.js`, `src/armorSession.js`, `src/armorRequest.js`, `src/armorApprovalRequest.js` | File/native provider precedence, request-scoped key retrieval without a persisted offline private-key cache, network-error handling, 30-second request timeout and separate approval polling. |
| radar, `4187adc2cfaaafb3bcf17bfaf70df95e0294439c` | `app/models/token.rb`, `app/services/current_token_service/find.rb`, `app/services/api_service/armor_keyring.rb` | Automation tokens belong to an organization, require the automation-token entitlement, and look up keys in the default organization. Do not imply per-key workload-token scope or OIDC attestation. |
| radar, same commit | `app/controllers/api_controller.rb` (`logs`), `app/services/activity_service/log_query.rb`, `app/serializers/api/log_serializer.rb`, `app/models/activity.rb` | Log-read permission, `action`, `resource=keypair/PUBLIC_KEY`, `result=success`, response fields and successful key-access metadata. The older public API reference uses different filter names; the guide follows the implementation. |
| radar, same commit | `app/services/api_service/armor_keyring.rb`, `app/services/api_service/armor_decrypt.rb`, `app/jobs/activity_job/create.rb` | `keypair/access` for key retrieval versus `keypair/decrypt` for server-side decryption; activity creation is queued. Successful startup is not proof of delivered audit evidence. |
| radar, same commit | `config/pre_initializers/00_constants.rb`, `app/services/api_service/enclaved_keypair_create.rb`, `app/services/connection_service/remote_heroku.rb`, `app/services/connection_service/remote_heroku_secrets.rb` | Heroku is a supported, visible connection. The provisioner generates the key, stores a public-only record, and writes the private key to app config vars. Both keyring retrieval and server-side decryption reject exclusive-custody keys. |

Platform references:

- [Heroku container registry and runtime](https://devcenter.heroku.com/articles/container-registry-and-runtime): Docker image build/push/release, runtime config vars, dynamic PORT, and the platform's non-root runtime identity.
- [Heroku config vars](https://devcenter.heroku.com/articles/config-vars): configuration supplied to the running app.
- Existing repository guides: `docs/docker.md`, `docs/platforms/heroku.md`, `docs/cli/run-strict.md`, `docs/cli/armor/up.md`.

## Executed checks

- Built the site with Jekyll.
- Followed the Armor subnav Trust Center link at desktop width and 390px mobile width. Both reached `https://trust.oneleet.com/dotenvx` through `https://dotenvx.com/trust/`.
- Invoked the adjacent CLI in a temporary directory with synthetic encrypted configuration, a synthetic token, isolated HOME/config, and an unreachable loopback Armor host. Strict startup returned status 1 without launching the child command.
- Invoked the same CLI with the synthetic production private key supplied through the environment and `--no-armor`. Decryption and the child command succeeded.

## Checks still required

The user specified `dotenvx install --add armor` as the intended installation workflow. That command is not present in the inspected CLI checkout, so the installer/add-on packaging is an explicit verification item, not a tested claim. The public guide carries no release numbers.

No production credentials, external key upload, config-var change, token creation/revocation, billable deployment, or live audit query was performed. Before production signoff, use a staging Heroku app to verify:

1. The image builds with the intended installer and Armor add-on. The add-on loads under Heroku's arbitrary non-root user, with writable runtime configuration.
2. The app starts using only its Armor token, without a private-key fallback, and the expected successful audit event arrives.
3. An operator's log query filters the correct team, resource and event and identifies the workload token. Verify permissions and audit retention.
4. Guard approval, revocation and timeouts interact acceptably with Heroku's startup deadline and restart policy.
5. Blocking Armor leaves an existing app serving while strict new starts fail. Restoring connectivity allows a fresh start and corresponding audit event.
6. Heroku Enclaved provisioning writes the expected production config var. A freshly started dyno using the explicit `--no-armor` entrypoint decrypts with Armor blocked, and does not claim an Armor per-start audit event.
