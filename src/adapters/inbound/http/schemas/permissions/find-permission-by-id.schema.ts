import z from "zod";

export const findPermissionByIdSchema = z.object({
  id: z.uuid("Invalid UUID")
})