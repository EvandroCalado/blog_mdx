import Link from 'next/link';
import { icons } from 'src/icons';

export type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
};

export default function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-lg bg-theme-500 px-3 py-2 text-center text-sm font-medium text-theme-100 outline-none duration-200 hover:bg-theme-600 hover:pr-2 focus:shadow-lg active:bg-theme-700 dark:bg-theme-400 dark:text-theme-950 dark:hover:bg-theme-300 dark:active:bg-theme-500 [&>svg]:w-5 [&>svg]:duration-200 [&>svg]:hover:ml-1"
    >
      {children}
      {icons.arrowRight}
    </Link>
  );
}
