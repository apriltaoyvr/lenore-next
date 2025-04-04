import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/wiki',
});

export default defineConfig({
  mdxOptions: {
    // remarkPlugins: []
  },
});
