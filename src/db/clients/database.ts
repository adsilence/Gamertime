import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import "dotenv/config";

const postgresConnectionURL = `postgres://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`;

console.log("Connecting to database!");

const dbConnection = postgres(postgresConnectionURL);

export const db = drizzle(dbConnection);
