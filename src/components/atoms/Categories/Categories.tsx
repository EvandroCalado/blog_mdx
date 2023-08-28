import Link from 'next/link';

type CategoryProps = {
  _id: string;
  name: string;
};

export type CategoriesProps = {
  categories: CategoryProps[];
};

export default function Categories({ categories }: CategoriesProps) {
  return (
    <div>
      {categories.map((category) => (
        <Link
          key={category._id}
          href={`/posts/category/${category}`}
          className="mr-2 rounded-lg bg-zinc-900 px-2 py-1 capitalize text-zinc-200 duration-200 hover:brightness-90 dark:bg-zinc-200 dark:text-zinc-900"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
