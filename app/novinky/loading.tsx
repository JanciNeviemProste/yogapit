import PageHero from "@/components/ui/PageHero";

export default function NovinkyLoading() {
  return (
    <main className="relative min-h-screen w-full bg-[var(--news-bg)]">
      <PageHero
        title="Novinky"
        description="Najnovšie správy a aktuality z našej komunity."
      />

      <div className="relative z-20 max-w-[1200px] px-6 md:px-8 mx-auto pb-20 pt-[calc(var(--header-height-desktop)+2rem)]">
        {/* Loading Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[28px]">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[12px] border border-[rgba(255,255,255,0.06)] bg-[rgba(18,22,32,0.82)] overflow-hidden backdrop-blur-[6px] animate-pulse"
            >
              {/* Text section skeleton - TOP */}
              <div className="px-6 pt-6 pb-4 space-y-3">
                <div className="h-6 bg-white/10 rounded w-3/4" />
                <div className="space-y-2">
                  <div className="h-4 bg-white/10 rounded w-full" />
                  <div className="h-4 bg-white/10 rounded w-5/6" />
                  <div className="h-4 bg-white/10 rounded w-4/6" />
                </div>
              </div>

              {/* Image section skeleton - BOTTOM */}
              <div className="aspect-[16/9] bg-white/10 rounded-b-[10px]" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
