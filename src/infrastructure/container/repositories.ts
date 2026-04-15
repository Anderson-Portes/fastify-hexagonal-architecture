import { RolesDrizzleRepository } from "@/adapters/outbound/db/repositories/roles.drizzle-repository";
import { PermissionsDrizzleRepository } from "@/adapters/outbound/db/repositories/permissions-drizzle-repository";
import { UsersDrizzleRepository } from "@/adapters/outbound/db/repositories/users.drizzle-repository";
import { asClass } from "awilix";

export const repositories = {
  rolesRepository: asClass(RolesDrizzleRepository).scoped(),
  permissionsRepository: asClass(PermissionsDrizzleRepository).scoped(),
  usersRepository: asClass(UsersDrizzleRepository).scoped()
}