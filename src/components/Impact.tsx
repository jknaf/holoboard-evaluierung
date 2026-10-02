import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useT } from '../i18n';

const T = {
  de: {
    eyebrow: 'Karriereeffekte',
    title: 'Impact für Studierende',
    intro: 'Die studentischen Arbeiten führen nicht nur zu Prototypen und Konzepten, sondern auch zu konkreten beruflichen Anschlüssen in Unternehmen, KI-nahen Praxisfeldern und selbstständigen Tätigkeiten.',
    pathsLabel: 'Drei Wege',
    paths: 'Festanstellung, Holding-Ebene, eigene Firma',
    quotes: [
      {
        text: "Ich habe die Festanstellung hauptsächlich wegen meiner Workflow- und Automatisierungskenntnisse aus der Bachelorarbeit bekommen.",
        author: "Stimme eines Absolventen",
        role: "Direkter Berufseinstieg durch Projektkompetenzen"
      },
      {
        text: "Meine Bachelorarbeit hatte im Unternehmen so viel Wirkung, dass ich für eine Position auf Holding-Ebene weiterempfohlen wurde und dort eine Festanstellung im Bereich KI-Automatisierung bekommen habe.",
        author: "Rückmeldung aus einem Unternehmensprojekt",
        role: "Weiterempfehlung und Festanstellung im KI-Umfeld"
      },
      {
        text: "Die im Projekt erworbenen Kompetenzen in Veranstaltungstechnik und KI-Automatisierung haben wesentlich dazu beigetragen, dass ich mich in diesem Bereich selbstständig gemacht habe.",
        author: "Rückmeldung aus dem Projektkontext",
        role: "Selbstständigkeit im Bereich KI-Automatisierung"
      }
    ],
  },
  en: {
    eyebrow: 'Career Outcomes',
    title: 'Impact on Students',
    intro: 'Student projects do more than produce prototypes and concepts: they also open up concrete career paths, whether in companies, in AI-related fields of practice or in self-employment.',
    pathsLabel: 'Three paths',
    paths: 'Permanent role, holding level, own company',
    quotes: [
      {
        text: "I landed my permanent job mainly thanks to the workflow and automation skills I picked up during my bachelor's thesis.",
        author: "A graduate",
        role: "Straight into work thanks to project skills"
      },
      {
        text: "My bachelor's thesis made such an impact at the company that I got recommended for a role at the holding company, and I ended up with a permanent job there in AI automation.",
        author: "Feedback from a company project",
        role: "Recommendation and a permanent role in AI"
      },
      {
        text: "The event technology and AI automation skills I picked up on the project played a big part in my decision to set up on my own in this field.",
        author: "Feedback from within the project",
        role: "Self-employed in AI automation"
      }
    ],
  },
};


export default function Impact() {
  const t = useT(T);
  const [q1, q2, q3] = t.quotes;
  const reduce = useReducedMotion();

  // Dezentes Einblenden; bei reduzierter Bewegung sofort sichtbar.
  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.5, delay },
        };

  const caption = (q: typeof q1) => (
    <>
      {q.author}
      <span className="text-hm-red" aria-hidden="true">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
      <span className="sr-only">: </span>
      {q.role}
    </>
  );

  return (
    <section id="impact" className="py-24 bg-[#F4F4F1] text-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal()} className="max-w-3xl mb-12">
          <p className="text-xs font-bold tracking-[0.24em] text-hm-red uppercase mb-3"><span className="mr-2">04.2</span>{t.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] tracking-[-0.04em] mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t.intro}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto] gap-4">
          {/* Großes Feld: Zitat 1 über abgedunkeltem Foto */}
          <motion.figure
            {...reveal()}
            className="lg:col-span-7 lg:row-span-3 relative m-0 overflow-hidden rounded-3xl bg-[#0b0b0b] text-white p-7 sm:p-10 lg:p-12 min-h-[420px] lg:min-h-[560px] flex flex-col justify-end gap-6 lg:gap-7"
          >
            <img
              src="https://holoboard-assets.netlify.app/images/20241115_114416.jpg"
              alt=""
              referrerPolicy="no-referrer"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.85)_70%)]" aria-hidden="true" />
            <span className="relative text-hm-red text-[88px] lg:text-[120px] font-black leading-[0.5]" aria-hidden="true">“</span>
            <blockquote className="relative m-0 text-[24px] sm:text-[30px] lg:text-[34px] font-light leading-[1.25] tracking-[-0.02em]">
              {q1.text}
            </blockquote>
            <figcaption className="relative text-[13px] font-semibold tracking-[0.08em] uppercase text-gray-300">
              {caption(q1)}
            </figcaption>
          </motion.figure>

          {/* Rotes Feld: Zitat 2. Zitat weiß (große Schrift, 3:1 reicht), Quelle dunkel für 4.5:1. */}
          <motion.figure
            {...reveal(0.08)}
            className="lg:col-span-5 m-0 rounded-3xl bg-hm-red text-white p-7 sm:p-9 flex flex-col justify-between gap-8"
          >
            <blockquote className="m-0 text-xl lg:text-[22px] font-normal leading-[1.4] tracking-[-0.01em]">{q2.text}</blockquote>
            <figcaption className="text-xs font-bold tracking-[0.1em] uppercase text-[#111111]">{caption(q2)}</figcaption>
          </motion.figure>

          {/* Weißes Feld: Zitat 3 */}
          <motion.figure
            {...reveal(0.16)}
            className="lg:col-span-5 m-0 rounded-3xl bg-white border border-gray-200 p-7 flex flex-col justify-between gap-6"
          >
            <blockquote className="m-0 text-lg lg:text-xl font-light leading-[1.45] tracking-[-0.01em]">{q3.text}</blockquote>
            <figcaption className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500">{caption(q3)}</figcaption>
          </motion.figure>

          {/* Schwarzes Feld: drei Wege, als schmale Leiste unter den Zitaten */}
          <motion.div
            {...reveal(0.24)}
            className="lg:col-span-5 rounded-3xl bg-[#111111] text-white px-7 py-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
          >
            <span className="shrink-0 text-xs font-bold tracking-[0.16em] uppercase text-hm-turquoise">{t.pathsLabel}</span>
            <span className="text-lg xl:text-xl font-extrabold leading-[1.25] tracking-[-0.02em]">{t.paths}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
