import Link from "next/link";
import Image from "next/image";

interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  image: string;
}

export default function NewsCard({ title, date, excerpt, link, image }: NewsCardProps) {
  return (
    <Link href={link} className="group block">
      <div className="bg-white/5 rounded-lg overflow-hidden hover:bg-[#4D4D4D] transition-colors duration-300">
        {/* Image section - top, full width */}
        <div className="relative w-full h-[220px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content section - below image */}
        <div className="p-5">
          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
            {title}
          </h3>

          {/* Date - BELOW title */}
          <time className="block text-sm text-gray-400 mb-3">
            {new Date(date).toLocaleDateString('sk-SK')}
          </time>

          {/* Excerpt */}
          <p className="text-gray-300 text-sm line-clamp-2 mb-4 leading-relaxed">
            {excerpt}
          </p>

          {/* "Čítaj viac" link */}
          <span className="text-[var(--header-primary)] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Čítaj viac
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
