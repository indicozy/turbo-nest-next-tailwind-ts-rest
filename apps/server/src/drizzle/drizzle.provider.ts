import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/mysql2";

import { env } from "../env.mjs";
import * as schema from "./schema";

export const DrizzleAsyncProvider = "drizzleProvider";

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    useFactory: async () => {
      const connection = connect({
        //  TODO:
        host: process.env["DATABASE_HOST"],
        username: process.env["DATABASE_USERNAME"],
        password: process.env["DATABASE_PASSWORD"],
      });
      const db = drizzle(connection, { schema, mode: "planetscale" });
      return db;
    },
    exports: [DrizzleAsyncProvider],
  },
];
