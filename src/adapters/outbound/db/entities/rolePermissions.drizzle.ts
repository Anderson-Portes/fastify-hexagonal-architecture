import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { permissionsDrizzle } from "./permissions.drizzle";
import { rolesDrizzle } from "./roles.drizzle";

export const rolePermissionsDrizzle = pgTable("role_permissions", {
  roleId: uuid("role_id").primaryKey().references(() => rolesDrizzle.id),
  permissionId: uuid("permission_id").primaryKey().references(() => permissionsDrizzle.id),
  createdAt: timestamp("created_at").defaultNow()
});