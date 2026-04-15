import z from "zod";

export const createRoleSchema = z.object({
  name: z.string("Name is required").min(1, "Name is required")
})