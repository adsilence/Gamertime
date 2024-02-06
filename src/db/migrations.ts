import { migrate } from "drizzle-orm/bun-sqlite/migrator";

import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

const sqliteDbConnection = new Database('sqlite.db');

migrate(drizzle(sqliteDbConnection), {migrationsFolder: "drizzle"});
sqliteDbConnection.close();
