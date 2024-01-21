import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Home } from "./pages/Home";

import { authModule, requireAuth } from "./auth/authModule";
import { loginModule } from "./auth/loginModule";
import { GuestHome } from "./pages/GuestHome";
import { Invite } from "./pages/Invite";
import { profileModule } from "./pages/profile/profileModule";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .use(authModule)
  .use(loginModule)
  .use(profileModule)

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
