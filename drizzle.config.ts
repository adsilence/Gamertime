import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema",
  out: "./drizzle",
  driver: "better-sqlite", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  // dbCredentials is necessasary for drizzle-kit studio to connect to the database.
  dbCredentials: {
    url: "sqlite.db"
  }
} satisfies Config;
