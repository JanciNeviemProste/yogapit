import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import NewsGrid from "@/components/ui/NewsGrid";
import Pagination from "@/components/ui/Pagination";
import newsData from "@/data/news.json";

export const metadata: Metadata = {
  title: "Novinky – Yogapit",
  description: "Najnovšie správy a aktuality z našej komunity.",
};

interface NovinkyPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

const ITEMS_PER_PAGE = 9;

export default async function NovinkyPage({ searchParams }: NovinkyPageProps) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1", 10);

  // Calculate pagination
  const totalItems = newsData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedNews = newsData.slice(startIndex, endIndex);

  return (
    <main className="relative min-h-screen w-full bg-[var(--news-bg)]">
      <PageHero
        title="Novinky"
        description="Najnovšie správy a aktuality z našej komunity."
      />

      <div className="relative z-20 max-w-[1200px] px-6 md:px-8 mx-auto pb-20 pt-[calc(var(--header-height-desktop)+2rem)]">
        {/* News Grid */}
        <NewsGrid items={paginatedNews} />

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        )}
      </div>
    </main>
  );
}
