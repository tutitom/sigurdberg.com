import Image from "next/image";

interface CoverProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function Cover({ src, alt, caption }: CoverProps) {
  return (
    <figure className="my-8">
      <Image src={src} alt={alt} width={1200} height={630} className="w-full rounded-lg" />
      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}