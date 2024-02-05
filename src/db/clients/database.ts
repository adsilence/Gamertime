import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

console.log("Connecting to database!");

const sqliteDbConnection = new Database('sqlite.db');

export const db = drizzle(sqliteDbConnection);
