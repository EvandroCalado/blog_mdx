import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPosts = posts.length;
const postPerPage = 2;
const totalPages = Math.ceil(totalPosts / postPerPage);

export default function PostsPagination(currentPage: number) {
  if (currentPage > totalPages) {
    notFound();
  }

  const offset = (currentPage - 1) * postPerPage;
  const currentPosts = posts.slice(offset, offset + postPerPage);

  return {
    totalPages,
    currentPosts,
  };
}
