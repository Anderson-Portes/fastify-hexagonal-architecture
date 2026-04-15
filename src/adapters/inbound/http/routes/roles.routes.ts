import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { RolesController } from "../controllers/roles.controller"

const handler = (method: keyof RolesController) => async (req: FastifyRequest, reply: FastifyReply) => {
  const controller = req.diScope.resolve('rolesController') as RolesController
  return await controller[method](req, reply)
}

export const rolesRoutes = (fastify: FastifyInstance) => {
  fastify.get("/", handler("findAll"))
  fastify.get("/:id", handler("findById"))
  fastify.post("/", handler("create"))
  fastify.put("/:id", handler("update"))
  fastify.delete("/:id", handler("delete"))
}
