"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import menuData from "@/data/menu.json";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Close on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Trap focus & disable body scroll
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-[var(--header-card-bg)] backdrop-blur-header z-50 lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobilné menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 text-white hover:text-[var(--header-primary)] transition-colors rounded-lg hover:bg-white/5"
                aria-label="Zavrieť menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu items */}
            <nav className="p-6 space-y-2">
              {menuData.items.map((item) => {
                if (item.type === "dropdown" && item.children) {
                  const isActive = item.children.some((child) => pathname === child.href);
                  const isExpanded = openAccordion === item.label;

                  return (
                    <div key={item.label} className="border-b border-white/5 pb-2">
                      <button
                        onClick={() => setOpenAccordion(isExpanded ? null : item.label)}
                        className={clsx(
                          "w-full flex items-center justify-between py-3 text-left font-medium transition-colors",
                          isActive
                            ? "text-[var(--header-primary)]"
                            : "text-[var(--header-text)] hover:text-[var(--header-primary)]"
                        )}
                        aria-expanded={isExpanded}
                      >
                        {item.label}
                        <ChevronDown
                          className={clsx(
                            "w-5 h-5 transition-transform",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1 mt-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={clsx(
                                    "block py-2 text-sm transition-colors",
                                    pathname === child.href
                                      ? "text-[var(--header-primary)]"
                                      : "text-[var(--header-text-muted)] hover:text-[var(--header-primary)]"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Regular link
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={clsx(
                      "block py-3 font-medium transition-colors border-b border-white/5",
                      isActive
                        ? "text-[var(--header-primary)]"
                        : "text-[var(--header-text)] hover:text-[var(--header-primary)]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
