// Content collections for Art, Maker, Project Blog and Commonplace Blog.
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Art portfolio categories, displayed alphabetically.
export const artCategories = [
  'Calligraphy',
  'Digital',
  'Diorama',
  'Drawing',
  '3D Modelling',
  'Painting',
  'Sculpting',
  'Textile',
] as const;

const art = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/art',
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    cover: image(),
    coverAlt: z.string().default(''),
    categories: z.array(z.enum(artCategories)).min(1),
    description: z.string().optional(),
    year: z.number().int().optional(),
    materials: z.array(z.string()).default([]),
    techniques: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});


// Maker portfolio categories, in alphabetical order.
export const makerCategories = [
  '3D Printing',
  'Carpentry',
  'Cosplay',
  'Electronics',
  'Other',
] as const;

const maker = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/maker',
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    cover: image(),
    coverAlt: z.string().default(''),
    description: z.string().optional(),
    categories: z.array(z.enum(makerCategories)).min(1),
    year: z.number().int().optional(),
    materials: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    status: z.enum([
      'Planned',
      'In Progress',
      'Completed',
    ]).default('Completed'),
    draft: z.boolean().default(false),
  }),
});


const projectBlog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/project-blog',
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    project: z.string().min(1),
    tags: z.array(z.string()).default([]),
    cover: image().optional(),
    coverAlt: z.string().default(''),
    draft: z.boolean().default(false),
  }),
});


const commonplaceBlog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/commonplace-blog',
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).min(1),
    related: z.array(z.string()).default([]),
    cover: image().optional(),
    coverAlt: z.string().default(''),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  art,
  maker,
  projectBlog,
  commonplaceBlog,
};
