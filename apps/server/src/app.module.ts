import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { DrizzleModule } from "./drizzle/drizzle.module";
import { TsRestModule } from "./ts-rest/ts-rest.module";

@Module({
  imports: [ConfigModule.forRoot(), TsRestModule, DrizzleModule],
})
export class AppModule {}
