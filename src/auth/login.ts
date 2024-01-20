import { Elysia } from "elysia";
import { User, verifyUser, registerUser, LOGIN_FAILURE_REASON } from "./auth";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import cookie from "@elysiajs/cookie";

// TODO: Make config
const COOKIE_MAX_AGE = 7 * 86400;

export const login = new Elysia()
  .use(cookie())
  .get("/signup", Signup)
  .get("/login", Login)
  .post("/submit-signup", async ({ set, setCookie, jwt, body }) => {
    const user: User = await registerUser(body as any, body.password);
    setCookie("auth", await jwt.sign(user), {
      httpOnly: true,
      sameSite: true,
      secure: true,
      maxAge: COOKIE_MAX_AGE,
    });
    set.redirect = "/";
  })
  .post("/submit-login", async ({ set, setCookie, jwt, body }) => {
    const user: User | LOGIN_FAILURE_REASON = await verifyUser(body as any);
    if (LOGIN_FAILURE_REASON.USER_NOT_FOUND === user) {
      set.status = 401;
      return (set.redirect = "/signup");
    }
    if(LOGIN_FAILURE_REASON.INVALID_PASSWORD === user) {
      set.status = 401;
      return (set.redirect = "/login");
    }
    setCookie("auth", await jwt.sign(user), {
      httpOnly: true,
      sameSite: true,
      maxAge: COOKIE_MAX_AGE,
    });
    set.redirect = "/";
  })
  .get("/logout", ({ removeCookie, set }) => {
    removeCookie("auth");
    return (set.redirect = "/login");
  });
