import {
  printErrors,
  readFiles,
  scanURLs,
  validateFiles,
} from 'next-validate-link';
import { getSlugs, parseFilePath } from 'fumadocs-core/source';
import { getTableOfContents } from 'fumadocs-core/server';
import path from 'node:path';

async function checkLinks() {
  const wikiFiles = await readFiles('content/wiki/**/*.{md,mdx}');

  const scanned = await scanURLs({
    populate: {
      'wiki/[[...slug]]': wikiFiles.map((file) => {
        const info = parseFilePath(path.relative('content/wiki', file.path));

        return {
          value: getSlugs(info),
          hashes: getTableOfContents(file.content).map((item) =>
            item.url.slice(1),
          ),
        };
      }),
    },
    preset: 'next',
  });

  printErrors(
    await validateFiles([...wikiFiles], {
      scanned,
    }),
    true,
  );
}

void checkLinks();
