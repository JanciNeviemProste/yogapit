import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import EventCard from "@/components/ui/EventCard";
import udalostiData from "@/data/udalosti.json";

export const metadata: Metadata = {
  title: "Udalosti - Yogapit",
  description: "Pravidelné programy a nadchádzajúce udalosti našej komunity.",
};

export default function UdalostiPage() {
  return (
    <main className="relative min-h-screen w-full">
      <PageHero
        title="Udalosti"
        description="Pravidelné programy a nadchádzajúce udalosti našej komunity."
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {/* Pravidelné programy */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Pravidelné programy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {udalostiData.regularPrograms.map((program, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[var(--header-primary)]/50 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <div className="flex items-center gap-4 text-[var(--header-primary)] font-semibold mb-3">
                  <span>{program.day}</span>
                  <span>•</span>
                  <span>{program.time}</span>
                </div>
                <p className="text-gray-300 text-sm mb-2">{program.description}</p>
                <p className="text-gray-400 text-xs">{program.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Najbližšie udalosti */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Najbližšie udalosti</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[var(--header-primary)]/30 scrollbar-track-white/5">
            {udalostiData.upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                month={event.month}
                day={event.day}
                title={event.title}
                description={event.description}
                link={event.link}
              />
            ))}
          </div>
        </section>

        {/* Uskutočnené udalosti */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Uskutočnené udalosti</h2>
          <div className="space-y-4">
            {udalostiData.pastEvents.map((event, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="flex-shrink-0 w-20 text-center">
                  <time className="text-sm text-gray-400">
                    {new Date(event.date).toLocaleDateString('sk-SK')}
                  </time>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-300">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calendar subscription */}
        <section className="text-center">
          <div className="inline-flex gap-4">
            <a
              href={udalostiData.calendarLinks.google}
              className="px-6 py-3 bg-[var(--header-primary)] hover:bg-[var(--header-primary-600)] text-white font-semibold rounded-xl transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pridať do Google Calendar
            </a>
            <a
              href={udalostiData.calendarLinks.apple}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300"
            >
              Pridať do Apple Calendar
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
