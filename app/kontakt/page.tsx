import { Metadata } from "next";
import { Mail, MapPin, Facebook, Instagram, ExternalLink } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt - Yogapit",
  description: "Napíšte nám a my sa vám ozveme čo najskôr. Tešíme sa na spoluprácu s vami.",
};

export default function KontaktPage() {
  return (
    <main className="relative min-h-screen w-full">
      <PageHero
        title="Kontakt"
        description="Napíšte nám a my sa vám ozveme čo najskôr. Tešíme sa na spoluprácu s vami."
      />

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-[var(--header-primary)]/20 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-[var(--header-primary)]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a
              href="mailto:haribol@yogapit.sk"
              className="text-[var(--header-primary)] hover:underline"
            >
              haribol@yogapit.sk
            </a>
          </div>

          {/* Location */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-[var(--header-primary)]/20 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[var(--header-primary)]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Lokácia</h3>
            <p className="text-gray-300">Ľudové námestie, Bratislava</p>
          </div>

          {/* Social Media */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-[var(--header-primary)]/20 rounded-full flex items-center justify-center">
              <Facebook className="w-6 h-6 text-[var(--header-primary)]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-4">Sociálne siete</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/groups/333460573412422"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/70 hover:text-[var(--header-primary)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/yogapit.sk/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/70 hover:text-[var(--header-primary)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://reinkarnacia.sk/sledujte-nase-projekty/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/70 hover:text-[var(--header-primary)] transition-colors"
                aria-label="Projekty"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Napíšte nám</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
