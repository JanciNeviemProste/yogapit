import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PersonalityCard from "@/components/ui/PersonalityCard";
import osobnostiData from "@/data/osobnosti.json";

export const metadata: Metadata = {
  title: "Osobnosti - Yogapit",
  description: "Naša duchovná postupnosť učiteľov a žiakov (parampara) zahŕňa rôzne osobnosti, guruov a ačárjov.",
};

export default function OsobnostiPage() {
  return (
    <main className="relative min-h-screen w-full">
      <PageHero
        title={osobnostiData.hero.title}
        subtitle={osobnostiData.hero.subtitle}
        description={osobnostiData.hero.description}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {osobnostiData.personalities.map((personality) => (
            <PersonalityCard
              key={personality.id}
              name={personality.name}
              subtitle={personality.subtitle}
              image={personality.image}
              link={personality.link}
              era={personality.era}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
