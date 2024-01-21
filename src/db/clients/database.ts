import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import "dotenv/config";
import { postgresConnectionURL } from "../../../drizzle.config";

console.log("Connecting to database!");

const dbConnection = postgres(postgresConnectionURL);

export const db = drizzle(dbConnection);
