import Image from 'next/image';
import Link from 'next/link';

export type CoverProps = {
  cover: string;
  coverResource: string;
  coverResourceUrl: string;
};

export default function Cover({
  cover,
  coverResource,
  coverResourceUrl,
}: CoverProps) {
  return (
    <div className="mb-10 text-center">
      <div className="relative mb-4 h-[470px] w-full">
        <Image src={cover} alt="cover" fill className="object-cover" />
      </div>
      <span className="mr-2">Imagem por:</span>
      <Link
        href={coverResourceUrl}
        target="_blank"
        className="font-bold capitalize underline duration-200 hover:brightness-75"
      >
        {coverResource}
      </Link>
    </div>
  );
}
