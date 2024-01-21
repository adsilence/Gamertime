import "dotenv/config";
import type { Config } from "drizzle-kit";

export const postgresConnectionURL = `postgres://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`;

export default {
  schema: "./src/db/schema",
  out: "./drizzle",
  driver: "pg", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  // dbCredentials is necessasary for drizzle-kit studio to connect to the database.
  dbCredentials: {
    connectionString: postgresConnectionURL,
  }
} satisfies Config;
