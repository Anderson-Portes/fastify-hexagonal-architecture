import z from "zod";

export const updatePermissionSchema = z.object({
  name: z.string("Name is required").min(1, "Name is required")
})

export const updatePermissionParamsSchema = z.object({
  id: z.uuid("Invalid UUID")
})