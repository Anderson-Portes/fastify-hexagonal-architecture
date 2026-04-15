import { defineConfig } from 'drizzle-kit';
import { env } from './src/infrastructure/env';

export default defineConfig({
  out: './src/infrastructure/db/migrations',
  schema: './src/adapters/outbound/db/entities/*.drizzle.ts',
  dialect: 'postgresql',
  dbCredentials: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
  },
});
