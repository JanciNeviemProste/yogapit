"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl w-full mx-auto">
        {/* Horizontálny layout - text vľavo, logo vpravo */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

          {/* Ľavá strana - Text obsah */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Hlavný nadpis */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Centrum pre védske štúdiá
              <br />
              <span className="text-primary">हरे कृष्ण</span>
            </h1>

            {/* Citát */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-2">
                Každý, kto hľadá Najvyššiu Absolútnu Pravdu, musí pokračovať vo svojom hľadaní, dokým nedosiahne tohto cieľa - za všetkých okolností, vždy a všade, priamo aj nepriamo.
              </p>
              <p className="text-sm sm:text-base text-gray-400 italic">
                — Šrímad Bhagavatam 2.9.36
              </p>
            </div>

            {/* Tlačidlá */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="group relative px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50">
                ČÍTAJ ČLÁNKY
              </button>
              <button className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-lg border-2 border-white/30 hover:border-primary transition-all duration-300 transform hover:scale-105">
                Zúčastni sa programu
              </button>
            </div>
          </div>

          {/* Pravá strana - Logo */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[323px] lg:h-[332px]">
              <Image
                src="/images/logo.png"
                alt="Yogapit Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
