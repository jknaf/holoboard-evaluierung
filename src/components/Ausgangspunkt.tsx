import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Users, Video, Lightbulb } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import ActionCue from './ui/ActionCue';
import { useT } from '../i18n';

const T = {
  de: {
    eyebrow: "Phase 1: Ausgangsvision 2022",
    title: "Der Ausgangspunkt",
    intro: `Der ursprüngliche Projektantrag fokussierte sich auf die Erforschung immersiver Lehrformate. 
            Das Ziel war es, die Distanz in der digitalen Lehre durch neue Technologien zu überwinden und eine stärkere Interaktion zu ermöglichen.`,
    cards: [
      {
        title: "Hintergrund der Onlinelehre",
        shortDesc: "Digitale Lehre zwischen Pragmatismus und Erschöpfung",
        description: "Zwischen 2020 und 2022 wurde videobasierte Lehre an Hochschulen zum Normalfall. Zoom-Meetings, Lernvideos und digitale Plattformen ermöglichten zwar Kontinuität, machten aber auch ihre Grenzen sichtbar: geringe Interaktion, sinkende Aufmerksamkeit und ein wachsendes Gefühl von Distanz zwischen Lehrenden und Lernenden.",
      },
      {
        title: "Die Ursprungsidee",
        shortDesc: "Präsenz und Interaktion digital neu denken",
        description: "Als Gegenentwurf zur klassischen Bildschirmlehre entstand die Vision eines Systems, das synchrone Kommunikation, sichtbare Lehrpräsenz, Tafelanschrieb und interaktive Inhalte in einer gemeinsamen Lernszene verbindet. Ziel war nicht nur ein neues Display, sondern eine neue Form digitaler Präsenz.",
      },
      {
        title: "Zielgruppen",
        shortDesc: "Lehrende, Studierende und Hochschule im Fokus",
        description: "Im Mittelpunkt standen Lehrende, die ohne komplexe Produktionsumgebungen interaktive Inhalte bereitstellen sollen, Studierende, die von mehr Präsenz und Beteiligung profitieren, sowie die Hochschule München, die digitale Lehre nicht nur verwalten, sondern aktiv weiterentwickeln will.",
      },
    ],
  },
  en: {
    eyebrow: "Phase 1: The 2022 Vision",
    title: "The Starting Point",
    intro: `The original project proposal centred on exploring immersive teaching formats. 
            The aim was to use new technologies to bridge the distance inherent in digital teaching and to foster greater interaction.`,
    cards: [
      {
        title: "The Context of Online Teaching",
        shortDesc: "Digital teaching, caught between pragmatism and fatigue",
        description: "Between 2020 and 2022, video-based teaching became standard practice in higher education. Zoom meetings, instructional videos and digital platforms kept teaching going, but they also laid bare their limitations: little interaction, waning attention and a growing sense of distance between instructors and learners.",
      },
      {
        title: "The Original Idea",
        shortDesc: "Reimagining presence and interaction in digital teaching",
        description: "As a counterpoint to conventional screen-based teaching, a vision took shape: a system that brings together synchronous communication, a visible teaching presence, board writing and interactive content within a single shared learning space. The aim was not simply a new display, but a new form of digital presence.",
      },
      {
        title: "Target Groups",
        shortDesc: "Centred on instructors, students and the university",
        description: "At the heart of the project were instructors, who should be able to provide interactive content without complex production set-ups; students, who benefit from greater presence and participation; and Munich University of Applied Sciences (HM), which aims not merely to manage digital teaching but to actively shape its development.",
      },
    ],
  },
};

const CARD_META = [
  { icon: <Video className="w-4 h-4" />, image: "https://holoboard-assets.netlify.app/images/110-unsplash-stress-laptop.jpg" },
  { icon: <Lightbulb className="w-4 h-4" />, image: "https://holoboard-assets.netlify.app/images/104-confluence_media-proof-of-concept.png" },
  { icon: <Users className="w-4 h-4" />, image: "https://holoboard-assets.netlify.app/images/111-unsplash-lecture-hall.jpg" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Ausgangspunkt() {
  // Wie bisher: eine Karte ist offen (zu Beginn die erste), ein Klick öffnet eine andere.
  const [active, setActive] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const t = useT(T);
  const cards = t.cards.map((c, i) => ({ ...CARD_META[i], ...c }));

  return (
    <section id="ausgangspunkt" className="relative py-24 lg:py-32 bg-[#F4F4F1] text-[#111111] overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-24">
        <SectionHeader index="01.1" eyebrow={t.eyebrow} title={t.title} intro={t.intro} tone="light" className="mb-14 lg:mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {cards.map((card, i) => {
            const open = active === i;
            return (
              <motion.article
                key={card.title}
                {...(reduce
                  ? {}
                  : {
                      initial: { opacity: 0, y: 24 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, amount: 0.3 },
                      transition: { duration: 0.9, ease: EASE, delay: i * 0.08 },
                    })}
                className={`rounded-3xl bg-white border p-3 transition-[border-color,box-shadow] duration-300 ${
                  open ? 'border-hm-red shadow-[0_0_30px_rgba(252,85,85,0.25)]' : 'border-gray-200'
                }`}
              >
                <div className="overflow-hidden rounded-[18px] aspect-[4/3] bg-gray-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-3 pt-6 pb-4 flex flex-col gap-3">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-hm-red">
                    {card.icon}
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-2xl font-extrabold tracking-tight leading-tight">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.shortDesc}</p>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`ausgangspunkt-${i}`}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 border-t border-gray-200 text-gray-600 leading-relaxed">{card.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    type="button"
                    onClick={() => setActive(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`ausgangspunkt-${i}`}
                    className="self-start mt-1 min-h-11 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-red"
                  >
                    <ActionCue mode="expand" expanded={open} accent="red" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
