import "dotenv/config";
import type { Config } from "drizzle-kit";

export const postgresConnectionURL = `postgres://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`;

export default {
  schema: "./src/db/schema",
  out: "./drizzle",
  driver: "better-sqlite", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  // dbCredentials is necessasary for drizzle-kit studio to connect to the database.
  dbCredentials: {
    url: "sqlite.db"
  }
} satisfies Config;
