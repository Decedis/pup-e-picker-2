import { z } from "zod";

//Schema for server
export const dogSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  description: z.string(),
  isFavorite: z.boolean(),
});

//Client type
export type ActiveComponent = "favorited" | "unfavorited" | "create" | "all";

export type Dog = z.infer<typeof dogSchema>;
