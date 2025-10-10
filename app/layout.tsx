import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="sk" className={inter.variable}>
      <body className="antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
