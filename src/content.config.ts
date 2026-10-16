// ────────────────────────────────────────────────────────────────────────────
//  Blog content collections.
//
//  Two blogs, each a folder of Markdown files:
//    • Tech Blog        → src/content/tech/*.md         (URL: /blog/tech/<slug>)
//    • Photo Blog → src/content/photography/*.md  (URL: /blog/photography/<slug>)
//
//  The filename (without ".md") becomes the URL slug. Add a file, fill in the
//  frontmatter below, write Markdown, and it appears — sorted newest-first by
//  `pubDate`. Set `draft: true` to keep a post out of the production build.
// ────────────────────────────────────────────────────────────────────────────
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogSchema = ({ image }: { image: () => any }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Optional lead image (rendered full-width above the post + used on cards).
    cover: image().optional(),
    coverAlt: z.string().default(''),
  });

const tech = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tech' }),
  schema: blogSchema,
});

const photography = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/photography' }),
  schema: blogSchema,
});


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

export const collections = { tech, photography, art };

