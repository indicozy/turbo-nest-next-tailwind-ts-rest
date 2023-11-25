import { Module } from "@nestjs/common";

import { DbProvider } from "./providers/db/db";

@Module({
  providers: [DbProvider],
})
export class GlobalModule {}
