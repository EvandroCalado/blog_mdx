import { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Avatar from '../Avatar/Avatar';
import Categories from '../Categories/Categories';
import LinkButton from '../LinkButton/LinkButton';

export default function Card({
  title,
  description,
  cover,
  date,
  url,
  author,
  categories,
}: Post) {
  if (!author || !author.name || !author.image)
    return <div className="w-full flex-1">Post sem Autor</div>;

  if (!categories)
    return <div className="w-full flex-1">Post sem Categorias</div>;

  return (
    <div className="max-w-sm rounded-lg border border-theme-400 bg-theme-100 shadow-lg shadow-theme-300 dark:border-theme-600 dark:bg-theme-950 dark:shadow-theme-950">
      <div className="relative h-56 w-full">
        <Image
          className="rounded-t-lg object-cover"
          src={cover}
          alt="Cover"
          fill
        />
      </div>
      <div className="p-5">
        <div>
          <Categories categories={categories} className="mb-4" />
        </div>
        <h5 className="mb-2 line-clamp-1 text-2xl font-bold tracking-tight">
          {title}
        </h5>
        <p className="mb-3 line-clamp-3 font-normal text-theme-700 dark:text-zinc-400">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <LinkButton href={url} icon>
            Ler mais
          </LinkButton>
          <Avatar
            name={author.name}
            image={author.image}
            date={date}
            className="space-x-1"
          />
        </div>
      </div>
    </div>
  );
}
