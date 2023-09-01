import Link from 'next/link';
import { icons } from 'src/icons';

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
};

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <span className="mb-2 flex items-center gap-1 text-sm text-gray-700 dark:text-gray-400">
          {Array.from({ length: totalPages }).map((_, index) => (
            <Link
              href={`/page/${index + 1}`}
              key={`index-${index}`}
              className={`${index + 1 === currentPage && 'font-bold'}`}
            >
              {index + 1}
            </Link>
          ))}
        </span>
        <div className="mt-2 inline-flex xs:mt-0">
          <Link
            href={`/page/${currentPage - 1}`}
            className={`${
              currentPage === 1 && 'pointer-events-none opacity-20'
            } inline-flex items-center rounded-s-lg border-r border-theme-100 bg-theme-500 px-3 py-2 text-center text-sm font-medium text-theme-100 outline-none duration-200 hover:bg-theme-600 hover:pl-2 focus:shadow-lg active:bg-theme-700 dark:border-theme-950 dark:bg-theme-400 dark:text-theme-950 dark:hover:bg-theme-300 dark:active:bg-theme-500 [&>svg]:w-5 [&>svg]:duration-200 [&>svg]:hover:mr-1`}
          >
            {icons.arrowLeft}
            Anterior
          </Link>
          <Link
            href={`/page/${currentPage + 1}`}
            className={`${
              currentPage === totalPages && 'pointer-events-none opacity-20'
            } inline-flex items-center rounded-e-lg border-l border-theme-100 bg-theme-500 px-3 py-2 text-center text-sm font-medium text-theme-100 outline-none duration-200 hover:bg-theme-600 hover:pr-2 focus:shadow-lg active:bg-theme-700 dark:border-theme-950 dark:bg-theme-400 dark:text-theme-950 dark:hover:bg-theme-300 dark:active:bg-theme-500 [&>svg]:w-5 [&>svg]:duration-200 [&>svg]:hover:ml-1`}
          >
            Seguinte
            {icons.arrowRight}
          </Link>
        </div>
      </div>
    </div>
  );
}
