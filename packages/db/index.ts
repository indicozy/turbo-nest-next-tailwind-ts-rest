import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import * as all_schemas from "./schema/schema";

export const schema = { ...all_schemas };

export { mySqlTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

export const db = drizzle(
  new Client({
    url: process.env.DATABASE_URL,
  }).connection(),
  { schema },
);
