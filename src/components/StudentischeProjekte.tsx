import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Bot, Boxes, Database } from 'lucide-react';
import celikCover from '../assets/studentische-projekte-celik.png';
import ActionCue from './ui/ActionCue';
import { useT } from '../i18n';

// Sprachunabhängige Daten je Cluster und Projekt (gleiche Reihenfolge wie in T).
const clusterMeta = [
  {
    icon: <Boxes className="w-5 h-5 text-hm-red" />,
    accent: 'from-hm-red/10 via-white to-hm-red/5',
    projects: [
      { author: 'Daniil Tyves', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-tyves.png' },
      { author: 'Tobias Klass', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-klass.png' },
      { author: 'Arda Çelik', year: '2024', image: celikCover },
    ],
  },
  {
    icon: <Bot className="w-5 h-5 text-hm-blue" />,
    accent: 'from-hm-blue/10 via-white to-hm-blue/5',
    projects: [
      { author: 'Markus Dieplinger', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-dieplinger.png' },
      { author: 'Jakob Seitz', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-seitz.png' },
      { author: 'Julius Papst', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-papst.png' },
    ],
  },
  {
    icon: <Database className="w-5 h-5 text-hm-darkblue" />,
    accent: 'from-hm-darkblue/10 via-white to-hm-darkblue/5',
    projects: [
      { author: 'Yunus Alp Baydemir', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-baydemir.png' },
    ],
  },
  {
    icon: <BookOpen className="w-5 h-5 text-hm-turquoise" />,
    accent: 'from-hm-turquoise/15 via-white to-hm-turquoise/5',
    projects: [
      { author: 'Maximilian Gawronski', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-gawronski.png', link: 'https://www.holobox-leitfaden.de' },
      { author: 'Zübeyde Celep', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-celep.png' },
      { author: 'Saliha Guynerane', year: '2025', image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-guynerane.png' },
    ],
  },
] as { icon: React.ReactNode; accent: string; projects: { author: string; year: string; image: string; link?: string }[] }[];

// Titel der Abschlussarbeiten bleiben in beiden Sprachen deutsch.
const T = {
  de: {
    eyebrow: 'Forschung & Lehre',
    title: 'Studentische Projekte',
    intro: `Rund um das Holoboard sind studentische Arbeiten in mehreren Entwicklungsfeldern entstanden.
            Die folgende Auswahl zeigt nicht nur einzelne Abschlussarbeiten, sondern einen zusammenhängenden
            Projektkontext aus Holobox-Entwicklung, Automatisierung, Wissenssystemen und didaktischer Gestaltung.`,
    work: 'Arbeit',
    works: 'Arbeiten',
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
    work: 'project',
    works: 'projects',
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

export default function StudentischeProjekte() {
  const t = useT(T);
  const [openClusters, setOpenClusters] = useState<Record<number, boolean>>({ 0: true });

  const toggleCluster = (index: number) => {
    setOpenClusters((current) => ({
      ...current,
      [index]: !current[index],
    }));
  };

  const clusters = t.clusters.map((c, i) => ({
    ...clusterMeta[i],
    ...c,
    projects: c.projects.map((p, j) => ({ ...clusterMeta[i].projects[j], ...p })),
  }));

  return (
    <section id="studentische-projekte" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">{t.eyebrow}</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{t.title}</h3>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            {t.intro}
          </p>
        </motion.div>

        <div className="space-y-8">
          {clusters.map((cluster, clusterIndex) => {
            const isOpen = openClusters[clusterIndex];

            return (
              <motion.div
                key={cluster.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: clusterIndex * 0.08 }}
                className={`rounded-[2rem] border border-gray-200 bg-gradient-to-br ${cluster.accent} shadow-sm transition-shadow hover:shadow-lg`}
              >
                <button
                  type="button"
                  onClick={() => toggleCluster(clusterIndex)}
                  className="w-full p-6 md:p-8 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-3xl">
                      <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-gray-500 mb-4">
                        {cluster.icon}
                        <span>{cluster.eyebrow}</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-3">{cluster.title}</h4>
                      <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">{cluster.description}</p>
                    </div>

                    <div className="flex items-center gap-3 self-start">
                      <span className="text-sm font-medium text-gray-500 bg-white/85 rounded-2xl px-4 py-3 border border-gray-200">
                        {cluster.projects.length} {cluster.projects.length === 1 ? t.work : t.works}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200/80">
                    <ActionCue mode="expand" expanded={isOpen} accent={isOpen ? 'red' : 'turquoise'} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <div className="h-px w-full bg-gray-200/80 mb-8" />
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                          {cluster.projects.map((project) => (
                            <article
                              key={project.title}
                              className="group overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-shadow duration-500"
                            >
                              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                                <img
                                  src={project.image}
                                  alt={t.coverAlt(project.kind, project.author)}
                                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                                  loading="lazy"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-4">
                                  <div className="flex items-center justify-between gap-3 text-white">
                                    <span className="text-xs font-bold uppercase tracking-[0.22em]">{project.kind}</span>
                                    <span className="text-sm font-medium">{project.year}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="p-5">
                                <p className="text-sm font-semibold text-hm-red mb-2">{project.author}</p>
                                <h5 className="text-lg font-bold text-gray-900 leading-snug mb-3">{project.title}</h5>
                                <p className="text-sm leading-relaxed text-gray-600 font-light">{project.contribution}</p>

                                {project.link && (
                                  <div className="mt-5 pt-4 border-t border-gray-100">
                                    <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex"
                                    >
                                      <ActionCue mode="external" accent="blue" />
                                    </a>
                                  </div>
                                )}
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
