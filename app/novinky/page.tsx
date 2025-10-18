import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import NewsCard from "@/components/ui/NewsCard";
import novinkyData from "@/data/novinky.json";

export const metadata: Metadata = {
  title: "Novinky - Yogapit",
  description: "Najnovšie správy a aktuality z našej komunity.",
};

export default function NovinkyPage() {
  return (
    <main className="relative min-h-screen w-full">
      <PageHero
        title="Novinky"
        description="Najnovšie správy a aktuality z našej komunity."
      />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-6">
          {novinkyData.news.map((newsItem) => (
            <NewsCard
              key={newsItem.id}
              title={newsItem.title}
              date={newsItem.date}
              excerpt={newsItem.excerpt}
              link={newsItem.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
