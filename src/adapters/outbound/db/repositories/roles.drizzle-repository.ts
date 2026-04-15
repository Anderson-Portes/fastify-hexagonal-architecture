import { Role } from "@/domain/entities/role";
import { RoleRepository } from "@/domain/repositories/role.repository";
import { db } from "@/infrastructure/db";
import { rolesDrizzle } from "../entities/roles.drizzle";
import { eq } from "drizzle-orm";

export class RolesDrizzleRepository implements RoleRepository {
  async findAll(): Promise<Role[]> {
    const roles = await db.select().from(rolesDrizzle)
    return roles.map((role) => new Role({
      id: role.id,
      name: role.name!,
      createdAt: role.createdAt!,
      updatedAt: role.updatedAt!
    }))
  }

  async findById(id: string): Promise<Role | null> {
    const [role] = await db.select().from(rolesDrizzle).where(eq(rolesDrizzle.id, id)).limit(1)
    return role ? new Role({
      id: role.id,
      name: role.name!,
      createdAt: role.createdAt!,
      updatedAt: role.updatedAt!
    }) : null
  }

  async create(role: Role): Promise<Role> {
    const [createdRole] = await db.insert(rolesDrizzle).values(role).returning()
    return new Role({
      id: createdRole.id,
      name: createdRole.name!,
      createdAt: createdRole.createdAt!,
      updatedAt: createdRole.updatedAt!
    })
  }

  async update(id: string, role: Role): Promise<Role> {
    const [updatedRole] = await db.update(rolesDrizzle).set(role).where(eq(rolesDrizzle.id, id)).returning()
    return new Role({
      id: updatedRole.id,
      name: updatedRole.name!,
      createdAt: updatedRole.createdAt!,
      updatedAt: updatedRole.updatedAt!
    })
  }

  async delete(id: string): Promise<void> {
    await db.delete(rolesDrizzle).where(eq(rolesDrizzle.id, id))
  }
}