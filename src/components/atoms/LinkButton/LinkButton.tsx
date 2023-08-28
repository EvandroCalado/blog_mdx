import Link from 'next/link';

export type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
};

export default function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-zinc-200 outline-none duration-200 hover:bg-blue-800 hover:pr-2 focus:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700 [&>svg]:hover:ml-1"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-narrow-right duration-200"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l14 0" />
        <path d="M15 16l4 -4" />
        <path d="M15 8l4 4" />
      </svg>
    </Link>
  );
}
