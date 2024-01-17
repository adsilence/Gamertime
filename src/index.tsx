import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Home } from "./pages/Home";

import { auth, requireAuth } from "./auth/auth";
import { login } from "./auth/login";
import { GuestHome } from "./pages/GuestHome";
import { Invite } from "./pages/Invite";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .use(auth)
  .use(login)

  .get("/", Home, { beforeHandle: requireAuth })
  .get("/invite", Invite, { beforeHandle: requireAuth })

  .get("/guest", GuestHome)

  .post("/send-invite", async ({ set }) => {
    // TODO: (1) save email in DB so that person is allowed to register
    //       (2) send invitation email
    set.redirect = "/";
  })

  .post("/create-post", async ({ set, body }) => {
    // TODO: save post in DB
    set.redirect = "/";
  })

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
