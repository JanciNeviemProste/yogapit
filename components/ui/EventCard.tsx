import Link from "next/link";

interface EventCardProps {
  month: string;
  day: string;
  title: string;
  description: string;
  link: string;
}

export default function EventCard({ month, day, title, description, link }: EventCardProps) {
  return (
    <Link href={link} className="group block flex-shrink-0 w-80">
      <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--header-primary)]/50 transition-all duration-300 hover:scale-105">
        {/* Date display */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[var(--header-primary)] flex flex-col items-center justify-center">
            <span className="text-xs font-semibold text-white/80 uppercase">{month}</span>
            <span className="text-2xl font-bold text-white">{day}</span>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-[var(--header-primary)] transition-colors line-clamp-2">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm line-clamp-3 mb-4">{description}</p>

        {/* CTA */}
        <div className="inline-flex items-center gap-2 text-[var(--header-primary)] font-semibold text-sm group-hover:gap-3 transition-all">
          Viac o udalosti
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}
