import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import celikCover from '../assets/studentische-projekte-celik.png';
import SectionHeader from './ui/SectionHeader';
import { useT } from '../i18n';

// Sprachunabhängige Daten je Cluster und Projekt (gleiche Reihenfolge wie in T).
const clusterMeta: { author: string; year: string; image: string; link?: string }[][] = [
  [
    { author: 'Daniil Tyves', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-tyves.png' },
    { author: 'Tobias Klass', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-klass.png' },
    { author: 'Arda Çelik', year: '2024', image: celikCover },
  ],
  [
    { author: 'Markus Dieplinger', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-dieplinger.png' },
    { author: 'Jakob Seitz', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-seitz.png' },
    { author: 'Julius Papst', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-papst.png' },
  ],
  [{ author: 'Yunus Alp Baydemir', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-baydemir.png' }],
  [
    { author: 'Maximilian Gawronski', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-gawronski.png', link: 'https://www.holobox-leitfaden.de' },
    { author: 'Zübeyde Celep', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-celep.png' },
    { author: 'Saliha Guynerane', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-guynerane.png' },
  ],
];

// Titel der Abschlussarbeiten bleiben in beiden Sprachen deutsch.
const T = {
  de: {
    eyebrow: 'Forschung & Lehre',
    title: 'Studentische Projekte',
    intro: `Rund um das Holoboard sind studentische Arbeiten in mehreren Entwicklungsfeldern entstanden.
            Die folgende Auswahl zeigt nicht nur einzelne Abschlussarbeiten, sondern einen zusammenhängenden
            Projektkontext aus Holobox-Entwicklung, Automatisierung, Wissenssystemen und didaktischer Gestaltung.`,
    all: 'Alle',
    filterLabel: 'Nach Thema filtern',
    coverAlt: (kind: string, author: string) => `Erste Seite von ${kind} ${author}`,
    clusters: [
      {
        title: 'Holoboard / Holobox',
        eyebrow: 'Plattform & Erprobung',
        description:
          'Diese Arbeiten untersuchen die Holobox selbst: visuelle Qualität, Avatar-Integration und die Wirkung interaktiver Präsentationen in spontanen Nutzungssituationen.',
        projects: [
          {
            title: 'Erstellung und Analyse verzerrungsfreier Inhalte für KI-gestützte Lernanwendungen in der Holobox',
            kind: 'Bachelorarbeit',
            contribution:
              'Analysiert Licht, Schatten, Perspektive und eine Full-Body-Avatar-Integration, um visuell konsistente Inhalte für die Holobox zu entwickeln.',
          },
          {
            title: 'Aufmerksamkeit und Interaktion',
            kind: 'Bachelorarbeit',
            contribution:
              'Vergleicht interaktive und nicht-interaktive Holobox-Präsentationen und zeigt eine signifikant längere Verweildauer bei interaktiven Formaten.',
          },
          {
            title: 'Die Verwendung einer Holobox in der modernen Wissensvermittlung',
            kind: 'Bachelorarbeit',
            contribution:
              'Untersucht die Holobox als Medium der Wissensvermittlung und ordnet ihr Potenzial für anschauliche, immersive und aufmerksamkeitsstarke Lehrszenarien ein.',
          },
        ],
      },
      {
        title: 'Automatisierung',
        eyebrow: 'Workflows & Prozesse',
        description:
          'Ein zweiter Entwicklungsstrang konzentriert sich auf n8n-basierte Workflows, Docker-Setups und Human-in-the-Loop-Prozesse für skalierbare Medien- und Redaktionsabläufe.',
        projects: [
          {
            title: 'Automatisierung von Postproduktionsprozessen in Video-Podcasts',
            kind: 'Bachelorarbeit',
            contribution:
              'Entwickelt einen modularen KI-Workflow für Podcast-Postproduktion mit n8n, Docker sowie automatischer Analyse und Clip-Erstellung.',
          },
          {
            title: 'Automatisierung der Erstellung von Voice-Over-Listen',
            kind: 'Bachelorarbeit',
            contribution:
              'Kombiniert n8n, Whisper, pyannote und manuelle Freigabeschleifen zu einem robusten halbautomatischen Prozess für die Film-Postproduktion.',
          },
          {
            title: 'Automatisierung redaktioneller Prozesse in der Technischen Kommunikation',
            kind: 'Bachelorarbeit',
            contribution:
              'Automatisiert die Extraktion, didaktische Strukturierung und Synthese von Lernmaterialien aus technischer Dokumentation.',
          },
        ],
      },
      {
        title: 'RAG / Wissenssysteme',
        eyebrow: 'Semantische Systeme',
        description:
          'Im Themenfeld RAG wurden Grundlagen für quellengebundene KI-Systeme gelegt, die domänenspezifisches Wissen strukturiert erschließen und nachvollziehbar ausgeben.',
        projects: [
          {
            title: 'Nutzung von RAG mithilfe der No-Code-Automatisierungsplattform n8n im Unternehmenskontext',
            kind: 'Bachelorarbeit',
            contribution:
              'Entwickelt ein RAG-basiertes Wissenssystem mit Vektordatenbank, Quellenbezug und Transparenzmechanismen als Grundlage für vertrauenswürdige KI-Antworten.',
          },
        ],
      },
      {
        title: 'Didaktik / Lehrkonzepte',
        eyebrow: 'Lehre & Gestaltung',
        description:
          'Mehrere Arbeiten widmen sich der Frage, wie das Holoboard didaktisch eingesetzt werden kann: von Leitfäden für Lehreinheiten bis zu Konzepten für Motivation, soziale Präsenz und KI-Avatare.',
        projects: [
          {
            title: 'Entwicklung eines Leitfadens für die Gestaltung asynchroner und interaktiver Lehrszenarien',
            kind: 'Bachelorarbeit',
            contribution:
              'Erprobt einen praxisnahen Leitfaden für die Konzeption, Produktion und technische Integration interaktiver Holobox-Lehreinheiten.',
          },
          {
            title: 'Interaktives Lernen mit der Holobox: Lehrkonzepte mit KI-Avataren',
            kind: 'Exposé',
            contribution:
              'Entwickelt ein Lehrkonzept für asynchrone und synchrone Holobox-Szenarien und verknüpft KI-Avatare mit didaktischer Modellierung.',
          },
          {
            title: 'Entwicklung eines interaktiven Lernmoduls in der Holobox mit KI-Avataren',
            kind: 'Exposé',
            contribution:
              'Konzipiert ein Lernmodul, das Motivation, Interaktion und Wissenserwerb von Studierenden durch KI-Avatare in der Holobox fördern soll.',
          },
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Research & Teaching',
    title: 'Student Projects',
    intro: `Student work on the Holoboard spans several areas of development.
            The selection below is more than a set of individual theses: together, they form a connected
            body of work covering Holobox development, automation, knowledge systems and pedagogical design.`,
    all: 'All',
    filterLabel: 'Filter by topic',
    coverAlt: (kind: string, author: string) => `First page of the ${kind} by ${author}`,
    clusters: [
      {
        title: 'Holoboard / Holobox',
        eyebrow: 'Platform & Testing',
        description:
          'These projects examine the Holobox itself: its visual quality, avatar integration and the impact of interactive presentations on people who encounter them spontaneously.',
        projects: [
          {
            title: 'Erstellung und Analyse verzerrungsfreier Inhalte für KI-gestützte Lernanwendungen in der Holobox',
            kind: "Bachelor's Thesis",
            contribution:
              'Analyses lighting, shadows, perspective and full-body avatar integration to create visually consistent content for the Holobox.',
          },
          {
            title: 'Aufmerksamkeit und Interaktion',
            kind: "Bachelor's Thesis",
            contribution:
              'Compares interactive and non-interactive Holobox presentations, finding that viewers stay significantly longer with interactive formats.',
          },
          {
            title: 'Die Verwendung einer Holobox in der modernen Wissensvermittlung',
            kind: "Bachelor's Thesis",
            contribution:
              'Explores the Holobox as a medium for conveying knowledge and evaluates its potential for vivid, immersive and attention-grabbing teaching scenarios.',
          },
        ],
      },
      {
        title: 'Automation',
        eyebrow: 'Workflows & Processes',
        description:
          'A second strand of development centres on n8n-based workflows, Docker set-ups and human-in-the-loop processes that allow media and editorial work to scale.',
        projects: [
          {
            title: 'Automatisierung von Postproduktionsprozessen in Video-Podcasts',
            kind: "Bachelor's Thesis",
            contribution:
              'Develops a modular AI workflow for podcast post-production, built on n8n and Docker, with automated analysis and clip generation.',
          },
          {
            title: 'Automatisierung der Erstellung von Voice-Over-Listen',
            kind: "Bachelor's Thesis",
            contribution:
              'Combines n8n, Whisper, pyannote and manual approval loops into a robust, semi-automated process for film post-production.',
          },
          {
            title: 'Automatisierung redaktioneller Prozesse in der Technischen Kommunikation',
            kind: "Bachelor's Thesis",
            contribution:
              'Automates the extraction, pedagogical structuring and synthesis of learning materials from technical documentation.',
          },
        ],
      },
      {
        title: 'RAG / Knowledge Systems',
        eyebrow: 'Semantic Systems',
        description:
          'Work on RAG laid the groundwork for source-grounded AI systems that open up domain-specific knowledge in a structured way and deliver answers that can be traced back to their sources.',
        projects: [
          {
            title: 'Nutzung von RAG mithilfe der No-Code-Automatisierungsplattform n8n im Unternehmenskontext',
            kind: "Bachelor's Thesis",
            contribution:
              'Develops a RAG-based knowledge system with a vector database, source attribution and transparency mechanisms, laying the foundations for trustworthy AI responses.',
          },
        ],
      },
      {
        title: 'Pedagogy / Teaching Concepts',
        eyebrow: 'Teaching & Design',
        description:
          'Several projects explore how the Holoboard can be put to pedagogical use, ranging from guidelines for designing teaching units to concepts for motivation, social presence and AI avatars.',
        projects: [
          {
            title: 'Entwicklung eines Leitfadens für die Gestaltung asynchroner und interaktiver Lehrszenarien',
            kind: "Bachelor's Thesis",
            contribution:
              'Trials a practical guide to the design, production and technical integration of interactive Holobox teaching units.',
          },
          {
            title: 'Interaktives Lernen mit der Holobox: Lehrkonzepte mit KI-Avataren',
            kind: 'Research Proposal',
            contribution:
              'Develops a teaching concept for asynchronous and synchronous Holobox scenarios, combining AI avatars with pedagogical modelling.',
          },
          {
            title: 'Entwicklung eines interaktiven Lernmoduls in der Holobox mit KI-Avataren',
            kind: 'Research Proposal',
            contribution:
              'Outlines a learning module that uses AI avatars in the Holobox to boost students\' motivation, interaction and knowledge acquisition.',
          },
        ],
      },
    ],
  },
};

const pill = 'min-h-11 rounded-full px-4 text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hm-red focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F4F1]';

export default function StudentischeProjekte() {
  const t = useT(T);
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<number | null>(null);
  const [selected, setSelected] = useState('Tobias Klass');

  const books = t.clusters.flatMap((c, ci) =>
    c.projects.map((p, pi) => ({ ...clusterMeta[ci][pi], ...p, cluster: c.title, ci })),
  );
  const visible = books.filter((b) => filter === null || b.ci === filter);
  const sel = visible.find((b) => b.author === selected) ?? visible[0];

  return (
    <section id="studentische-projekte" className="relative overflow-hidden py-24 lg:py-32 bg-[#F4F4F1] text-[#111111]">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-24">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
          <SectionHeader index="03.2" eyebrow={t.eyebrow} title={t.title} intro={t.intro} tone="light" />
          <div role="group" aria-label={t.filterLabel} className="flex flex-wrap gap-2 xl:max-w-[34rem] xl:justify-end">
            {[t.all, ...t.clusters.map((c) => c.title)].map((label, i) => {
              const on = (i === 0 ? null : i - 1) === filter;
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFilter(i === 0 ? null : i - 1)}
                  className={`${pill} border ${on ? 'bg-[#111111] border-[#111111] text-white' : 'border-gray-300 text-gray-700 hover:border-hm-red hover:text-hm-red'}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gefiltertes Thema: Eyebrow und Beschreibung des Clusters */}
        <AnimatePresence mode="wait" initial={false}>
          {filter !== null && (
            <motion.div
              key={filter}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              aria-live="polite"
              className="mt-10 max-w-3xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-hm-red">{t.clusters[filter].eyebrow}</p>
              <p className="mt-2 text-base lg:text-lg leading-relaxed text-gray-600">{t.clusters[filter].description}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Regal: Titelseiten leicht gedreht, die gewählte Arbeit dreht sich nach vorn. Mobil waagerecht scrollbar. */}
        <div className="relative mt-12 lg:mt-16">
          <div className="-mx-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 pt-12 pb-4 lg:mx-0 lg:px-2">
            <motion.div
              key={filter ?? 'alle'}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto flex w-max items-end gap-2 [perspective:1400px]"
            >
              {visible.map((b) => {
                const on = b.author === sel.author;
                return (
                  <button
                    key={b.author}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setSelected(b.author)}
                    className={`snap-center shrink-0 rounded-[3px_6px_6px_3px] bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-hm-turquoise ${
                      on
                        ? 'w-[120px] h-[170px] sm:w-[150px] sm:h-[212px] lg:w-[168px] lg:h-[236px] [transform:translateY(-24px)_rotateY(0deg)] shadow-[0_30px_50px_-18px_rgba(0,0,0,0.45),0_0_0_3px_#FC5555,0_0_30px_rgba(252,85,85,0.25)]'
                        : 'w-[86px] h-[122px] sm:w-[104px] sm:h-[147px] lg:w-[112px] lg:h-[158px] [transform:rotateY(-22deg)] shadow-[-8px_12px_24px_-10px_rgba(0,0,0,0.35)] hover:[transform:rotateY(-10deg)_translateY(-6px)]'
                    }`}
                  >
                    <img
                      src={b.image}
                      alt={t.coverAlt(b.kind, b.author)}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="block h-full w-full rounded-[3px_6px_6px_3px] object-cover object-top"
                    />
                  </button>
                );
              })}
            </motion.div>
          </div>
          {/* Regalbrett */}
          <div aria-hidden="true" className="-mx-2 h-3.5 rounded-[3px] bg-[linear-gradient(180deg,#d9d6cf,#bdb8ae)] shadow-[0_18px_30px_-12px_rgba(0,0,0,0.35)] lg:-mx-9" />
        </div>

        {/* Details der gewählten Arbeit */}
        <div aria-live="polite" className="mt-10 lg:mt-12 grid gap-6 lg:grid-cols-[200px_minmax(0,1fr)_auto] lg:gap-10 lg:items-start">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-hm-red">{sel.kind} {sel.year}</span>
            <span className="text-base font-bold">{sel.author}</span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl lg:text-[30px] font-extrabold leading-[1.15] tracking-tight" lang="de">{sel.title}</h3>
            <p className="max-w-3xl text-base leading-relaxed text-gray-600">{sel.contribution}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-end">
            <span className="rounded-full border border-gray-300 px-3.5 py-2 text-[13px] text-gray-700">{sel.cluster}</span>
            {sel.link && (
              <a
                href={sel.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-hm-red px-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hm-red focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F4F1]"
              >
                {new URL(sel.link).hostname.replace(/^www\./, '')}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
