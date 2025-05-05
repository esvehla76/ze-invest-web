# Ze-Invest Web

Webová stránka projektu Ze-Invest zaměřeného na větrnou energii. Stránka využívá moderní React komponenty a Tailwind CSS pro čistý a přívětivý design.

## Použité technologie

- **React** - Javascriptová knihovna pro tvorbu uživatelského rozhraní
- **Vite** - Moderní a rychlý build nástroj pro webové aplikace
- **Tailwind CSS** - Utility-first CSS framework pro rychlou tvorbu designu
- **Font Awesome** - Knihovna ikon

## Barevné schéma

Stránka používá následující barevnou paletu:
- Zelená: `#4E7C2D`
- Modrá: `#3B7CA4`
- Béžová: `#DCCDB7`

## Instalace

```bash
# Klonování repozitáře
git clone https://github.com/vase-uzivatelske-jmeno/ze-invest-web.git
cd ze-invest-web

# Instalace závislostí
npm install
```

## Vývojový server

Pro spuštění vývojového serveru použijte:

```bash
npm run dev
# nebo
npm start
```

Vývojový server bude dostupný na adrese: `http://localhost:5173/`

## Sestavení produkční verze

```bash
npm run build
```

Produkční verze bude vygenerována do složky `build/`.

## Náhled sestavené verze

```bash
npm run preview
```

## Struktura projektu

```
ze-invest-web/
├── public/              # Statické soubory
│   ├── logo.png         # Logo projektu
│   └── wind-turbine.jpg # Obrázek větrné turbíny
├── src/
│   ├── components/      # React komponenty
│   │   └── HomePage.jsx # Hlavní komponenta domovské stránky
│   ├── App.jsx          # Kořenová komponenta aplikace
│   ├── main.jsx         # Vstupní bod aplikace
│   └── index.css        # Hlavní CSS soubor s Tailwind direktivami
├── index.html           # Hlavní HTML soubor
├── package.json         # Konfigurace npm
├── vite.config.js       # Konfigurace Vite
├── tailwind.config.js   # Konfigurace Tailwind CSS
└── postcss.config.js    # Konfigurace PostCSS
```

## Migrace z Create React App na Vite

Projekt byl migrován z Create React App na Vite pro dosažení rychlejšího vývojového serveru a efektivnějšího sestavení. Hlavní změny:

1. Odstranění závislosti na react-scripts
2. Přidání Vite a @vitejs/plugin-react
3. Přesunutí entry pointu z index.js do main.jsx
4. Vytvoření vite.config.js
5. Přesunutí index.html do kořenové složky
6. Aktualizace skriptů v package.json

## Nasazení

Projekt je nakonfigurován pro snadné nasazení na Cloudflare Pages. Výstupní adresář byl změněn z výchozího `dist` na `build` pro kompatibilitu s Cloudflare Pages.

## Další informace

- Font Awesome ikony jsou načítány z CDN v index.html
- Pro správnou funkčnost je potřeba mít správně umístěné obrázky ve složce public