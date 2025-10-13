"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * Topic Data Model
 */
export interface Topic {
  id: string;
  title: string;
  category: string;
  excerpt?: string;
  image: string;
  url: string;
  nextTitle?: string;
}

/**
 * Component Props
 */
interface RightTopicPanelProps {
  topics: Topic[];
  initialIndex?: number;
}

/**
 * Right Topic Panel Component
 *
 * Zobrazuje carousel tém s hlavnou kartou, navigáciou a ďalšou témou.
 * Podporuje keyboard navigation (←/→/Enter), swipe gestures a accessibility.
 *
 * @example
 * ```tsx
 * const topics = [
 *   { id: "zombie", title: "ZOMBIE", category: "Sekta", image: "/assets/zombie.png", url: "/tema/zombie", nextTitle: "Nevyspovedné prekážky" },
 *   // ...more topics
 * ];
 *
 * <RightTopicPanel topics={topics} initialIndex={0} />
 * ```
 */
export default function RightTopicPanel({
  topics,
  initialIndex = 0,
}: RightTopicPanelProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const currentTopic = topics[currentIndex];
  const nextTopic = topics[(currentIndex + 1) % topics.length];

  // Navigation handlers
  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % topics.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + topics.length) % topics.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goNext();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, topics.length]);

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left -> next
      goNext();
    } else if (touchStart - touchEnd < -50) {
      // Swipe right -> prev
      goPrev();
    }
  };

  return (
    <aside
      className="relative w-full lg:w-[360px] max-w-[400px] min-w-[320px]"
      role="region"
      aria-label="Témy carousel"
      aria-roledescription="carousel"
      aria-live="polite"
    >
      {/* Vertical Label */}
      <div
        className="hidden lg:block absolute left-[-12px] top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] text-[11px] uppercase tracking-[2px] opacity-50 whitespace-nowrap pointer-events-none"
        aria-hidden="true"
      >
        SPOZNAJTE HLBŠIE JEDNOTLIVÉ TÉMY
      </div>

      {/* Main Card */}
      <article
        className="relative w-full aspect-[3/4] lg:aspect-[3/4] h-auto lg:h-auto rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={currentTopic.image}
            alt={`${currentTopic.title} téma ilustrácia`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, 360px"
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#FF3B3B] via-transparent to-[#000000]"
          style={{
            backgroundImage: "linear-gradient(180deg, #FF3B3B 0%, transparent 40%, #000000 100%)",
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col p-6 z-10">
          {/* Top Banner */}
          <h2 className="text-5xl lg:text-6xl font-black tracking-wider text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] mb-auto">
            {currentTopic.title}
          </h2>

          {/* Bottom Area */}
          <div className="mt-auto space-y-4">
            <div className="text-sm uppercase tracking-wide opacity-90">
              {currentTopic.category}
            </div>
            <a
              href={currentTopic.url}
              className="inline-block px-7 py-3 bg-transparent border-2 border-white text-white no-underline uppercase font-semibold text-sm tracking-wide rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,255,255,0.3)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6B36E9] focus-visible:ring-offset-3"
              aria-label={`Spoznať viac o téme ${currentTopic.title}`}
            >
              SPOZNAŤ VIAC
            </a>
          </div>
        </div>
      </article>

      {/* Next Topic Block */}
      <div
        onClick={goNext}
        onKeyDown={(e) => e.key === "Enter" && goNext()}
        tabIndex={0}
        role="button"
        aria-label={`Ďalšia téma: ${nextTopic.title}`}
        className="relative mt-4 h-24 bg-gradient-to-br from-[#4328A4] to-[#6B36E9] rounded-3xl p-5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(107,54,233,0.4)] overflow-hidden group focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6B36E9] focus-visible:ring-offset-3"
      >
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10">
          <div className="text-xs uppercase tracking-wide opacity-80 mb-2">
            Ďalšia téma
          </div>
          <div className="text-xl font-bold leading-tight">
            {nextTopic.title}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute lg:right-[-60px] lg:top-1/2 lg:-translate-y-1/2 bottom-[-70px] left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 flex lg:flex-col flex-row gap-3">
        {/* Previous */}
        <button
          onClick={goPrev}
          aria-label="Predošlá téma"
          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-110 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6B36E9] focus-visible:ring-offset-3"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={goNext}
          aria-label="Ďalšia téma"
          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-110 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6B36E9] focus-visible:ring-offset-3"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
