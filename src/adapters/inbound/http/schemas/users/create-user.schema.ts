import z from "zod";

export const createUserSchema = z.object({
  name: z.string("Name is required").min(1, "Name is required"),
  email: z.email("Invalid email"),
  password: z.string("Password is required").min(6, "Password must be at least 6 characters long"),
  roleId: z.uuid("Invalid UUID")
})