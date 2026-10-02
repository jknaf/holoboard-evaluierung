import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, Users, Lightbulb } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
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
  const icons = [
    <Presentation className="w-6 h-6 text-hm-red" />,
    <Users className="w-6 h-6 text-hm-blue" />,
    <Lightbulb className="w-6 h-6 text-hm-turquoise" />,
    <Users className="w-6 h-6 text-hm-turquoise" />,
  ];
  const events = t.events.map((e, i) => ({ icon: icons[i], ...e }));

  return (
    <section id="wissenstransfer" className="py-32 bg-white">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <SpotlightCard
              key={index}
              icon={event.icon}
              title={event.title}
              description={event.desc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
