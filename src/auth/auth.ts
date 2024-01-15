import { Elysia } from "elysia";
import jwt from "@elysiajs/jwt";
import bcrypt from "bcrypt";

/**
 * @deprecated - Going to be deleted and replacted with database
 */
const users: UserStore = {};

// TODO: Make config
const SALT_ROUNDS = 10;

export interface User {
  email: string;
  username: string;
  displayName: string;
  avatar: string;
}

interface UserStore {
  [username: string]: { user: User; password: string };
}

export async function registerUser(
  newUser: {
    email: string;
    username: string;
    displayName: string;
  },
  password: string
): Promise<User> {
  const user: User = {
    email: newUser.email,
    username: newUser.username,
    displayName: newUser.displayName,
    avatar: "https://avatars.githubusercontent.com/u/20482179?v=4",
  };

  // TODO: Save user to database instead of in memory
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  users[newUser.email] = { user: user, password: hash };

  return user;
}

export async function verifyUser(body: {
  password: string;
  username: string;
}): Promise<false | User> {
  if (
    !!users[body.username] &&
    (await bcrypt.compare(body.password, users[body.username].password))
  ) {
    return users[body.username].user;
  }

  return false;
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
  return !!user && !!users[user.email];
}

export const auth = new Elysia()
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
