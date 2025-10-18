import Link from "next/link";

interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

export default function NewsCard({ title, date, excerpt, link }: NewsCardProps) {
  return (
    <Link href={link} className="group block">
      <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--header-primary)]/50 transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-[var(--header-primary)] transition-colors">
            {title}
          </h3>
          <time className="text-sm text-gray-400 whitespace-nowrap">
            {new Date(date).toLocaleDateString('sk-SK')}
          </time>
        </div>
        <p className="text-gray-300 text-sm line-clamp-2 mb-4">{excerpt}</p>
        <div className="inline-flex items-center gap-2 text-[var(--header-primary)] font-semibold text-sm group-hover:gap-3 transition-all">
          Čítaj viac
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}
