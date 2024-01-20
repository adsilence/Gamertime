import { eq } from "drizzle-orm";
import { DTOSignupUser, User } from "../../../auth/auth";
import { users } from "../../schema/users";
import { db } from "../database";

export async function createUser(user: DTOSignupUser): Promise<User> {
  return (
    await db
      .insert(users)
      .values({
        email: user.email,
        display_name: user.displayName,
        avatar: user.avatar,
      })
      .returning({
        id: users.id,
        email: users.email,
        displayName: users.display_name,
        avatar: users.avatar,
      })
  )[0];
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const user = (await db.select().from(users).where(eq(users.email, email)))[0];
  return user
    ? {
        id: user.id,
        email: user.email,
        displayName: user.display_name,
        avatar: user.avatar,
      }
    : undefined;
}
