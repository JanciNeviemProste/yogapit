"use client";

import { Facebook, Instagram, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="fixed bottom-[50px] left-1/2 -translate-x-1/2 z-30 hidden xl:flex items-center gap-4"
      role="contentinfo"
      aria-label="Social media links"
    >
      {/* Social media icons - minimalistic, no background */}
      <a
        href="https://www.facebook.com/groups/333460573412422"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-white/60 hover:text-[var(--header-primary)] transition-all duration-300 hover:scale-125"
        aria-label="Facebook skupina"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="https://www.instagram.com/yogapit.sk/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-white/60 hover:text-[var(--header-primary)] transition-all duration-300 hover:scale-125"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="https://reinkarnacia.sk/sledujte-nase-projekty/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-white/60 hover:text-[var(--header-primary)] transition-all duration-300 hover:scale-125"
        aria-label="Sledujte naše projekty"
        title="reinkarnacia.sk"
      >
        <ExternalLink className="w-5 h-5" />
      </a>
    </footer>
  );
}
