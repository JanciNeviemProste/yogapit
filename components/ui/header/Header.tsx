"use client";

import { useState } from "react";
import { Search, Facebook, Instagram } from "lucide-react";
import { useScrolled } from "@/lib/useScrolled";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import SearchOverlay from "../SearchOverlay";
import clsx from "clsx";

export default function Header() {
  const isScrolled = useScrolled(24);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[var(--header-bg-scrolled)] backdrop-blur-header border-b border-white/10"
            : "bg-[var(--header-bg)] backdrop-blur-header"
        )}
        style={{
          height: "var(--header-height-desktop)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Empty space (no logo in header on original) */}
            <div className="w-32"></div>

            {/* Desktop menu */}
            <DesktopMenu className="hidden lg:flex" />

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Social icons (desktop only) */}
              <div className="hidden md:flex items-center gap-2 mr-2">
                <a
                  href="https://www.facebook.com/yogapit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white/70 hover:text-[var(--header-primary)] transition-colors rounded-lg hover:bg-white/5"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/yogapit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white/70 hover:text-[var(--header-primary)] transition-colors rounded-lg hover:bg-white/5"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              {/* Search button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white hover:text-[var(--header-primary)] transition-colors rounded-lg hover:bg-white/5"
                aria-label="Hľadať"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[var(--header-primary)] transition-colors"
                aria-label="Menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="flex flex-col gap-1.5">
                  <span
                    className={clsx(
                      "block w-6 h-0.5 bg-current transition-transform",
                      isMobileMenuOpen && "rotate-45 translate-y-2"
                    )}
                  />
                  <span
                    className={clsx(
                      "block w-6 h-0.5 bg-current transition-opacity",
                      isMobileMenuOpen && "opacity-0"
                    )}
                  />
                  <span
                    className={clsx(
                      "block w-6 h-0.5 bg-current transition-transform",
                      isMobileMenuOpen && "-rotate-45 -translate-y-2"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Search overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
