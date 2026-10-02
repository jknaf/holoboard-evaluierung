# Plan: Englische Version mit Sprachumschalter

Stand: 02.10.2026. Branch: `english`. Live erst nach Abnahme der Vercel-Vorschau.

## Entscheidungen (abgenommen am 02.10.2026)

- **Umschalter statt eigener Adresse:** gleiche URL, Knopf „DE | EN“ in der Navigation, kein `/en/`.
- **Keine i18n-Bibliothek:** kleiner eigener Sprach-Kontext (etwa 20 Zeilen). Texte stehen pro Komponente als `{ de, en }` direkt neben dem JSX.
- **Impressum und Datenschutz:** englische Übersetzung mit Hinweis, dass die deutsche Fassung verbindlich ist.
- **Titel der Bachelorarbeiten:** bleiben deutsch, nur die Beschreibung wird übersetzt.

## Schritte

0. **Vorbereitung:** Branch `english` angelegt. Offene Änderung in `api/chat.ts` (GCP-Projekt `holoboard-chatbot-hm`) gesondert klären, sie gehört nicht zu diesem Umbau.
1. **Sprachumschalter:** Kontext mit `lang` (`de` | `en`), Wahl in `localStorage`, beim ersten Besuch Browsersprache. `<html lang>` wechselt mit. Knopf in die Navigation.
2. **Texte auslagern:** jede Komponente bekommt `const T = { de: {...}, en: {...} }`. Reihenfolge: Navigation und Hero zuerst, `LegalModal.tsx` zuletzt.
3. **Übersetzen:** nach dem Glossar unten. Glossar vorher von Joachim abnehmen lassen.
4. **Chatbot:** Frontend schickt `lang` an `api/chat.ts` mit, der Bot antwortet in dieser Sprache. Begrüßung und UI-Texte in `AIAssistant.tsx` zweisprachig.
5. **Meta:** `<title>` und Meta-Description zweisprachig.
6. **Prüfen:** `npm run build`, beide Sprachen im Browser durchklicken, Handy-Ansicht (englische Texte sind 10–20 % länger), Umschalter nach Neuladen, Chatbot in beiden Sprachen.
7. **Abnahme:** Vercel-Vorschau des Branches ansehen, dann nach `main` mergen.

## Komponenten (`src/components/`)

Hero, Ausgangspunkt, Exploration, TechnologischerWandel, HoloboardKonzept, Architektur, Prototyp, AvatarIntegration, Demonstrator, Netzwerk, StudentischeProjekte, Wissenstransfer, Nutzen, Evaluation, Impact, Learnings, Zukunftsperspektive, Ausblick, Download, Contact, CookieConsent, Footer, AIAssistant, LegalModal. Dazu Navigation in `App.tsx` und `ui/`.

## Glossar (Vorschläge, noch abzunehmen)

### Eigennamen (bleiben)

| Deutsch | Englisch |
|---|---|
| Holoboard, Holobox, Lightboard 2.0 | unverändert |
| Hochschule München / HM | Munich University of Applied Sciences / HM |

### Hochschule

| Deutsch | Englisch | Anmerkung |
|---|---|---|
| Innovationsprofessur Lehre | Innovation Professorship for Teaching | ggf. mit HM abstimmen |
| Bachelorarbeit | Bachelor's Thesis | |
| Exposé | Research Proposal | |
| Fakultät | Faculty / Department | je nach Kontext |
| Studiengang | Degree Program | |
| Lehrende | Instructors | alternativ Educators |
| Lernende | Learners / Students | |
| Hochschulentwicklungsplan | University Development Plan | |

### Didaktik

| Deutsch | Englisch | Anmerkung |
|---|---|---|
| Lehrpräsenz | Teaching Presence | Community of Inquiry |
| Wissensvermittlung | Knowledge Communication | alternativ Knowledge Dissemination |
| Onlinelehre | Online Teaching | |
| Asynchrone / synchrone Lehre | Asynchronous / Synchronous Teaching | |
| Lehrszenarien | Teaching Scenarios | |
| Lehrkonzept | Instructional Design / Teaching Concept | je nach Kontext |
| Lehrformat | Teaching Format | |
| Lernmodul | Learning Module | |
| Lernumgebung | Learning Environment | |
| Lerninhalte | Learning Content | |
| Didaktik / didaktisch | Pedagogy / pedagogical | „didactic“ klingt im Englischen belehrend |
| Lehreinheiten | Teaching Units | |
| Tafelanschrieb | Transparent Board Writing | beschreibend |
| Mündliche Prüfungen | Oral Examinations | |
| Prüfungsagenten | Examination Agents | |

### Technik

| Deutsch | Englisch |
|---|---|
| Ganzkörper-Avatar | Full-Body Avatar |
| Echtzeit-Pipeline | Real-Time Pipeline |
| No-Code-Oberfläche | No-Code Interface |
| volumetrisch | volumetric |
| Bildmischer | Vision Mixer |
| Signalverarbeitung | Signal Processing |
| Vektordatenbank | Vector Database |
| Lokale KI | Local AI / On-Premise AI |
| Datensouveräne Intelligenz | Data-Sovereign Intelligence |
| Wissenssysteme | Knowledge Systems |
| Postproduktionsprozesse | Post-Production Processes |
| Redaktionsabläufe | Editorial Workflows |
| Freigabeschleifen | Review Cycles |
| Prototypenaufbau | Prototype Construction |

### Navigation und Bedienelemente

| Deutsch | Englisch |
|---|---|
| Projekt / Technik / Praxis / Evaluation / Ausblick | Project / Technology / Practice / Evaluation / Outlook |
| Ausgangspunkt | Starting Point |
| Wandel | Transformation |
| Architektur / Prototyp / Demonstrator | Architecture / Prototype / Demonstrator |
| Netzwerk | Network |
| Studentische Projekte | Student Projects |
| Wissenstransfer | Knowledge Transfer |
| Nutzen | Benefits |
| Zukunftsperspektive | Future Perspective |
| Kontakt | Contact |
| In diesem Kapitel | In This Chapter |
| Zusammenfassung PDF | Summary PDF |
| Mehr anzeigen / Weniger anzeigen | Show More / Show Less |
| Details ansehen | View Details |
| Extern öffnen | Open Externally |
| Nachricht senden | Send Message |
| Nur essenzielle / Alle akzeptieren | Essential Only / Accept All |

### Recht

| Deutsch | Englisch |
|---|---|
| Impressum | Legal Notice |
| Datenschutzerklärung | Privacy Policy |
| Haftungsausschluss | Disclaimer |
| Urheberrecht | Copyright |
