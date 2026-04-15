import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { RolesController } from "../controllers/roles.controller"
import { authMiddleware } from "../middlewares/auth.middleware"

const handler = (method: keyof RolesController) => async (req: FastifyRequest, reply: FastifyReply) => {
  const controller = req.diScope.resolve('rolesController') as RolesController
  return await controller[method](req, reply)
}

export const rolesRoutes = (fastify: FastifyInstance) => {
  fastify.get("/", { preHandler: authMiddleware("list roles") }, handler("findAll"))
  fastify.get("/:id", { preHandler: authMiddleware("find roles") }, handler("findById"))
  fastify.post("/", { preHandler: authMiddleware("create roles") }, handler("create"))
  fastify.put("/:id", { preHandler: authMiddleware("update roles") }, handler("update"))
  fastify.delete("/:id", { preHandler: authMiddleware("delete roles") }, handler("delete"))
}
