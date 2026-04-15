import { FastifyReply, FastifyRequest } from "fastify";
import { JwtService } from "@/infrastructure/services/jwt.service";
import { IUserRepository } from "@/domain/repositories/users.repository";
import { RoleRepository } from "@/domain/repositories/role.repository";

export function authMiddleware(permission?: string) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const authHeader = request.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      return reply.status(401).send({ message: "Unauthorized" });
    }
    const [_, token] = authHeader.split('Bearer ')
    try {
      const jwtService = request.diScope.resolve<JwtService>("jwtService");
      const payload = jwtService.decode(token) as { id: string };

      const usersRepository = request.diScope.resolve<IUserRepository>("usersRepository");
      const user = await usersRepository.findById(payload.id);
      if (!user) {
        return reply.status(401).send({ message: "Unauthorized" });
      }

      request.user = user;

      if (permission) {
        const rolesRepository = request.diScope.resolve<RoleRepository>("rolesRepository");
        const allowed = await rolesRepository.hasPermission(user.roleId, permission);
        if (!allowed) {
          return reply.status(403).send({ message: "Forbidden" });
        }
      }
    } catch {
      return reply.status(401).send({ message: "Unauthorized" });
    }
  };
}
