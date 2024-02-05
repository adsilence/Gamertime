import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import Database from 'better-sqlite3';

const sqliteDbConnection = new Database('sqlite.db');

migrate(drizzle(sqliteDbConnection), {migrationsFolder: "drizzle"});
sqliteDbConnection.close();
