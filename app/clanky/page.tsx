import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ArticleCard from "@/components/ui/ArticleCard";
import clankyData from "@/data/clanky.json";

export const metadata: Metadata = {
  title: "Články - Yogapit",
  description: "Ponúkame vám kolekciu článkov o védskej filozofii, duchovnej praxi a osobnostiach našej tradície.",
};

export default function ClankyPage() {
  return (
    <main className="relative min-h-screen w-full">
      <PageHero
        title="Články"
        description={clankyData.intro}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Category filters - Optional, can be implemented later */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {clankyData.categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white/5 hover:bg-[var(--header-primary)]/20 border border-white/10 hover:border-[var(--header-primary)]/50 rounded-full text-white text-sm transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clankyData.articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              category={article.category}
              excerpt={article.excerpt}
              image={article.image}
              link={article.link}
              author={article.author}
              date={article.date}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
