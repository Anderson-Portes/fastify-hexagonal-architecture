import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { rolesDrizzle } from "./roles.drizzle";

export const usersDrizzle = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  password: varchar("password", { length: 255 }),
  roleId: uuid("role_id").references(() => rolesDrizzle.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date())
});