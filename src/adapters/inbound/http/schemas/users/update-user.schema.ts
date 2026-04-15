import z from "zod";

export const updateUserSchema = z.object({
  name: z.string("Name is required").min(1, "Name is required"),
  email: z.email("Invalid email"),
  roleId: z.uuid("Invalid UUID"),
  password: z.string("Password is required").min(6, "Password must be at least 6 characters long").optional()
})

export const updateUserParamsSchema = z.object({
  id: z.uuid("Invalid UUID")
})