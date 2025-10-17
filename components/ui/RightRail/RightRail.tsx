"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import rightRailData from "@/data/right-rail.json";

interface RightRailItem {
  title: string;
  slug: string;
  ctaHref: string;
  image: string;
  next: string;
}

export default function RightRail() {
  const swiperRef = useRef<SwiperType | null>(null);
  const items = rightRailData.items as RightRailItem[];

  return (
    <aside
      className="fixed right-6 top-1/2 -translate-y-1/2 w-[380px] h-[520px] z-40 hidden xl:block"
      role="region"
      aria-label="Témy carousel"
    >
      {/* Vertical label */}
      <div
        className="absolute left-[-16px] top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.2em] text-white/70 whitespace-nowrap pointer-events-none"
        style={{
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
          transformOrigin: "center",
        }}
        aria-hidden="true"
      >
        SPOZNAJTE HLBŠIE JEDNOTLIVÉ TÉMY
      </div>

      {/* Carousel container */}
      <div className="relative w-full h-full bg-[var(--header-card-bg)] backdrop-blur-header rounded-[28px] overflow-hidden shadow-[var(--header-shadow-card)] border border-white/10">
        <Swiper
          modules={[EffectFade, Autoplay, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={600}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full h-full"
        >
          {items.map((item, idx) => (
            <SwiperSlide key={item.slug}>
              <div className="relative w-full h-full flex flex-col">
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={`${item.title} ilustrácia`}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                    sizes="380px"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-8 justify-between">
                  {/* Title */}
                  <h3 className="text-4xl font-bold text-white leading-tight drop-shadow-lg">
                    {item.title}
                  </h3>

                  {/* CTA & Next topic */}
                  <div className="space-y-4">
                    {/* CTA Button */}
                    <Link
                      href={item.ctaHref}
                      className="inline-block px-5 py-2.5 bg-[var(--header-primary)] hover:bg-[var(--header-primary-600)] text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--header-primary)]/30"
                    >
                      SPOZNAŤ VIAC
                    </Link>

                    {/* Next topic preview */}
                    <div className="text-sm">
                      <p className="text-white/60 mb-1">Ďalšia téma:</p>
                      <p className="text-white font-medium">{item.next}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation arrows */}
        <div className="absolute bottom-6 right-6 flex gap-3 z-20">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
            aria-label="Predošlá téma"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
            aria-label="Ďalšia téma"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
