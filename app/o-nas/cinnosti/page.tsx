import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import cinnostiData from "@/data/cinnosti.json";

export const metadata: Metadata = {
  title: "Činnosti - Yogapit",
  description: "Naša komunita sa venuje mnohým činnostiam, ktoré podporujú duchovný rozvoj a šírenie védskej múdrosti.",
};

export default function CinnostiPage() {
  return (
    <main className="relative min-h-screen w-full">
      <PageHero
        title={cinnostiData.hero.title}
        subtitle={cinnostiData.hero.subtitle}
        description={cinnostiData.hero.description}
      />

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cinnostiData.activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[var(--header-primary)]/50 transition-all duration-300 hover:scale-105"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{activity.icon}</span>
                <h2 className="text-2xl font-bold text-white">{activity.title}</h2>
              </div>

              {/* Description */}
              <p className="text-gray-200 leading-relaxed mb-6">{activity.description}</p>

              {/* Details */}
              <ul className="space-y-2">
                {activity.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[var(--header-primary)] mt-1">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
