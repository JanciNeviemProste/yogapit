"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface FiltersBarProps {
  categories: string[];
  activeCategory: string | null;
}

export default function FiltersBar({ categories, activeCategory }: FiltersBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (category: string | null) => {
    const params = new URLSearchParams(searchParams);

    if (category === null || category === "Všetko") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    // Reset to page 1 when changing category
    params.delete("page");

    router.push(`/novinky${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-sm border-b border-white/10 py-4 mb-8">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((category) => {
          const isActive =
            (category === "Všetko" && !activeCategory) ||
            category === activeCategory;

          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category === "Všetko" ? null : category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                transition-all duration-300
                ${isActive
                  ? "bg-[var(--header-primary)] text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
                }
              `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
