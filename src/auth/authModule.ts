import { Elysia } from "elysia";
import jwt from "@elysiajs/jwt";
import bcrypt from "bcrypt";
import * as usersClient from "../db/clients/auth/usersClient";
import * as passwordClient from "../db/clients/auth/passwordClient";

// TODO: Make config
const SALT_ROUNDS = 10;

export enum LOGIN_FAILURE_REASON {
  USER_NOT_FOUND,
  INVALID_PASSWORD,
}

export interface DTOSignupUser {
  email: string;
  displayName: string;
  avatar: string;
}

export interface User {
  id: number;
  email: string;
  displayName: string;
  avatar: string;
}

export async function registerUser(
  newUser: {
    email: string;
    displayName: string;
  },
  password: string
): Promise<User> {
  const user: User = await usersClient.createUser({
    email: newUser.email,
    displayName: newUser.displayName,
    avatar: "https://avatars.githubusercontent.com/u/20482179?v=4",
  });

  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  passwordClient.setUserPasswordHash(user.id, hash);

  return user;
}

export async function verifyUser(body: {
  password: string;
  email: string;
}): Promise<LOGIN_FAILURE_REASON | User> {
  const user = await usersClient.getUserByEmail(body.email);
  if (user === undefined) return LOGIN_FAILURE_REASON.USER_NOT_FOUND;

  const passwordhash = await passwordClient.getUserPasswordHash(user.id);
  // This should never happen if we are handling passwords correctly
  if (passwordhash === undefined) throw new Error("Unable to find password");

  if (!(await bcrypt.compare(body.password, passwordhash)))
    return LOGIN_FAILURE_REASON.INVALID_PASSWORD;

  return user;
}

export function requireAuth(context: { jwt: any; cookie: any; set: any }) {
  if (!isLoggedIn(context.jwt, context.cookie)) {
    context.set.status = 401;
    context.set.redirect = "/login";
    return "get 401'd nerd";
  }
}

function isLoggedIn(jwt: any, cookie: any) {
  return !!cookie["auth"] && Promise.resolve(jwt.verify(cookie["auth"]));
}

async function getUser(jwt: any, cookie: any): Promise<User | undefined> {
  if (cookie["auth"]) {
    return await Promise.resolve(jwt.verify(await cookie["auth"].get()));
  }
}

/**
 * @deprecated - For testing only
 */
async function isAuthorized(jwt: any, cookie: any) {
  const user: User = await jwt.verify(cookie["auth"].get());
  // Verify authed user exists and is in store
  return !!user && !!usersClient.getUserByEmail(user.email);
}

export const authModule = new Elysia({ name: "authModule" })
  .use(
    jwt({
      name: "jwt",
      secret: "some secret key",
      exp: "7d",
    })
  )
  .derive(async ({ jwt, cookie }) => {
    return {
      user: await getUser(jwt, cookie),
    };
  })
  .get("/auth/healthcheck", async ({ jwt, cookie }) => {
    return isAuthorized(jwt, cookie);
  });
