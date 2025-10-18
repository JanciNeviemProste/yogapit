import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  title: string;
  category: string;
  excerpt: string;
  image: string;
  link: string;
  author?: string;
  date?: string;
}

export default function ArticleCard({
  title,
  category,
  excerpt,
  image,
  link,
  author,
  date,
}: ArticleCardProps) {
  return (
    <Link href={link} className="group block">
      <div className="relative h-80 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
        {/* Background image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90 transition-opacity duration-300 group-hover:from-black/50 group-hover:via-black/70 group-hover:to-black/95" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Category tag */}
          <div className="flex justify-start">
            <span className="inline-block px-3 py-1 bg-[var(--header-primary)]/80 text-white text-xs font-semibold rounded-full">
              {category}
            </span>
          </div>

          {/* Title and metadata */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-gray-300 text-sm line-clamp-2 mb-3">{excerpt}</p>
            {(author || date) && (
              <div className="flex items-center gap-3 text-xs text-gray-400">
                {author && <span>{author}</span>}
                {author && date && <span>•</span>}
                {date && <span>{new Date(date).toLocaleDateString('sk-SK')}</span>}
              </div>
            )}
            <div className="mt-4 inline-flex items-center gap-2 text-[var(--header-primary)] font-semibold group-hover:gap-3 transition-all">
              Čítaj viac
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
