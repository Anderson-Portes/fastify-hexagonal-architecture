import { IUserRepository } from "@/domain/repositories/users.repository";
import { User } from "@/domain/entities/user";
import { db } from "@/infrastructure/db";
import { usersDrizzle } from "../entities/users.drizzle";
import { eq } from "drizzle-orm";

export class UsersDrizzleRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    const users = await db.select().from(usersDrizzle)
    return users.map((user) => new User({
      id: user.id,
      name: user.name!,
      email: user.email!,
      password: user.password!,
      roleId: user.roleId!,
      createdAt: user.createdAt!,
      updatedAt: user.updatedAt!
    }))
  }

  async findById(id: string): Promise<User | null> {
    const [user] = await db.select().from(usersDrizzle).where(eq(usersDrizzle.id, id)).limit(1)
    return user ? new User({
      id: user.id,
      name: user.name!,
      email: user.email!,
      password: user.password!,
      roleId: user.roleId!,
      createdAt: user.createdAt!,
      updatedAt: user.updatedAt!
    }) : null
  }

  async create(data: User): Promise<User> {
    const [createdUser] = await db.insert(usersDrizzle).values(data).returning()
    return new User({
      id: createdUser.id,
      name: createdUser.name!,
      email: createdUser.email!,
      password: createdUser.password!,
      roleId: createdUser.roleId!,
      createdAt: createdUser.createdAt!,
      updatedAt: createdUser.updatedAt!
    })
  }

  async update(id: string, data: User): Promise<User> {
    const [updatedUser] = await db.update(usersDrizzle).set(data).where(eq(usersDrizzle.id, id)).returning()
    return new User({
      id: updatedUser.id,
      name: updatedUser.name!,
      email: updatedUser.email!,
      password: updatedUser.password!,
      roleId: updatedUser.roleId!,
      createdAt: updatedUser.createdAt!,
      updatedAt: updatedUser.updatedAt!
    })
  }

  async delete(id: string): Promise<void> {
    await db.delete(usersDrizzle).where(eq(usersDrizzle.id, id))
  }

  async findByEmail(email: string): Promise<User | null> {
    const [user] = await db.select().from(usersDrizzle).where(eq(usersDrizzle.email, email)).limit(1)
    return user ? new User({
      id: user.id,
      name: user.name!,
      email: user.email!,
      password: user.password!,
      roleId: user.roleId!,
      createdAt: user.createdAt!,
      updatedAt: user.updatedAt!
    }) : null
  }
}