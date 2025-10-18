"use client";

import { Facebook, Instagram, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[var(--header-card-bg)] backdrop-blur-header border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social media icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/groups/333460573412422"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white/70 hover:text-[var(--header-primary)] transition-all duration-300 rounded-lg hover:bg-white/5 hover:scale-110"
              aria-label="Facebook skupina"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/yogapit.sk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white/70 hover:text-[var(--header-primary)] transition-all duration-300 rounded-lg hover:bg-white/5 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://reinkarnacia.sk/sledujte-nase-projekty/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white/70 hover:text-[var(--header-primary)] transition-all duration-300 rounded-lg hover:bg-white/5 hover:scale-110"
              aria-label="Sledujte naše projekty"
              title="reinkarnacia.sk"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright text */}
          <div className="text-center text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Yogapit.sk - Centrum pre védske štúdiá</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
