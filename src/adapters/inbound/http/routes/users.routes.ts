import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { UsersController } from "../controllers/users.controller"
import { authMiddleware } from "../middlewares/auth.middleware"

const handler = (method: keyof UsersController) => async (req: FastifyRequest, reply: FastifyReply) => {
  const controller = req.diScope.resolve('usersController') as UsersController
  return await controller[method](req, reply)
}

export const usersRoutes = (fastify: FastifyInstance) => {
  fastify.get("/", { preHandler: authMiddleware("list users") }, handler("findAll"))
  fastify.get("/:id", { preHandler: authMiddleware("find users") }, handler("findById"))
  fastify.post("/", { preHandler: authMiddleware("create users") }, handler("create"))
  fastify.put("/:id", { preHandler: authMiddleware("update users") }, handler("update"))
  fastify.delete("/:id", { preHandler: authMiddleware("delete users") }, handler("delete"))
}
