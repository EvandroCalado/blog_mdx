import Link from 'next/link';
import { icons } from 'src/icons';

const socials = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/dev_evandro',
    icon: icons.instagram,
  },
  {
    name: 'Github',
    link: 'https://github.com/EvandroCalado',
    icon: icons.github,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/evandro-calado',
    icon: icons.linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="mb-4 bg-theme-100 dark:bg-theme-900">
      <hr className="mb-4 mt-0 max-w-screen-xl border-theme-300 dark:border-theme-600 sm:mx-auto sm:mt-4" />
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <span className="self-center whitespace-nowrap text-2xl font-semibold">
            Evandro Calado
          </span>
          <ul className="mb-6 flex items-center space-x-2 text-4xl font-medium sm:mb-0">
            {socials.map((social) => (
              <li key={social.name}>
                <Link
                  href={social.link}
                  target="_blank"
                  className="duration-200 hover:brightness-[2] dark:hover:brightness-75 [&>svg]:w-10"
                >
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <span className="block text-center text-sm text-theme-500 dark:text-theme-400">
          © {new Date().getFullYear()}
          <span className="ml-1">Evandro Calado . All Rights Reserved.</span>
        </span>
      </div>
    </footer>
  );
}
