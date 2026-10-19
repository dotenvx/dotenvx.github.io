---
layout: docs-side-path
title: Existing images / no Dockerfile
description: Decrypt configuration on the host for existing Docker images, including services with overlapping variable names.
permalink: /docs/docker-compose/existing-images/
markdown_url: /docs/docker-compose/existing-images.md
parent_url: /docs/docker-compose/#ship
parent_title: Docker Compose
side_path_kind: Alternative
---

Using existing images with separate Compose files and an include block? Install Dotenvx on the host, decrypt each service's values there, and pass them through explicit environment mappings. The images do not need Dotenvx or a custom Dockerfile.

## Why encrypted values reach the container

dotenvx run decrypts values into the environment of the command it launches. It does not decrypt files on disk and encrypt them again afterward. If a service uses env_file: .env.keeper, Compose still reads that file's encrypted contents directly.

Remove encrypted files from each service's env_file setting and from any include-level env_file setting. Use the mappings below to supply decrypted values. Compose's environment mapping explicitly selects what reaches each container; it does not forward the host's entire environment.

## Keep each service's values separate

This example uses three existing Node images to demonstrate the handoff. Keep your real images, commands, volumes, and ports when applying it to your stack. Use [Docker Compose 2.20.3 or later](https://docs.docker.com/compose/how-tos/multiple-compose-files/include/) for include.

Create these files in the same directory, each with the same variable name and a different demonstration value:

```dotenv
# .env.keeper
HELLO="Keeper"
```

```dotenv
# .env.trek
HELLO="Trek"
```

```dotenv
# .env.scrutiny
HELLO="Scrutiny"
```

Encrypt each file. Choose **Local** and store the keys in .env.keys:

```console
$ dotenvx encrypt -f .env.keeper
$ dotenvx encrypt -f .env.trek
$ dotenvx encrypt -f .env.scrutiny
```
{: copy="dotenvx encrypt -f .env.keeper
dotenvx encrypt -f .env.trek
dotenvx encrypt -f .env.scrutiny"}

If your files are already encrypted, use them and their existing keys. Keep .env.keys* in .gitignore and commit only the encrypted configuration files.

Create compose.yaml:

```yaml
include:
  - service_keeper.yaml
  - service_trek.yaml
  - service_scrutiny.yaml
```

Create service_keeper.yaml:

```yaml
services:
  keeper:
    image: node:22-alpine
    environment:
      HELLO: ${KEEPER_HELLO:?Run ./compose.sh}
    command: ["node", "-e", "console.log(process.env.HELLO)"]
```

Create service_trek.yaml:

```yaml
services:
  trek:
    image: node:22-alpine
    environment:
      HELLO: ${TREK_HELLO:?Run ./compose.sh}
    command: ["node", "-e", "console.log(process.env.HELLO)"]
```

Create service_scrutiny.yaml:

```yaml
services:
  scrutiny:
    image: node:22-alpine
    environment:
      HELLO: ${SCRUTINY_HELLO:?Run ./compose.sh}
    command: ["node", "-e", "console.log(process.env.HELLO)"]
```

Create compose.sh beside compose.yaml:

```sh
#!/bin/sh
set -eu
cd "$(dirname "$0")"

KEEPER_HELLO="$(dotenvx get HELLO -f .env.keeper --overload --strict)"
TREK_HELLO="$(dotenvx get HELLO -f .env.trek --overload --strict)"
SCRUTINY_HELLO="$(dotenvx get HELLO -f .env.scrutiny --overload --strict)"
export KEEPER_HELLO TREK_HELLO SCRUTINY_HELLO

exec docker compose "$@"
```

Each get reads one encrypted file using its matching key from .env.keys. --overload makes that file's value take precedence over an existing host variable named HELLO. --strict and set -e stop the script before Compose starts if a lookup or decryption fails.

The host uses distinct names, KEEPER_HELLO, TREK_HELLO, and SCRUTINY_HELLO. Each container still receives the name its application expects: HELLO. Loading all three files into one dotenvx run would produce only one shared HELLO value; include does not give that host variable a separate value per service.

For real variables such as DATABASE_URL or API_KEY, add one lookup and export per service and map each prefixed name back to the application's original name. List every variable the container needs. The private keys stay on the host, and the encrypted files stay encrypted on disk.

## Run the stack

```console
$ chmod +x compose.sh
$ ./compose.sh up -d
$ ./compose.sh logs
keeper-1    | Keeper
trek-1      | Trek
scrutiny-1  | Scrutiny
```
{: copy="chmod +x compose.sh
./compose.sh up -d
./compose.sh logs"}

Output order can vary. These demonstration containers print once and exit; your own servers would keep running. Print only demonstration values, never real secrets.

Use the wrapper for subsequent Compose commands too, so the required interpolation values are available:

```console
$ ./compose.sh down
```
{: copy="./compose.sh down"}

Decrypted values become part of the containers' configured environment. Avoid printing resolved docker compose config output with real secrets, and treat Docker access as access to those values. This approach creates no plaintext .env files.

