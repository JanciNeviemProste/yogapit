# Pravý Postranný Panel "Témy" - Dokumentácia

## 📦 Obsah balíka

- `public/panel.html` - Standalone HTML+CSS+JS verzia (bez závislostí)
- `components/RightTopicPanel.tsx` - React/Next.js komponent s Tailwind CSS
- `public/assets/` - Priečinok pre obrázky tém

---

## 🚀 Rýchly štart

### Variant A: Standalone HTML

```html
<!-- Vložte do vašej stránky -->
<iframe src="/panel.html" width="360" height="600" frameborder="0"></iframe>

<!-- Alebo otvorte priamo: -->
<!-- http://localhost:3001/panel.html -->
```

**Vlastnosti:**
- ✅ Žiadne závislosti
- ✅ Funguje všade (HTML, WordPress, Shopify...)
- ✅ Kompletné CSS a JS inline
- ✅ Keyboard navigation (←/→)
- ✅ Touch/swipe podpora
- ✅ ARIA accessibility

---

### Variant B: React/Next.js Komponent

#### 1. Import komponentu

```tsx
import RightTopicPanel from "@/components/RightTopicPanel";
import type { Topic } from "@/components/RightTopicPanel";
```

#### 2. Pripravte dáta

```tsx
const topics: Topic[] = [
  {
    id: "zombie",
    title: "ZOMBIE",
    category: "Sekta",
    image: "/assets/zombie.png",
    url: "/tema/zombie",
    nextTitle: "Nevyspovedné prekážky",
  },
  {
    id: "prekazky",
    title: "Nevyspovedné prekážky",
    category: "Filozofia",
    image: "/assets/prekazky.png",
    url: "/tema/prekazky",
    nextTitle: "Karma",
  },
  {
    id: "karma",
    title: "Karma",
    category: "Védske štúdiá",
    image: "/assets/karma.png",
    url: "/tema/karma",
    nextTitle: "Japa",
  },
  {
    id: "japa",
    title: "Japa",
    category: "Praxe",
    image: "/assets/japa.png",
    url: "/tema/japa",
    nextTitle: "ZOMBIE",
  },
];
```

#### 3. Použite v komponente

```tsx
export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Váš obsah */}
      <div className="container mx-auto">
        {/* Hero sekcia */}
      </div>

      {/* Pravý panel - absolute/fixed positioning */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <RightTopicPanel topics={topics} initialIndex={0} />
      </div>

      {/* Mobile verzia - pod hero */}
      <div className="lg:hidden mt-8 px-4">
        <RightTopicPanel topics={topics} initialIndex={0} />
      </div>
    </main>
  );
}
```

---

## 🎨 Integrácia do existujúcej Hero sekcie

### Upravte `components/Hero.tsx`:

```tsx
"use client";

import Image from "next/image";
import RightTopicPanel from "./RightTopicPanel";
import type { Topic } from "./RightTopicPanel";

// Demo témy
const demoTopics: Topic[] = [
  {
    id: "zombie",
    title: "ZOMBIE",
    category: "Sekta",
    image: "/assets/zombie.png",
    url: "/tema/zombie",
    nextTitle: "Nevyspovedné prekážky",
  },
  // ... pridajte ostatné témy
];

export default function Hero() {
  return (
    <div className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Existujúci obsah Hero */}
      <div className="max-w-7xl w-full mx-auto">
        {/* Text a logo */}
      </div>

      {/* NOVÉ: Pravý panel tém */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <RightTopicPanel topics={demoTopics} initialIndex={0} />
      </div>
    </div>
  );
}
```

---

## 🖼️ Príprava obrázkov

Umiestnite obrázky do `public/assets/`:

```
public/
└── assets/
    ├── zombie.png      (odporúčané: 600x800px)
    ├── prekazky.png
    ├── karma.png
    └── japa.png
```

**Odporúčania:**
- Formát: PNG alebo WebP
- Rozlíšenie: 600x800px (aspect ratio 3:4)
- Veľkosť: optimalizujte na <200KB
- Alt text: automaticky generovaný z názvu témy

---

## ⌨️ Keyboard Navigation

| Klávesa | Akcia |
|---------|-------|
| `→` (Right Arrow) | Ďalšia téma |
| `←` (Left Arrow) | Predošlá téma |
| `Enter` | Aktivovať CTA alebo "Ďalšia téma" blok |
| `Tab` | Navigácia medzi interaktívnymi prvkami |

