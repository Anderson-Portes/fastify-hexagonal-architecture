import { User } from "@/domain/entities/user";

declare module "fastify" {
  interface FastifyRequest {
    user: User;
  }
}
