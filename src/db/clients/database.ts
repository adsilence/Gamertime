import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

console.log("Connecting to database!");

const sqliteDbConnection = new Database('sqlite.db');

export const db = drizzle(sqliteDbConnection);
