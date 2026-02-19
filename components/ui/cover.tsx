interface CoverProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function Cover({ src, alt, caption }: CoverProps) {
  return (
    <figure className="my-8">
      <img src={src} alt={alt} className="w-full rounded-lg" />
      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}