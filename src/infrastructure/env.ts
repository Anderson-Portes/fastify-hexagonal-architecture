import "dotenv/config"
import { z } from "zod";

const envSchema = z.object({
  APP_PORT: z.coerce.number(),
  APP_HOST: z.string(),
  APP_ENV: z.enum(["development", "production", "test"]),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  JWT_SECRET: z.string(),
  JWT_EXPIRES: z.string()
});

export const env = envSchema.parse(process.env);