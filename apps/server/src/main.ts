import { NestFactory } from "@nestjs/core";
import { SwaggerModule } from "@nestjs/swagger";

import { contract } from "@taskbounty-app/api/contract";
import { openApiDocument } from "@taskbounty-app/api/openapi";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const document = openApiDocument;
  SwaggerModule.setup("docs", app, document);
  //                   ^ Path for swagger
  await app.listen(process.env.NEST_PORT || 4000);
}
bootstrap();
