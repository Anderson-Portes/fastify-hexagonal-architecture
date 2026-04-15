import z from "zod";

export const deletePermissionParamsSchema = z.object({
  id: z.uuid("Invalid UUID")
})