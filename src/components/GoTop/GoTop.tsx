'use client';

import { icons } from 'src/icons';

export default function GoTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="sticky bottom-8 right-8 ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-theme-500 text-sm font-medium text-theme-100 shadow-lg shadow-theme-950 outline-none duration-200 hover:bg-theme-600 active:bg-theme-700 dark:bg-theme-400 dark:text-theme-950 dark:hover:bg-theme-300 dark:active:bg-theme-500 [&>svg]:w-5 [&>svg]:duration-200 [&>svg]:hover:animate-bounce"
    >
      {icons.arrowUp}
    </button>
  );
}
