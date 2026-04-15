import { IPermissionRepository } from "@/domain/repositories/ipermission.repository";
import { Permission } from "@/domain/entities/permission";
import { db } from "@/infrastructure/db";
import { permissionsDrizzle } from "../entities/permissions.drizzle";
import { eq } from "drizzle-orm";

export class PermissionsDrizzleRepository implements IPermissionRepository {
  async create(data: Permission): Promise<Permission> {
    const [createdPermission] = await db.insert(permissionsDrizzle).values(data).returning()
    return new Permission({
      id: createdPermission.id,
      name: createdPermission.name!,
      createdAt: createdPermission.createdAt!,
      updatedAt: createdPermission.updatedAt!
    })
  }

  async findAll(): Promise<Permission[]> {
    const permissions = await db.select().from(permissionsDrizzle)
    return permissions.map((permission) => new Permission({
      id: permission.id,
      name: permission.name!,
      createdAt: permission.createdAt!,
      updatedAt: permission.updatedAt!
    }))
  }

  async findById(id: string): Promise<Permission | null> {
    const [permission] = await db.select().from(permissionsDrizzle).where(eq(permissionsDrizzle.id, id)).limit(1)
    return permission ? new Permission({
      id: permission.id,
      name: permission.name!,
      createdAt: permission.createdAt!,
      updatedAt: permission.updatedAt!
    }) : null
  }

  async update(id: string, data: Permission): Promise<Permission> {
    const [updatedPermission] = await db.update(permissionsDrizzle).set(data).where(eq(permissionsDrizzle.id, id)).returning()
    return new Permission({
      id: updatedPermission.id,
      name: updatedPermission.name!,
      createdAt: updatedPermission.createdAt!,
      updatedAt: updatedPermission.updatedAt!
    })
  }

  async delete(id: string): Promise<void> {
    await db.delete(permissionsDrizzle).where(eq(permissionsDrizzle.id, id))
  }
}

