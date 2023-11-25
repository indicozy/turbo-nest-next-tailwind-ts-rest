import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL_PROD: z.string().url(),
    DATABASE_URL_DEV: z.string().url(),
  },
  runtimeEnv: process.env,
});
