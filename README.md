# Yogapit - Rebuild

Presná 1:1 kópia originálnej stránky yogapit.sk s video pozadím.

## Hlavné vlastnosti

- ✅ Fullscreen video pozadie (nebula4.m4v) s nekonečným loopom
- ✅ Yogapit logo (323x332px) vpravo od textu
- ✅ Presná fialová farba (#b17fe2) ako na originále
- ✅ GDPR Cookie Consent lišta (3 tlačidlá: Súhlasím/Odmietnuť/Nastavenia)
- ✅ Responzívny dizajn
- ✅ Next.js 15 + React 19 + TypeScript
- ✅ Tailwind CSS styling

## Inštalácia a spustenie

```bash
# Inštalácia závislostí
npm install
# alebo
pnpm install

# Spustenie development servera
npm run dev
# alebo
pnpm dev
```

Otvor [http://localhost:3000](http://localhost:3000) v prehliadači.

## Štruktúra projektu

```
yogapit-rebuild/
├── app/
│   ├── layout.tsx          # Root layout s fontami
│   └── page.tsx            # Homepage
├── components/
│   ├── VideoBackground.tsx # Video pozadie komponent
│   └── Hero.tsx            # Hlavná hero sekcia
├── public/
│   ├── videos/
│   │   └── nebula4.m4v     # Video pozadie
│   └── images/
│       └── logo.png        # Yogapit logo
└── styles/
    └── globals.css         # Globálne Tailwind štýly
```

## Technológie

- Next.js 15.5.4
- React 19
- TypeScript 5.7
- Tailwind CSS 3.4
- Playfair Display & Inter fonty

## Verzia

1.0.0 - Plná 1:1 kópia originálnej yogapit.sk stránky
