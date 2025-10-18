"use client";

import { useState } from "react";
import Link from "next/link";

interface ProjectAccordionProps {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  link: string;
}

export default function ProjectAccordion({
  title,
  subtitle,
  icon,
  description,
  link,
}: ProjectAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden mb-4">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">{icon}</span>
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-400">{subtitle}</p>
          </div>
        </div>
        <span
          className={`custom-arrow transition-transform ${isOpen ? "open" : ""}`}
        />
      </button>

      {/* Content */}
      {isOpen && (
        <div className="p-6 bg-white/5 border-t border-white/10">
          <p className="text-gray-300 mb-4">{description}</p>
          <Link
            href={link}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--header-primary)] hover:bg-[var(--header-primary-600)] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            ZISTIŤ VIAC
          </Link>
        </div>
      )}
    </div>
  );
}
