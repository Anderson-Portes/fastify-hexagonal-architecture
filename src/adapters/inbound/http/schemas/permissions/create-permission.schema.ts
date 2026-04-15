import z from "zod";

export const createPermissionSchema = z.object({
  name: z.string("Name is required").min(1, "Name is required")
})