import { Elysia } from "elysia";
import { z } from "zod";
import { openapi } from "@elysiajs/openapi";
import { auth } from "@/auth"
import { betterAuthPlugin, OpenAPI } from "@/http/plugins/better-auth"


export const app = new Elysia()
  .use(openapi(
    {
      path: "/api",
      documentation: {
                  components: await OpenAPI.components,
                  paths: await OpenAPI.getPaths()
              }
    }
  ))
  .use(betterAuthPlugin)
  .get("/health", () => {
    return {
      status: "ok",
      version: "1.0.0",
      uptime: process.uptime(),
      time: new Date().toISOString(),
    }
  })
  .get("/", () => "Hello Elysia")
  .get(
    "/user/:id",
    ({ params, user }) => {
      const userId = params.id;

      const authenticatedUserName = user.name;
      
      return { id: userId, name: user.name, email: user.email };
    },
    {
      auth:true,
      detail: {
        summary: "Get user by id",
        tags: ["User"],
      },

      params: z.object({
        id: z.string(),
      }),
      response: {
        200: z.object({
          id: z.string(),
          name: z.string(),
        }),
      },
    },
  )
  .listen(9999);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
