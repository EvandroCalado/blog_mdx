import Link from 'next/link';
import { icons } from 'src/icons';
import { twMerge } from 'tailwind-merge';

export type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
  icon?: boolean;
  disabled?: boolean;
  className?: string;
};

export default function LinkButton({
  children,
  href,
  icon,
  disabled,
  className,
}: LinkButtonProps) {
  const disabledClass = disabled && 'pointer-events-none opacity-30';
  const iconClass =
    icon && '[&>svg]:w-5 [&>svg]:duration-200 [&>svg]:hover:ml-1 hover:pr-2';

  return (
    <Link
      href={href}
      className={twMerge(
        'inline-flex items-center rounded-lg bg-theme-500 px-3 py-2 text-center text-sm font-medium text-theme-100 outline-none duration-200 hover:bg-theme-600 focus:shadow-lg active:bg-theme-700 dark:bg-theme-400 dark:text-theme-950 dark:hover:bg-theme-300 dark:active:bg-theme-500 ',
        className,
        disabledClass,
        iconClass,
      )}
    >
      {children}
      {icon && icons.arrowRight}
    </Link>
  );
}
