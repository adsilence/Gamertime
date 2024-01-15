import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Home } from "./pages/Home";

import { auth, requireAuth } from "./auth/auth";
import { login } from "./auth/login";
import { GuestHome } from "./pages/GuestHome";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .use(auth)
  .use(login)

  .get("/", Home, { beforeHandle: requireAuth })

  .get("/guest", GuestHome)

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
