import { Inject, Injectable } from "@nestjs/common";
import { MySql2Database } from "drizzle-orm/mysql2";

import { DrizzleAsyncProvider } from "../../../drizzle/drizzle.provider";
import * as schema from "../../../drizzle/schema";

@Injectable()
export class TsRestService {
  constructor(
    @Inject(DrizzleAsyncProvider) private db: MySql2Database<typeof schema>,
  ) {}
}
