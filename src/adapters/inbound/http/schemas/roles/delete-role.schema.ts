import z from "zod";

export const deleteRoleParamsSchema = z.object({
  id: z.uuid()
})