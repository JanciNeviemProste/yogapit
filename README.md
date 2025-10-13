# Yogapit - Rebuild

Presná 1:1 kópia originálnej stránky yogapit.sk s video pozadím.

## Hlavné vlastnosti

- ✅ Fullscreen video pozadie (nebula4.m4v) s nekonečným loopom
- ✅ Yogapit logo (323x332px) vpravo od textu
- ✅ Presná fialová farba (#b17fe2) ako na originále
- ✅ GDPR Cookie Consent lišta (3 tlačidlá: Súhlasím/Odmietnuť/Nastavenia)
- ✅ **NOVÉ:** Pravý postranný panel tém s carousel (ZOMBIE karta)
  - Keyboard navigation (←/→/Enter)
  - Touch/swipe podpora
  - ARIA accessibility
  - Responzívny dizajn (desktop fixný vpravo, mobile slider)
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
│   ├── layout.tsx              # Root layout s fontami
│   └── page.tsx                # Homepage
├── components/
│   ├── VideoBackground.tsx     # Video pozadie komponent
│   ├── Hero.tsx                # Hlavná hero sekcia
│   ├── RightTopicPanel.tsx     # Pravý panel tém (React)
│   └── CookieConsent.tsx       # GDPR cookie consent
├── public/
│   ├── panel.html              # Standalone témy panel (HTML+CSS+JS)
│   ├── assets/                 # Obrázky tém
│   │   ├── zombie.svg
│   │   ├── prekazky.svg
│   │   ├── karma.svg
│   │   └── japa.svg
│   ├── videos/
│   │   └── nebula4.m4v         # Video pozadie
│   └── images/
│       └── logo.png            # Yogapit logo
├── styles/
│   └── globals.css             # Globálne Tailwind štýly
├── TOPIC_PANEL_README.md       # Dokumentácia pre témy panel
└── README.md                   # Hlavná dokumentácia
```

## Technológie

- Next.js 15.5.4
- React 19
- TypeScript 5.7
- Tailwind CSS 3.4
- Playfair Display & Inter fonty

## Verzia

**1.1.0** - Pridaný pravý postranný panel tém (ZOMBIE karta carousel)
- Standalone HTML verzia (`public/panel.html`)
- React komponent (`components/RightTopicPanel.tsx`)
- Keyboard navigation, touch/swipe, accessibility
- Responzívny dizajn (desktop/mobile)
- Kompletná dokumentácia (`TOPIC_PANEL_README.md`)

1.0.0 - Plná 1:1 kópia originálnej yogapit.sk stránky
