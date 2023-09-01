import Pagination from 'src/components/Pagination/Pagination';
import PostGrid from 'src/components/PostGrid/PostGrid';
import PostPagination from '../../utils/GetPagination';

export const metadata = {
  title: 'Blog',
  description: 'Página de blog com posts',
};

export default function Blog() {
  const { currentPosts, totalPages } = PostPagination(1);

  return (
    <div>
      <PostGrid posts={currentPosts} />
      {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={1} />}
    </div>
  );
}
