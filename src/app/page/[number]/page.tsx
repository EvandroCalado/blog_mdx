import { notFound } from 'next/navigation';
import Pagination from 'src/components/Pagination/Pagination';
import PostGrid from 'src/components/PostGrid/PostGrid';
import PostsPagination from 'src/utils/GetPagination';

export type LayoutPagesProps = {
  params: {
    number: string;
  };
};

export function generateStaticParams() {
  const { totalPages } = PostsPagination(1);
  return Array.from({ length: totalPages }).map((_, index) => ({
    number: `${index + 1}`,
  }));
}

export default function LayoutPages({ params }: LayoutPagesProps) {
  if (!/^\d+$/.test(params.number)) {
    notFound();
  }

  const { currentPosts, totalPages } = PostsPagination(Number(params.number));

  return (
    <div>
      <PostGrid posts={currentPosts} />
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={Number(params.number)}
        />
      )}
    </div>
  );
}
