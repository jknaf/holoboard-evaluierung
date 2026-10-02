import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Monitor, Cpu, MessageSquare, Layout, X, BookOpen, ArrowRight, Play } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Aurora from './ui/Aurora';

const SETUP_IMAGE = "https://holoboard-assets.netlify.app/images/083-confluence_media-d.png";
const SYNC_VIDEO = "https://holoboard-videos-b.netlify.app/videos/073-final_videos-webseite-ger.mp4";
const ASYNC_VIDEO = "https://video.hm.edu/getMedium/default/8ff6a30eadda7484c8df6efe74a78163.mp4";
const SYNCHRON_POSTER = "https://holoboard-assets.netlify.app/images/113-video-thumb-synchron.jpg";
const ASYNCHRON_POSTER = "https://holoboard-assets.netlify.app/images/114-video-thumb-asynchron.jpg";
import ActionCue from './ui/ActionCue';
import { useT } from '../i18n';

// Icons, Bilder und Videos je Kachel; die Texte stehen in T.<lang>.features (gleiche Reihenfolge).
const featureMeta = [
  {
    id: 1,
    icon: <Cpu className="w-5 h-5 text-hm-turquoise" />,
    image: "https://holoboard-assets.netlify.app/images/architektur-07-rag-wissenssystem.png"
  },
  {
    id: 2,
    icon: <Monitor className="w-5 h-5 text-hm-red" />,
    image: "https://holoboard-assets.netlify.app/images/084-confluence_media-img-1086.jpg",
    secondaryImage: "https://holoboard-assets.netlify.app/images/103-confluence_media-processed-f8697a99-ce94-4f1b-b1d2-1b1ae2f28c11.jpeg"
  },
  {
    id: 3,
    icon: <Layout className="w-5 h-5 text-hm-turquoise" />,
    image: "https://holoboard-assets.netlify.app/images/103-confluence_media-processed-f8697a99-ce94-4f1b-b1d2-1b1ae2f28c11.jpeg",
    video: "https://holoboard-videos-a.netlify.app/videos/087-confluence_media-holobox-deu.mp4"
  },
  {
    id: 4,
    icon: <MessageSquare className="w-5 h-5 text-hm-red" />,
    image: "https://holoboard-assets.netlify.app/images/081-confluence_media-bildschirmfoto-2025-01-28-um-18.22.56.png"
  }
];

