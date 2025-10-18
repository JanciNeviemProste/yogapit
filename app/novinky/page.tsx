import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import NewsGrid from "@/components/ui/NewsGrid";
import FiltersBar from "@/components/ui/FiltersBar";
import Pagination from "@/components/ui/Pagination";
import novinkyData from "@/data/novinky.json";
import { NewsItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Novinky - Yogapit",
  description: "Najnovšie správy a aktuality z našej komunity.",
};

interface NovinkyPageProps {
  searchParams: Promise<{
    category?: string;
    page?: string;
  }>;
}

const ITEMS_PER_PAGE = 12;

export default async function NovinkyPage({ searchParams }: NovinkyPageProps) {
  const params = await searchParams;
  const currentCategory = params.category || null;
  const currentPage = parseInt(params.page || "1", 10);

  // Filter news by category
  let filteredNews: NewsItem[] = novinkyData.news;

  if (currentCategory && currentCategory !== "Všetko") {
    filteredNews = filteredNews.filter(
      (item) => item.category === currentCategory
    );
  }

  // Calculate pagination
  const totalItems = filteredNews.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedNews = filteredNews.slice(startIndex, endIndex);

  return (
    <main className="relative min-h-screen w-full">
      <PageHero
        title="Novinky"
        description="Najnovšie správy a aktuality z našej komunity."
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Filters Bar */}
        <FiltersBar
          categories={novinkyData.categories}
          activeCategory={currentCategory}
        />

        {/* News Grid */}
        <NewsGrid items={paginatedNews} />

        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </main>
  );
}
