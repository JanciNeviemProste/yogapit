import Link from "next/link";
import Image from "next/image";
import { NewsItem } from "@/lib/types";

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <Link
      href={item.link}
      className="group block bg-white/5 rounded-lg overflow-hidden hover:bg-[#4D4D4D] transition-colors duration-300"
    >
      {/* Image section - aspect ratio 4:3 */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
      </div>

      {/* Content section */}
      <div className="p-5 space-y-3">
        {/* Category chip */}
        <div className="inline-block">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--header-primary)]/20 text-[var(--header-primary)]">
            {item.category}
          </span>
        </div>

        {/* Title - max 2 lines */}
        <h3 className="text-xl font-semibold text-white leading-tight line-clamp-2">
          {item.title}
        </h3>

        {/* Meta: Author + Date */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          {item.author && (
            <>
              <span>{item.author}</span>
              <span>•</span>
            </>
          )}
          <time dateTime={item.date}>
            {new Date(item.date).toLocaleDateString('sk-SK', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>

        {/* Excerpt - max 3 lines */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {item.excerpt}
        </p>

        {/* CTA */}
        <div className="pt-2">
          <span className="text-[var(--header-primary)] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Čítaj viac
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
