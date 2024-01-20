import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema",
  out: "./drizzle",
  driver: "pg", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
} satisfies Config;
