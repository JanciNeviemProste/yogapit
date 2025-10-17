"use client";

import { useState, useEffect } from "react";

/**
 * Hook pre detekciu scrollu
 * @param threshold Prah v pixeloch, kedy sa považuje stránka za scrollnutú (default: 24)
 * @returns boolean - true ak je stránka scrollnutá za threshold
 */
export function useScrolled(threshold: number = 24): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > threshold);
    };

    // Počiatočná kontrola
    handleScroll();

    // Pridanie event listenera
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
