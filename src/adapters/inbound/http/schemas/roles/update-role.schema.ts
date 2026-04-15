import z from "zod";

export const updateRoleSchema = z.object({
  name: z.string("Name is required").min(1, "Name is required"),
  permission_ids: z.array(z.uuid("Invalid UUID")).min(1, "At least one permission is required")
})

export const updateRoleParamsSchema = z.object({
  id: z.uuid("Invalid UUID")
})