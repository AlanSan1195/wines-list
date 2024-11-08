import { defineCollection, z } from "astro:content";

const winesEspecials = defineCollection({
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




const winesCups = defineCollection({
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
})

const winesBrut = defineCollection({
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
})

 export default { winesEspecials, winesCups, winesBrut }

  
  
