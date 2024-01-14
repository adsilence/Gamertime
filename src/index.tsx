import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

const app = new Elysia()
  .use(html())
  .get("/", () => (
    <html lang="en">
      <head>
        <title>Gamertime</title>
      </head>
      <body>
        <h1>Gamertime</h1>
      </body>
    </html>
  ))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
