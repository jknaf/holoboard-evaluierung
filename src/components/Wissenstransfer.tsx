import { motion, useReducedMotion } from 'framer-motion';
import { Presentation, Users, Lightbulb } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Aurora from './ui/Aurora';
import { useT } from '../i18n';

const T = {
  de: {
    eyebrow: 'Dissemination',
    title: 'Wissenstransfer',
    intro: 'Die Erkenntnisse aus der Innovationsprofessur werden kontinuierlich in die Hochschule und die wissenschaftliche Community getragen.',
    events: [
      { title: 'HEP Forum', desc: 'Vorstellung der Projektvision und des ersten Prototypen im Rahmen der HEP-Präsentation.' },
      { title: 'Interner Wissenstransfer', desc: 'Fortlaufende Weitergabe der gesammelten KI-Expertise innerhalb des Kollegiums, in eigenen Vorlesungen und über betreute Bachelorarbeiten. So entstand ein kontinuierlicher Wissenstransfer im gesamten Studiengang.' },
      { title: 'Fachkonferenzen', desc: 'Präsentation der Forschungsergebnisse auf Formaten wie TURN, Learntec und weiteren Fachveranstaltungen zur digitalen Lehre.' },
      { title: 'Internationale Gastlehre', desc: 'Offene Lehrveranstaltungen am ISEC Lisboa am 2. und 5. März 2026 zur Anwendung von KI in Kommunikation, Design und Medien im Rahmen einer internationalen akademischen Mobilität.' },
    ],
  },
  en: {
    eyebrow: 'Dissemination',
    title: 'Knowledge Transfer',
    intro: 'Insights from the Innovation Professorship are continually shared across the university and with the wider academic community.',
    events: [
      { title: 'HEP Forum', desc: 'Presenting the project vision and the first prototype at the HEP presentation.' },
      { title: 'Internal Knowledge Transfer', desc: 'Sharing the AI expertise we have built up with colleagues on an ongoing basis, in our own lectures and through supervised Bachelor\'s theses. This has fostered a steady transfer of knowledge throughout the entire degree programme.' },
      { title: 'Academic Conferences', desc: 'Presenting research findings at events such as TURN, Learntec and other conferences on digital teaching.' },
      { title: 'International Guest Lectures', desc: 'Open lectures at ISEC Lisboa on 2 and 5 March 2026 on applying AI in communication, design and media, held as part of an international academic mobility programme.' },
    ],
  },
};


export default function Wissenstransfer() {
  const t = useT(T);
  const reduce = useReducedMotion();
  // Icons je Karte, gleiche Reihenfolge wie T.events (türkis/rot im Wechsel).
  const icons = [Presentation, Users, Lightbulb, Users];

  return (
    <section id="wissenstransfer" className="relative overflow-hidden bg-black text-white py-24 lg:py-32">
      <Aurora className="opacity-40" />
      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-24">
        <SectionHeader index="03.3" eyebrow={t.eyebrow} title={t.title} intro={t.intro} tone="dark" />

        <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.events.map((event, index) => {
            const Icon = icons[index];
            const red = index % 2 === 0;
            return (
              <motion.article
                key={event.title}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-5 rounded-[22px] border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md p-7 lg:p-9"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                      red ? 'border-hm-red/40 bg-hm-red/10 text-hm-red' : 'border-hm-turquoise/40 bg-hm-turquoise/10 text-hm-turquoise'
                    }`}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white">{event.title}</h3>
                <p className="text-base lg:text-lg font-light leading-relaxed text-gray-300">{event.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
