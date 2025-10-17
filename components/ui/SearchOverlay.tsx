"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Disable body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementovať skutočné vyhľadávanie
    console.log("Hľadám:", query);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-start justify-center pt-32 px-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Vyhľadávanie"
        >
          <motion.div
            initial={{ scale: 0.9, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-3 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="Zavrieť vyhľadávanie"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Search form */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-white/50" />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Hľadať články, témy, udalosti..."
                  className="w-full bg-white/10 border-2 border-white/20 rounded-2xl pl-16 pr-6 py-5 text-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--header-primary)] focus:bg-white/[0.15] transition-all"
                  autoComplete="off"
                />
              </div>

              {/* Search suggestions (dummy) */}
              {query.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-[var(--header-card-bg)] backdrop-blur-header rounded-xl border border-white/10 p-4"
                >
                  <p className="text-white/50 text-sm">
                    Výsledky pre &quot;{query}&quot; sa zobrazia tu...
                  </p>
                  <p className="text-white/30 text-xs mt-2">
                    (Vyhľadávanie zatiaľ nie je implementované)
                  </p>
                </motion.div>
              )}
            </form>

            {/* Popular searches hint */}
            {query.length === 0 && (
              <div className="mt-8 text-center">
                <p className="text-white/50 text-sm mb-4">Populárne vyhľadávania:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Japa", "Sekta", "Karma", "Védske štúdiá"].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
