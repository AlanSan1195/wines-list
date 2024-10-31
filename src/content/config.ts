import { defineCollection, z } from "astro:content";

const wines = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string(),
    variedad: z.string(),
    graduation: z.string(),
    image: z.string(),
    entradas: z.string(),
    carne: z.string(),
  }),
});

export const collections = { wines }
