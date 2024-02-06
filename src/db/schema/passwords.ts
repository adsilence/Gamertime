import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { users } from "./users";

export const passwords = sqliteTable("passwords", {
  userId: integer("userId")
    .primaryKey()
    .references(() => users.id),
  hash: text("hash"),
});
