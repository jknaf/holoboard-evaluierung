import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { useT } from '../i18n';

const T = {
  de: {
    benefits: [
      "Etablierung neuer, interaktiver Lehrformate",
      "Aufbau einer modernen technologischen Infrastruktur",
      "Steigerung der KI-Kompetenz bei Lehrenden und Studierenden",
      "Starke Innovationsimpulse für die gesamte Hochschule",
      "Positionierung der HM als Vorreiter in der digitalen Lehre",
      "Förderung interdisziplinärer Zusammenarbeit"
    ],
    alt: "Holoboard-Projekt auf der TURN-Konferenz",
    eyebrow: "Mehrwert",
    title: "Nutzen für die Hochschule München",
    intro: "Die Innovationsprofessur liefert einen direkten und nachhaltigen Mehrwert für die Hochschule München, der weit über das eigentliche Projekt hinausgeht.",
  },
  en: {
    benefits: [
      "Establishing new, interactive teaching formats",
      "Building modern technological infrastructure",
      "Strengthening AI skills among instructors and students",
      "Powerful impetus for innovation across the university",
      "Positioning HM as a pioneer in digital teaching",
      "Fostering interdisciplinary collaboration"
    ],
    alt: "Holoboard project at the TURN Conference",
    eyebrow: "Added Value",
    title: "Benefits for Munich University of Applied Sciences",
    intro: "The Innovation Professorship delivers direct, lasting value for Munich University of Applied Sciences (HM), reaching far beyond the project itself.",
  },
};

export default function Nutzen() {
  const t = useT(T);
  const reduce = useReducedMotion();
  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section id="nutzen" className="relative bg-[#F4F4F1] text-[#111111] py-24 lg:py-32">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-24">
        <SectionHeader index="03.4" eyebrow={t.eyebrow} title={t.title} intro={t.intro} tone="light" />

        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.figure {...reveal()} className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white aspect-[4/5]">
              <img
                src="https://holoboard-assets.netlify.app/images/075-confluence_media-20241115-114416.jpg"
                alt={t.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.figure>

          <ol className="lg:col-span-7 border-t border-gray-300">
            {t.benefits.map((benefit, index) => (
              <motion.li
                key={benefit}
                {...reveal(index * 0.05)}
                className="flex items-baseline gap-6 lg:gap-10 border-b border-gray-300 py-6 lg:py-8"
              >
                <span aria-hidden="true" className="w-12 lg:w-16 shrink-0 text-3xl lg:text-5xl font-black tracking-[-0.04em] text-hm-red tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-xl lg:text-3xl font-extrabold tracking-tight leading-snug">{benefit}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
