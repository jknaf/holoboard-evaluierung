# Holoboard Evaluierungswebseite

## Ueberblick

Projektwebseite fuer das Holoboard-Forschungsprojekt der Hochschule Muenchen.
Stack: Vite + React 19 + TypeScript + Tailwind CSS 4.

- **Live:** https://holoboard-evaluierung-six.vercel.app
- **Repo:** https://github.com/jknaf/holoboard-evaluierung
- **Hosting:** Vercel (Auto-Deploy von `main`-Branch)

## Deployment-Workflow

```
Lokal bearbeiten  -->  git add <dateien>  -->  git commit -m "Beschreibung"  -->  git push origin main  -->  Vercel baut automatisch
```

1. Aenderungen lokal vornehmen
2. Pruefen ob es baut: `npm run build`
3. Dateien stagen: `git add <geaenderte-dateien>` (NICHT `git add -A`)
4. Committen: `git commit -m "Was wurde geaendert"`
5. Pushen: `git push origin main`
6. Vercel deployed automatisch (dauert ca. 20 Sekunden)

## Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `npm run dev` | Dev-Server auf Port 3000 |
| `npm run build` | Produktions-Build (Output: `dist/`) |
| `npm run lint` | TypeScript-Typcheck |

## Wichtige Regeln

- **Animations-Library:** `framer-motion` (NICHT `motion/react`)
- **Texte auf der Website:** Immer echte deutsche Umlaute und `ß` verwenden (`ä`, `ö`, `ü`, `ß`), keine Umschreibungen wie `ae`, `oe`, `ue`
- **Keine .env committen:** API-Keys sind als Vercel Environment Variables konfiguriert
- **Interaktionsmuster:** Einheitliche CTA-Sprache beibehalten
  - `Mehr anzeigen` / `Weniger anzeigen` fuer auf- und zuklappbare Inhalte
  - `Details ansehen` fuer interne Vertiefungen
  - `Extern oeffnen` fuer externe Links
- **Navigation:** Zwei Ebenen beibehalten
  - obere Ebene = Kapitel
  - darunter = `In diesem Kapitel`
- **Assets:** Bilder und Videos liegen auf Netlify, nicht im Repo:
  - Bilder: `https://holoboard-assets.netlify.app/images/...`
  - Brand: `https://holoboard-assets.netlify.app/brand/...`
  - Videos A: `https://holoboard-videos-a.netlify.app/videos/...`
  - Videos B: `https://holoboard-videos-b.netlify.app/videos/...`
- **Bildkatalog:** Bei Bildnummern immer den HTML-Katalog in `05_Medien_Final/asset-hosting/catalog/ASSET_CATALOG.html` pruefen

## Verzeichnisstruktur

```
src/
  components/       # Alle Sektionen der Webseite (Hero, Evaluation, Architektur, ...)
  App.tsx           # Haupt-App mit Navigation und Sektions-Routing
  main.tsx          # Entry Point
api/
  chat.ts           # Vercel Serverless Function (Gemini AI-Assistent, nutzt GEMINI_API_KEY)
index.html          # SPA-Shell mit Error-Handlern
index.css           # Tailwind-Konfiguration
vite.config.ts      # Vite + React + Tailwind Setup
```

## Serverless Function

`api/chat.ts` ist ein Vercel Serverless Endpoint fuer den KI-Assistenten auf der Webseite.
- Nutzt `GEMINI_API_KEY` (als Vercel Environment Variable konfiguriert)
- Modell: `gemini-2.0-flash`
- Streaming-Responses via Server-Sent Events

## Git-Hinweise

- Aktives GitHub-Konto: `jknaf` (nicht `KOSMASoftware`)
- Bei Push-Problemen: `gh auth setup-git` ausfuehren
- Explizit Dateien stagen statt `git add -A` (vermeidet versehentliches Committen von .env)
