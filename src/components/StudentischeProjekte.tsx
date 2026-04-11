import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Bot, Boxes, Database } from 'lucide-react';
import celikCover from '../assets/studentische-projekte-celik.png';
import ActionCue from './ui/ActionCue';

type Project = {
  title: string;
  author: string;
  kind: string;
  year: string;
  image: string;
  contribution: string;
  link?: string;
  linkLabel?: string;
};

type Cluster = {
  title: string;
  eyebrow: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  projects: Project[];
};

const clusters: Cluster[] = [
  {
    title: 'Holoboard / Holobox',
    eyebrow: 'Plattform & Erprobung',
    description:
      'Diese Arbeiten untersuchen die Holobox selbst: visuelle Qualität, Avatar-Integration und die Wirkung interaktiver Präsentationen in spontanen Nutzungssituationen.',
    icon: <Boxes className="w-5 h-5 text-hm-red" />,
    accent: 'from-hm-red/10 via-white to-hm-red/5',
    projects: [
      {
        title: 'Erstellung und Analyse verzerrungsfreier Inhalte für KI-gestützte Lernanwendungen in der Holobox',
        author: 'Daniil Tyves',
        kind: 'Bachelorarbeit',
        year: '2025',
        image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-tyves.png',
        contribution:
          'Analysiert Licht, Schatten, Perspektive und eine Full-Body-Avatar-Integration, um visuell konsistente Inhalte für die Holobox zu entwickeln.',
      },
      {
        title: 'Aufmerksamkeit und Interaktion',
        author: 'Tobias Klass',
        kind: 'Bachelorarbeit',
        year: '2025',
        image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-klass.png',
        contribution:
          'Vergleicht interaktive und nicht-interaktive Holobox-Präsentationen und zeigt eine signifikant längere Verweildauer bei interaktiven Formaten.',
      },
      {
        title: 'Die Verwendung einer Holobox in der modernen Wissensvermittlung',
        author: 'Arda Çelik',
        kind: 'Bachelorarbeit',
        year: '2024',
        image: celikCover,
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
    icon: <Bot className="w-5 h-5 text-hm-blue" />,
    accent: 'from-hm-blue/10 via-white to-hm-blue/5',
    projects: [
      {
        title: 'Automatisierung von Postproduktionsprozessen in Video-Podcasts',
        author: 'Markus Dieplinger',
        kind: 'Bachelorarbeit',
        year: '2025',
        image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-dieplinger.png',
        contribution:
          'Entwickelt einen modularen KI-Workflow für Podcast-Postproduktion mit n8n, Docker sowie automatischer Analyse und Clip-Erstellung.',
      },
      {
        title: 'Automatisierung der Erstellung von Voice-Over-Listen',
        author: 'Jakob Seitz',
        kind: 'Bachelorarbeit',
        year: '2025',
        image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-seitz.png',
        contribution:
          'Kombiniert n8n, Whisper, pyannote und manuelle Freigabeschleifen zu einem robusten halbautomatischen Prozess für die Film-Postproduktion.',
      },
      {
        title: 'Automatisierung redaktioneller Prozesse in der Technischen Kommunikation',
        author: 'Julius Papst',
        kind: 'Bachelorarbeit',
        year: '2025',
        image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-papst.png',
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
    icon: <Database className="w-5 h-5 text-hm-darkblue" />,
    accent: 'from-hm-darkblue/10 via-white to-hm-darkblue/5',
    projects: [
      {
        title: 'Nutzung von RAG mithilfe der No-Code-Automatisierungsplattform n8n im Unternehmenskontext',
        author: 'Yunus Alp Baydemir',
        kind: 'Bachelorarbeit',
        year: '2025',
        image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-baydemir.png',
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
    icon: <BookOpen className="w-5 h-5 text-hm-turquoise" />,
    accent: 'from-hm-turquoise/15 via-white to-hm-turquoise/5',
    projects: [
      {
        title: 'Entwicklung eines Leitfadens für die Gestaltung asynchroner und interaktiver Lehrszenarien',
        author: 'Maximilian Gawronski',
        kind: 'Bachelorarbeit',
        year: '2025',
        image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-gawronski.png',
        contribution:
          'Erprobt einen praxisnahen Leitfaden für die Konzeption, Produktion und technische Integration interaktiver Holobox-Lehreinheiten.',
        link: 'https://www.holobox-leitfaden.de',
        linkLabel: 'Extern öffnen',
      },
      {
        title: 'Interaktives Lernen mit der Holobox: Lehrkonzepte mit KI-Avataren',
        author: 'Zübeyde Celep',
        kind: 'Exposé',
        year: '2025',
        image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-celep.png',
        contribution:
          'Entwickelt ein Lehrkonzept für asynchrone und synchrone Holobox-Szenarien und verknüpft KI-Avatare mit didaktischer Modellierung.',
      },
      {
        title: 'Entwicklung eines interaktiven Lernmoduls in der Holobox mit KI-Avataren',
        author: 'Saliha Guynerane',
        kind: 'Exposé',
        year: '2025',
        image: 'https://holoboard-assets.netlify.app/images/studentische-projekte-guynerane.png',
        contribution:
          'Konzipiert ein Lernmodul, das Motivation, Interaktion und Wissenserwerb von Studierenden durch KI-Avatare in der Holobox fördern soll.',
      },
    ],
  },
];

export default function StudentischeProjekte() {
  const [openClusters, setOpenClusters] = useState<Record<string, boolean>>({
    'Holoboard / Holobox': true,
    Automatisierung: false,
    'RAG / Wissenssysteme': false,
    'Didaktik / Lehrkonzepte': false,
  });

  const toggleCluster = (title: string) => {
    setOpenClusters((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  return (
    <section id="studentische-projekte" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">Forschung & Lehre</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Studentische Projekte</h3>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Rund um das Holoboard sind studentische Arbeiten in mehreren Entwicklungsfeldern entstanden.
            Die folgende Auswahl zeigt nicht nur einzelne Abschlussarbeiten, sondern einen zusammenhängenden
            Projektkontext aus Holobox-Entwicklung, Automatisierung, Wissenssystemen und didaktischer Gestaltung.
          </p>
        </motion.div>

        <div className="space-y-8">
          {clusters.map((cluster, clusterIndex) => {
            const isOpen = openClusters[cluster.title];

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
                  onClick={() => toggleCluster(cluster.title)}
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
                        {cluster.projects.length} {cluster.projects.length === 1 ? 'Arbeit' : 'Arbeiten'}
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
                                  alt={`Erste Seite von ${project.kind} ${project.author}`}
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
