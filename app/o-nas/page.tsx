import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import oNasData from "@/data/o-nas.json";

export const metadata: Metadata = {
  title: "O nás - Yogapit",
  description: "Cieľom našej komunity je zoznámiť materialistickú spoločnosť s originálnou východnou filozofiou.",
};

export default function ONasPage() {
  return (
    <main className="relative min-h-screen w-full">
      <PageHero
        title={oNasData.hero.title}
        subtitle={oNasData.hero.subtitle}
        description={oNasData.hero.description}
      />

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Sections */}
        <div className="space-y-12">
          {oNasData.sections.map((section, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">{section.content}</p>

              {section.items && (
                <ul className="space-y-2 mt-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-200">
                      <span className="text-[var(--header-primary)] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.members && (
                <div className="mt-4 flex flex-wrap gap-6">
                  <div className="px-6 py-3 bg-[var(--header-primary)]/20 rounded-xl border border-[var(--header-primary)]/30">
                    <span className="text-3xl font-bold text-[var(--header-primary)]">{section.members}</span>
                    <span className="text-gray-300 ml-2">členov</span>
                  </div>
                  <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-white font-semibold">{section.platform}</span>
                  </div>
                  <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-white font-semibold">{section.location}</span>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Activities */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Naše činnosti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {oNasData.activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[var(--header-primary)]/50 transition-all"
                >
                  <span className="text-[var(--header-primary)]">✓</span>
                  <span className="text-gray-200">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
