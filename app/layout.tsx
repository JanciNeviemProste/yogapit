import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "../styles/globals.css";
import CookieConsent from "@/components/CookieConsent";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/Footer";
import { AudioProvider } from "@/lib/AudioContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yogapit - Centrum pre védske štúdiá",
  description: "Každý, kto hľadá Najvyššiu Absolútnu Pravdu, musí pokračovať vo svojom hľadaní...",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${inter.variable} ${notoDevanagari.variable}`}>
      <body className="antialiased">
        <AudioProvider>
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </AudioProvider>
      </body>
    </html>
  );
}
