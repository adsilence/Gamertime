import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { registerUser } from "./MockBackend";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())

  .get("/", Home)

  .get("/signup", Signup)

  .post("/submit-signup", ({ body, set }) => {
    registerUser(body as any);
    set.redirect = "/";
  })

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
