import { z } from "zod";

export const clientSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  joinedDate: z.string(),
});

export type Client = z.infer<typeof clientSchema>;

export const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  published_date: z.string(),
  category: z.string()
})

export type Article = z.infer<typeof articleSchema>