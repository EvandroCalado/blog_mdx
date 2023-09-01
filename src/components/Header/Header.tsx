'use client';

import Link from 'next/link';
import { useState } from 'react';
import { icons } from 'src/icons';
import Toggle from '../Toggle/Toggle';

const navLinks = [
  { id: '2356', name: 'Home', href: '/' },
  { id: '9874', name: 'Sobre mim', href: '/about' },
  { id: '6547', name: 'Blog', href: '/blog' },
  { id: '8521', name: 'Contato', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="dark:border-theme-600">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between border-b border-theme-600 p-4">
        <span className="self-center whitespace-nowrap text-2xl font-semibold">
          Evandro Calado
        </span>
        <button
          type="button"
          className="absolute right-4 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-theme-400 bg-theme-200 p-2 text-sm text-theme-400 duration-200 hover:bg-theme-300 dark:border-theme-600 dark:bg-theme-950 dark:text-theme-300 dark:hover:bg-theme-990 sm:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="[&>svg]:w-6">{icons.close}</span>
          ) : (
            <span className="[&>svg]:w-6">{icons.menu}</span>
          )}
        </button>
        <div
          className={`${
            !open && 'hidden'
          } absolute inset-0 z-10 w-full backdrop-blur-[2px] duration-200 sm:static sm:block sm:w-auto`}
        >
          <ul className="absolute left-4 right-4 top-16 mt-4 flex flex-col space-y-4 rounded-lg border border-theme-400 bg-theme-100 p-4 font-medium dark:border-theme-600 dark:bg-theme-950 sm:static sm:mt-0 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 sm:border-0 sm:p-0 sm:dark:bg-theme-900">
            <li>
              <Toggle />
            </li>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="duration-200 hover:brightness-[2] dark:hover:brightness-75"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
