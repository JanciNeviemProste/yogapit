"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import menuData from "@/data/menu.json";

interface DesktopMenuProps {
  className?: string;
}

export function DesktopMenu({ className }: DesktopMenuProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className={clsx("items-center gap-8", className)} role="navigation">
      {menuData.items.map((item) => {
        if (item.type === "dropdown" && item.children) {
          const isActive = item.children.some((child) => pathname === child.href);

          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={clsx(
                  "menu-link-underline flex items-center gap-1 text-[var(--header-text)] hover:text-[var(--header-primary)] transition-colors font-medium",
                  isActive && "active"
                )}
                aria-expanded={openDropdown === item.label}
                aria-haspopup="true"
              >
                {item.label}
                <ChevronDown
                  className={clsx(
                    "w-4 h-4 transition-transform",
                    openDropdown === item.label && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown menu */}
              {openDropdown === item.label && (
                <div
                  className="absolute left-0 top-full mt-2 w-70 bg-[var(--header-card-bg)] backdrop-blur-header rounded-xl shadow-[var(--header-shadow-card)] border border-white/10 py-2 z-50"
                  style={{ width: "280px" }}
                >
                  {item.children.map((child, idx) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={clsx(
                        "block px-5 py-3 text-[var(--header-text-muted)] hover:text-[var(--header-primary)] hover:bg-white/5 transition-colors",
                        idx < item.children!.length - 1 && "border-b border-white/5",
                        pathname === child.href && "text-[var(--header-primary)]"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
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
              "menu-link-underline text-[var(--header-text)] hover:text-[var(--header-primary)] transition-colors font-medium",
              isActive && "active"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
