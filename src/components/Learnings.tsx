import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CreditCard, Box } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
import { useT } from '../i18n';

const icons = [
  <Box className="w-6 h-6 text-orange-500" />,
  <CreditCard className="w-6 h-6 text-hm-blue" />,
  <Zap className="w-6 h-6 text-hm-red" />,
];

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

  return (
    <section id="learnings" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">{t.eyebrow}</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{t.title}</h3>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            {t.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.challenges.map((challenge, index) => (
            <SpotlightCard
              key={index}
              icon={icons[index]}
              title={challenge.title}
              description={challenge.desc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
