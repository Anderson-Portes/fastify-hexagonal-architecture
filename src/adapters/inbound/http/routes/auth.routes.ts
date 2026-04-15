import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { AuthController } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const handler = (method: keyof AuthController) => async (req: FastifyRequest, reply: FastifyReply) => {
  const controller = req.diScope.resolve("authController") as AuthController
  return await controller[method](req, reply)
}

export const authRoutes = (server: FastifyInstance) => {
  server.post("/login", handler("login"))
  server.get("/profile", { preHandler: authMiddleware() }, handler("profile"))
}