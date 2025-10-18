import Link from "next/link";
import Image from "next/image";

interface NewsCardProps {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  dateISO: string;
  image: string;
  imageAlt: string;
}

export default function NewsCard({
  id,
  title,
  slug,
  excerpt,
  dateISO,
  image,
  imageAlt
}: NewsCardProps) {
  return (
    <article
      className="group rounded-[12px] border border-[rgba(255,255,255,0.06)] bg-[rgba(18,22,32,0.82)] overflow-hidden backdrop-blur-[6px] transition-all hover:translate-y-[-3px] hover:ring-1 hover:ring-white/10 hover:border-white/14"
      role="article"
      aria-labelledby={`news-title-${id}`}
    >
      {/* Text section - TOP */}
      <div className="px-6 pt-6 pb-4">
        <Link
          href={`/novinky/${slug}`}
          className="link-underline block"
        >
          <h3
            id={`news-title-${id}`}
            className="text-[18px] md:text-[19px] font-semibold leading-snug text-[var(--news-text)]"
          >
            {title}
          </h3>
        </Link>

        <p className="mt-2 text-[14px] leading-6 text-[var(--news-text-muted)] line-clamp-3">
          {excerpt}
        </p>
      </div>

      {/* Image section - BOTTOM */}
      <Link href={`/novinky/${slug}`} className="relative block">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover rounded-b-[10px] transition-transform duration-200 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>

        {/* "ČÍTAJ VIAC" badge - circular, left bottom on image */}
        <div
          className="absolute left-4 bottom-4 w-[64px] h-[64px] grid place-items-center rounded-full text-[11px] tracking-[.14em] uppercase font-medium text-white/90 border border-white/15 backdrop-blur-[2px]"
          style={{
            background: 'radial-gradient(66% 66% at 50% 50%, rgba(140,73,201,.75) 0%, rgba(140,73,201,.35) 55%, rgba(140,73,201,.10) 100%)'
          }}
          aria-label="Čítaj celý článok"
        >
          ČÍTAJ<br/>VIAC
        </div>
      </Link>
    </article>
  );
}
