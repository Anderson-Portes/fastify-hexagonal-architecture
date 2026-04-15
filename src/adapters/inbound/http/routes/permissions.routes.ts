import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PermissionsController } from "../controllers/permissions.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const handler = (method: keyof PermissionsController) => async (req: FastifyRequest, reply: FastifyReply) => {
  const controller = req.diScope.resolve('permissionsController') as PermissionsController
  return await controller[method](req, reply)
}

export const permissionsRoutes = (fastify: FastifyInstance) => {
  fastify.get("/", { preHandler: authMiddleware("list permissions") }, handler("findAll"))
  fastify.get("/:id", { preHandler: authMiddleware("find permission") }, handler("findById"))
  fastify.post("/", { preHandler: authMiddleware("create permissions") }, handler("create"))
  fastify.put("/:id", { preHandler: authMiddleware("update permissions") }, handler("update"))
  fastify.delete("/:id", { preHandler: authMiddleware("delete permissions") }, handler("delete"))
}