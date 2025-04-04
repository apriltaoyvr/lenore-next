import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { remarkAdmonition } from 'fumadocs-core/mdx-plugins';

export const docs = defineDocs({
  dir: 'content/wiki',
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkAdmonition],
  },
});
