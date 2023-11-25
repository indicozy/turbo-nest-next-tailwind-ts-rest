import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TsrestModule } from './tsrest/tsrest.module';
import { TsRestModule } from './ts-rest/ts-rest.module';

@Module({
  imports: [ConfigModule.forRoot(), TsrestModule, TsRestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
