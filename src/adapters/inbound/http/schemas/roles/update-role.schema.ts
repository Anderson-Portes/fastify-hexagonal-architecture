import z from "zod";

export const updateRoleSchema = z.object({
  name: z.string().min(1)
})

export const updateRoleParamsSchema = z.object({
  id: z.uuid()
})