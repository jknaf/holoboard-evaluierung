import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, Users, Lightbulb } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

export default function Wissenstransfer() {
  const events = [
    {
      icon: <Presentation className="w-6 h-6 text-hm-red" />,
      title: "Hochschulentwicklungsplan Tag",
      desc: "Vorstellung der Projektvision und erster Prototypen vor dem Präsidium und Lehrenden der HM."
    },
    {
      icon: <Users className="w-6 h-6 text-hm-blue" />,
      title: "Interner Wissenstransfer",
      desc: "Fortlaufende Weitergabe der gesammelten KI-Expertise innerhalb des Kollegiums, in eigenen Vorlesungen und über betreute Bachelorarbeiten. So entstand ein kontinuierlicher Wissenstransfer im gesamten Studiengang."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-hm-turquoise" />,
      title: "Fachkonferenzen",
      desc: "Präsentation der Forschungsergebnisse auf Formaten wie TURN, Learntec und weiteren Fachveranstaltungen zur digitalen Lehre."
    },
    {
      icon: <Users className="w-6 h-6 text-hm-turquoise" />,
      title: "Internationale Gastlehre",
      desc: "Offene Lehrveranstaltungen am ISEC Lisboa am 2. und 5. März 2026 zur Anwendung von KI in Kommunikation, Design und Medien im Rahmen einer internationalen akademischen Mobilität."
    },
  ];

  return (
    <section id="wissenstransfer" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-hm-red uppercase mb-3">Dissemination</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Wissenstransfer</h3>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Die Erkenntnisse aus der Innovationsprofessur werden kontinuierlich in die Hochschule und 
            die wissenschaftliche Community getragen.
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