const T = {
  de: {
    eyebrow: 'Phase 4: Weiterentwicklung',
    title: 'Das Holoboard Konzept',
    intro: 'Klicken Sie auf die Kacheln, um tiefer in die technologischen Details der einzelnen Komponenten einzutauchen.',
    conceptTitle: 'Didaktisches Lehrkonzept',
    conceptIntro: 'Das Grundproblem digitaler Lehre ist multidimensional: Es reicht nicht aus, Lerninhalte nur technisch verfügbar zu machen. Forschung zu Online-Lernen zeigt, dass digitale Formate besonders dann an Wirksamkeit verlieren, wenn soziale Präsenz, emotionale Bindung und sichtbare Lehrendenpräsenz fehlen.',
    twoScenarios: 'Zwei Lehrszenarien im Detail',
    syncTitle: 'Synchrone Lehre',
    syncSub: 'Full-Body-KI-Avatar für Live-Interaktion',
    asyncTitle: 'Asynchrone Lehre',
    asyncSub: 'Holoboard als interaktives Lehrmedium',
    expand: 'Szenario aufklappen',
    passive: 'Passive Bildschirmformate fördern häufig weder nachhaltige Aufmerksamkeit noch tiefes Engagement. Erfolgreiche digitale Lehre braucht deshalb mehr als Medientechnik: Sie braucht Interaktion, Personalisierung, Authentizität und eine als menschlich wahrnehmbare Lernumgebung.',
    syncHeading: 'Synchrone Lehre mit Full-Body-KI-Avatar',
    syncText: 'Für Live-Situationen entsteht ein KI-gestützter Full-Body-Avatar, der in Echtzeit mit Lernenden interagiert. Er basiert auf einem Retrieval-Augmented-Generation-System (RAG), das über eine No-Code-Plattform eingebunden ist. So können auch technisch wenig versierte Lehrende oder Ausstellende Inhalte pflegen, aktualisieren und steuern. Der didaktische Mehrwert liegt in der Verbindung von Interaktion, Personalisierung und Authentizität: Inhalte erscheinen nicht als anonyme Systemantwort, sondern in der verkörperten Form vertrauter Personen wie Lehrender, Forschender oder Projektverantwortlicher. Dadurch wird digitale Kommunikation sozial anschlussfähiger, glaubwürdiger und emotional wirksamer.',
    syncVideo: 'Demonstration: Synchrone Lehre mit Full-Body-KI-Avatar',
    asyncHeading: 'Asynchrone Lehre mit Holoboard',
    asyncText: 'Für aufgezeichnete Lehrinhalte wird das klassische Lightboard zum Holoboard weiterentwickelt. Lehrende schreiben auf einer transparenten Glasfläche und können gleichzeitig digitale Elemente wie Animationen, Videos oder zusätzliche visuelle Ebenen einblenden. Dank eines infrarotgesteuerten Touchscreens ist das Board interaktiv nutzbar. Didaktisch entsteht dadurch ein Format, das sichtbare Lehrendenpräsenz, Anschrieb, Gestik, Visualisierung und mediale Erweiterung in einer gemeinsamen Lernszene verbindet. Die Holoboard schafft so eine immersive und visuell prägnante Lernumgebung, die asynchrone Formate aktiver, verständlicher und engagementstärker macht.',
    asyncVideo: 'Demonstration: Asynchrone Lehre mit Holoboard',
    conclusion: 'Das Holoboard ist deshalb nicht nur ein technisches System, sondern ein didaktischer Ansatz zur Wiedergewinnung von Präsenz, Interaktion und Authentizität in digitalen Lernumgebungen.',
    foundation: 'Wissenschaftliche Grundlage: Community of Inquiry, Social Presence, Instructor Presence, ICAP, Personalization Principle.',
    setupAlt: 'Visualisierung des Holoboard-Aufbaus',
    close: 'Schließen',
    detailSuffix: ' Detail',
    videoFallback: 'Ihr Browser unterstützt das Video-Tag nicht.',
    features: [
      {
        title: "Lokale KI und RAG",
        description: "Datensouveräne Intelligenz direkt am System",
        detailedText: (
          <div className="space-y-4">
            <p>Ein zentraler Bestandteil des Holoboards ist eine lokal laufende KI-Infrastruktur. „Lokal“ bedeutet hier, dass Modelle, Datenverarbeitung und Wissenszugriff nicht zwingend über externe Cloud-Dienste laufen müssen, sondern direkt auf eigener Hardware betrieben werden können. Das ist besonders relevant, wenn sensible Inhalte, interne Dokumente oder hochschulnahe Daten verarbeitet werden.</p>
            <p>RAG („Retrieval-Augmented Generation“) ergänzt die KI um gezielten Dokumentenzugriff. Das System antwortet dann nicht nur aus einem allgemeinen Modellwissen heraus, sondern auf Basis konkreter, projektbezogener Inhalte. So entstehen nachvollziehbarere, kontextbezogene und für Lehre und Demonstration nutzbare Antworten.</p>
            <div>
              <p className="font-bold mb-2">Vorteile:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>kontrollierbare Datenverarbeitung</li>
                <li>geringere Abhängigkeit von externen Plattformen</li>
                <li>gezielter Zugriff auf projektspezifisches Wissen</li>
                <li>robuste Grundlage für interaktive Lehr- und Assistenzszenarien</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Lightboard 2.0",
        description: "Weiterentwicklung eines etablierten Lehrprinzips",
        detailedText: (
          <div className="space-y-4">
            <p>Das Holoboard baut auf dem bekannten Lightboard-Prinzip auf, bei dem Lehrende direkt in ein transparentes Schreibmedium hinein erklären und Inhalte für Lernende sichtbar machen. Für das Projekt wurde dieses Prinzip nicht einfach übernommen, sondern technisch und räumlich weiterentwickelt.</p>
            <p>Entscheidend war die Frage, wie sich das direkte Erklären, Schreiben und Zeigen mit einer neuen Form digitaler Präsenz verbinden lässt. Aus dem klassischen Lightboard wurde so eine erweiterte Systemidee, die stärker auf Interaktion, hybride Nutzung und visuelle Wirkung ausgelegt ist.</p>
          </div>
        ),
      },
      {
        title: "Interaktive Holobox",
        description: "Display, Präsenzraum und Interaktionsfläche",
        detailedText: (
          <div className="space-y-4">
            <p>Die Holobox ist das zentrale räumliche Display des Konzepts. Sie verbindet visuelle Präsenz, Präsentationsfläche und Interaktion in einem gemeinsamen System. Dadurch entsteht nicht nur eine technische Oberfläche, sondern ein neuer Wahrnehmungsraum für digitale Lehre.</p>
            <p>Im Projekt wurde untersucht, wie eine solche Box nicht nur Inhalte anzeigen, sondern Kommunikation, Blickbezug, räumliche Wirkung und Interaktion unterstützen kann. Die Holobox ist damit nicht bloß Hardware, sondern ein integraler Teil des didaktischen Erlebnisses.</p>
          </div>
        ),
      },
      {
        title: "Digitale Avatare",
        description: "Vom Talking Head zum Ganzkörper-Avatar",
        detailedText: (
          <div className="space-y-4">
            <p>Ein zentraler Entwicklungsschritt im Projekt war die Frage, wie sich digitale Avatare nicht nur als klassische Kopf-Schulter-Darstellung, sondern als glaubwürdige Ganzkörper-Präsenz einsetzen lassen. Genau hier liegt eine besondere technische Herausforderung: Viele bestehende Anbieter konzentrieren sich auf Avatare im Gesichts- oder Brustbereich, weil Ganzkörperdarstellungen deutlich komplexer in Aufbau, Steuerung und Wirkung sind.</p>
            <p>Im Holoboard-Kontext wurde deshalb untersucht, wie sich mit einem besonderen Verfahren eine erweiterte Avatarform realisieren lässt, die über übliche Talking-Head-Systeme hinausgeht. Ziel war eine digitale Präsenz, die stärker verkörpert wirkt und damit besser zu einem räumlichen, interaktiven Lehrsystem passt.</p>
            <p>Diese Arbeit ist nicht nur eine Ergänzung des Konzepts, sondern ein eigenständiger Innovationsbeitrag: die Verbindung von Avatar-Technologie mit einer glaubwürdigeren, körperlicheren Form digitaler Interaktion.</p>
          </div>
        ),
      },
    ],
  },
  en: {
    eyebrow: 'Phase 4: Refinement',
    title: 'The Holoboard Concept',
    intro: 'Click on the tiles to explore the technical details of each component.',
    conceptTitle: 'Pedagogical Concept',
    conceptIntro: 'The core problem of digital teaching has several dimensions: simply making learning content technically available is not enough. Research on online learning shows that digital formats become markedly less effective when social presence, emotional connection and visible instructor presence are lacking.',
    twoScenarios: 'Two teaching scenarios in detail',
    syncTitle: 'Synchronous Teaching',
    syncSub: 'Full-body AI avatar for live interaction',
    asyncTitle: 'Asynchronous Teaching',
    asyncSub: 'The Holoboard as an interactive teaching medium',
    expand: 'Expand scenario',
    passive: 'Passive screen-based formats often fail to sustain attention or foster deep engagement. Successful digital teaching therefore takes more than media technology: it needs interaction, personalisation, authenticity and a learning environment that feels human.',
    syncHeading: 'Synchronous Teaching with a Full-Body AI Avatar',
    syncText: 'For live settings, an AI-powered full-body avatar interacts with learners in real time. It runs on a retrieval-augmented generation (RAG) system connected through a no-code platform, so even instructors or exhibitors with little technical background can maintain, update and manage the content. Its pedagogical value lies in combining interaction, personalisation and authenticity: rather than appearing as an anonymous system response, content is delivered in the embodied form of familiar people, such as lecturers, researchers or project leads. As a result, digital communication becomes more socially relatable, more credible and more emotionally compelling.',
    syncVideo: 'Demonstration: synchronous teaching with a full-body AI avatar',
    asyncHeading: 'Asynchronous Teaching with the Holoboard',
    asyncText: 'For recorded teaching content, the classic Lightboard evolves into the Holoboard. Instructors write on a transparent glass surface while overlaying digital elements such as animations, videos or additional visual layers. An infrared touchscreen makes the board interactive. Pedagogically, the result is a format that brings together visible instructor presence, writing on the board, gesture, visualisation and media enrichment in a single learning scene. The Holoboard thus creates an immersive, visually striking learning environment that makes asynchronous formats more active, easier to follow and more engaging.',
    asyncVideo: 'Demonstration: asynchronous teaching with the Holoboard',
    conclusion: 'The Holoboard is therefore more than a technical system: it is a pedagogical approach to restoring presence, interaction and authenticity in digital learning environments.',
    foundation: 'Research basis: Community of Inquiry, social presence, instructor presence, ICAP, personalisation principle.',
    setupAlt: 'Visualisation of the Holoboard set-up',
    close: 'Close',
    detailSuffix: ' (detail)',
    videoFallback: 'Your browser does not support the video tag.',
    features: [
      {
        title: "Local AI and RAG",
        description: "Data-sovereign AI running on the system itself",
        detailedText: (
          <div className="space-y-4">
            <p>A core component of the Holoboard is a locally hosted AI infrastructure. “Local” here means that models, data processing and knowledge retrieval need not rely on external cloud services but can run directly on the institution’s own hardware. This matters particularly when sensitive content, internal documents or university data are being processed.</p>
            <p>RAG (“retrieval-augmented generation”) gives the AI targeted access to documents. Instead of drawing only on the model’s general knowledge, the system bases its answers on specific, project-related content. The resulting answers are more traceable, better grounded in context and suitable for teaching and demonstration purposes.</p>
            <div>
              <p className="font-bold mb-2">Benefits:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>control over data processing</li>
                <li>less reliance on external platforms</li>
                <li>targeted access to project-specific knowledge</li>
                <li>a robust foundation for interactive teaching and assistant scenarios</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Lightboard 2.0",
        description: "Taking an established teaching principle further",
        detailedText: (
          <div className="space-y-4">
            <p>The Holoboard builds on the familiar Lightboard principle: instructors stand behind a transparent writing surface and explain directly through it, making content visible to learners as they go. Rather than simply adopting this principle, the project developed it further, both technically and spatially.</p>
            <p>The key question was how explaining, writing and pointing could be combined with a new form of digital presence. The classic Lightboard thus grew into a broader system concept, designed with a stronger focus on interaction, hybrid use and visual impact.</p>
          </div>
        ),
      },
      {
        title: "Interactive Holobox",
        description: "Display, presence space and interactive surface",
        detailedText: (
          <div className="space-y-4">
            <p>The Holobox is the concept’s central spatial display. It brings visual presence, presentation surface and interaction together in one system. The result is more than a technical interface: it opens up a new perceptual space for digital teaching.</p>
            <p>The project explored how such a box could do more than display content, supporting communication, eye contact, a sense of space and interaction as well. The Holobox is therefore not simply hardware but an integral part of the pedagogical experience.</p>
          </div>
        ),
      },
      {
        title: "Digital Avatars",
        description: "From talking head to full-body avatar",
        detailedText: (
          <div className="space-y-4">
            <p>A key step in the project was working out how digital avatars could be used not just in the classic head-and-shoulders format, but as a convincing full-body presence. This is precisely where a particular technical challenge lies: many existing providers focus on avatars that show only the face or upper body, because full-body representations are considerably more complex to build, control and render convincingly.</p>
            <p>Within the Holoboard project, the team therefore investigated how a special technique could produce an extended form of avatar that goes beyond conventional talking-head systems. The goal was a digital presence that feels more embodied and so fits better into a spatial, interactive teaching system.</p>
            <p>This work is not merely an add-on to the concept but an innovation in its own right: combining avatar technology with a more credible, more physical form of digital interaction.</p>
          </div>
        ),
      },
    ],
  },
};

const EASE = [0.16, 1, 0.3, 1] as const;
const serif = { fontFamily: "'Instrument Serif', Georgia, serif" };
const GLASS = 'rounded-[22px] border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md';

export default function HoloboardKonzept() {
  const t = useT(T);
  const reduce = useReducedMotion();
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [isConceptExpanded, setIsConceptExpanded] = useState(false);

  const features = featureMeta.map((m, i) => ({ ...m, ...t.features[i] }));
  const selected = features.find((f) => f.id === selectedFeature);

  // Modal mit Escape schließen
  useEffect(() => {
    if (selectedFeature === null) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelectedFeature(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedFeature]);

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.9, ease: EASE, delay },
        };

  const teaser = (title: string, sub: string, poster: string, accent: string) => (
    <button
      type="button"
      onClick={() => setIsConceptExpanded(true)}
      aria-expanded={false}
      aria-controls="konzept-szenarien"
      className="group relative overflow-hidden rounded-2xl aspect-video border border-white/15 text-left text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-turquoise"
    >
      <img src={poster} alt="" loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:bg-white/25 transition-colors">
          <Play className="w-7 h-7 text-white fill-white translate-x-0.5" />
        </div>
      </div>
      <div className="relative h-full flex flex-col justify-end p-5">
        <span className="text-base font-extrabold tracking-tight">{title}</span>
        <span className="text-sm text-gray-300 mb-3">{sub}</span>
        <span className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${accent}`}>
          {t.expand}
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </button>
  );

  return (
    <section id="konzept" className="relative py-24 lg:py-32 bg-black text-white overflow-hidden">
      <Aurora className="opacity-40" />

      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-24">
        <SectionHeader index="01.4" eyebrow={t.eyebrow} title={t.title} intro={t.intro} tone="dark" className="mb-14 lg:mb-20" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Große Kachel: didaktisches Lehrkonzept mit zwei Szenarien */}
          <motion.div {...reveal()} className={`${GLASS} sm:col-span-2 lg:col-span-12 p-6 sm:p-10 lg:p-12`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-hm-red" />
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight leading-tight">{t.conceptTitle}</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed font-light">{t.conceptIntro}</p>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{t.twoScenarios}</p>
                {!isConceptExpanded ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {teaser(t.syncTitle, t.syncSub, SYNCHRON_POSTER, 'text-hm-red')}
                    {teaser(t.asyncTitle, t.asyncSub, ASYNCHRON_POSTER, 'text-hm-turquoise')}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsConceptExpanded(false)}
                    aria-expanded
                    aria-controls="konzept-szenarien"
                    className="self-start min-h-11 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-turquoise"
                  >
                    <ActionCue mode="expand" expanded accent="turquoise" />
                  </button>
                )}
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isConceptExpanded && (
                <motion.div
                  id="konzept-szenarien"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="mt-10 pt-10 border-t border-white/10 flex flex-col gap-10">
                    <p className="text-lg text-gray-300 leading-relaxed font-light max-w-4xl">{t.passive}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                        <h4 className="text-xl font-extrabold tracking-tight text-hm-red mb-4">{t.syncHeading}</h4>
                        <p className="text-gray-300 leading-relaxed font-light">{t.syncText}</p>
                        <DidacticVideo src={SYNC_VIDEO} poster={SYNCHRON_POSTER} title={t.syncVideo} />
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                        <h4 className="text-xl font-extrabold tracking-tight text-hm-turquoise mb-4">{t.asyncHeading}</h4>
                        <p className="text-gray-300 leading-relaxed font-light">{t.asyncText}</p>
                        <DidacticVideo src={ASYNC_VIDEO} poster={ASYNCHRON_POSTER} title={t.asyncVideo} />
                      </div>
                    </div>

                    <blockquote className="m-0 border-l-2 border-hm-red pl-6 text-2xl sm:text-3xl leading-snug text-white max-w-4xl" style={serif}>
                      {t.conclusion}
                    </blockquote>
                    <p className="text-sm text-gray-400 italic">{t.foundation}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Große Bildkarte: Aufbau */}
          <motion.figure
            {...reveal(0.05)}
            className={`${GLASS} m-0 sm:col-span-2 lg:col-span-6 lg:row-span-2 p-4 sm:p-6 flex flex-col gap-4`}
          >
            <div className="flex-1 min-h-[320px] rounded-[16px] bg-black/40 flex items-center justify-center p-4 sm:p-8">
              <img src={SETUP_IMAGE} alt={t.setupAlt} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full max-h-[560px] object-contain" />
            </div>
            <figcaption className="text-xs font-bold uppercase tracking-[0.2em] text-hm-turquoise px-2">{t.setupAlt}</figcaption>
          </motion.figure>

          {/* Kleinere Kacheln: Komponenten mit Detail-Modal */}
          {features.map((f, i) => (
            <motion.button
              key={f.id}
              type="button"
              layoutId={reduce ? undefined : `card-${f.id}`}
              onClick={() => setSelectedFeature(f.id)}
              aria-haspopup="dialog"
              {...reveal(0.08 + i * 0.06)}
              className={`${GLASS} lg:col-span-3 p-3 text-left flex flex-col gap-4 transition-colors duration-300 hover:border-white/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-turquoise`}
            >
              <div className="overflow-hidden rounded-[16px] aspect-[16/10] bg-black/40">
                <img src={f.image} alt={f.title} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="px-2 pb-2 flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">{f.icon}</span>
                  <span className="text-lg font-extrabold tracking-tight leading-tight">{f.title}</span>
                </div>
                <span className="text-sm text-gray-300 leading-relaxed">{f.description}</span>
                <ActionCue mode="detail" accent="turquoise" className="mt-auto self-start" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Detail-Modal als dunkles Glas-Panel */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] cursor-pointer"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4 sm:p-6">
              <motion.div
                layoutId={reduce ? undefined : `card-${selected.id}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="konzept-modal-titel"
                className="w-full max-w-3xl rounded-[22px] border border-white/15 bg-[#0B0D10]/95 backdrop-blur-xl text-white shadow-2xl pointer-events-auto flex flex-col max-h-[90vh] overflow-hidden"
              >
                <div className="relative h-64 sm:h-80 w-full bg-black flex-shrink-0">
                  {selected.video ? (
                    <video
                      src={selected.video}
                      poster={selected.image}
                      controls
                      preload="metadata"
                      playsInline
                      aria-label={selected.title}
                      className="w-full h-full object-contain"
                    >
                      {t.videoFallback}
                    </video>
                  ) : (
                    <>
                      <img src={selected.image} alt={selected.title} referrerPolicy="no-referrer" className="w-full h-full object-contain" />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B0D10] to-transparent pointer-events-none" />
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedFeature(null)}
                    aria-label={t.close}
                    className="absolute top-4 right-4 w-11 h-11 bg-black/50 hover:bg-black/70 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6 sm:p-10 overflow-y-auto">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">{selected.icon}</div>
                    <h4 id="konzept-modal-titel" className="text-2xl sm:text-3xl font-extrabold tracking-tight">{selected.title}</h4>
                  </div>
                  <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">{selected.description}</p>
                  <div className="h-px w-full bg-white/10 mb-6" />
                  <div className="text-gray-300 leading-relaxed">{selected.detailedText}</div>
                  {selected.secondaryImage && (
                    <div className="mt-8 rounded-2xl overflow-hidden border border-white/15">
                      <img src={selected.secondaryImage} alt={`${selected.title}${t.detailSuffix}`} loading="lazy" className="w-full h-auto" referrerPolicy="no-referrer" />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

function DidacticVideo({ src, poster, title }: { src: string; poster: string; title: string }) {
  const t = useT(T);
  return (
    <div className="mt-6 rounded-2xl overflow-hidden border border-white/15 bg-black aspect-video">
      <video src={src} poster={poster} title={title} aria-label={title} controls preload="metadata" playsInline className="w-full h-full">
        {t.videoFallback}
      </video>
    </div>
  );
}
