import NewsCard from "./NewsCard";
import { NewsItem } from "@/lib/types";

interface NewsGridProps {
  items: NewsItem[];
  isLoading?: boolean;
}

export default function NewsGrid({ items, isLoading = false }: NewsGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-lg overflow-hidden animate-pulse"
          >
            <div className="aspect-[4/3] bg-white/10" />
            <div className="p-5 space-y-3">
              <div className="h-6 bg-white/10 rounded w-20" />
              <div className="h-6 bg-white/10 rounded w-3/4" />
              <div className="h-4 bg-white/10 rounded w-1/2" />
              <div className="h-4 bg-white/10 rounded w-full" />
              <div className="h-4 bg-white/10 rounded w-5/6" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-lg">
          Nenašli sa žiadne novinky.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
}
