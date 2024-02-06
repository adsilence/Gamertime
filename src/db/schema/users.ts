import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  email: text("email").notNull(),
  display_name: text("display_name").notNull(),
  avatar: text("avatar").notNull()
});
