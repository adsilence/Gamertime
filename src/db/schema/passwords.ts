import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { users } from "./users";

export const passwords = pgTable("passwords", {
  userId: serial("userId")
    .primaryKey()
    .references(() => users.id),
  hash: text("hash"),
});
