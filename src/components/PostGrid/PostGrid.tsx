import { Post } from 'contentlayer/generated';
import { twMerge } from 'tailwind-merge';
import Card from '../Card/card';

export type PostGridProps = {
  posts: Post[];
  className?: string;
};

export default function PostGrid({ posts, className }: PostGridProps) {
  return (
    <div
      className={twMerge(
        'mx-auto my-8 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3',
        className,
      )}
    >
      {posts.map((post) => (
        <Card key={post._id} {...post} />
      ))}
    </div>
  );
}
