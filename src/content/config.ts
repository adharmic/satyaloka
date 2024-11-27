import { defineCollection, z } from "astro:content";

const articleCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  articles: articleCollection,
};
