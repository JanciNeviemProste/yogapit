import PageHero from "@/components/ui/PageHero";

export default function NovinkyLoading() {
  return (
    <main className="relative min-h-screen w-full">
      <PageHero
        title="Novinky"
        description="Najnovšie správy a aktuality z našej komunity."
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Filters Bar Skeleton */}
        <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-sm border-b border-white/10 py-4 mb-8">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-10 w-24 bg-white/10 rounded-full animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* News Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg overflow-hidden animate-pulse"
            >
              <div className="aspect-[4/3] bg-white/10" />
              <div className="p-5 space-y-3">
                <div className="h-6 bg-white/10 rounded w-20" />
                <div className="h-6 bg-white/10 rounded w-3/4" />
                <div className="h-4 bg-white/10 rounded w-1/2" />
                <div className="h-4 bg-white/10 rounded w-full" />
                <div className="h-4 bg-white/10 rounded w-5/6" />
                <div className="h-4 bg-white/10 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
