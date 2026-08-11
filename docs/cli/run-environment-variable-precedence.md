---
layout: docs-cli
title: run - Environment Variable Precedence
description: "When deploying applications in containers or cloud environments, you often need to override specific environment variables at runtime without modifying committed .env files. By default, dotenvx follows the historic dotenv principle: environment variables already present take precedence over .env files."
permalink: /docs/cli/run-environment-variable-precedence/
redirect_from:
  - /docs/advanced/run-environment-variable-precedence
  - /docs/advanced/run-environment-variable-precedence/
  - /docs/ref/cli/run-environment-variable-precedence
  - /docs/ref/cli/run-environment-variable-precedence/
crumbs:
  - label: Docs
    href: /docs/introduction
  - label: CLI
    href: /docs/cli
  - label: Run
    href: /docs/cli/run/
---
{% capture cli_code_0 %}
# .env.prod contains: MODEL_REGISTRY=registry.company.com/models/v1
$ echo "MODEL_REGISTRY=registry.company.com/models/v1" > .env.prod
$ echo "console.log('MODEL_REGISTRY:', process.env.MODEL_REGISTRY)" > app.js

# Without environment variable set - uses .env.prod value
$ dotenvx run -f .env.prod -- node app.js
MODEL_REGISTRY: registry.company.com/models/v1

# With environment variable set (e.g., via Azure Container Service) - environment variable takes precedence
$ MODEL_REGISTRY=registry.azure.com/models/v2 dotenvx run -f .env.prod -- node app.js
MODEL_REGISTRY: registry.azure.com/models/v2

# To force .env.prod to override environment variables, use --overload
$ MODEL_REGISTRY=registry.azure.com/models/v2 dotenvx run -f .env.prod --overload -- node app.js
MODEL_REGISTRY: registry.company.com/models/v1
{% endcapture %}
{% capture cli_code_0_copy %}# .env.prod contains: MODEL_REGISTRY=registry.company.com/models/v1
echo "MODEL_REGISTRY=registry.company.com/models/v1" > .env.prod
echo "console.log('MODEL_REGISTRY:', process.env.MODEL_REGISTRY)" > app.js
dotenvx run -f .env.prod -- node app.js
MODEL_REGISTRY=registry.azure.com/models/v2 dotenvx run -f .env.prod -- node app.js
MODEL_REGISTRY=registry.azure.com/models/v2 dotenvx run -f .env.prod --overload -- node app.js{% endcapture %}
{% include components/design-codeblock.html value=cli_code_0 copy_text=cli_code_0_copy %}

For container deployments: Set environment variables through your cloud provider's UI/configuration (Azure Container Service, AWS ECS, etc.) to override specific values from committed .env files without rebuilding your application.
