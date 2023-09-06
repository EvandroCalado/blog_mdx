import { useEffect, useState } from 'react';
import { icons } from 'src/icons';

export default function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      type="button"
      className="inline-flex items-center rounded-lg border border-theme-700 p-1.5 text-theme-700 duration-200 hover:bg-theme-200 dark:border-theme-300 dark:text-theme-300 dark:hover:bg-theme-990"
    >
      {isDarkMode ? (
        <span className="[&>svg]:w-6">{icons.dark}</span>
      ) : (
        <span className="[&>svg]:w-6">{icons.light}</span>
      )}
    </button>
  );
}
