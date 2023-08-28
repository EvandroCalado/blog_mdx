import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="mb-8 text-7xl font-bold">404</h1>
      <span className="mb-4 text-lg font-semibold">
        Pagina não encontrada !
      </span>
      <Link
        href={'/'}
        className="flex items-center rounded-lg bg-zinc-500 px-4 py-2 duration-200 hover:pl-2 hover:brightness-90 [&>svg]:hover:mr-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-left duration-200"
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
          <path d="M5 12l6 6" />
          <path d="M5 12l6 -6" />
        </svg>
        Voltar para Home
      </Link>
    </div>
  );
}
