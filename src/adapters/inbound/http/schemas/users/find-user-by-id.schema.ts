import z from "zod";

export const findUserByIdSchema = z.object({
  id: z.uuid("Invalid UUID")
})