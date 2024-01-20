import { eq } from "drizzle-orm";
import { passwords } from "../../schema/passwords";
import { db } from "../database";

export async function setUserPasswordHash(
  userId: number,
  passwordHash: string
) {
  await db.insert(passwords).values({ userId: userId, hash: passwordHash });
}

export async function getUserPasswordHash(
  userId: number
): Promise<string | undefined> {
  return (
    (await db.select().from(passwords).where(eq(passwords.userId, userId)))[0]
      ?.hash || undefined
  );
}
