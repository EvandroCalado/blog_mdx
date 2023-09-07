import Pagination from 'src/components/Pagination/Pagination';
import PostGrid from 'src/components/PostGrid/PostGrid';
import PostPagination from '../../utils/PostPagination';

export const metadata = {
  title: 'Blog',
  description: 'Página de blog com posts',
};

export default function Blog() {
  const { currentPosts, totalPages } = PostPagination(1);

  return (
    <div>
      <h1 className="px-4 py-8 text-center text-6xl font-bold">
        Últimas publicações
      </h1>
      <PostGrid posts={currentPosts} className="my-12" />
      {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={1} />}
    </div>
  );
}
