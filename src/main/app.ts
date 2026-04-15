import fastify, { FastifyInstance } from "fastify";
import { env } from "@/infrastructure/env";
import { rolesRoutes } from "@/adapters/inbound/http/routes/roles.routes";
import { ZodError } from "zod";
import { permissionsRoutes } from "@/adapters/inbound/http/routes/permissions.routes";

const startHttpServer = () => {
  const server: FastifyInstance = fastify({
    logger: {
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "HH:MM:ss",
          ignore: "pid,hostname",
        },
      },
    },
  });



  server.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError) {
      const errorsObject = error.issues.reduce((acc, issue) => {
        const key = issue.path[0] as string
        acc[key] = issue.message
        return acc
      }, {} as Record<string, string>)
      return reply.status(400).send({
        message: "Validation Error",
        errors: errorsObject
      });
    }

    server.log.error(error);
    return reply.status(500).send({ message: "Internal Server Error" });
  })

  server.register(rolesRoutes, { prefix: "/api/roles" })
  server.register(permissionsRoutes, { prefix: "/api/permissions" })

  server.listen({ host: env.APP_HOST, port: env.APP_PORT }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`http server is running at ${address}`);
  });
}

startHttpServer()