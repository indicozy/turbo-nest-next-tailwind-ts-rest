import { Module } from '@nestjs/common';
import { TsRestController } from './controllers/ts-rest/ts-rest.controller';

@Module({
  controllers: [TsRestController]
})
export class TsRestModule {}
