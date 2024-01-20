import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const postgresConnectionURL = `postgres://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`;

const migrationClient = postgres(postgresConnectionURL, { max: 1 });

// Need to put in a function since top level await is not supported >:(
(async()=>{
  await migrate(drizzle(migrationClient), {migrationsFolder: "drizzle"});
  
  await migrationClient.end();
})();
