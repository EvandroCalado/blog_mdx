import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export type AvatarProps = {
  name: string;
  image: string;
  date: string;
  className?: string;
};

export default function Avatar({ name, image, date, className }: AvatarProps) {
  return (
    <div className={twMerge('flex items-center space-x-4', className)}>
      <Image
        className="h-10 w-10 rounded-full"
        src={image}
        width={50}
        height={50}
        alt="Evandro Calado"
      />
      <div className="font-medium dark:text-white">
        <div>{name}</div>
        <time className="text-sm text-gray-500 dark:text-gray-400">
          {new Date(date).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>
    </div>
  );
}
