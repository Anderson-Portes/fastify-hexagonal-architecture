import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { UsersController } from "../controllers/users.controller"

const handler = (method: keyof UsersController) => async (req: FastifyRequest, reply: FastifyReply) => {
  const controller = req.diScope.resolve('usersController') as UsersController
  return await controller[method](req, reply)
}

export const usersRoutes = (fastify: FastifyInstance) => {
  fastify.get("/", handler("findAll"))
  fastify.get("/:id", handler("findById"))
  fastify.post("/", handler("create"))
  fastify.put("/:id", handler("update"))
  fastify.delete("/:id", handler("delete"))
}
