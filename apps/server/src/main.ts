import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TsrestRouter } from './tsrest/tsrest.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const tsrest = app.get(TsrestRouter);
  tsrest.applyMiddleware(app);
  await app.listen(process.env.NEST_PORT || 4000);
}
bootstrap();
