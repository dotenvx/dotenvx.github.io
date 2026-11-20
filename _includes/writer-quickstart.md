> {{ page.description }}

## Install

{% assign cli = site.data.install_methods | where: 'name', 'CLI' | first %}
```bash
{{ cli.command }}
```

## Encrypt

Create a `.env` file in your project root.

```dotenv
HELLO="Secret"
```

Encrypt the values in it.

```cli
$ dotenvx encrypt
◈ encrypted (.env)
```
{: copy="dotenvx encrypt"}

### CI / Production

For ci or production create a `.env.{environment}` and encrypt it.

```dotenv
# .env.production
HELLO="Production"
```

```cli
$ dotenvx encrypt -f .env.production
```
{: copy="dotenvx encrypt -f .env.production"}

## Commit

Commit the encrypted `.env` with your code. Keep the private key out of Git.

```cli
$ git add .env
$ git commit -m "encrypt .env"
```
{: copy='git add .env
git commit -m "encrypt .env"'}

## Ship

Create `index.js`.

```javascript
console.log(`Hello ${process.env.HELLO}`)
```

Run it with Dotenvx to load the secret.

```cli
$ dotenvx run -- node index.js
⟐ injected env (2) from .env
Hello Secret
```
{: copy="dotenvx run -- node index.js"}

### CI / Production

Set `DOTENV_PRIVATE_KEY_{environment}` on your server and run your app in ci or production.

```cli
$ dotenvx run -f .env.production -- node index.js
⟐ injected env (2) from .env.production
Hello Production
```
{: copy="dotenvx run -f .env.production -- node index.js"}

Dotenvx uses the private key from your deployment environment to decrypt and load your secrets at runtime.
