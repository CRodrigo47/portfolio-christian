import { defineCollection, z } from "astro:content";

const jobProjects = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    icons: z.array(z.string()),
    gallery: z.array(z.string())
  }),
});

const personalProjects = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    icons: z.array(z.string()),
    gallery: z.array(z.string())
  }),
});

export const collections = { jobProjects, personalProjects };
