import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx';
// import { getGithubLastEdit } from 'fumadocs-core/server';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  // const time = await getGithubLastEdit({
  //   owner: 'apriltaoyvr',
  //   repo: 'lenore-next',
  //   sha: 'main',
  //   path: `content/wiki/${page.file.path}`,
  // });

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      editOnGithub={{
        owner: 'apriltaoyvr',
        repo: 'lenore-next',
        sha: 'main',
        path: `content/wiki/${page.file.path}`,
      }}
      tableOfContent={{ style: 'clerk' }}
      // lastUpdate={time ? new Date(time) : undefined}
    >
      <hgroup>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription className='mb-4'>{page.data.description}</DocsDescription>
      </hgroup>
      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
            // you can add other MDX components here
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