---

## 📱 Responzívne chovanie

### Desktop (≥1024px)
- Panel fixný vpravo od hero sekcie
- Šírka: 360px
- Vertikálny text "SPOZNAJTE HLBŠIE..."
- Navigačné šípky vpravo od panelu

### Mobile (<1024px)
- Horizontálny slider pod hero
- Aspect ratio: 4:3
- Výška: 340px
- Šípky pod kartou (horizontálne)
- Vertikálny text skrytý

---

## ♿ Accessibility Features

- ✅ ARIA labels pre všetky interaktívne prvky
- ✅ `role="region"` a `aria-roledescription="carousel"`
- ✅ `aria-live="polite"` pre oznámenia zmien
- ✅ Keyboard navigation (←/→/Enter)
- ✅ Focus visible states (outline)
- ✅ `prefers-reduced-motion` podpora
- ✅ Alt texty pre obrázky

---

## 🎯 Props (React komponent)

```typescript
interface RightTopicPanelProps {
  topics: Topic[];        // Array tém
  initialIndex?: number;  // Počiatočný index (default: 0)
}

interface Topic {
  id: string;            // Unique ID
  title: string;         // "ZOMBIE"
  category: string;      // "Sekta"
  excerpt?: string;      // Voliteľný popis
  image: string;         // URL obrázka
  url: string;           // Cieľ CTA tlačidla
  nextTitle?: string;    // Zobrazí sa v "Ďalšia téma" bloku
}
```

---

## 🎨 Customizácia farieb

### Standalone HTML (`panel.html`)
Upravte CSS variables v `<style>`:

```css
:root {
  --rail-width: 360px;
  --radius: 24px;
  --c-accent: #6B36E9;          /* Fialová */
  --c-gradient-top: #FF3B3B;     /* Červená */
  --c-gradient-bottom: #000000;  /* Čierna */
  --c-purple-start: #4328A4;     /* Purple gradient start */
  --c-purple-end: #6B36E9;       /* Purple gradient end */
}
```

### React komponent
Upravte Tailwind classes v `RightTopicPanel.tsx`:

```tsx
// Príklad: Zmena gradientu
<div className="bg-gradient-to-b from-[#FF3B3B] to-[#000000]">
// Zmeňte na:
<div className="bg-gradient-to-b from-blue-500 to-black">
```

---

## 🐛 Troubleshooting

### Problém: Obrázky sa nenačítajú
**Riešenie:**
1. Skontrolujte cestu: `/assets/zombie.png` (začína s `/`)
2. Umiestnite obrázky do `public/assets/`
3. Reštartujte dev server (`pnpm dev`)

### Problém: Panel je mimo obrazovky
**Riešenie:**
```tsx
// Upravte positioning
<div className="fixed right-8 top-1/2">  {/* Bolo: right-[-60px] */}
  <RightTopicPanel topics={topics} />
</div>
```

### Problém: Swipe nefunguje na mobile
**Riešenie:**
- Standalone HTML: Funguje automaticky
- React: Pridané v `onTouchStart/Move/End` handlers

---

## 📊 Performance Tips

1. **Lazy loading obrázkov**: `loading="lazy"` (HTML) alebo `priority={false}` (Next.js)
2. **Preload ďalšieho obrázka**: Automaticky implementované
3. **Optimalizácia obrázkov**: Použite WebP formát (<200KB)
4. **Lighthouse skóre**: Target >=90 na všetkých metrikách

---

## 📝 Changelog

### v1.0.0 (2025-01-11)
- ✅ Standalone HTML verzia (`panel.html`)
- ✅ React/Next.js komponent (`RightTopicPanel.tsx`)
- ✅ Keyboard navigation (←/→/Enter)
- ✅ Touch/swipe podpora
- ✅ ARIA accessibility
- ✅ Responzívny dizajn (desktop/mobile)
- ✅ Reduced motion podpora
- ✅ Lighthouse optimalizované

---

## 🤝 Podpora

Pre otázky alebo problémy, otvorte issue na GitHub repo alebo kontaktujte autora.

**Autor:** Claude Code
**Verzia:** 1.0.0
**Licencia:** MIT
