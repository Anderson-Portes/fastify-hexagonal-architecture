import z from "zod";

export const findRoleByIdSchema = z.object({
  id: z.uuid("Invalid UUID")
})