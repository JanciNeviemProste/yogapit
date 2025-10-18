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
    <Link href={link} className="group block mb-4">
      <div className="flex gap-4 hover:bg-[#4D4D4D] transition-colors duration-300 rounded">
        {/* Image - fixed 210px width */}
        <div className="relative w-[210px] h-[140px] flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded"
            style={{ borderRadius: '4px' }}
            sizes="210px"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 py-2">
          {/* Date */}
          <time className="block text-[0.8rem] text-gray-400 mb-2">
            {new Date(date).toLocaleDateString('sk-SK')}
          </time>

          {/* Title */}
          <h3 className="text-[1.1rem] font-medium text-white mb-2 leading-snug">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-gray-300 line-clamp-2">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
