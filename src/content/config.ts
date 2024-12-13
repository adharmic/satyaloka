import { defineCollection, z } from "astro:content";

const articleCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()),
      publishDate: z.coerce.date().optional(),
      description: z.string().optional(),
      featured: z.boolean().optional(),
    }),
});

const artworkCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()),
      publishDate: z.coerce.date().optional(),
      description: z.string().optional(),
      featured: z.boolean().optional(),
    }),
});

export const collections = {
  articles: articleCollection,
  artwork: artworkCollection,
};
