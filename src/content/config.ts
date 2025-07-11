import { defineCollection, z } from 'astro:content';

const blogs = defineCollection({
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        pubDate: z.date(),
        categories: z.array(z.string()),
        featured: z.boolean().optional(),
    }),
});

export const collections = {
    blogs,
};
