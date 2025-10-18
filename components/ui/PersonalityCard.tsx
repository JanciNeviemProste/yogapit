import Link from "next/link";
import Image from "next/image";

interface PersonalityCardProps {
  name: string;
  subtitle: string;
  image: string;
  link: string;
  era?: string;
}

export default function PersonalityCard({ name, subtitle, image, link, era }: PersonalityCardProps) {
  return (
    <Link href={link} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--header-primary)]/50 transition-all duration-300 hover:scale-105">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--header-primary)] transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-300 mb-2">{subtitle}</p>
          {era && <p className="text-xs text-gray-400">{era}</p>}
        </div>
      </div>
    </Link>
  );
}
