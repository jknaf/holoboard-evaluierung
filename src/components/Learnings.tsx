import { motion, useReducedMotion } from 'framer-motion';
import { Zap, CreditCard, Box } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Aurora from './ui/Aurora';
import { useT } from '../i18n';

const icons = [Box, CreditCard, Zap];

const T = {
  de: {
    eyebrow: 'Erfahrungen',
    title: 'Herausforderungen und Learnings',
    intro: 'Innovation bedeutet auch, mit Rückschlägen umzugehen. Eine offene Fehlerkultur und agile Anpassungen waren entscheidend für den Projekterfolg.',
    challenges: [
      {
        title: "Physische Dimensionen",
        desc: "Die Holobox ist aufgrund ihrer Größe und ihres Gewichts nur sehr eingeschränkt transportabel. Das macht einen flexiblen Einsatz an wechselnden Standorten nahezu unmöglich und begrenzt die Skalierbarkeit des Konzepts."
      },
      {
        title: "Proprietäre Software und Betriebskosten",
        desc: "Für die Generierung der KI-Avatare ist derzeit proprietäre Software erforderlich. Im Dauerbetrieb führt das zu hohen laufenden Kosten, die eine wirtschaftliche Skalierung erschweren."
      },
      {
        title: "Hardware-Anforderungen und Innovationstempo",
        desc: "Lokale KI-Anwendungen erfordern nach wie vor extrem leistungsfähige Hardware. Gleichzeitig ist die Entwicklungsgeschwindigkeit im KI-Bereich so hoch, dass ein kontinuierliches Am-Thema-Bleiben unerlässlich ist, um das System technologisch aktuell zu halten."
      },
    ],
  },
  en: {
    eyebrow: 'Reflections',
    title: 'Challenges and Lessons Learned',
    intro: "Innovation also means dealing with setbacks. An open approach to mistakes and agile course corrections were crucial to the project's success.",
    challenges: [
      {
        title: "Physical Dimensions",
        desc: "Its size and weight make the Holobox very difficult to transport. As a result, flexible use at different locations is almost impossible, which limits how far the concept can be scaled."
      },
      {
        title: "Proprietary Software and Running Costs",
        desc: "Generating the AI avatars currently requires proprietary software. In continuous operation, this results in high running costs that make it hard to scale the concept economically."
      },
      {
        title: "Hardware Demands and the Pace of Innovation",
        desc: "Local AI applications still require extremely powerful hardware. At the same time, the field of AI is moving so fast that staying continuously on top of developments is essential to keep the system technologically current."
      },
    ],
  },
};

export default function Learnings() {
  const t = useT(T);
  const reduce = useReducedMotion();

  return (
    <section id="learnings" className="relative overflow-hidden py-24 lg:py-32 bg-black text-white">
      <Aurora className="opacity-40" />
      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-24">
        <SectionHeader index="04.3" eyebrow={t.eyebrow} title={t.title} intro={t.intro} tone="dark" className="mb-12 lg:mb-16" />

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.challenges.map((challenge, i) => {
            const Icon = icons[i];
            return (
              <motion.li
                key={challenge.title}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="flex flex-col gap-5 rounded-[22px] border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 lg:p-8 backdrop-blur-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <span aria-hidden="true" className="text-6xl lg:text-7xl font-black leading-none tracking-[-0.04em] text-white/20">
                    0{i + 1}
                  </span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-hm-turquoise/30 bg-hm-turquoise/10 text-hm-turquoise">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-extrabold tracking-tight leading-tight">{challenge.title}</h3>
                <p className="text-[15px] leading-relaxed text-gray-300">{challenge.desc}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
