'use client';

import { icons } from 'src/icons';

export default function GoTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="sticky bottom-8 ml-auto mr-8 flex items-center rounded-lg border border-theme-900 bg-theme-100 p-2.5  shadow-lg duration-200 hover:bg-theme-200 active:bg-theme-300 dark:border-theme-300 dark:bg-theme-900 dark:text-theme-300 dark:hover:bg-theme-950 dark:active:bg-theme-990 [&>svg]:w-5 [&>svg]:duration-200 [&>svg]:hover:animate-bounce"
    >
      {icons.arrowUp}
    </button>
  );
}
