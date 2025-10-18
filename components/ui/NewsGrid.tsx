import NewsCard from "./NewsCard";

interface NewsItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  dateISO: string;
  image: string;
  imageAlt: string;
}

interface NewsGridProps {
  items: NewsItem[];
}

export default function NewsGrid({ items }: NewsGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-[var(--news-text-muted)] text-lg">
          Nenašli sa žiadne novinky.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[28px]">
      {items.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </div>
  );
}
