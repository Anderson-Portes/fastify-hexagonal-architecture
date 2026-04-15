import { drizzle } from "drizzle-orm/node-postgres"
import pg from "pg"
import { env } from "@/infrastructure/env"

const pool = new pg.Pool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  database: env.DB_NAME,
  user: env.DB_USER,
  password: env.DB_PASSWORD
})

export const db = drizzle(pool)