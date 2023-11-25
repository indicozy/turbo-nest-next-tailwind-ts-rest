import { registerAs } from "@nestjs/config";

import { env } from "./env.mjs";

export const DbConfig = registerAs("db", () => ({
  prodBranchUrl: env.DATABASE_URL_PROD,
  devBranchUrl: env.DATABASE_URL_DEV,
}));
