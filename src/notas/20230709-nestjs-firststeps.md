---
tags: ["nestjs", "howto"]
---
# 20230709: Primeros pasos con NestJS

<TagLinks />

- NestJS es un framework para NodeJS basado en ExpressJS.

## Instalación

- `npm i -g @nestjs/cli`

## Nuevo proyecto

- `nest new myproject`
- `cd myproject`
- `npm install`
- `npm run start`
- http://localhost:3000

## Desarrollando

- `npm run test
- `npm run start:dev`
- En Windows, el **linter** puede molestar con respecto a que nuestros finales de línea terminen en CRLF en lugar de LF.
	- Para evitar esto, se puede agregar `"endOfLine": "auto"` en  `.prettierrc`

- `.prettierrc`
```
{
  "singleQuote": true,
  "trailingComma": "all",
  "endOfLine": "auto"
}
```

## Swagger (API Docs)

- [OpenAPI (Swagger) | NestJS - A progressive Node.js framework](https://docs.nestjs.com/openapi/introduction)
- `npm install --save @nestjs/swagger`
- `src\main.ts`

```ts
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Primeros Pasos')
    .setDescription('Saludando a todos')
    .setVersion('1.0')
    .addTag('helloworld')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidoc', app, document);

  await app.listen(3000);
}
bootstrap();
```

- http://localhost:3000/apidoc
- http://localhost:3000/apidoc-json

## REPL

- [REPL | NestJS - A progressive Node.js framework](https://docs.nestjs.com/recipes/repl)

- `src\repl.ts`
```ts
import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await repl(AppModule);
}
bootstrap();
```

- `npm run start -- --entryFile repl`

```
help()
debug()
methods(AppService)
get(AppService).helloworld()
methods(AppController)
get(AppController).hello('Antonio')
.exit
```

- Para facilitar, se puede agregar este script en el `package.json`:
	- `"repl": "npm run start -- --entryFile repl"`
- `npm run repl`

## Site estático

- [Serve static | NestJS - A progressive Node.js framework](https://docs.nestjs.com/recipes/serve-static)

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/dist'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

- `npm create vite@latest client`

## Proyecto personal

- [akobashikawa/nest-firststeps: Aprendiendo NestJS](https://github.com/akobashikawa/nest-firststeps)
	- [akobashikawa/nest-firststeps at 01-helloworld](https://github.com/akobashikawa/nest-firststeps/tree/01-helloworld)
		- Saludar al mundo
	- [akobashikawa/nest-firststeps at 02-hello](https://github.com/akobashikawa/nest-firststeps/tree/02-hello)
		- Saludar a alguien