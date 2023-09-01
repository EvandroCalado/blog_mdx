import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import Avatar from 'src/components/Avatar/Avatar';
import Categories from 'src/components/Categories/Categories';
import Cover from 'src/components/Cover/Cover';
import GoTop from 'src/components/GoTop/GoTop';

type PostProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
}

export function generateMetadata({ params }: PostProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) return notFound();

  return {
    title: post.title,
    description: post.description,
  };
}

export default function Post({ params }: PostProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) return notFound();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article>
      <Cover {...post} />
      <h1 className="mx-auto mb-12 max-w-2xl text-center text-5xl font-bold">
        {post.title}
      </h1>
      <div className="mx-auto mb-10 flex max-w-screen-md items-end space-x-4 px-4">
        <Avatar {...post.author} date={post.date} />
        <Categories {...post} className="mb-[5px]" />
      </div>
      <div className="article mx-auto max-w-screen-md px-4">
        <MDXContent />
      </div>
      <GoTop />
    </article>
  );
}
