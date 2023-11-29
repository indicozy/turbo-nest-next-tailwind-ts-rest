import { registerAs } from "@nestjs/config";

import { env } from "./env.mjs";

export const DbConfig = registerAs("db", () => ({
  url: env.DATABASE_URL,
}));
