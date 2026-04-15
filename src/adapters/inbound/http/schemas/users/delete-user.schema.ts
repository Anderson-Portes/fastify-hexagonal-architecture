import z from "zod";

export const deleteUserParamsSchema = z.object({
  id: z.uuid("Invalid UUID")
})