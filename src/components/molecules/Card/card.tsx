import Image from 'next/image';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import LinkButton from 'src/components/atoms/LinkButton/LinkButton';

export type CardProps = {
  title: string;
  description: string;
  cover: string;
  date: string;
  name: string;
  image: string;
};

export default function Card({
  title,
  description,
  cover,
  date,
  name,
  image,
}: CardProps) {
  return (
    <div className="max-w-sm rounded-lg border border-zinc-200 bg-white shadow-lg shadow-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-zinc-950">
      <div className="relative h-56 w-full">
        <Image
          className="rounded-t-lg object-cover"
          src={cover}
          alt="Cover"
          fill
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        <p className="mb-3 line-clamp-3 font-normal text-zinc-700 dark:text-zinc-400">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <LinkButton href="#">Ler mais</LinkButton>
          <Avatar name={name} image={image} date={date} className="space-x-1" />
        </div>
      </div>
    </div>
  );
}
