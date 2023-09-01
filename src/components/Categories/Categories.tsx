import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type CategoryProps = {
  _id: string;
  name: string;
};

export type CategoriesProps = {
  categories: CategoryProps[];
  className?: string;
};

export default function Categories({ categories, className }: CategoriesProps) {
  return (
    <div className={twMerge(className)}>
      {categories.map((category) => (
        <Link
          key={category._id}
          href={`/posts/category/${category.name}`}
          className="mr-2 rounded bg-theme-500 px-2 py-1 text-xs capitalize text-theme-100 duration-200 hover:bg-theme-600 active:bg-theme-700 dark:bg-theme-400 dark:text-theme-950 dark:hover:bg-theme-300 dark:active:bg-theme-500"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
