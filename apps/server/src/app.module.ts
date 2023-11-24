import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TsrestModule } from './tsrest/tsrest.module';

@Module({
  imports: [ConfigModule.forRoot(), TsrestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
