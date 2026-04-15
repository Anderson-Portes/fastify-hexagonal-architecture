import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PermissionsController } from "../controllers/permissions.controller";

const handler = (method: keyof PermissionsController) => async (req: FastifyRequest, reply: FastifyReply) => {
  const controller = req.diScope.resolve('permissionsController') as PermissionsController
  return await controller[method](req, reply)
}

export const permissionsRoutes = (fastify: FastifyInstance) => {
  fastify.get("/", handler("findAll"))
  fastify.get("/:id", handler("findById"))
  fastify.post("/", handler("create"))
  fastify.put("/:id", handler("update"))
  fastify.delete("/:id", handler("delete"))
}