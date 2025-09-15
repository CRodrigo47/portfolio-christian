import { defineCollection, z } from "astro:content";

const jobProjects = defineCollection({
  schema: z.object({
    img: z.string(),
    icons: z.array(z.string()),
    gallery: z.array(z.string())
  }),
});

const personalProjects = defineCollection({
  schema: z.object({
    img: z.string(),
    icons: z.array(z.string()),
    gallery: z.array(z.string()),
    github: z.string()
  }),
});

export const collections = { jobProjects, personalProjects };
