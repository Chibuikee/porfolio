// Article bodies hosted on this site. Title, date and summary live with the
// rest of the content in src/data/cv.ts (`articles`); a file here is only the
// body, matched by `slug`.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  writing: defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/writing' }) }),
};
