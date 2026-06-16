# Secure Dotenv

Encrypt `.env` files. Inject secrets at runtime.

From the creator of dotenv.

## Actions

- Install the CLI: `curl -sfS https://dotenvx.sh | sh`
- [Documentation](https://dotenvx.com/docs)

## Open Source, Trusted Across Leading Developer Stacks

Dotenvx is open source and used across developer tools, cloud platforms, and agent workflows.

- [Google Cloud Run MCP](https://github.com/search?q=repo%3AGoogleCloudPlatform%2Fcloud-run-mcp%20dotenvx&type=code)
- [Supabase local development docs](https://supabase.com/docs/guides/local-development/managing-config#going-further)
- [Daytona](https://github.com/search?q=repo%3Adaytonaio%2Fdaytona%20dotenvx&type=code)
- [Polygon](https://github.com/search?q=org%3A0xPolygon%20dotenvx&type=code)
- [NASA Earthdata Search](https://github.com/search?q=repo%3Anasa%2Fearthdata-search%20dotenvx&type=code)
- [Webflow CLI](https://www.npmjs.com/package/@webflow/webflow-cli?activeTab=dependencies)
- [Tencent CloudBase](https://github.com/search?q=org%3ATencentCloudBase%20dotenvx&type=code)
- [PayPal Agent Toolkit](https://github.com/search?q=repo%3Apaypal%2Fagent-toolkit%20dotenvx&type=code)
- [CrowdStrike Foundry Playwright](https://github.com/search?q=repo%3ACrowdStrike%2Ffoundry-playwright%20dotenvx&type=code)
- [AWS Amplify docs](https://docs.amplify.aws/react/deploy-and-host/fullstack-branching/secrets-and-vars/#local-environment-2)
- [shadcn/ui](https://github.com/search?q=repo%3Ashadcn-ui%2Fui%20dotenvx&type=code)
- [browser-use](https://github.com/search?q=org%3Abrowser-use%20dotenvx&type=code)

## One-Line Upgrade

Install and use it in code just like dotenv.

```js
// index.js
require('@dotenvx/dotenvx').config()

// or import '@dotenvx/dotenvx/config' // for esm

console.log(`Hello ${process.env.HELLO}`)
```

Install with npm:

```sh
npm install @dotenvx/dotenvx --save
```

## Your .env File, Encrypted

Commit encrypted secrets to git while keeping decryption keys separate.

```sh
dotenvx encrypt
```

Encrypted `.env` files can be committed to git. Private decryption keys stay separate.

Documentation: [Encryption](https://dotenvx.com/docs/quickstart#add-encryption)

## Built On Public-Key Cryptography

Dotenvx encrypts each secret individually using ECIES public-key encryption. Encrypted `.env` files can be safely committed to git while decryption keys remain separate.

- ECIES
- AES-256
- secp256k1

Read the whitepaper: [dotenvx.pdf](https://dotenvx.com/dotenvx.pdf)

## Built For Secure .env Workflows

Keep the simplicity of `.env` files while adding encryption, auditing, and rotation.

### Encrypt

```sh
dotenvx encrypt
```

### Inject

```sh
dotenvx run -- your-command
```

Documentation: [Run Anywhere](https://dotenvx.com/docs/quickstart#run-anywhere)

### Scope

```sh
dotenvx run -f .env.production -- your-command
```

Documentation: [Multiple Environments](https://dotenvx.com/docs/quickstart#multiple-environments)

### Audit

```sh
git diff .env*
```

### Rotate

```sh
dotenvx rotate
```

## Built Because .env Files Still Matter

A message from the creator of dotenv and dotenvx.

Developers use environment files because they are simple.

They work everywhere: local development, CI, containers, servers, and cloud platforms. They became part of modern software because they reduced friction instead of adding to it.

But simplicity came with a cost. Plaintext secrets spread quietly across laptops, repositories, CI systems, chat messages, screenshots, and production machines.

We believe the answer is not abandoning environment files. The answer is securing them properly.

Dotenvx extends the environment file workflow with encryption, auditing, rotation, and runtime injection while preserving the simplicity that made `.env` successful in the first place.

As software becomes increasingly autonomous, secrets become increasingly valuable. API keys, credentials, tokens, and signing keys are now operational infrastructure. They deserve stronger protection.

That is what we are building with Dotenvx.

- Scott Motte, creator of dotenv and dotenvx

## Developers Are Keeping .env And Encrypting It

Developers are installing dotenvx 6.5 million times a week on npm to secure local development, CI, cloud infrastructure, and software agents.

- Ben Holmes: "dotenvx is really smart concept. Instead of plaintext `.env`'s, secrets are encrypted files. Agents can't read them, and they're shippable to cloud runners with a single key." [Source](https://x.com/bholmesdev/status/2029285485693039077?s=46)
- Kristian Freeman: "Dotenvx looks like an interesting upgrade to .env. Automatic encrypting of each value, almost identical usage in CLI and API." [Source](https://x.com/kristianfreeman/status/1808552701673808135?s=46)
- Zaid: "creators of dotenv have been working on dotenvx which encrypts your env variables so llms can't read them." [Source](https://x.com/zaidmukaddam/status/1941193539486089311?s=46)

## Keep .env. Encrypt Its Secrets.

- [Get Started](https://dotenvx.com/start)
- [Contact Us](https://dotenvx.com/contact)

## Links

- Website: [dotenvx.com](https://dotenvx.com)
- Documentation: [dotenvx.com/docs](https://dotenvx.com/docs)
- Armor: [dotenvx.com/armor](https://dotenvx.com/armor)
- Pricing: [dotenvx.com/pricing](https://dotenvx.com/pricing)
- Changelog: [dotenvx.com/changelog](https://dotenvx.com/changelog)
- GitHub: [github.com/dotenvx/dotenvx](https://github.com/dotenvx/dotenvx)
- npm: [@dotenvx/dotenvx](https://www.npmjs.com/package/@dotenvx/dotenvx)
