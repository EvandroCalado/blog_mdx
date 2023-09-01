import { Post } from 'contentlayer/generated';
import Card from '../Card/card';

export type PostGridProps = {
  posts: Post[];
};

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="mx-auto my-12 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <Card key={post._id} {...post} />
      ))}
    </div>
  );
}
