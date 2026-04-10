# Holoboard Evaluierungswebseite

Projektwebseite für das Holoboard-Forschungsprojekt der Hochschule München.

- **Live:** https://holoboard.joachimknaf.de
- **Repo:** https://github.com/jknaf/holoboard-evaluierung
- **Hosting:** Vercel (Auto-Deploy von `main`-Branch)
- **Stack:** Vite + React 19 + TypeScript + Tailwind CSS 4

## Asset-Hosting

### Aktueller Stand (April 2026)

Bilder, Logos und Videos werden über **drei Netlify-Sites** bereitgestellt:

| Site | URL | Inhalt |
|------|-----|--------|
| holoboard-assets | `https://holoboard-assets.netlify.app` | Bilder, Brand, Piktogramme |
| holoboard-videos-a | `https://holoboard-videos-a.netlify.app` | Videos Teil A |
| holoboard-videos-b | `https://holoboard-videos-b.netlify.app` | Videos Teil B |

**Netlify-Konto:** knaf@hm.edu (jknaf's team)
**Netlify Site-ID (Assets):** `09b07a93-8ddd-4eae-9183-860c6f5e3661`

Die Quelldateien liegen lokal unter:
```
/Users/joachimknaf/Desktop/KI/02_HM/Holoboard/05_Medien_Final/asset-hosting/
  public/          → Deploy-Verzeichnis für holoboard-assets (Bilder, Brand, Piktogramme, Videos)
  public-videos-a/ → Deploy-Verzeichnis für holoboard-videos-a
  public-videos-b/ → Deploy-Verzeichnis für holoboard-videos-b
  public-web/      → Vollständige Kopie mit Original-Dateinamen + neuen nummerierten Namen
```

### Netlify-Problematik (entdeckt 10.04.2026)

Am 10.04.2026 wurde festgestellt, dass alle drei Netlify-Sites offline waren (HTTP 404). Ursache:

- **Kein dokumentierter Inaktivitäts-Mechanismus** bei Netlify, aber die ToS des Free-Tiers erlauben: *"We reserve the right to disable or remove any website project on Netlify's Free Usage Tier without notice."*
- In Netlify-Foren gibt es zahlreiche Berichte von plötzlich deaktivierten Free-Tier-Sites ohne Erklärung.
- Die Sites konnten via CLI neu deployed werden (`npx netlify-cli deploy --prod --dir=public --site=<site-id>`).
- Zusätzliches Problem: Bei einem früheren Rename der Bilddateien auf ein nummeriertes Schema (z.B. `090-confluence_media-image1.jpeg`) wurden 29 Dateien mit Original-Dateinamen nicht in `public/` übernommen. Diese lagen noch in `public-web/` und wurden zurückkopiert.

**Risikobewertung:** Das Netlify-Free-Tier bietet keine Garantie für Dauerverfügbarkeit. Für die Evaluation im Mai 2026 sollte ein Backup-Plan bestehen (z.B. Migration zu Vercel oder manuelles Re-Deploy vor der Evaluation).

### Migrations-Analyse: Vercel als Asset-Host

Eine vollständige Migration der Assets zu Vercel wurde analysiert (10.04.2026):

**Vercel-Konto (jknaf, Hobby/Free Plan):**

| Projekt | URL | Deployment-Größe |
|---------|-----|-------------------|
| aplus | https://aplusurbandesign.de | ~393 MB |
| holoboard-evaluierung | https://holoboard.joachimknaf.de | ~692 KB |
| itamedia | https://www.itamedia.de | ~956 KB |
| agent-harness-deploy | https://agent-harness-deploy.vercel.app | klein |
| ki-analyse-ai-studio | https://ki.itamedia.de | klein |
| webrelaunch | https://web.itamedia.de | klein |
| itavisuals | https://bilder.itamedia.de | klein |
| vertriebsassistent | https://bericht.itamedia.de | klein |
| ekd | https://ekd.vercel.app | klein |
| holoboard-interactive-learning | https://holoboard-interactive-learning.vercel.app | klein |
| hm-avatar-wheel | https://hm-avatar-wheel.vercel.app | klein |

**Assets, die migriert werden müssten:**

| Typ | Anzahl Referenzen im Code | Größe auf Disk |
|-----|---------------------------|----------------|
| Bilder (images/) | 59 URLs in 10 Komponenten | 142 MB |
| Brand/Logos (brand/) | 3 URLs | 164 KB |
| Videos A | 5 URLs | 655 MB (Gesamtverzeichnis) |
| Videos B | 1 URL | 651 MB (Gesamtverzeichnis) |

**Vercel Hobby-Plan Limits:**
- Max. Deployment-Größe: 13 GB — ausreichend
- Bandbreite: 100 GB/Monat über alle Projekte — bei moderatem Traffic kein Problem
- Kein Inaktivitäts-Risiko — Vercel deaktiviert keine Sites wegen Nichtbenutzung
- Unbegrenzte Projektanzahl

**Fazit:** Migration ist technisch machbar und sicher. Kein Konflikt mit bestehenden Projekten (insbesondere aplus mit ~393 MB). Gesamtnutzung nach Migration wäre unter 1 GB, weit entfernt vom 13-GB-Limit.

**Status:** Migration wurde vorerst zurückgestellt. Assets bleiben auf Netlify.

### Re-Deploy-Anleitung (falls Netlify erneut offline geht)

```bash
# Assets (Bilder, Brand, Piktogramme)
cd /Users/joachimknaf/Desktop/KI/02_HM/Holoboard/05_Medien_Final/asset-hosting
npx netlify-cli deploy --prod --dir=public --site=09b07a93-8ddd-4eae-9183-860c6f5e3661

# Videos A
npx netlify-cli deploy --prod --dir=public-videos-a --site=5ad8fafb-5a03-44b3-b2d3-9dc582cf50c2

# Videos B
npx netlify-cli deploy --prod --dir=public-videos-b --site=7b11266a-9a0a-4ef6-b272-40936aff17a7
```

## Lokale Entwicklung

**Voraussetzungen:** Node.js

```bash
npm install
npm run dev       # Dev-Server auf Port 3000
npm run build     # Produktions-Build
npm run lint      # TypeScript-Typcheck
```

## Deployment

Automatisch via Vercel bei Push auf `main`:

```
Lokal bearbeiten → git add <dateien> → git commit -m "Beschreibung" → git push origin main → Vercel baut automatisch
```
