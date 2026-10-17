---
layout: docs-side-path
title: Use ConfigService
description: Read decrypted secrets through NestJS ConfigService.
permalink: /docs/nestjs/config-service/
markdown_url: /docs/nestjs/config-service.md
parent_url: /docs/nestjs/#ship
parent_title: NestJS
side_path_kind: Alternative
---

Prefer NestJS [ConfigService](https://docs.nestjs.com/techniques/configuration)? Keep the Dotenvx scripts from Ship and add @nestjs/config.

```console
$ npm install @nestjs/config
```
{: copy="npm install @nestjs/config" package-manager="npm"}

```console
$ pnpm add @nestjs/config
```
{: copy="pnpm add @nestjs/config" package-manager="pnpm"}

In your AppModule, import ConfigModule and add this to the module's imports array:

```typescript
import { ConfigModule } from '@nestjs/config';

// Inside @Module({ imports: [...] })
ConfigModule.forRoot({
  isGlobal: true,
  ignoreEnvFile: true,
})
```

Dotenvx already decrypts your secrets into process.env. Setting ignoreEnvFile prevents ConfigModule from reading the encrypted file again.

Use ConfigService in your app's service:

```typescript
// src/app.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}

  getHello(): string {
    return `Hello ${this.config.get<string>('HELLO')}`;
  }
}
```

Run npm start or pnpm start and visit [http://localhost:3000](http://localhost:3000) to see Hello Secret. The same setup works with the production script.
