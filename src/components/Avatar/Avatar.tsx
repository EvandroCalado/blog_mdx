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
        className="h-10 w-10 rounded-full border-[2px] border-theme-900 dark:border-theme-200"
        src={image}
        width={50}
        height={50}
        alt="Evandro Calado"
      />
      <div className="font-medium">
        <div>{name}</div>
        <time className="text-sm text-theme-500 dark:text-theme-400">
          {new Date(date).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          })}
        </time>
      </div>
    </div>
  );
}
