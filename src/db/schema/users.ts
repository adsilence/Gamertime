import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  display_name: text("display_name").notNull(),
  avatar: text("avatar").notNull()
});
